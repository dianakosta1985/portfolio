import "./globals.css";
import Head from "next/head";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import ImageSection from "./components/layout/ImageSection";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Diana Kosta&apos;s Portfolio</title>{" "}
        {/* Escaped the single quote */}
        <meta name="description" content="Welcome to my portfolio" />
      </Head>
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
