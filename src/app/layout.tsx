
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Provider from  "@/store/Provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Location case",
  description: "This is a map application where locations are tracked",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Provider>{children}</Provider>
        </Providers>
      </body>
    </html>
  );
}
