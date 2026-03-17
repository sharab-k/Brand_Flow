import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AppHeader from '../components/layout/AppHeader'
import { useAuth } from '../contexts/AuthContext'
import { userService } from '../services/userService'

export default function SettingsProfile() {
  const { user, logout } = useAuth()
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    companyName: user?.companyName || ''
  })
  const [isUpdating, setIsUpdating] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        companyName: user.companyName || ''
      })
    }
  }, [user])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = async () => {
    setIsUpdating(true)
    setMessage('')
    try {
      await userService.updateProfile(formData)
      setMessage('Profile updated successfully!')
    } catch (err) {
      setMessage('Failed to update profile.')
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <div className="bg-gray-50 text-slate-800 antialiased font-sans flex flex-col min-h-screen">
      <AppHeader activeNav="dashboard" user={user} onLogout={logout} />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full relative">
        {isUpdating && (
          <div className="absolute inset-x-0 top-0 h-1 z-50">
            <div className="h-full bg-blue-500 animate-pulse w-full"></div>
          </div>
        )}
        <h1 className="text-2xl font-bold text-slate-900 mb-8">Profile Settings</h1>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex border-b border-gray-100">
            <Link to="/settings-profile" className="px-6 py-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600">General</Link>
            <Link to="/settings-billing" className="px-6 py-3 text-sm font-medium text-slate-500 hover:text-slate-800">Billing</Link>
          </div>
          <div className="p-8">
            {message && (
              <div className={`mb-6 p-4 rounded-xl text-sm font-medium ${message.includes('success') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {message}
              </div>
            )}
            <div className="flex items-center gap-6 mb-8">
              <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-2xl">
                {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
              </div>
              <div>
                <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-gray-50">Change Photo</button>
                <p className="text-xs text-slate-400 mt-2">JPG, GIF or PNG. Max size of 800K</p>
              </div>
            </div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-900" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-900" />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Email Address</label>
                  <input type="email" name="email" value={formData.email} readOnly className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-slate-400 outline-none text-sm cursor-not-allowed" />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Company Name</label>
                  <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-900" />
                </div>
              </div>
              <div className="pt-6 border-t border-gray-50">
                <h3 className="text-base font-bold text-slate-900 mb-4">Change Password</h3>
                <div className="space-y-4">
                  <div><label className="block text-sm font-bold text-slate-700 mb-1.5">Current Password</label><input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm" /></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div><label className="block text-sm font-bold text-slate-700 mb-1.5">New Password</label><input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm" /></div>
                    <div><label className="block text-sm font-bold text-slate-700 mb-1.5">Confirm Password</label><input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm" /></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end pt-6">
                <button type="button" onClick={handleSave} disabled={isUpdating} className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-sm shadow-blue-200 disabled:opacity-50">
                  {isUpdating ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <footer className="bg-white border-t border-gray-100 py-8 mt-auto"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex justify-center text-slate-400 text-sm">&copy; 2026 DonauApp</div></div></footer>
    </div>
  )
}
