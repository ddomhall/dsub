import './globals.css'

export const metadata = {
  title: 'dsub',
  description: 'custom newsletters',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 h-screen">{children}</body>
    </html>
  )
}
