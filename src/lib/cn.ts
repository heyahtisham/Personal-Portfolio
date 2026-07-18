type ClassValue = string | number | null | undefined | false | ClassValue[];

/** Minimal className combiner — filters falsy values and flattens arrays. */
export function cn(...inputs: ClassValue[]): string {
  return inputs
    .flat(Infinity as 1)
    .filter((v): v is string | number => Boolean(v))
    .join(" ");
}
