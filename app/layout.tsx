import { Big_Shoulders_Display, Livvic } from "next/font/google";
import { LayoutContent } from "../components/layout/LayoutContent";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bromuno Hangout",
  description: "Connect with fellow developers, join events, find jobs, and collaborate on projects.",
};

const bigShouldersDisplay = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--big-shoulders",
  fallback: ["inter"],
  preload: true,
});

const livvic = Livvic({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bigShouldersDisplay.className}>
      <LayoutContent 
        bigShouldersClass={bigShouldersDisplay.className}
        livvicClass={livvic.className}
        bigShouldersVar={bigShouldersDisplay.variable}
      >
        {children}
      </LayoutContent>
    </html>
  );
}
