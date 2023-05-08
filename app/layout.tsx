import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Notes app',
  description: 'App for taking notes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/" className='link'>Home</Link>
          <Link href="/notes" className='link'>Notes</Link>
        </nav>
        {children}
        </body>
    </html>
  )
}
