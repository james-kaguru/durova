import RichText from "@/components/RichText";
import configPromise from "@payload-config";

import Image from "next/image";
import { getPayload } from "payload";

export default async function Page({
  params,
  searchParams,
}: PageProps<"/blogs/[blogId]">) {
  const { blogId } = await params;
  const payload = await getPayload({ config: configPromise });

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
            <h1 className="text-6xl tracking-tight font-semibold">
              {blog.title}
            </h1>
          </div>
        </div>
      </div>
      <div className="custom-container">
        <RichText data={blog.content} className="" />
      </div>
    </div>
  );
}
