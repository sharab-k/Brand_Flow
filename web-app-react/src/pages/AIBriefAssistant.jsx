import { Link } from 'react-router-dom'
import AppHeader from '../components/layout/AppHeader'
import AppFooter from '../components/layout/AppFooter'

export default function AIBriefAssistant() {
  return (
    <div className="bg-white text-slate-800 antialiased font-sans flex flex-col min-h-screen">
      <AppHeader activeNav="dashboard" />

      <main className="flex-grow w-full">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/30 border border-blue-400/30 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wide mb-6">Beta Access</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Turn Vague Ideas into <br /><span className="text-blue-200">Technical Specs</span></h1>
              <p className="text-lg text-blue-100 mb-10 leading-relaxed">Our AI understands manufacturing constraints, materials, and cost structures. It asks the right questions to build a production-ready brief in minutes.</p>
              <Link to="/" className="px-8 py-4 bg-white text-blue-700 rounded-xl hover:bg-blue-50 font-bold shadow-xl transition-all inline-block">Try Brief Assistant</Link>
            </div>
            {/* UI Mockup */}
            <div className="md:w-1/2">
              <div className="bg-white rounded-2xl shadow-2xl p-6 text-slate-800 rotate-1 transform border-4 border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Brief Assistant</h3>
                    <p className="text-xs text-slate-400">Analysis in progress...</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg rounded-tl-none">
                    <p className="text-sm text-slate-600">I noticed you want "sustainable packaging". Are you looking for recycled cardboard, biodegradable plastics, or glass?</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg rounded-tr-none ml-auto max-w-[80%]">
                    <p className="text-sm text-blue-800 font-medium">We prefer recycled cardboard, specifically FSC certified.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg rounded-tl-none">
                    <p className="text-sm text-slate-600 flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      Updated brief: <strong>Material Specs v2.1</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">From Chat to Contract</h2>
              <p className="text-slate-500">Three steps to perfect production.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-10"></div>
              {[
                { step: '1', title: 'Describe Your Vision', desc: 'Chat with our AI about the product you want to build. It adapts to your industry knowledge level.' },
                { step: '2', title: 'Review & Refine', desc: 'The assistant generates a technical brief. You review it, and the AI flags potential manufacturing risks.' },
                { step: '3', title: 'Get Matched', desc: 'Our algorithm uses your structured brief to instantly match you with capable manufacturers.' },
              ].map((s, i) => (
                <div key={i} className="text-center bg-white">
                  <div className="w-24 h-24 mx-auto bg-white border-4 border-blue-50 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mb-6 relative z-10">{s.step}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm px-8">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
