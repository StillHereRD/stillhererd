import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import SkipLink from "@/components/SkipLink";
import LanguageToggle from "@/components/LanguageToggle";
import SiteFooter from "@/components/SiteFooter";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const heading = Lora({
  variable: "--font-heading",
  subsets: ["latin"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StillHereRD — A place to breathe",
  description:
    "A place to breathe. A place to keep going. One small step at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LanguageProvider>
          <SkipLink />
          <header className="flex justify-end px-6 py-4 sm:px-10">
            <LanguageToggle />
          </header>
          {children}
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
