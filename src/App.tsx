import { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [timestamp, setTimestamp] = useState('')

  useEffect(() => {
    const now = new Date()
    setTimestamp(now.toISOString().replace('T', ' ').slice(0, 19) + ' UTC')
  }, [])

  return (
    <main className="container">
      <div className="card">
        <h1 className="hero">Hello World</h1>
        <p className="subtitle">A minimal Vite + React starter</p>
        {timestamp && <code className="timestamp">{timestamp}</code>}
      </div>
    </main>
  )
}
