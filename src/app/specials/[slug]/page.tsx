import { SpecialsComingSoon } from "@/components/sections/SpecialsComingSoon";

export const metadata = { title: "Specials" };

export default async function Page(props: PageProps<"/specials/[slug]">) {
  await props.params;
  return <SpecialsComingSoon />;
}
