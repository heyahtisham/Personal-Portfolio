import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import { SEO } from "@/data/seo";

export default function App() {
  // Keep the document metadata in sync with data/seo.ts.
  useEffect(() => {
    document.title = SEO.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", SEO.description);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
