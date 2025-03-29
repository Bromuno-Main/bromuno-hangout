import type { Metadata } from "next";
import { Livvic, Roboto_Serif } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import LeftBar from "../components/leftbar/LeftBar";
import FormContextProvider from "../context/formContext";
import "./globals.css";
import RightBar from "../components/right-bar/RightBar";
import { Title } from "../components/title/Title";
import { StoreProvider } from "../redux/StoreProvider";
import LoadingOverlay from "../components/LoadingOverlay";
import { Big_Shoulders_Display } from "next/font/google";

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
        <html lang="en" className={bigShouldersDisplay.className}>
            <body
                className={`${livvic.className} ${bigShouldersDisplay.variable} gap-2 flex w-screen px-10 bg-green py-2 items-center justify-center h-screen flex-col`}
            >
                <NextTopLoader />

                <span className="uppercase text-sm opacity-60 text-white hover:opacity-100 duration-300">
                    bromuno hangout
                </span>

                <main className="relative flex bg-white rounded-2xl w-full h-full max-h-[900px] flex-1 max-w-screen-2xl overflow-clip overflow-y-scroll scrollbar-hide">
                    <StoreProvider>
                        <LoadingOverlay />
                        <FormContextProvider>
                            <LeftBar />
                            <div className="h-full relative scrollbar-hide flex flex-col flex-1 px-4 bg-gray-50 overflow-hidden overflow-y-scroll">
                                <Title />
                                <div className="flex-1 py-2">{children}</div>
                            </div>
                            <RightBar />
                        </FormContextProvider>
                    </StoreProvider>
                </main>
                <span className="text-sm text-white opacity-60 hover:opacity-100 duration-300">
                    Copyright © 2025 Bromuno technologies. All rights reserved
                </span>
            </body>
        </html>
    );
}
