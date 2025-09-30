import { Geist, Geist_Mono, Noto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/LayoutClient/Header";
import Footer from "@/components/LayoutClient/Footer";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Madis Marine",
  description: "Madis Marine - New and Used Boats for Sale, Service, Parts, and Financing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${notoSerif.variable}`}>
        
        <Header />

        <main style={{ minHeight: "85vh" }}>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
