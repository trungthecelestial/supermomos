import "./globals.css";

import localFont from "@next/font/local";
import clsx from "clsx";
import { Header } from "components/Header";

const myFont = localFont({
  src: [
    {
      path: "../assets/fonts/NeueHaasDisplayLight.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/NeueHaasDisplayBold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-main">
        <Header />

        <main className={clsx(myFont.className, "mx-auto mt-24 max-w-7xl")}>
          {children}
        </main>
      </body>
    </html>
  );
}
