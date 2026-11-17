import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shree Bhargava | Creative Indian Architect',
  description: 'Architecture, interior design and turnkey projects by Shree Bhargava Infrastructure and Development.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  openGraph: { title: 'Shree Bhargava | Creative Indian Architect', description: 'Spaces that inspire. Designs that define lifestyles.', type: 'website' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
