import { useState } from 'react'
import AppHeader from '../components/layout/AppHeader'
import AppFooter from '../components/layout/AppFooter'
import AIChatWidget from '../components/AIChatWidget'
import SettingsSidebar from '../components/layout/SettingsSidebar'
import { useAuth } from '../contexts/AuthContext'
import { userService } from '../services/userService'

export default function SettingsSecurity() {
  const { user, logout } = useAuth()
  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [isUpdating, setIsUpdating] = useState(false)
  const [message, setMessage] = useState('')
  const [showPasswords, setShowPasswords] = useState([false, false, false])

  const handleChange = (e) => {
    const { name, value } = e.target
    setPasswords(prev => ({ ...prev, [name]: value }))
  }

  const toggleShow = (index) => {
    const next = [...showPasswords]
    next[index] = !next[index]
    setShowPasswords(next)
  }

  const handleUpdatePassword = async () => {
    if (passwords.newPassword !== passwords.confirmPassword) {
      setMessage('New passwords do not match.')
      return
    }
    setIsUpdating(true)
    setMessage('')
    try {
      // Assuming updateProfile or a dedicated updatePassword exists in backend
      await userService.updateProfile({ password: passwords.newPassword })
      setMessage('Password updated successfully!')
      setPasswords({ oldPassword: '', newPassword: '', confirmPassword: '' })
    } catch (err) {
      setMessage('Failed to update password.')
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <div className="bg-white text-slate-800 antialiased font-sans min-h-screen flex flex-col">
      <AppHeader activeNav="" user={user} onLogout={logout} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 w-full flex-grow relative">
        {isUpdating && (
          <div className="absolute inset-x-0 top-0 h-1 z-50">
            <div className="h-full bg-blue-500 animate-pulse w-full"></div>
          </div>
        )}

        <div className="flex flex-col md:flex-row" style={{ gap: '64px' }}>
          <SettingsSidebar />

          <div className="flex-1 space-y-8">
            {message && (
              <div className={`p-4 rounded-xl text-sm font-medium ${message.includes('success') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {message}
              </div>
            )}

            {/* Password */}
            <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-slate-100"><h2 className="font-bold text-[#0f172a]">Password</h2></div>
              <div className="p-6 space-y-6">
                {[
                  { label: 'Old Password', name: 'oldPassword' },
                  { label: 'New Password', name: 'newPassword' },
                  { label: 'Confirm New Password', name: 'confirmPassword' }
                ].map((item, i) => (
                  <div key={i}>
                    <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">{item.label}</label>
                    <div className="relative">
                      <input 
                        type={showPasswords[i] ? 'text' : 'password'} 
                        name={item.name}
                        value={passwords[item.name]}
                        onChange={handleChange}
                        placeholder={i === 2 ? 'Re-enter password' : 'Enter password'}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none pr-12" 
                      />
                      <button 
                        type="button"
                        onClick={() => toggleShow(i)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 outline-none"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
                <div className="flex justify-end pt-2">
                  <button 
                    onClick={handleUpdatePassword} 
                    disabled={isUpdating}
                    className="bg-blue-500 text-white px-8 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors shadow-sm shadow-blue-200 disabled:opacity-50"
                  >
                    {isUpdating ? 'Saving...' : 'Save'}
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <AppFooter />
      <AIChatWidget />
    </div>
  )
}
