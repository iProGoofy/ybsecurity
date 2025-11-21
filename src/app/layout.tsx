import type { Metadata } from "next";
import { Archivo, Archivo_Narrow, Bebas_Neue, Montserrat, Roboto, Comic_Neue } from "next/font/google";
import "./globals.css";
// Components
import Header from "@/components/header";
import Footer from "@/components/footer";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
});

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: ["300","400","700"],
  style: ["normal", "italic"],
  variable: "--font-comic-neue",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto",
});


const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: "--font-archivo-narrow",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '900'],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "YBSecurity - Uw veiligheid in onze handen",
  description: "YBSecurity biedt professionele beveiligingsdiensten voor bedrijven en evenementen. Onze ervaren beveiligers zorgen voor een veilige omgeving, zodat u zich kunt concentreren op wat echt belangrijk is.",
  keywords: "beveiliging, beveiligingsdiensten, evenementenbeveiliging, bedrijfsbeveiliging, professionele beveiliging, veiligheid, beveiligingsbedrijf, YBSecurity",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  icons: {
    icon: "/favicon.ico?v=2",
    
  }

};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${archivoNarrow.variable} ${archivo.variable} ${bebasNeue.variable} antialiased`}>
        <Header/>
        <main>{children}</main>
        <Footer />
        
        {/* Google Tag Manager */}
      </body>
    </html>
  );
}