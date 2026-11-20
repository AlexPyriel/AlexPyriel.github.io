import type { Metadata } from 'next';
import { ru } from '../content';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://alexpyriel.github.io'),
  icons: { icon: '/favicon.svg' },
  title: ru.meta.title,
  description: ru.meta.description,
  alternates: { canonical: '/ru/', languages: { en: '/', ru: '/ru/' } },
  openGraph: {
    title: ru.meta.title,
    description: ru.meta.ogDescription,
    type: 'website',
    locale: 'ru',
    images: [],
  },
  twitter: {
    card: 'summary',
    title: ru.meta.title,
    description: ru.meta.ogDescription,
    images: [],
  },
};

export default function RuLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
