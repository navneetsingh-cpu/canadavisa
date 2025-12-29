import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'CanadaVisa - Your Journey to Canada Starts Here',
  description: 'Expert Canadian immigration services for skilled workers, students, and families. Professional guidance for Express Entry, Family Sponsorship, and Study Permits.',
  keywords: 'Canada immigration, Express Entry, Study Permit, Family Sponsorship, Canadian visa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
