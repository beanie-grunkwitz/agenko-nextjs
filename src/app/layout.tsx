import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
