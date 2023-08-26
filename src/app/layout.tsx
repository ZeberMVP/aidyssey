import { ModalProvider } from "@/components/ModalProvider";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import { ToastProvider } from "@/components/ToastProvider";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIdyssey | AI Generation Platform",
  description: "AI Generation Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ModalProvider />
          <ToastProvider />
          {children}
          <TailwindIndicator />
        </body>
      </html>
    </ClerkProvider>
  );
}
