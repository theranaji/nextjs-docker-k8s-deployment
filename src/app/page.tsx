export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">DevOps Assignment</h1>
        <p className="text-xl mb-8">Next.js + Docker + Kubernetes</p>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="space-y-2">
            <li>✅ Containerized with Docker</li>
            <li>✅ CI/CD with GitHub Actions</li>
            <li>✅ Deployed on Kubernetes</li>
            <li>✅ Health Checks Enabled</li>
          </ul>
        </div>
      </div>
    </main>
  )
}