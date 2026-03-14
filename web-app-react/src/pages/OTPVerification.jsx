import { useNavigate } from 'react-router-dom'
import AuthHeader from '../components/layout/AuthHeader'
import AuthFooter from '../components/layout/AuthFooter'

export default function OTPVerification() {
  const navigate = useNavigate()

  return (
    <div className="bg-white text-slate-800 antialiased font-sans flex flex-col min-h-screen">
      <div id="app" className="flex flex-col min-h-screen">
        <AuthHeader />

        {/* Main Content */}
        <main className="flex-1 w-full relative flex flex-col items-center justify-center p-4"
          style={{ minHeight: 'calc(100vh - 160px)' }}>
          <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center">

            {/* Mail Icon */}
            <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] bg-[#4082ED] rounded-full flex items-center justify-center mb-6">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="white" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" />
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            <h1 className="text-[26px] sm:text-[28px] font-bold text-center text-[#0f172a] mb-3 tracking-tight">Verify Your Email</h1>
            <p className="text-center text-[#64748b] text-[14px] sm:text-[15px] mb-8 leading-relaxed max-w-[400px]">
              We&apos;ve sent a verification link to your email. Please verify to activate your account.</p>

            <button type="button" onClick={() => navigate('/create-new-password')}
              className="w-full max-w-[360px] bg-[#4082ED] hover:bg-blue-600 text-white font-medium py-[14px] rounded-lg transition-all text-[15px] shadow-sm">Sign In</button>
          </div>
        </main>
      </div>

      <AuthFooter />
    </div>
  )
}
