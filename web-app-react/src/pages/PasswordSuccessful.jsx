import { Link, useNavigate } from 'react-router-dom'
import AuthHeader from '../components/layout/AuthHeader'

export default function PasswordSuccessful() {
  const navigate = useNavigate()

  return (
    <div className="bg-white text-slate-800 antialiased font-sans h-full">
      <div id="app" className="flex flex-col min-h-screen">
        <AuthHeader />

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center p-4 pt-20">
          <div className="w-full max-w-[400px] flex flex-col items-center text-center">
            <svg className="mb-6" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="40" fill="#4A90D9" />
              <path d="M28 40L36 48L54 30" stroke="white" strokeWidth="3.5" strokeLinecap="round"
                strokeLinejoin="round" />
            </svg>

            {/* Heading */}
            <h1 className="text-[28px] font-bold text-[#0f172a] mb-3">Password Reset Successful</h1>

            {/* Subtitle */}
            <p className="text-[15px] text-[#64748b] mb-8 leading-relaxed">Your password has been updated. You can now sign in with your new password.</p>

            {/* Sign In Button */}
            <button type="button" onClick={() => navigate('/')}
              className="w-full text-white font-medium py-3 rounded-md transition-colors text-[15px] shadow-sm"
              style={{ backgroundColor: '#4A90D9' }}>
              Sign In
            </button>
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
