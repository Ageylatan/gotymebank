import { useState, useEffect } from 'react'
import { supabase } from '@/integrations/supabase/client'

interface DashboardProps {
  onLogout: () => void
}

export default function Dashboard({ onLogout }: DashboardProps) {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    onLogout()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
              <h1 className="text-2xl font-bold text-white">GoTyme Bank</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-white/80 text-sm">Welcome, {user?.email}</span>
              <button
                onClick={handleLogout}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Welcome to your Dashboard
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Manage your finances with ease
          </p>
        </div>

        {/* Account Summary */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">Account Summary</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-white/70 text-sm mb-2">Available Balance</p>
              <p className="text-3xl font-bold text-white">₱25,847.50</p>
            </div>
            <div className="text-center">
              <p className="text-white/70 text-sm mb-2">Savings</p>
              <p className="text-3xl font-bold text-white">₱142,350.25</p>
            </div>
            <div className="text-center">
              <p className="text-white/70 text-sm mb-2">Pending</p>
              <p className="text-3xl font-bold text-white">₱1,250.00</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white text-xl">💳</span>
            </div>
            <h3 className="text-white font-semibold mb-2">My Cards</h3>
            <p className="text-white/70 text-sm">Manage your debit and credit cards</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-green-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white text-xl">💰</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Transfer Money</h3>
            <p className="text-white/70 text-sm">Send money instantly</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-purple-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white text-xl">📊</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Transactions</h3>
            <p className="text-white/70 text-sm">View your transaction history</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-orange-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white text-xl">⚙️</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Settings</h3>
            <p className="text-white/70 text-sm">Manage your account settings</p>
          </div>
        </div>
      </main>
    </div>
  )
}