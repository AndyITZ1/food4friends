//Catch-all segments in Next.js allow for matching dynamic routes with one or more segments. They are defined using brackets with an ellipsis [...segmentName] in the file name. For example, pages/blog/[...slug].js will match /blog/a, /blog/a/b, /blog/a/b/c, and so on.
import { handlers } from "@/auth";
export const {GET, POST} = handlers


