import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OnLearn - Watch your child growing with us!",
  description:
    "OnLearn is a tution providing website, you can book an class for your child and watch your child grow with us!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} pl-[2px] pr-[2px]`}>
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
