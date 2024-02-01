import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Script from "next/script";

const futura = localFont({
  src: [
    {
      path: '../assets/fonts/FuturaPT-Book.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/FuturaPT-DemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/FuturaPT-Heavy.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/FuturaPT-Light.ttf',
      weight: '300',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: "Djamo Sénégal",
  description: "Gérez tout votre argent dans une application unique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={futura.className}>
        {children}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-C11XMFZW33"></Script>
        <Script strategy="afterInteractive" id="ga">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-C11XMFZW33');`}
        </Script>
      </body>
    </html>
  );
}
