import { Noto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/LayoutClient/Header";
import Footer from "@/components/LayoutClient/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

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

      <head>

        {/* End Google Tag Manager */}
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="Gp7e6VmbNeX9V_DRYsQeyEc3R9CcA6h4Nc0xP4JJRV4" />

      </head>

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
