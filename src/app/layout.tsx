import { Source_Sans_3, Roboto } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

const source_sans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--heading-font',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--body-font',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
});

export const metadata = {
  title: {
    absolute: '',
    default: 'Agenko - Creative Digital Agency NextJS Template',
    template: '%s | Agenko - Creative Digital Agency NextJS Template',
  },
  description: 'Agenko - Creative Digital Agency NextJS Template',
  openGraph: {
    title: 'Agenko - Creative Digital Agency NextJS Template',
    description: 'Agenko - Creative Digital Agency NextJS Template',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children } : any ) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
      </head>
      <body className={`${source_sans.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
