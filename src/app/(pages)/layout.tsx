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
      <body className={pt_sans.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
