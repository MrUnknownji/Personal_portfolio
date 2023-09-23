"use client";
import "./Styles/media.scss";
import Bg from "./Assets/BackgroundPortfolioBg.jpg";

export const metadata = {
  title: "sandeep-portfolio",
  description: "Hi, I'm Sandeep Kumar, A web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{`Sandeep's portfolio`}</title>
      </head>
      <body data-scroll-container style={{ backgroundImage: `url(${Bg.src})` }}>
        <div>{children}</div>
      </body>
    </html>
  );
}
