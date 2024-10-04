import "../styles.css";

import type { ReactNode } from "react";

import { Header } from "../components/header";

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <html>
      <head></head>
      <body className="bg-slate-50 m-0">
        <div className="columns-1 min-w-full justify-center">
          <meta property="description" content={data.description} />
          <link rel="icon" type="image/png" href={data.icon} />
          <Header />
          <main className="lg:mt-20 md:mt-20 justify-center w-full px-4">
            <div>{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}

const getData = async () => {
  const data = {
    description: "An internet website!",
    icon: "/images/favicon.png",
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: "static",
  };
};
