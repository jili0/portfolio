import type { Metadata } from "next";
import { Inter, Cinzel, Cinzel_Decorative } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });
const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: '--font-cinzel'
});
const cinzelDecorative = Cinzel_Decorative({ 
  subsets: ["latin"],
  weight: ["700"],
  variable: '--font-cinzel-decorative'
});

export const metadata: Metadata = {
  title: "Jing's Portfolio",
  description: "Portfolio website of Jing Li - Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${cinzel.variable} ${cinzelDecorative.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}