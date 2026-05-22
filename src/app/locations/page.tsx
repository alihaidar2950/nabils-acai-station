import { LocationsHero, LocationsFull } from "@/components/sections/LocationsFull";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata = { title: "Locations" };

export default function Page() {
  return (
    <>
      <LocationsHero />
      <LocationsFull />
      <FinalCta />
    </>
  );
}
