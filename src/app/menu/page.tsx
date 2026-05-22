import { MenuHero, MenuFull } from "@/components/sections/MenuFull";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata = { title: "Menu" };

export default function Page() {
  return (
    <>
      <MenuHero />
      <MenuFull />
      <FinalCta />
    </>
  );
}
