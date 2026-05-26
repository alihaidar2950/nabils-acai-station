import type { Metadata } from "next";
import { LocationsHero, LocationsFull } from "@/components/sections/LocationsFull";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Nabil's Açaí Station has two Perth shops — the Mt Lawley flagship on Beaufort St and the original Lebanese sweets stall inside Ballajura City Shopping Centre. Hours, maps and directions.",
};

export default function Page() {
  return (
    <>
      <LocationsHero />
      <LocationsFull />
      <FinalCta />
    </>
  );
}
