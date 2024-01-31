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
          backgroundImage: `url(${Bg.src})`,
        }}
      >
        {children}
      </body>
    </html>
  );
}
