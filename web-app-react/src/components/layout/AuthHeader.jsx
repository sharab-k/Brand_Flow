import { Link } from 'react-router-dom'

export default function AuthHeader() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side: Logo only for Auth pages */}
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center pr-6">
              <img src="/logo.svg" alt="Donau AI Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Right Side: Language Selector */}
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="22" height="15" className="rounded-sm shadow-[0_0_1px_rgba(0,0,0,0.2)]">
              <clipPath id="s">
                <path d="M0,0 v30 h60 v-30 z"/>
              </clipPath>
              <clipPath id="t">
                <path d="M30,15 h30 v15 z v-15 h-30 z h-30 v-15 z v15 h30 z"/>
              </clipPath>
              <g clipPath="url(#s)">
                <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
                <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
              </g>
            </svg>
            <span className="text-[13px] text-slate-700 font-medium">English</span>
            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  )
}
