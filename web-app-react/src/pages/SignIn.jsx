import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthHeader from '../components/layout/AuthHeader'
import AuthFooter from '../components/layout/AuthFooter'
import { useAuth } from '../contexts/AuthContext'

export default function SignIn() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('emilyparker@gmail.com')
  const [password, setPassword] = useState('password123')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    try {
      await login({ email, password })
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white text-slate-800 antialiased font-sans flex flex-col min-h-screen">
      <AuthHeader />

      {/* Main Content */}
      <main className="flex-1 w-full h-full relative" style={{ minHeight: 'calc(100vh - 160px)' }}>
        <div className="w-full max-w-[400px] mx-auto mt-16 px-4">
          <h1 className="text-[32px] font-bold text-center text-[#0f172a] mb-2 tracking-tight">Welcome Back</h1>
          <p className="text-center text-[#64748b] text-[15px] mb-8">Enter your credentials to access your account</p>

          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center">
                {error}
              </div>
            )}
            <div>
              <label htmlFor="email" className="block text-[13px] font-medium text-[#0f172a] mb-2">Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm text-slate-800" required />
            </div>
            <div>
              <label htmlFor="password" className="block text-[13px] font-medium text-[#0f172a] mb-2">Password</label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm tracking-widest text-slate-800 font-serif" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-3.5 text-[#0f172a] hover:text-slate-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                    </path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked
                  className="w-[18px] h-[18px] text-[#3b82f6] border-gray-300 rounded focus:ring-[#3b82f6] bg-white accent-[#3b82f6]" />
                <span className="text-[15px] text-[#64748b]">Remember Me</span>
              </label>
              <Link to="/forgot-password"
                className="text-[15px] font-medium text-[#3b82f6] hover:text-blue-700 transition-colors">Forgot Password</Link>
            </div>

            <button type="submit" disabled={isLoading}
              className={`w-full bg-[#4082ED] hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-all text-[15px] mt-2 h-[46px] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}>
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-[15px] text-[#0f172a] mt-8">
            Don&apos;t have an account? <Link to="/signup" className="text-[#3b82f6] hover:text-blue-700 font-medium">Sign Up</Link>
          </p>
        </div>
      </main>

      <AuthFooter />
    </div>
  )
}
