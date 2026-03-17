import { useState, useEffect } from 'react'
import AppHeader from '../components/layout/AppHeader'
import AppFooter from '../components/layout/AppFooter'
import AIChatWidget from '../components/AIChatWidget'
import SettingsSidebar from '../components/layout/SettingsSidebar'
import { useAuth } from '../contexts/AuthContext'
import { userService } from '../services/userService'

export default function Settings() {
  const { user, logout } = useAuth()
  const [profileData, setProfileData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    jobTitle: user?.jobTitle || '',
    dob: user?.dob || '',
    phoneNumber: user?.phoneNumber || ''
  })
  const [settingsData, setSettingsData] = useState({
    timezone: user?.timezone || 'Eastern Time (US & Canada)',
    language: user?.language || 'English'
  })
  const [isUpdating, setIsUpdating] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (user) {
      setProfileData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        jobTitle: user.jobTitle || '',
        dob: user.dob || '',
        phoneNumber: user.phoneNumber || ''
      })
      setSettingsData({
        timezone: user.timezone || 'Eastern Time (US & Canada)',
        language: user.language || 'English'
      })
    }
  }, [user])

  const handleProfileChange = (e) => {
    const { name, value } = e.target
    setProfileData(prev => ({ ...prev, [name]: value }))
  }

  const handleSettingsChange = (e) => {
    const { name, value } = e.target
    setSettingsData(prev => ({ ...prev, [name]: value }))
  }

  const handleUpdateProfile = async () => {
    setIsUpdating(true)
    setMessage('')
    try {
      await userService.updateProfile(profileData)
      setMessage('Profile updated successfully!')
    } catch (err) {
      setMessage('Failed to update profile. Please try again.')
    } finally {
      setIsUpdating(false)
    }
  }

  const handleUpdateSettings = async () => {
    setIsUpdating(true)
    setMessage('')
    try {
      await userService.updateSettings(settingsData)
      setMessage('Settings updated successfully!')
    } catch (err) {
      setMessage('Failed to update settings. Please try again.')
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <div className="bg-white text-slate-800 antialiased font-sans min-h-screen flex flex-col">
      <AppHeader activeNav="" user={user} onLogout={logout} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 w-full flex-grow relative">
        {(isUpdating) && (
          <div className="absolute inset-x-0 top-0 h-1 z-50">
            <div className="h-full bg-blue-500 animate-pulse w-full"></div>
          </div>
        )}

        <div className="flex flex-col md:flex-row" style={{ gap: '64px' }}>
          <SettingsSidebar />

          <div className="flex-1 space-y-8">
            {message && (
              <div className={`p-4 rounded-xl text-sm font-medium ${message.includes('success') ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                {message}
              </div>
            )}

            {/* Personal Information */}
            <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-slate-100">
                <h2 className="font-bold text-[#0f172a]">Personal Information</h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Email</label>
                  <input type="email" value={user?.email || ''} readOnly className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-500 text-sm focus:outline-none cursor-not-allowed" />
                  <p className="text-[11px] text-slate-400 mt-2">Email cannot be changed</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">First Name</label>
                    <input type="text" name="firstName" value={profileData.firstName} onChange={handleProfileChange} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Last Name</label>
                    <input type="text" name="lastName" value={profileData.lastName} onChange={handleProfileChange} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Job Title</label>
                    <input type="text" name="jobTitle" value={profileData.jobTitle} onChange={handleProfileChange} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Date of Birth</label>
                    <div className="relative">
                      <input type="text" name="dob" value={profileData.dob} onChange={handleProfileChange} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none pr-10" />
                      <svg className="w-5 h-5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Phone Number</label>
                  <input type="text" name="phoneNumber" value={profileData.phoneNumber} onChange={handleProfileChange} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                </div>
                <div className="flex justify-end pt-2">
                  <button onClick={handleUpdateProfile} disabled={isUpdating} className="bg-blue-500 text-white px-8 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors shadow-sm shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed">
                    {isUpdating ? 'Saving...' : 'Save'}
                  </button>
                </div>
              </div>
            </section>

            {/* Language & Timezone */}
            <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-slate-100">
                <h2 className="font-bold text-[#0f172a]">Language & Timezone</h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Time Zone</label>
                  <div className="relative">
                    <select name="timezone" value={settingsData.timezone} onChange={handleSettingsChange} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none appearance-none bg-white">
                      <option>Eastern Time (US & Canada)</option>
                      <option>Pacific Time (US & Canada)</option>
                      <option>Central Time (US & Canada)</option>
                      <option>London (GMT)</option>
                    </select>
                    <svg className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Language</label>
                  <div className="relative">
                    <select name="language" value={settingsData.language} onChange={handleSettingsChange} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none appearance-none bg-white">
                      <option>English</option><option>Spanish</option><option>French</option><option>German</option>
                    </select>
                    <svg className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                  <button onClick={handleUpdateSettings} disabled={isUpdating} className="bg-blue-500 text-white px-8 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors shadow-sm shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed">
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
