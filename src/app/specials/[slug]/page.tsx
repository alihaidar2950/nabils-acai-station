import type { Metadata } from "next";
import { SpecialsComingSoon } from "@/components/sections/SpecialsComingSoon";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Specials",
  description:
    "Limited-run dessert specials from Nabil's Acai Station in Perth, including Dubai chocolate drops, seasonal acai flavours and viral sweets.",
  path: "/specials",
  keywords: ["Dubai chocolate Perth", "viral desserts Perth", "acai specials"],
});

export default async function Page(props: PageProps<"/specials/[slug]">) {
  await props.params;
  return <SpecialsComingSoon />;
}
