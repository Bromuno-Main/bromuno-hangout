import type { Metadata } from "next";
import { Big_Shoulders_Display, Livvic } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import LeftBar from "../components/leftbar/LeftBar";
import FormContextProvider from "../context/formContext";
import "./globals.css";
import RightBar from "../components/right-bar/RightBar";
import { Title } from "../components/title/Title";

const bigShoulder_init = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--big-shoulder-display",
  fallback: ["inter"],
});
const livvic = Livvic({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bromuno-hangout",
  description: "Bromuno main",
  icons: "/fav.svg",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${livvic.className} ${bigShoulder_init.variable} `}>
        <NextTopLoader />

        <main className=" flex">
          <FormContextProvider>
            <LeftBar />
            <div className="min-h-screen max-h-[200vh] h-[100vh] flex flex-col flex-1 bg-gray-50">
              <Title/>
              {children}
            </div>
            <RightBar />
          </FormContextProvider>
        </main>
      </body>
    </html>
  );
}
