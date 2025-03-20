import { Toaster } from 'sonner';
import './globals.css';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Get a pro',
  description: 'Get the best professionals for your legal and financial needs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='font-default'>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
