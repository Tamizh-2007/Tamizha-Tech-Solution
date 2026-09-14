import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Tamizha Tech Solution", template: "%s | Tamizha Tech Solution" },
  description: "Modern web, software and digital solutions for businesses and organizations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}