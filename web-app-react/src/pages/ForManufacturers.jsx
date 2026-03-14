import { Link } from 'react-router-dom'
import AppHeader from '../components/layout/AppHeader'
import InfoFooter from '../components/layout/InfoFooter'

export default function ForManufacturers() {
  const features = [
    { title: 'High-Intent Leads', desc: 'Receive detailed production briefs from brands that are ready to order. No cold calling required.', bg: 'bg-blue-100', text: 'text-blue-600', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
    { title: 'Reduced Admin', desc: 'Manage communications, contracts, and payments all in one secure platform.', bg: 'bg-green-100', text: 'text-green-600', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> },
    { title: 'Market Insights', desc: 'Get real-time data on trending products and ingredients to optimize your offering.', bg: 'bg-purple-100', text: 'text-purple-600', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /> },
    { title: 'Secure Payments', desc: 'Guaranteed payments and milestone tracking ensuring you get paid on time, every time.', bg: 'bg-orange-100', text: 'text-orange-600', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /> },
  ]
  return (
    <div className="bg-gray-50 text-slate-800 antialiased font-sans flex flex-col min-h-screen">
      <AppHeader activeNav="dashboard" />
      <main className="flex-grow w-full">
        <section className="bg-slate-900 text-white py-20 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-slate-800 text-blue-400 text-xs font-bold uppercase tracking-wide mb-6">For Manufacturers</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Fill Your Capacity with <span className="text-blue-500">Grade-A Contracts</span></h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">Stop chasing leads. DonauAI connects you directly with serious brands looking for your specific manufacturing capabilities.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-bold shadow-lg shadow-blue-900/50 transition-all transform hover:-translate-y-1">Join the Network</Link>
              <Link to="/contact" className="px-8 py-4 bg-transparent border border-gray-700 text-white rounded-xl hover:bg-gray-800 font-bold transition-all">Learn More</Link>
            </div>
          </div>
        </section>
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {[{ val: '€50M+', label: 'Contract Value Generated' }, { val: '500+', label: 'Active Brands' }, { val: '30%', label: 'Average Efficiency Boost' }].map((s, i) => (
                <div key={i} className="p-4">
                  <p className="text-4xl font-bold text-slate-900 mb-2">{s.val}</p>
                  <p className="text-sm text-slate-500 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Grow Your Business on Autopilot</h2>
              <p className="text-slate-500">We handle the sales and admin, you focus on production.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-6 p-6">
                  <div className={`w-12 h-12 ${f.bg} rounded-lg flex-shrink-0 flex items-center justify-center ${f.text}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{f.icon}</svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <InfoFooter />
    </div>
  )
}
