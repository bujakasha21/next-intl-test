import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<LocaleLayoutProps>) {
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
