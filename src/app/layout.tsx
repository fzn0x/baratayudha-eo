import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { Providers } from "./providers";
import "./globals.css";

const inter = Roboto({ subsets: ["latin"], weight: "900" });

export const metadata: Metadata = {
  title: "Baratayudha Event Organizer - Bandung, Indonesia",
  description: "Event Organizer Terbaik di Bandung, Paket Murah dan Bonus Tanpa Ribet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
