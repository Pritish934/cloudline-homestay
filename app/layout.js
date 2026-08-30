import { Fraunces, Work_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-worksans",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Cloudline — A four-room house on the hill",
  description:
    "Cloudline is a small, new homestay set at 1,850m, above the cloud line. Four rooms, home-cooked meals, and mornings that start with mist in the valley.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable} ${spaceMono.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
