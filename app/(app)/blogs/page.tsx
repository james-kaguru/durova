import Image from "next/image";
import Link from "next/link";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import { BlogSearchForm } from "./BlogSearchForm";
import { BlogPagination } from "./BlogPagination";
import type { Media } from "@/lib/payload/payload-types";

const BLOGS_PER_PAGE = 9;

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; page?: string }>;
}) {
  const { search, page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || "1", 10));

  const payload = await getPayload({ config: configPromise });

  const { docs: blogs, totalPages, totalDocs } = await payload.find({
    collection: "blogs",
    limit: BLOGS_PER_PAGE,
    page: currentPage,
    depth: 1,
    where: search ? { title: { contains: search } } : undefined,
    sort: "-createdAt",
  });

  return (
    <main className="bg-background min-h-screen">
      {/* ── Header ─────────────────────────────────────── */}
      <section className="bg-muted py-16 md:py-24">
        <div className="custom-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-[0.3em] mb-4">
                Durova — Blog
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal text-foreground leading-none tracking-tight">
                Ideas &amp;
                <br />
                <span className="text-primary">Updates</span>
              </h1>
            </div>
            <div className="md:text-right space-y-1">
              <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase">
                {totalDocs} {totalDocs === 1 ? "Article" : "Articles"}
              </p>
              {totalPages > 1 && (
                <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase">
                  Page {currentPage} of {totalPages}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Search ─────────────────────────────────────── */}
      <section className="bg-background py-10">
        <div className="custom-container">
          <BlogSearchForm defaultValue={search} />
        </div>
      </section>

      {/* ── Grid ───────────────────────────────────────── */}
      <section className="bg-muted py-12">
        <div className="custom-container">
          {blogs.length === 0 ? (
            <div className="py-32 text-center bg-card">
              <p className="text-sm text-muted-foreground mb-2">
                No articles found{search ? ` for "${search}"` : ""}.
              </p>
              <p className="text-xs text-muted-foreground">
                Try a different search term.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => {
                const image =
                  typeof blog.heroImage === "object"
                    ? (blog.heroImage as Media)
                    : null;
                const imgSrc = image
                  ? (image as any).fullUrl || image.url
                  : null;

                return (
                  <Link
                    key={blog.id}
                    href={`/blogs/${blog.id}`}
                    className="group block"
                  >
                    <article className="bg-card rounded-none overflow-hidden h-full flex flex-col">
                      {/* image */}
                      <div className="aspect-[16/9] overflow-hidden bg-muted relative">
                        {imgSrc ? (
                          <Image
                            src={imgSrc}
                            alt={image?.alt || blog.title}
                            fill
                            className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full bg-muted flex items-center justify-center">
                            <span className="text-xs text-muted-foreground uppercase tracking-widest">
                              Durova
                            </span>
                          </div>
                        )}
                      </div>

                      {/* body */}
                      <div className="p-6 flex flex-col flex-1">
                        <p className="text-xs text-muted-foreground mb-3 uppercase tracking-[0.15em]">
                          {new Date(blog.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </p>
                        <h2
                          className="text-sm font-normal text-foreground leading-snug mb-6 flex-1 group-hover:text-primary"
                          style={{ transition: "none" }}
                        >
                          {blog.title}
                        </h2>
                        <span className="text-xs text-primary uppercase tracking-[0.2em]">
                          Read more →
                        </span>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          )}

          {/* ── Pagination ─────────────────────────────── */}
          {totalPages > 1 && (
            <div className="mt-16 flex items-center justify-between flex-wrap gap-4">
              <p className="text-xs text-muted-foreground uppercase tracking-[0.15em] hidden md:block">
                Showing {(currentPage - 1) * BLOGS_PER_PAGE + 1}–
                {Math.min(currentPage * BLOGS_PER_PAGE, totalDocs)} of{" "}
                {totalDocs}
              </p>
              <BlogPagination
                currentPage={currentPage}
                totalPages={totalPages}
                search={search}
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
