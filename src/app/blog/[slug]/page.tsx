import { BlogComingSoon } from "@/components/sections/BlogComingSoon";

export const metadata = { title: "Stories" };

export default async function Page(props: PageProps<"/blog/[slug]">) {
  await props.params;
  return <BlogComingSoon />;
}
