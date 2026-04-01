import { CollectionConfig } from "payload";
import { authenticated } from "@/lib/payload/access/authenticated";
import { authenticatedOrPublished } from "@/lib/payload/access/authenticatedOrPublished";
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
  HorizontalRuleFeature,
} from "@payloadcms/richtext-lexical";

export default <CollectionConfig<"blogs">>{
  slug: "blogs",
  admin: {
    useAsTitle: "title",
  },
  defaultPopulate: {
    name: true,
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ["h1", "h2", "h3", "h4"] }),
            // BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            HorizontalRuleFeature(),
          ];
        },
      }),
      label: false,
      required: true,
    },
  ],
  versions: {
    drafts: true,
    maxPerDoc: 5,
  },
};
