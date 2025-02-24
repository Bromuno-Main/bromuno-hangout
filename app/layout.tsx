import type { Metadata } from "next";
import { Big_Shoulders_Display, Livvic } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import FormContextProvider from "../context/formContext";
import "./globals.css";

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
  title: "Bromuno",
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

        <main className=" flex flex-col">
          <FormContextProvider>
            <NavBar />
            <div className="min-h-screen">{children}</div>
            <Footer />
          </FormContextProvider>
        </main>
      </body>
    </html>
  );
}
