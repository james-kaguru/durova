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
      required: true,
    },
    {
      name: "source",
      type: "select",
      defaultValue: "website",
      options: [
        {
          label: "Google",
          value: "google",
        },
        {
          label: "Trip Advisor",
          value: "tripAdvisor",
        },
        {
          label: "Viator",
          value: "viator",
        },
        {
          label: "Instagram",
          value: "instagram",
        },
        {
          label: "Website",
          value: "website",
        },
        {
          label: "Unknown",
          value: "Unknown",
        },
        {
          label: "Well sourced",
          value: "Well sourced",
        },
        {
          label: "Personal",
          value: "Personal",
        },
      ],
      required: true,
    },
    {
      name: "sourceDetails",
      type: "textarea",
    },
    {
      name: "caption",
      type: "richText",
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ];
        },
      }),
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
        name: "small",
        width: 600,
      },
      {
        name: "medium",
        width: 900,
      },
      {
        name: "large",
        width: 1400,
      },
      {
        name: "xlarge",
        width: 1920,
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
