import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import "./globals.css";

const pt_sans = PT_Sans({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: "Jens Lemke",
  description:
    "Mein Name ist Jens Lemke. Auf dieser Seite stelle ich mich und meine Projekte vor. Wenn ihr mehr über mich erfahren wollt, könnt ihr gerne Kontakt zu mir aufnehmen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/images/icon.ico"
          type="image/x-icon"
          sizes="64x64 32x32 24x24 16x16"
        />
        <link
          rel="apple-touch-icon"
          href="/images/apple-icon.png"
          type="image/png"
          sizes="64x64 32x32 24x24 16x16"
        />
      </head>
      <body className={pt_sans.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
