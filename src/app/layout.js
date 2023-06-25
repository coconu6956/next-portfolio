import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "채은 포트폴리오",
  description: "👀💡",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="bg-primary">
            <Header></Header>
            {children}
            <Footer></Footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
