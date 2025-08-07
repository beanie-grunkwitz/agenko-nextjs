import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

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
    <html lang="en">
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
