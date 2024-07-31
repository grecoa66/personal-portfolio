import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppProvider } from "../components/providers";
import { HeaderMenu } from "../components/HeaderMenu";

import "../globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Greco",
  description: "Portfolio Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={twMerge(inter.className, "relative")}>
        <AppProvider attribute="class">
          <HeaderMenu />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
