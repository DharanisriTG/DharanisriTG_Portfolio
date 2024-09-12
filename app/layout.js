import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import CustomCursor from "./components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dharani Sri - UI/UX Designer",
  description: "Welcome to my Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <CustomCursor/>
        {children}
      </body>
    </html>
  );
}