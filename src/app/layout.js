import './globals.css'



export const metadata = {
  title: 'Julien Brancourt | Portfolio',
  description: 'Julien Brancourt, développeur web, développeur front-end React & Next.js',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name='robots' content='index, follow' />
        <meta name='keywords' content='React, Next.js, front-end, développeur web, Julien Brancourt, portfolio' />
        <meta name='author' content='Julien Brancourt'/>
        <meta property="og:title" content="Julien Brancourt | Portfolio" />
        <meta property="og:description" content="Julien Brancourt, développeur web, développeur front-end React & Next.js, voici mon portfolio" />
      </head>
      <body>{children}</body>
    </html>
  )
}
