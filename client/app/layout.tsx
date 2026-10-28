import "./globals.css";
import type { Metadata } from "next";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import ImageSection from "./components/layout/ImageSection";

export const metadata: Metadata = {
  title: "Diana Kosta | Full Stack Developer",
  description:
    "Portfolio of Diana Kosta, a full stack developer who builds web apps with React, Next.js and Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col flex-1 md:flex-row relative">
          <section className="md:w-8/12 flex flex-col">
            <NavBar />
            <ImageSection />
            {children}
          </section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
