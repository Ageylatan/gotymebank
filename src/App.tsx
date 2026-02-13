import { useState, useEffect } from 'react'
import { supabase } from '@/integrations/supabase/client'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setIsAuthenticated(!!user)
      setLoading(false)
    }

    checkUser()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <LoginPage onLogin={() => setIsAuthenticated(true)} />
  }

  return <Dashboard onLogout={() => setIsAuthenticated(false)} />
}

export default App