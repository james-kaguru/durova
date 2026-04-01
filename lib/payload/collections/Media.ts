import { CollectionAfterReadHook, CollectionConfig } from "payload";
import { authenticated } from "@/lib/payload/access/authenticated";
import { anyone } from "@/lib/payload/access/anyone";
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

const populateFullUrl: CollectionAfterReadHook = ({ doc }) => {
  doc.fullUrl = `${process.env.S3_ENDPOINT}/${doc.filename}`;
  return doc;
};

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  defaultPopulate: {
    alt: true,
    filename: true,
    url: true,
  },
  hooks: {
    afterRead: [populateFullUrl],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: false,
    },
  ],
  upload: {
    adminThumbnail: "thumbnail",
    focalPoint: true,
    imageSizes: [
      {
        name: "thumbnail",
        width: 300,
      },
      {
        name: "square",
        width: 500,
        height: 500,
      },
      {
        name: "og",
        width: 1200,
        height: 630,
        crop: "center",
      },
    ],
  },
};
