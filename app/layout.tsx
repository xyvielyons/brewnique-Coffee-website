import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css"
import Providers from "@/Providers/Providers";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Brewnique",
  description: "At Brewnique, we craft coffee with passion, using sustainably sourced beans for rich flavor and bold aroma. Experience the quality and care in every cup.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-7xl mx-auto bg-backgroundbasecolor h-screen`}
      >
        <Providers>
        {children}
        </Providers>
      </body>
    </html>

  );
}
