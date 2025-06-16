"use client";

import { StoreProvider } from "../../redux/StoreProvider";
import FormContextProvider from "../../context/formContext";
import LeftBar from "../leftbar/LeftBar";
import RightBar from "../right-bar/RightBar";
import LoadingOverlay from "../LoadingOverlay";
import AppInitializer from "../AppInitializer";
import NextTopLoader from "nextjs-toploader";

export function LayoutContent({
  children,
  bigShouldersClass,
  livvicClass,
  bigShouldersVar,
}: {
  children: React.ReactNode;
  bigShouldersClass: string;
  livvicClass: string;
  bigShouldersVar: string;
}) {
  return (
    <body
      className={`${livvicClass} ${bigShouldersVar} gap-2 flex w-screen bg-green items-center justify-center h-screen flex-col`}
    >
      <NextTopLoader />

      <main className="relative flex bg-white rounded w-full h-full {lg:max-h-[900px]} flex-1 max-w-screen-3xl overflow-clip overflow-y-scroll scrollbar-hide">
        <StoreProvider>
          <AppInitializer />
          <LoadingOverlay />
          <FormContextProvider>
            <LeftBar />
            <div className="h-full relative scrollbar-hide flex flex-col flex-1 bg-gray-50 overflow-hidden overflow-y-scroll pt-[100px] lg:pt-0">
              <div className="flex-1">{children}</div>
            </div>
            <RightBar />
          </FormContextProvider>
        </StoreProvider>
      </main>
    </body>
  );
}
