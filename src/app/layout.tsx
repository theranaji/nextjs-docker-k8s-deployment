import './globals.css'

export const metadata = {
  title: 'DevOps Assignment',
  description: 'Next.js app with Docker and Kubernetes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}