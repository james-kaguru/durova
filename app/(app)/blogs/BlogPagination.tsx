"use client";

import Link from "next/link";

interface Props {
  currentPage: number;
  totalPages: number;
  search?: string;
}

export function BlogPagination({ currentPage, totalPages, search }: Props) {
  const buildHref = (page: number) => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    params.set("page", String(page));
    return `/blogs?${params.toString()}`;
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center gap-1 flex-wrap">
      {currentPage > 1 && (
        <Link
          href={buildHref(currentPage - 1)}
          className="text-xs text-muted-foreground hover:text-primary uppercase tracking-[0.2em] px-4 py-2.5 bg-card rounded-none"
        >
          ← PREV
        </Link>
      )}
      <div className="flex items-center gap-1 mx-2">
        {pages.map((page) => (
          <Link
            key={page}
            href={buildHref(page)}
            className={`text-xs px-4 py-2.5 uppercase tracking-[0.1em] rounded-none ${
              page === currentPage
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {String(page).padStart(2, "0")}
          </Link>
        ))}
      </div>
      {currentPage < totalPages && (
        <Link
          href={buildHref(currentPage + 1)}
          className="text-xs text-muted-foreground hover:text-primary uppercase tracking-[0.2em] px-4 py-2.5 bg-card rounded-none"
        >
          NEXT →
        </Link>
      )}
    </nav>
  );
}
