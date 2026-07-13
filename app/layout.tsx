import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alfidata Analytics | Make Your Data Make Sense",
  description:
    "Papua New Guinea data analytics, Power BI reporting, consulting and training for smarter business decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
