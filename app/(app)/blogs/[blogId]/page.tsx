import RichText from "@/components/RichText";
import payload from "@/lib/payload";
import Image from "next/image";

export default async function Page({
  params,
  searchParams,
}: PageProps<"/blogs/[blogId]">) {
  const { blogId } = await params;

  const blog = await payload.findByID({
    collection: "blogs",
    id: blogId,
  });

  return (
    <div className="">
      <div className="relative">
        <Image
          src={blog.heroImage.fullUrl as string}
          width={1000}
          height={400}
          className="object-cover object-center w-full h-[500px]"
          alt={blog.id}
        />
        <div className="absolute w-full bottom-0">
          <div className="text-white custom-container py-3">
            <h1>{blog.title}</h1>
          </div>
        </div>
      </div>
      <div className="custom-container">
        <RichText data={blog.content} className="" />
      </div>
    </div>
  );
}
