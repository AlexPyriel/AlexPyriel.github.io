import type { Metadata } from 'next';
import { en } from '../content';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://alexpyriel.github.io'),
  icons: { icon: '/favicon.svg' },
  title: en.meta.title,
  description: en.meta.description,
  alternates: { canonical: '/', languages: { en: '/', ru: '/ru/' } },
  openGraph: {
    title: en.meta.title,
    description: en.meta.ogDescription,
    type: 'website',
    locale: 'en',
    images: [],
  },
  twitter: {
    card: 'summary',
    title: en.meta.title,
    description: en.meta.ogDescription,
    images: [],
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
