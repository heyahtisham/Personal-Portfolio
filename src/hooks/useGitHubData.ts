import { useEffect, useState } from "react";

export interface GitHubRepo {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

export interface GitHubProfile {
  public_repos: number;
  followers: number;
}

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface GitHubData {
  profile: GitHubProfile | null;
  repos: GitHubRepo[];
  totalStars: number;
  contributions: ContributionDay[];
  totalContributions: number;
  loading: boolean;
}

/**
 * Fetches real GitHub data client-side — profile stats and top
 * repositories from the GitHub REST API, plus the contribution
 * calendar from the public github-contributions API.
 *
 * Every request fails soft: on error the corresponding field stays
 * empty and the section hides that block. Nothing fake is rendered.
 */
export function useGitHubData(username: string, repoCount: number): GitHubData {
  const [data, setData] = useState<GitHubData>({
    profile: null,
    repos: [],
    totalStars: 0,
    contributions: [],
    totalContributions: 0,
    loading: true,
  });

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      const [profile, repos, contributions] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`)
          .then((r) => (r.ok ? (r.json() as Promise<GitHubProfile>) : null))
          .catch(() => null),
        fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`
        )
          .then((r) => (r.ok ? (r.json() as Promise<GitHubRepo[]>) : []))
          .catch(() => [] as GitHubRepo[]),
        fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
        )
          .then((r) =>
            r.ok
              ? (r.json() as Promise<{
                  total: Record<string, number>;
                  contributions: ContributionDay[];
                }>)
              : null
          )
          .catch(() => null),
      ]);

      if (cancelled) return;

      const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
      const topRepos = [...repos]
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, repoCount);

      setData({
        profile,
        repos: topRepos,
        totalStars,
        contributions: contributions?.contributions ?? [],
        totalContributions: contributions
          ? Object.values(contributions.total).reduce((a, b) => a + b, 0)
          : 0,
        loading: false,
      });
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [username, repoCount]);

  return data;
}
