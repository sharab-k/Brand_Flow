import AppHeader from '../components/layout/AppHeader'
import AppFooter from '../components/layout/AppFooter'
import AIChatWidget from '../components/AIChatWidget'
import SettingsSidebar from '../components/layout/SettingsSidebar'

export default function SettingsOrgInfo() {
  return (
    <div className="bg-white text-slate-800 antialiased font-sans min-h-screen flex flex-col">
      <AppHeader activeNav="" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 w-full">
        <div className="flex flex-col md:flex-row" style={{ gap: '64px' }}>
          <SettingsSidebar />

          <div className="flex-1 space-y-8">
            {/* Organization Settings */}
            <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-slate-100"><h2 className="font-bold text-[#0f172a]">Organization Settings</h2></div>
              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Organization Slug</label>
                  <input type="text" defaultValue="evergreenapparel" readOnly className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-500 text-sm focus:outline-none cursor-not-allowed" />
                  <p className="text-[11px] text-slate-400 mt-2">Slug cannot be changed</p>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Organization Name</label>
                  <input type="text" defaultValue="Evergreen Apparel Co" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Organization Bio</label>
                  <textarea rows="4" defaultValue="Consumer Products" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none resize-none"></textarea>
                  <p className="text-[11px] text-slate-400 mt-2">Brief description of your organization (max 500 characters)</p>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Website</label>
                  <input type="url" defaultValue="https://example.com" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                </div>
                <div className="flex justify-end pt-2">
                  <button className="bg-blue-500 text-white px-8 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors shadow-sm shadow-blue-200">Save</button>
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
                    <input type="text" defaultValue="Emily" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Last Name</label>
                    <input type="text" defaultValue="Parker" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Phone Number</label>
                  <input type="text" defaultValue="+1 512 555 0189" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Primary Contact Email</label>
                  <input type="email" defaultValue="emilyparker@gmail.com" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                  <div className="mt-4 flex items-start gap-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 transition-colors cursor-pointer mt-0.5" />
                    <div className="text-sm">
                      <label className="font-medium text-slate-700 cursor-pointer text-xs">Use my personal email (emilyparker@gmail.com)</label>
                      <p className="text-[11px] text-slate-400 mt-1">Public contact email for business inquiries</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                  <button className="bg-blue-500 text-white px-8 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors shadow-sm shadow-blue-200">Save</button>
                </div>
              </div>
            </section>

            {/* Address */}
            <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-slate-100"><h2 className="font-bold text-[#0f172a]">Address</h2></div>
              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Address Line 1</label>
                  <input type="text" defaultValue="Test Address 2" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Address Line 2</label>
                  <input type="text" defaultValue="Test Address 3" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">City</label>
                    <input type="text" defaultValue="Austin" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">State/Province</label>
                    <div className="relative">
                      <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none appearance-none">
                        <option>Texas</option><option>California</option><option>New York</option><option>Florida</option>
                      </select>
                      <svg className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Postal Code</label>
                    <input type="text" defaultValue="73301" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Country</label>
                    <div className="relative">
                      <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none appearance-none">
                        <option>United States</option><option>Canada</option><option>United Kingdom</option><option>Australia</option>
                      </select>
                      <svg className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                  <button className="bg-blue-500 text-white px-8 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors shadow-sm shadow-blue-200">Save</button>
                </div>
              </div>
            </section>

            {/* Social Media */}
            <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-slate-100"><h2 className="font-bold text-[#0f172a]">Social Media</h2></div>
              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Twitter/X Profile</label>
                  <input type="url" defaultValue="https://twitter.com/evergreenapparelco" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">LinkedIn Company Page</label>
                  <input type="url" defaultValue="https://linkedin.com/company/evergreenapparelco" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                </div>
                <div className="flex justify-end pt-2">
                  <button className="bg-blue-500 text-white px-8 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors shadow-sm shadow-blue-200">Save</button>
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
