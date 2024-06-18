import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LipIA",
  description: "LipIA software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(
          inter.className,
          "bg-cover bg-center min-h-screen flex justify-center items-center "
        )}
        style={{ backgroundImage: "url('./images/background-image.jpg')" }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
