import { Hero } from "@/components/sections/Hero";
import { PressStrip } from "@/components/sections/PressStrip";
import { Heritage } from "@/components/sections/Heritage";
import { Signatures } from "@/components/sections/Signatures";
import { Locations } from "@/components/sections/Locations";
import { Reviews } from "@/components/sections/Reviews";
import { InTheNews } from "@/components/sections/InTheNews";
import { Social } from "@/components/sections/Social";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Page() {
  return (
    <>
      <Hero />
      <PressStrip />
      <Heritage />
      <Signatures />
      <Locations />
      <Reviews />
      <InTheNews />
      <Social />
      <FinalCta />
    </>
  );
}
