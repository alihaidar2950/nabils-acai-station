import { Hero } from "@/components/sections/Hero";
import { Heritage } from "@/components/sections/Heritage";
import { Signatures } from "@/components/sections/Signatures";
import { Locations } from "@/components/sections/Locations";
import { Reviews } from "@/components/sections/Reviews";
import { Social } from "@/components/sections/Social";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Page() {
  return (
    <>
      <Hero />
      <Heritage />
      <Signatures />
      <Locations />
      <Reviews />
      <Social />
      <FinalCta />
    </>
  );
}
