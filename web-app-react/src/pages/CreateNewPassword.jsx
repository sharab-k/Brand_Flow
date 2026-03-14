import { Link, useNavigate } from 'react-router-dom'
import AuthHeader from '../components/layout/AuthHeader'

export default function CreateNewPassword() {
  const navigate = useNavigate()

  return (
    <div className="bg-white text-slate-800 antialiased font-sans h-full">
      <div id="app" className="flex flex-col min-h-screen">
        <AuthHeader />

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center p-4 pt-20">
          <div className="w-full max-w-[400px]">
            {/* Heading Sections */}
            <div className="text-center mb-8">
              <h1 className="text-[32px] font-bold text-[#0f172a] mb-2">Create New Password</h1>
              <p className="text-[14px] text-[#64748b]">Enter a strong new password to secure your account.</p>
            </div>

            <form className="space-y-6">
              {/* New Password Input Group */}
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#0f172a]">New Password</label>
                <div className="relative w-full">
                  <input type="password" defaultValue="12345678"
                    className="w-full bg-white border border-gray-200 text-slate-800 text-[15px] rounded-md focus:outline-none focus:ring-1 focus:ring-[#3B82F6] block px-4 py-3 pr-12 transition-all" />
                  {/* eye-off icon */}
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg className="w-5 h-5 text-gray-400 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21">
                      </path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Confirm Password Input Group */}
              <div className="flex flex-col gap-2 mb-6">
                <label className="text-[14px] font-medium text-[#0f172a]">Confirm Password</label>
                <div className="relative w-full">
                  <input type="password" defaultValue="12345678"
                    className="w-full bg-white border border-gray-200 text-slate-800 text-[15px] rounded-md focus:outline-none focus:ring-1 focus:ring-[#3B82F6] block px-4 py-3 pr-12 transition-all" />
                  {/* eye-off icon */}
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg className="w-5 h-5 text-gray-400 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21">
                      </path>
                    </svg>
                  </div>
                </div>
              </div>

              <button type="button" onClick={() => navigate('/password-successful')}
                className="w-full text-white font-bold py-3 rounded-md transition-colors text-[14px] shadow-sm"
                style={{ backgroundColor: '#3B82F6' }}>
                Save Password
              </button>
            </form>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full py-16 flex flex-col items-center justify-center gap-2 text-sm text-[#475569] shrink-0">
          <div className="flex justify-center gap-1.5 opacity-80">
            <Link to="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <span className="px-1 text-slate-300">|</span>
            <Link to="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
          </div>
          <p className="opacity-60">&copy; 2026 DonauAI</p>
        </footer>
      </div>
    </div>
  )
}
