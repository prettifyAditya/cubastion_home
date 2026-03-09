import { Inter } from "next/font/google";
import MainTemplate from "@/components/template/MainTemplate";
import "./global.css";

const inter = Inter({
  variable: "inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`} cz-shortcut-listen="true">
        <MainTemplate>
          {children}
        </MainTemplate>
      </body>
    </html>
  );
}
