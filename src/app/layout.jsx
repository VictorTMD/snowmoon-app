import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700', '800'],
});

export const metadata = {
  title: 'Snowmoon Artesania',
  description: 'Esta es la app oficial de Snowmoon artesania',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
