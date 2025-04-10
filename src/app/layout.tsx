import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Đông Y Pharmacy - Thuốc đông y chất lượng cao",
  description: "Cung cấp các sản phẩm thuốc đông y chất lượng cao, được kiểm chứng từ các dược liệu thiên nhiên.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
      </head>
      <body className={`${roboto.variable} ${poppins.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <img
          src="/images/trongdong.png"
          alt="Trống đồng"
          className="fixed top-1/2 right-0 translate-y-[-50%] translate-x-1/2 w-[30rem] md:w-[50rem] opacity-90 pointer-events-none z-0 slow-spin"
        />
        <img
          src="https://i.pinimg.com/736x/0b/98/b3/0b98b3820625cefb530d17402ed6be71.jpg"
          alt="Decorative"
          className="fixed top-1/5 left-55 translate-y-[-25%] -translate-x-1/2 w-[30rem] md:w-[30rem] opacity-20 pointer-events-none z-0"
        />
      </body>
    </html>
  );
}
