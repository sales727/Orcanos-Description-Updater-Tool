import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Description Mass Update — Orcanos",
  description: "Apply a description to all items returned by a saved Orcanos filter, in bulk.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <header className="site-header">
          <div className="site-header-brand">
            <OrcanosMark />
            <span>Orcanos</span>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

function OrcanosMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
      <path
        d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10"
        stroke="#6B3CA6"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="14" r="2" fill="#F59E0B" />
    </svg>
  );
}
