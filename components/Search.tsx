"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchControls({ categories }: { categories: string[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize from URL
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [query, setQuery] = useState(searchParams.get("query") || "");


  const params = new URLSearchParams();
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category")
    if (categoryFromUrl && categoryFromUrl !== category) {
      setCategory(categoryFromUrl!)
    };
    const queryFromUrl = searchParams.get("query")
    if (queryFromUrl && queryFromUrl !== query) {
      setQuery(queryFromUrl!)
    };
  }, [searchParams]);
  useEffect(() => {
    if (category) params.set("category", category);
    const handler = setTimeout(() => {
      if (query) params.set("query", query);
      router.replace(`?${params.toString()}`);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query, router]);

  useEffect(() => {
    if (category) params.set("category", category);
    if (query) params.set("query", query);
    router.replace(`?${params.toString()}`);
  }, [category, router]);

  return (
    <div className="flex flex-wrap gap-2 pt-14 md:pt-20 lg:pt-5 xl:pt-0 my-6">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border max-sm:w-full p-2 rounded outline-none bg-primary-foreground text-primary"
      >
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c.replace(/-/g, " ").replace(/\b\w/g, (char: string) => char.toUpperCase())}
          </option>
        ))}
      </select>

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title..."
        className="border max-sm:w-full p-2 rounded flex-1"
      />
    </div>
  );
}
