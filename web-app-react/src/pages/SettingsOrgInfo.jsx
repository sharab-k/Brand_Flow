import { useState, useEffect } from 'react'
import AppHeader from '../components/layout/AppHeader'
import AppFooter from '../components/layout/AppFooter'
import AIChatWidget from '../components/AIChatWidget'
import SettingsSidebar from '../components/layout/SettingsSidebar'
import { useAuth } from '../contexts/AuthContext'
import { userService } from '../services/userService'

export default function SettingsOrgInfo() {
  const { user, logout } = useAuth()
  const [orgData, setOrgData] = useState({
    slug: 'evergreenapparel',
    name: 'Evergreen Apparel Co',
    bio: 'Consumer Products',
    website: 'https://example.com',
    contactFirstName: 'Emily',
    contactLastName: 'Parker',
    contactPhone: '+1 512 555 0189',
    contactEmail: 'emilyparker@gmail.com',
    usePersonalEmail: true,
    address1: 'Test Address 2',
    address2: 'Test Address 3',
    city: 'Austin',
    state: 'Texas',
    postalCode: '73301',
    country: 'United States',
    twitter: 'https://twitter.com/evergreenapparelco',
    linkedin: 'https://linkedin.com/company/evergreenapparelco'
  })
  const [isUpdating, setIsUpdating] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const fetchOrg = async () => {
      try {
        const data = await userService.getOrganizationInfo()
        if (data) setOrgData(prev => ({ ...prev, ...data }))
      } catch (err) {
        console.error('Failed to fetch org info')
      }
    }
    fetchOrg()
  }, [])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setOrgData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleUpdateOrg = async () => {
    setIsUpdating(true)
    setMessage('')
    try {
      await userService.updateOrganizationInfo(orgData)
      setMessage('Organization updated successfully!')
    } catch (err) {
      setMessage('Failed to update organization.')
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

            {/* Organization Settings */}
            <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-slate-100"><h2 className="font-bold text-[#0f172a]">Organization Settings</h2></div>
              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Organization Slug</label>
                  <input type="text" name="slug" value={orgData.slug} readOnly className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-500 text-sm focus:outline-none cursor-not-allowed" />
                  <p className="text-[11px] text-slate-400 mt-2">Slug cannot be changed</p>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Organization Name</label>
                  <input type="text" name="name" value={orgData.name} onChange={handleChange} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Organization Bio</label>
                  <textarea name="bio" rows="4" value={orgData.bio} onChange={handleChange} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none resize-none"></textarea>
                  <p className="text-[11px] text-slate-400 mt-2">Brief description of your organization (max 500 characters)</p>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Website</label>
                  <input type="url" name="website" value={orgData.website} onChange={handleChange} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                </div>
                <div className="flex justify-end pt-2">
                  <button onClick={handleUpdateOrg} disabled={isUpdating} className="bg-blue-500 text-white px-8 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors shadow-sm shadow-blue-200 disabled:opacity-50">
                    {isUpdating ? 'Saving...' : 'Save'}
                  </button>
                </div>
              </div>
            </section>

            {/* Contact Person */}
            <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-slate-100"><h2 className="font-bold text-[#0f172a]">Contact Person</h2></div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">First Name</label>
                    <input type="text" name="contactFirstName" value={orgData.contactFirstName} onChange={handleChange} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Last Name</label>
                    <input type="text" name="contactLastName" value={orgData.contactLastName} onChange={handleChange} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Phone Number</label>
                  <input type="text" name="contactPhone" value={orgData.contactPhone} onChange={handleChange} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Primary Contact Email</label>
                  <input type="email" name="contactEmail" value={orgData.contactEmail} onChange={handleChange} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                  <div className="mt-4 flex items-start gap-3">
                    <input type="checkbox" name="usePersonalEmail" checked={orgData.usePersonalEmail} onChange={handleChange} className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 transition-colors cursor-pointer mt-0.5" />
                    <div className="text-sm">
                      <label className="font-medium text-slate-700 cursor-pointer text-xs">Use my personal email ({user?.email})</label>
                      <p className="text-[11px] text-slate-400 mt-1">Public contact email for business inquiries</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                  <button onClick={handleUpdateOrg} disabled={isUpdating} className="bg-blue-500 text-white px-8 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors shadow-sm shadow-blue-200 disabled:opacity-50">
                    {isUpdating ? 'Saving...' : 'Save'}
                  </button>
                </div>
              </div>
            </section>

            {/* Address */}
            <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-slate-100"><h2 className="font-bold text-[#0f172a]">Address</h2></div>
              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Address Line 1</label>
                  <input type="text" name="address1" value={orgData.address1} onChange={handleChange} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Address Line 2</label>
                  <input type="text" name="address2" value={orgData.address2} onChange={handleChange} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">City</label>
                    <input type="text" name="city" value={orgData.city} onChange={handleChange} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">State/Province</label>
                    <div className="relative">
                      <select name="state" value={orgData.state} onChange={handleChange} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none appearance-none bg-white">
                        <option>Texas</option><option>California</option><option>New York</option><option>Florida</option>
                      </select>
                      <svg className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Postal Code</label>
                    <input type="text" name="postalCode" value={orgData.postalCode} onChange={handleChange} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Country</label>
                    <div className="relative">
                      <select name="country" value={orgData.country} onChange={handleChange} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none appearance-none bg-white">
                        <option>United States</option><option>Canada</option><option>United Kingdom</option><option>Australia</option>
                      </select>
                      <svg className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                  <button onClick={handleUpdateOrg} disabled={isUpdating} className="bg-blue-500 text-white px-8 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors shadow-sm shadow-blue-200 disabled:opacity-50">
                    {isUpdating ? 'Saving...' : 'Save'}
                  </button>
                </div>
              </div>
            </section>

            {/* Social Media */}
            <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-slate-100"><h2 className="font-bold text-[#0f172a]">Social Media</h2></div>
              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Twitter/X Profile</label>
                  <input type="url" name="twitter" value={orgData.twitter} onChange={handleChange} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">LinkedIn Company Page</label>
                  <input type="url" name="linkedin" value={orgData.linkedin} onChange={handleChange} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                </div>
                <div className="flex justify-end pt-2">
                  <button onClick={handleUpdateOrg} disabled={isUpdating} className="bg-blue-500 text-white px-8 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors shadow-sm shadow-blue-200 disabled:opacity-50">
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
