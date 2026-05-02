import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GRANDPLACE - Marketplace des marchés de Dakar",
  description: "Tous les marchés de Dakar, chez vous !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}