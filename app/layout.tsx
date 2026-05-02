import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, // Empêche le zoom accidentel
  themeColor: '#FF6A00' // Couleur de la barre d'adresse Android/Chrome
}

export const metadata: Metadata = {
  title: 'GRANDPLACE - Marketplace des marchés de Dakar',
  description: 'Tous les marchés de Dakar, chez vous !',
  manifest: '/manifest.json', // Optionnel : pour PWA
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'GRANDPLACE',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* FontAwesome pour les icônes */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        
        {/* Prévention du zoom sur iOS */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={inter.className} style={{ touchAction: 'manipulation' }}>
        {children}
      </body>
    </html>
  );
}