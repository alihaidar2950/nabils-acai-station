import type { Metadata } from "next";
import { SpecialsComingSoon } from "@/components/sections/SpecialsComingSoon";

export const metadata: Metadata = {
  title: "Specials",
  description:
    "Dubai chocolate drops, seasonal flavours and limited-run specials from Nabil's Açaí Station. Coming soon — follow us on Instagram for the freshest updates.",
};

export default function Page() {
  return <SpecialsComingSoon />;
}
