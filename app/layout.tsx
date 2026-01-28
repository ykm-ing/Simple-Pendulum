import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conservation of Energy - Simple Pendulum",
  description: "Interactive physics demonstration for HKDSE - Conservation of Energy using simple pendulum",
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
