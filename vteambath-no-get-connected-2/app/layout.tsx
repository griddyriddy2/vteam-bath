import ScrollEffects from "@/components/ScrollEffects";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "V Team Bath | Your Community. Your Impact.", template: "%s" },
  description: "Explore student-led volunteering at the University of Bath. Discover projects, lead a team and make a difference in your community.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="min-h-screen bg-[#FFFDFB] text-[#252525] antialiased"><ScrollEffects /><Navbar />{children}<Footer /></body></html>;
}
