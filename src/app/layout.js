import "./Styles/media.scss";
import Bg from "./Assets/BackgroundPortfolioBgSmall.jpg";

export const metadata = {
  title: "Sandeep-portfolio",
  description: "Hi, I'm Sandeep Kumar, A web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/src/app/favicon.ico" sizes="any" />
      </head>
      <body
        style={{
          width: "100vw",
          overflowX: "hidden",
          backgroundImage: `url(${Bg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {children}
      </body>
    </html>
  );
}
