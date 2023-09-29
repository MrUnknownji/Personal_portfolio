import "./Styles/media.scss";
import Bg from "./Assets/BackgroundPortfolioBgSmall.jpg";

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
      <body style={{ backgroundImage: `url(${Bg.src})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
        <div className="topLevelDiv">{children}</div>
      </body>
    </html>
  );
}
