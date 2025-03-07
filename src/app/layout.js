import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNav from "./layout/TopNav";
import SideBarNav from "./layout/SideBarNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full h-full font-sans">
          <TopNav />
          <div id="container" className="flex gap-1 p-2">
            <SideBarNav className="" />
            <div className="bg-bg-gray-light w-[80%] p-3">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
