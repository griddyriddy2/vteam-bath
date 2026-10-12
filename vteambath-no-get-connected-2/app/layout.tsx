import ScrollEffects from "@/components/ScrollEffects";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://vteambath.com";
const siteName = "V Team Bath";
const description = "Discover student-led volunteering at the University of Bath. Explore projects, become a Project Leader and make a difference in your community.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "V Team Bath | Your Community. Your Impact.", template: "%s | V Team Bath" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName,
    title: "V Team Bath | Your Community. Your Impact.",
    description,
    url: siteUrl,
  },
  twitter: {
    card: "summary",
    title: "V Team Bath | Your Community. Your Impact.",
    description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="min-h-screen bg-[#FFFDFB] text-[#252525] antialiased"><ScrollEffects /><Navbar />{children}<Footer /></body></html>;
}
