import type { Metadata } from "next";
import { OrderHero, OrderInfo } from "@/components/sections/OrderInfo";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Order",
  description:
    "Order Nabil's Açaí Station for delivery via Uber Eats, or call ahead to pick up at the Mt Lawley or Ballajura shop.",
};

export default function Page() {
  return (
    <>
      <OrderHero />
      <OrderInfo />
      <FinalCta />
    </>
  );
}
