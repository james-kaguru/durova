import RichText from "@/components/RichText";
import configPromise from "@payload-config";
import Image from "next/image";
import Link from "next/link";
import { getPayload } from "payload";
import type { Media } from "@/lib/payload/payload-types";

export default async function Page({
  params,
}: PageProps<"/blogs/[blogId]">) {
  const { blogId } = await params;
  const payload = await getPayload({ config: configPromise });

  const blog = await payload.findByID({
    collection: "blogs",
    id: blogId,
    depth: 1,
  });

  const image =
    typeof blog.heroImage === "object" ? (blog.heroImage as Media) : null;
  const imgSrc = image ? (image as any).fullUrl || image.url : null;

  const formattedDate = new Date(blog.createdAt)
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    })
    .toUpperCase();

  return (
    <article className="bg-background min-h-screen">
      {/* ── Hero ────────────────────────────────────────── */}
      <div className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden bg-muted">
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={image?.alt || blog.title}
            fill
            className="object-cover object-center"
            priority
          />
        )}
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

        {/* back link */}
        <div className="absolute top-6 left-0 right-0">
          <div className="custom-container">
            <Link
              href="/blogs"
              className="text-xs text-white/70 uppercase tracking-[0.2em] hover:text-white"
              style={{ transition: "none" }}
            >
              ← Blogs
            </Link>
          </div>
        </div>

        {/* title block */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="custom-container pb-10 md:pb-14">
            <p className="text-xs text-white/60 uppercase tracking-[0.2em] mb-4">
              {formattedDate}
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal text-white leading-none tracking-tight max-w-4xl uppercase">
              {blog.title}
            </h1>
          </div>
        </div>
      </div>

      {/* ── Meta strip ──────────────────────────────────── */}
      <div className="bg-muted">
        <div className="custom-container py-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-8">
            <div>
              <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase mb-1">
                Published
              </p>
              <p className="text-xs text-foreground">
                {formattedDate}
              </p>
            </div>
          </div>
          <Link
            href="/blogs"
            className="text-xs text-muted-foreground uppercase tracking-[0.15em] hover:text-primary"
            style={{ transition: "none" }}
          >
            ← All Blogs
          </Link>
        </div>
      </div>

      {/* ── Content ─────────────────────────────────────── */}
      <div className="bg-background">
        <div className="custom-container py-16 max-w-4xl">
          <RichText
            data={blog.content}
            className="text-sm leading-relaxed"
            enableGutter={false}
          />
        </div>
      </div>
    </article>
  );
}
