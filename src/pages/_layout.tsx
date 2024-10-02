import '../styles.css';

import type { ReactNode } from 'react';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <html>
      <head></head>
      <body className="bg-slate-50">
        <div className="font-['Nunito'] flex columns-1 min-w-full justify-center">
          <meta property="description" content={data.description} />
          <link rel="icon" type="image/png" href={data.icon} />
          <Header />
          <main className="mt-24 flex justify-center w-full">
            <div className="lg:w-3/5 w-full px-3">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}

const getData = async () => {
  const data = {
    description: 'An internet website!',
    icon: '/images/favicon.png',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
