import React from 'react';
import Head from 'next/head';
import './globals.css';

export const metadata = {
  title: 'Julien Brancourt | Portfolio',
  description: 'Julien Brancourt, développeur web, développeur front-end React & Next.js',
};

export default function RootLayout({ children }) {

  return (
    <html lang="fr">
      <Head>
        <meta name='robots' content='index, follow' />
        <meta name='keywords' content='React, Next.js, front-end, développeur web, Julien Brancourt, portfolio' />
        <meta name='author' content='Julien Brancourt'/>
        <meta property="og:title" content="Julien Brancourt | Portfolio" />
        <meta property="og:description" content="Portfolio de Julien Brancourt, développeur web, développeur front-end React & Next.js" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body>
        {(process.env.NODE_ENV === 'production') &&
        <noscript dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T8WZRZBM" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }}></noscript>
        }
        {children}
      </body>
    </html>
  );
}