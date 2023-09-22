"use client";
import "./Styles/media.scss";

export const metadata = {
  title: "sandeep-portfolio",
  description: "Hi, I'm Sandeep Kumar, A web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body data-scroll-container>
        <div className="backdrop-blur-xl">{children}</div>
      </body>
    </html>
  );
}
