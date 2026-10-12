import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register Volunteering Interest",
  description: "Tell V Team Bath which student volunteering projects interest you and discover your next opportunity.",
  alternates: { canonical: "/interest" },
};

export default function InterestLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
