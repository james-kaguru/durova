// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { defaultLexical } from "./fields/defaultLexical";
import { s3Storage } from "@payloadcms/storage-s3";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  editor: defaultLexical,
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  // cors: [getServerSideURL()].filter(Boolean),
  sharp,
  plugins: [
    s3Storage({
      enabled: true,
      collections: {
        media: {
          disableLocalStorage: true,
        },
      },
      bucket: process.env.S3_BUCKET_NAME,
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY,
          secretAccessKey: process.env.S3_SECRET_KEY,
        },
        region: process.env.S3_REGION,
      },
    }),
  ],
});
