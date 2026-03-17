import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/settings', label: 'Account', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { to: '/setting-organization-info', label: 'Organization Info', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
  { to: '/setting-security', label: 'Security', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
  { to: '/settings-billing', label: 'Billing', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
]

export default function SettingsSidebar() {
  const location = useLocation()

  return (
    <aside className="w-full md:w-[216px] md:flex-shrink-0">
      <h1 className="text-2xl font-bold text-[#0f172a] mb-6">Settings</h1>
      <nav className="space-y-1">
        {navItems.map(item => {
          const isActive = location.pathname === item.to
          return (
            <Link key={item.to} to={item.to}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-colors ${isActive ? 'bg-[#f0f7ff] text-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}>
              <svg className={`w-5 h-5 ${isActive ? 'text-blue-500' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
              </svg>
              {item.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
