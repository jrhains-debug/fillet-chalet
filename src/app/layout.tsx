import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fillet Chalet | Mobile Wood-Fired Sauna | Portland, Maine",
  description:
    "Mobile wood-fired sauna in Portland, Maine. Public sessions, private rentals, and special events. Popups starting late winter 2026.",
  keywords: [
    "mobile sauna",
    "wood-fired sauna",
    "Portland Maine sauna",
    "sauna rental",
    "Maine sauna",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
