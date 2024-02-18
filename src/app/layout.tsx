import React from "react";

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
  description:
    "Ласкаво просимо до нашої гранітної майстерні в Мукачеві та на Закарпатті, де ми з любов'ю та майстерністю пропонуємо високоякісні та неповторні вироби з граніту, виготовлені з використанням найкращих видів цього дивовижного каменю. Наш асортимент включає в себе елегантні та вишукані пам'ятники, які стануть вічним символом пам'яті та шанування для ваших близьких. Крім того, ми пропонуємо широкий вибір гранітних ваз, які додають розкіш і елегантність будь-якому інтер'єру. Наші вироби виготовлені з різноманітних типів граніту, включаючи лезнік, лабрадорит, капусти габро та покостовський граніт, а також інші види, що гарантує їх вишуканість та надійність. Підвіконники, лампатки та інші вироби з граніту, які ми створюємо, прикрасять ваш будинок і нададуть йому неповторний шарм. Дозвольте нам допомогти вам обрати ідеальний гранітний виріб, який відповідає вашим потребам та бажанням, і створить неповторний акцент у вашому житті.",
  openGraph: {
    images: ["/favicon.ico"],
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
        <title>Пам`ятники Гранітні</title>
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
