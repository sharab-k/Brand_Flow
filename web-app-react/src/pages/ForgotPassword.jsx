import { Link, useNavigate } from 'react-router-dom'
import AuthHeader from '../components/layout/AuthHeader'
import AuthFooter from '../components/layout/AuthFooter'

export default function ForgotPassword() {
  const navigate = useNavigate()

  return (
    <div className="bg-white text-slate-800 antialiased font-sans flex flex-col min-h-screen">
      <div id="app" className="flex flex-col min-h-screen">
        <AuthHeader />

        {/* Main Content */}
        <main className="flex-1 w-full h-full relative flex flex-col items-center justify-center"
          style={{ minHeight: 'calc(100vh - 160px)' }}>
          <div className="w-full max-w-[400px] mx-auto px-4">
            <h1 className="text-[32px] font-bold text-center text-[#0f172a] mb-2 tracking-tight">Forgot Password</h1>
            <p className="text-center text-[#64748b] text-[15px] mb-8 leading-relaxed">Please enter the email associated with your account. We&apos;ll send you a link to reset your password.</p>

            <form action="#" className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-[13px] font-medium text-[#0f172a] mb-2">Email</label>
                <input type="email" id="email" defaultValue="emilyparker@gmail.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm text-slate-800" />
              </div>

              <button type="button" onClick={() => navigate('/otp-verification')}
                className="w-full bg-[#4082ED] hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-all text-[15px] mt-2 h-[46px]">Send</button>

              <div className="text-center mt-6">
                <span className="text-[15px] text-[#0f172a]">Back to <Link to="/"
                  className="text-[#3b82f6] hover:text-blue-700 font-medium">Sign In</Link></span>
              </div>
            </form>
          </div>
        </main>

        <AuthFooter />
      </div>
    </div>
  )
}
