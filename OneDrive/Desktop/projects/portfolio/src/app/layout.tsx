import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Feeza Bathul PV | Developer Portfolio",
  description: "Modern developer portfolio for Feeza Bathul PV, a B.Tech Computer Science student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


function Footer() {
  return (
    <footer className="border-t border-black/5 py-8 text-center text-sm text-foreground/60">
      <p>© {new Date().getFullYear()} Feeza Bathul PV. All rights reserved.</p>
    </footer>
  );
}
