import { Inter, Public_Sans, Noto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/LayoutClient/Header";
import Footer from "@/components/LayoutClient/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

// Font imports with variables
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${publicSans.variable} ${notoSerif.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="Gp7e6VmbNeX9V_DRYsQeyEc3R9CcA6h4Nc0xP4JJRV4"
        />
      </head>

      <body>
        <Header />

        <main style={{ minHeight: "85vh" }}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
