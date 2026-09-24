import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bekir | Full-Stack Developer",
  description: "Freelance Full-Stack Developer specializing in Next.js and Django. I build end-to-end digital solutions and premium web applications.",
  icons: {
    icon: [
      { url: "/newlogo.png" },
      { url: "/icon.png" },
    ],
    shortcut: "/newlogo.png",
    apple: "/newlogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
