import './globals.css'



export const metadata = {
  title: 'Julien Brancourt | Portfolio',
  description: 'Julien Brancourt, développeur web, développeur front-end React & Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
