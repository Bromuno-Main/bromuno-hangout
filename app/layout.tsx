import type { Metadata } from "next";
import { Roboto_Serif, Livvic } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import LeftBar from "../components/leftbar/LeftBar";
import FormContextProvider from "../context/formContext";
import "./globals.css";
import RightBar from "../components/right-bar/RightBar";
import { Title } from "../components/title/Title";

const robotoSerif_init = Roboto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--roboto-serif",
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
      <body className={`${livvic.className} ${robotoSerif_init.variable} flex w-screen px-10 bg-green py-5 items-center justify-center h-screen  flex-col `} >
        <NextTopLoader />

        <span className="uppercase">bromuno hangout</span>

        <main className="relative flex bg-white rounded-2xl w-full h-full flex-1 max-w-screen-2xl overflow-clip overflow-y-scroll  scrollbar-hide">
          <FormContextProvider>
            <LeftBar />
            <div className="max-h-[200vh] min-h-[200vh] scrollbar-hide flex flex-col flex-1 px-4 bg-gray-50 overflow-hidden overflow-y-scroll  ">
              <Title/>
              {children}
            </div>
            <RightBar />
          </FormContextProvider>
        </main>
       <span> all rights reserved</span>
      </body>
    </html>
  );
}
