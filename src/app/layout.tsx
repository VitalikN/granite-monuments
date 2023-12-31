import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReduxProvider from "@/redux/ReduxProvider/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Пам`ятники Гранітні",
  description: "Generated by create next app",
  openGraph: {
    images: "/favicon.ico",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <body className={inter.className}>
        <ReduxProvider>
          <Header />

          <main>{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
