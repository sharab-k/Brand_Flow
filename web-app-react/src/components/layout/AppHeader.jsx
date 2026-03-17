import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function AppHeader({ user, onLogout }) {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)
  const [notifMenuOpen, setNotifMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // ... (ref hooks remain same)
  const profileBtnRef = useRef(null)
  const profileMenuRef = useRef(null)
  const notifBtnRef = useRef(null)
  const notifMenuRef = useRef(null)
  const mobileBtnRef = useRef(null)
  const mobileMenuRef = useRef(null)

  const location = useLocation()

  const isActive = (path) => {
    if (path === '/dashboard') return location.pathname === '/dashboard'
    if (path === '/briefs') return location.pathname.startsWith('/brief')
    if (path === '/messages') return location.pathname === '/messages'
    return false
  }

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(e.target) &&
          profileBtnRef.current && !profileBtnRef.current.contains(e.target)) {
        setProfileMenuOpen(false)
      }
      if (notifMenuRef.current && !notifMenuRef.current.contains(e.target) &&
          notifBtnRef.current && !notifBtnRef.current.contains(e.target)) {
        setNotifMenuOpen(false)
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target) &&
          mobileBtnRef.current && !mobileBtnRef.current.contains(e.target)) {
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const toggleProfile = (e) => {
    e.stopPropagation()
    setProfileMenuOpen(prev => !prev)
    setNotifMenuOpen(false)
  }

  const toggleNotif = (e) => {
    e.stopPropagation()
    setNotifMenuOpen(prev => !prev)
    setProfileMenuOpen(false)
  }

  const toggleMobile = (e) => {
    e.stopPropagation()
    setMobileMenuOpen(prev => !prev)
  }

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side: Logo & Nav */}
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center pr-6 border-r border-gray-100">
              <img src="/logo.svg" alt="Donau AI Logo" className="h-8 w-auto" />
            </Link>

            {/* Nav Links */}
            <nav className="hidden md:flex items-center gap-8 pl-6">
              <Link to="/dashboard"
                className={`font-medium text-xs flex items-center gap-2 ${
                  isActive('/dashboard')
                    ? 'text-blue-500 border-b-2 border-blue-500 pb-[21px] mt-[21px]'
                    : 'text-slate-500 hover:text-slate-900 transition-colors'
                }`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                  </path>
                </svg>
                Dashboard
              </Link>
              <Link to="/briefs"
                className={`font-medium text-xs flex items-center gap-2 ${
                  isActive('/briefs')
                    ? 'text-blue-500 border-b-2 border-blue-500 pb-[21px] mt-[21px]'
                    : 'text-slate-500 hover:text-slate-900 transition-colors'
                }`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                  </path>
                </svg>
                My Briefs
              </Link>
              <Link to="/messages"
                className={`font-medium text-xs flex items-center gap-2 ${
                  isActive('/messages')
                    ? 'text-blue-500 border-b-2 border-blue-500 pb-[21px] mt-[21px]'
                    : 'text-slate-500 hover:text-slate-900 transition-colors'
                }`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z">
                  </path>
                </svg>
                Messages
              </Link>
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* ... (notif section remains same) */}
            <div className="relative flex items-center">
              <button ref={notifBtnRef} onClick={toggleNotif} id="notification-button"
                className="text-[#64748b] hover:text-[#0e1726] transition-colors relative h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-50 outline-none">
                <i className="ph ph-bell text-[20px]"></i>
              </button>
              {/* Notification Dropdown */}
              {notifMenuOpen && (
                <div ref={notifMenuRef} id="notification-dropdown"
                  className="absolute right-0 mt-3 top-full w-[85vw] max-w-[280px] md:w-[300px] animate-fade-in rounded-[10px] border border-[#e2e8f0] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden text-left z-50">
                  <div className="flex items-center justify-between border-b border-[#e2e8f0] px-4 py-3 bg-white">
                    <h4 className="text-[14px] font-bold text-[#0e1726]">Notifications</h4>
                    <a href="#" className="text-[12px] font-medium text-[#448ae6] hover:underline">Mark all as read</a>
                  </div>
                  <div className="max-h-[340px] overflow-y-auto w-full bg-white">
                    <div className="p-3 border-b border-[#e2e8f0] bg-[#f8fafc] hover:bg-gray-50 transition-colors cursor-pointer w-full text-left">
                      <div className="flex items-start justify-between mb-1 gap-2">
                        <h5 className="text-[13px] font-bold text-[#0e1726] flex-1 leading-tight m-0">New Proposal Received</h5>
                        <span className="text-[11px] text-[#64748b] whitespace-nowrap">Today</span>
                      </div>
                      <p className="text-[12px] text-[#64748b] leading-relaxed text-left w-full break-words m-0">EcoPacksolutions submitted a proposal for &quot;sustainable packaging for organic skincare line&quot;</p>
                    </div>
                    {/* ... (other notifs remain same) */}
                    <div className="p-3 border-b border-[#e2e8f0] hover:bg-gray-50 transition-colors cursor-pointer w-full text-left bg-white">
                      <div className="flex items-start justify-between mb-1 gap-2">
                        <h5 className="text-[13px] font-bold text-[#0e1726] flex-1 leading-tight m-0">Proposal Accepted</h5>
                        <span className="text-[11px] text-[#64748b] whitespace-nowrap">Yesterday</span>
                      </div>
                      <p className="text-[12px] text-[#64748b] leading-relaxed text-left w-full break-words m-0">Your proposal for &quot;industrial metal components&quot; has been accepted by TechMatch industries</p>
                    </div>
                    <div className="p-3 border-b border-[#e2e8f0] hover:bg-gray-50 transition-colors cursor-pointer w-full text-left bg-white">
                      <div className="flex items-start justify-between mb-1 gap-2">
                        <h5 className="text-[13px] font-bold text-[#0e1726] flex-1 leading-tight m-0">New Brief Invitation</h5>
                        <span className="text-[11px] text-[#64748b] whitespace-nowrap">14/01/2026</span>
                      </div>
                      <p className="text-[12px] text-[#64748b] leading-relaxed text-left w-full break-words m-0">You have been invited to submit a proposal for &quot;Custom Furniture for Hotel Chain&quot;</p>
                    </div>
                    <div className="p-3 border-b border-[#e2e8f0] hover:bg-gray-50 transition-colors cursor-pointer w-full text-left bg-white">
                      <div className="flex items-start justify-between mb-1 gap-2">
                        <h5 className="text-[13px] font-bold text-[#0e1726] flex-1 leading-tight m-0">New Brief Invitation</h5>
                        <span className="text-[11px] text-[#64748b] whitespace-nowrap">12/01/2026</span>
                      </div>
                      <p className="text-[12px] text-[#64748b] leading-relaxed text-left w-full break-words m-0">You have been invited to submit a proposal for &quot;Custom Furniture for Hotel Chain&quot;</p>
                    </div>
                    <div className="p-3 hover:bg-gray-50 transition-colors cursor-pointer w-full text-left bg-white">
                      <div className="flex items-start justify-between mb-1 gap-2">
                        <h5 className="text-[13px] font-bold text-[#0e1726] flex-1 leading-tight m-0">New Brief Invitation</h5>
                        <span className="text-[11px] text-[#64748b] whitespace-nowrap">1 month ago</span>
                      </div>
                      <p className="text-[12px] text-[#64748b] leading-relaxed text-left w-full break-words m-0">You have been invited to submit a proposal for &quot;Custom Furniture for Hotel Chain&quot;</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="w-px h-5 bg-gray-200 mx-1"></div>

            <div className="h-8 w-8 rounded-full flex items-center justify-center text-white text-xs font-medium"
              style={{ backgroundColor: '#3B82F6' }}>
              {(user?.firstName || 'E').charAt(0).toUpperCase()}
            </div>

            <div className="relative">
              <button ref={profileBtnRef} onClick={toggleProfile} id="profile-menu-button"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-slate-100 transition-colors block outline-none">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16">
                  </path>
                </svg>
              </button>

              {/* Profile Dropdown */}
              {profileMenuOpen && (
                <div ref={profileMenuRef} id="profile-menu"
                  className="absolute right-0 mt-2 w-[240px] bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.1)] border border-slate-100 z-50 flex flex-col overflow-hidden">
                  {/* User Info */}
                  <div className="px-5 py-4 border-b border-slate-50">
                    <p className="text-sm font-bold text-slate-900">{user?.firstName || 'User'} {user?.lastName || ''}</p>
                    <p className="text-[12px] text-slate-500 mt-0.5">{user?.email || 'user@example.com'}</p>
                  </div>

                  {/* Nav Links */}
                  <div className="py-2 border-b border-slate-50">
                    <Link to="/dashboard" onClick={() => setProfileMenuOpen(false)}
                      className="flex items-center gap-3 px-5 py-2.5 text-slate-600 hover:bg-slate-50 transition-colors">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                        </path>
                      </svg>
                      <span className="text-[13px] font-medium">Dashboard</span>
                    </Link>
                    <Link to="/briefs" onClick={() => setProfileMenuOpen(false)}
                      className="flex items-center gap-3 px-5 py-2.5 text-slate-600 hover:bg-slate-50 transition-colors">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                        </path>
                      </svg>
                      <span className="text-[13px] font-medium">My Briefs</span>
                    </Link>
                    <Link to="/messages" onClick={() => setProfileMenuOpen(false)}
                      className="flex items-center gap-3 px-5 py-2.5 text-slate-600 hover:bg-slate-50 transition-colors">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z">
                        </path>
                      </svg>
                      <span className="text-[13px] font-medium">Messages</span>
                    </Link>
                  </div>

                  {/* Settings & Language */}
                  <div className="py-2 border-b border-slate-50">
                    <Link to="/settings" onClick={() => setProfileMenuOpen(false)}
                      className="flex items-center gap-3 px-5 py-2.5 text-slate-600 hover:bg-slate-50 transition-colors">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                        </path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span className="text-[13px] font-medium">Settings</span>
                    </Link>
                  </div>

                  {/* Sign Out */}
                  <div className="py-2">
                    <button onClick={() => { onLogout(); setProfileMenuOpen(false); }}
                      className="w-full flex items-center gap-3 px-5 py-2.5 text-slate-600 hover:bg-slate-50 transition-colors text-left outline-none">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                        </path>
                      </svg>
                      <span className="text-[13px] font-medium">Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
