import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthHeader from '../components/layout/AuthHeader'

export default function SignUp() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)

  return (
    <div className="bg-gray-50 text-slate-800 antialiased font-sans h-screen flex flex-col">
      {/* Header — signup uses simpler header without language selector */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center pr-6">
                <img src="/logo.svg" alt="Donau AI Logo" className="h-8 w-auto" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-start pt-12 px-4">

        {/* Stepper */}
        <div className="w-full max-w-4xl mb-12">
          <div className="relative flex justify-between items-center px-12">
            {/* Line */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-gray-200 -z-10 mx-12"></div>
            {/* Active Line */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-blue-500 -z-10 mx-12 transition-all duration-500 ease-in-out"
              style={{ width: `${(step - 1) * 33}%` }}></div>

            {/* Step 1 */}
            <div className="flex flex-col items-center gap-3 bg-gray-50 px-2 cursor-pointer"
              onClick={() => step > 1 && setStep(1)}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                step >= 1 ? (step > 1 ? 'bg-blue-500 border-blue-500 text-white' : 'bg-white border-blue-500 text-transparent') : 'bg-white border-gray-200'
              }`}>
                {step > 1 && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                )}
                {step === 1 && <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>}
              </div>
              <span className={`text-xs font-bold transition-colors duration-300 w-32 text-center ${step >= 1 ? 'text-slate-900' : 'text-slate-400'}`}>Organization Information</span>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center gap-3 bg-gray-50 px-2 cursor-pointer"
              onClick={() => step > 2 && setStep(2)}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                step >= 2 ? (step > 2 ? 'bg-blue-500 border-blue-500 text-white' : 'bg-white border-blue-500 text-transparent') : 'bg-white border-gray-200'
              }`}>
                {step > 2 && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                )}
                {step === 2 && <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>}
              </div>
              <span className={`text-xs font-bold transition-colors duration-300 w-32 text-center ${step >= 2 ? 'text-slate-900' : 'text-slate-400'}`}>Organization Address</span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center gap-3 bg-gray-50 px-2 cursor-pointer"
              onClick={() => step > 3 && setStep(3)}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                step >= 3 ? (step > 3 ? 'bg-blue-500 border-blue-500 text-white' : 'bg-white border-blue-500 text-transparent') : 'bg-white border-gray-200'
              }`}>
                {step > 3 && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                )}
                {step === 3 && <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>}
              </div>
              <span className={`text-xs font-bold transition-colors duration-300 w-32 text-center ${step >= 3 ? 'text-slate-900' : 'text-slate-400'}`}>Contact Information</span>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center gap-3 bg-gray-50 px-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                step >= 4 ? (step > 4 ? 'bg-blue-500 border-blue-500 text-white' : 'bg-white border-blue-500 text-transparent') : 'bg-white border-gray-200'
              }`}>
                {step > 4 && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                )}
                {step === 4 && <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>}
              </div>
              <span className={`text-xs font-bold transition-colors duration-300 w-32 text-center ${step >= 4 ? 'text-slate-900' : 'text-slate-400'}`}>Social Media</span>
            </div>
          </div>
        </div>

        {/* Form Cards */}
        <div className="bg-white p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-gray-100 w-full max-w-[640px] relative min-h-[500px]">

          {/* Step 1: Organization Information */}
          {step === 1 && (
            <div>
              <h1 className="text-2xl font-bold text-center text-slate-900 mb-2">Organization Information</h1>
              <p className="text-center text-slate-400 text-sm mb-10">Enter your organization&apos;s basic details to get started and set up your account.</p>

              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-2 ml-1">Organization slug/username</label>
                  <input type="text" placeholder="Enter slug/username"
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm placeholder-gray-300" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-2 ml-1">Website (optional)</label>
                  <input type="url" placeholder="Enter URL"
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm placeholder-gray-300" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-2 ml-1">Description</label>
                  <textarea rows="4" placeholder="Type here"
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm placeholder-gray-300 resize-none"></textarea>
                </div>

                <button type="button" onClick={() => setStep(2)}
                  className="w-full bg-slate-200 hover:bg-slate-300 text-slate-600 font-bold py-3.5 rounded-xl transition-all text-sm mt-4">Next</button>
              </form>
            </div>
          )}

          {/* Step 2: Organization Address */}
          {step === 2 && (
            <div>
              <h1 className="text-2xl font-bold text-center text-slate-900 mb-2">Organization Address</h1>
              <p className="text-center text-slate-400 text-sm mb-10">Provide your organization&apos;s official address for verification and billing purposes.</p>

              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-2 ml-1">Address Line 1</label>
                  <input type="text" placeholder="Street Address"
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm placeholder-gray-300" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-2 ml-1">Address Line 2 (optional)</label>
                  <input type="text" placeholder="Apartment, suite, etc."
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm placeholder-gray-300" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-2 ml-1">City</label>
                    <input type="text" placeholder="Enter City Name"
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm placeholder-gray-300" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-2 ml-1">State/Province</label>
                    <select className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm text-slate-500 bg-white appearance-none">
                      <option>Select State</option>
                      <option>California</option>
                      <option>New York</option>
                      <option>Texas</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-2 ml-1">Postal Code</label>
                    <input type="text" placeholder="Enter Postal Code"
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm placeholder-gray-300" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-2 ml-1">Country</label>
                    <select className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm text-slate-500 bg-white appearance-none">
                      <option>Select Country</option>
                      <option>United States</option>
                      <option>Germany</option>
                      <option>United Kingdom</option>
                    </select>
                  </div>
                </div>

                <button type="button" onClick={() => setStep(3)}
                  className="w-full bg-slate-200 hover:bg-slate-300 text-slate-600 font-bold py-3.5 rounded-xl transition-all text-sm mt-4">Next</button>
                <button type="button" onClick={() => setStep(3)}
                  className="w-full text-blue-500 hover:text-blue-700 font-bold py-2 rounded-xl transition-all text-sm">Skip</button>
              </form>
            </div>
          )}

          {/* Step 3: Contact Information */}
          {step === 3 && (
            <div>
              <h1 className="text-2xl font-bold text-center text-slate-900 mb-2">Contact Information</h1>
              <p className="text-center text-slate-400 text-sm mb-10">Add the primary contact person&apos;s details so we can stay in touch with you.</p>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-2 ml-1">First Name</label>
                    <input type="text" placeholder="Enter First Name"
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm placeholder-gray-300" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-2 ml-1">Last Name</label>
                    <input type="text" placeholder="Enter Last Name"
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm placeholder-gray-300" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-2 ml-1">Email</label>
                  <input type="email" placeholder="Enter Email"
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm placeholder-gray-300" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-2 ml-1">Phone Number</label>
                  <input type="tel" placeholder="Enter Phone Number"
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm placeholder-gray-300" />
                </div>

                <button type="button" onClick={() => setStep(4)}
                  className="w-full bg-slate-200 hover:bg-slate-300 text-slate-600 font-bold py-3.5 rounded-xl transition-all text-sm mt-4">Next</button>
                <button type="button" onClick={() => setStep(4)}
                  className="w-full text-blue-500 hover:text-blue-700 font-bold py-2 rounded-xl transition-all text-sm">Skip</button>
              </form>
            </div>
          )}

          {/* Step 4: Social Media */}
          {step === 4 && (
            <div>
              <h1 className="text-2xl font-bold text-center text-slate-900 mb-2">Social Media</h1>
              <p className="text-center text-slate-400 text-sm mb-10">Add your organization&apos;s social media links to complete your profile.</p>

              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-2 ml-1">Twitter/X Profile</label>
                  <input type="text" placeholder="Enter URL"
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm placeholder-gray-300" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-2 ml-1">LinkedIn Company Page</label>
                  <input type="text" placeholder="Enter URL"
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm placeholder-gray-300" />
                </div>

                <button type="button" onClick={() => navigate('/dashboard')}
                  className="w-full bg-slate-200 hover:bg-slate-300 text-slate-600 font-bold py-3.5 rounded-xl transition-all text-sm mt-4">Next</button>
                <button type="button" onClick={() => navigate('/dashboard')}
                  className="w-full text-blue-500 hover:text-blue-700 font-bold py-2 rounded-xl transition-all text-sm">Skip</button>
              </form>
            </div>
          )}

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full p-8 flex gap-6 text-[10px] text-slate-500 font-medium">
        <span>&copy; 2026 DonauAI</span>
        <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
        <Link to="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>
      </footer>
    </div>
  )
}
