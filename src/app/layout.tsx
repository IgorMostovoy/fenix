import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Sections/Header/HeaderMenu';
import { marckScript, montserrat, poiret } from '../fonts/font';

export const metadata: Metadata = {
  title: 'Fenix',
  description: 'Production of monuments',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${poiret.variable} ${montserrat.variable} ${marckScript.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
