import React from 'react';
import Head from 'next/head'
import './globals.css';



export const metadata = {
  title: 'Julien Brancourt | Portfolio',
  description: 'Julien Brancourt, développeur web, développeur front-end React & Next.js',
  
}

export default function RootLayout({ children }) {

  const gtmScript = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-T8WZRZBM');
  `; 

  const gtagScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-N0M6MV1453');
  `;

  return (
    <html lang="fr">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
        <meta name='robots' content='index, follow' />
        <meta name='keywords' content='React, Next.js, front-end, développeur web, Julien Brancourt, portfolio' />
        <meta name='author' content='Julien Brancourt'/>
        <meta property="og:title" content="Julien Brancourt | Portfolio" />
        <meta property="og:description" content="Portfolio de Julien Brancourt, développeur web, développeur front-end React & Next.js" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-N0M6MV1453"></script>
        <script dangerouslySetInnerHTML={{ __html: gtagScript }} />
      </Head>
      <body>
        {children}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T8WZRZBM"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
      </body>
    </html>
  )
}
