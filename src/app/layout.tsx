import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import { Source_Sans_3 } from 'next/font/google'

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--heading-font',
  display: 'swap',
})

export const metadata = {
  title: {
    absolute: '',
    default: 'Think Global. Execute Korean',
    template: 'Think Global. Execute Korean',
  },
  description: 'Think Global. Execute Korean',
  openGraph: {
    title: 'Think Global. Execute Korean',
    description: 'Think Global. Execute Korean',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children } : any ) {
  return (
    <html lang="en" className={sourceSans3.variable}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VYEPFFHBMP"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VYEPFFHBMP');
            `
          }}
        />
        <meta name="author" content="Themeservices" />
      </head>
    <body>
        {children}
      </body>
    </html>
  );
}
