import { Link } from 'react-router-dom'
import AppHeader from '../components/layout/AppHeader'
import InfoFooter from '../components/layout/InfoFooter'

export default function ForBrands() {
  const features = [
    { title: 'AI Brief Assistant', desc: 'Create comprehensive product briefs in minutes, not days. Our AI ensures you capture all technical requirements.', color: 'blue', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /> },
    { title: 'Global Network', desc: 'Access a curated network of vetted manufacturers across Europe and beyond, ready to bring your vision to life.', color: 'purple', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /> },
    { title: 'Seamless Matching', desc: 'Our algorithm matches you with the perfect partner based on capabilities, capacity, and certifications.', color: 'green', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> },
  ]
  return (
    <div className="bg-gray-50 text-slate-800 antialiased font-sans flex flex-col min-h-screen">
      <AppHeader activeNav="dashboard" />
      <main className="flex-grow w-full">
        <section className="bg-white py-20 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide mb-6">For Brands</span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">Launch Products <span className="text-blue-600">Faster & Smarter</span> with AI</h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">DonauAI streamlines your product development journey. From AI-assisted brief creation to matching with vetted manufacturers, we simplify every step.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-bold shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-1">Start Your Journey</Link>
              <Link to="/contact" className="px-8 py-4 bg-white border border-gray-200 text-slate-700 rounded-xl hover:bg-gray-50 font-bold transition-all">Book a Demo</Link>
            </div>
          </div>
        </section>
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Brands Choose DonauAI</h2>
              <p className="text-slate-500">Everything you need to go from idea to product.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 bg-${f.color}-100 rounded-xl flex items-center justify-center text-${f.color}-600 mb-6`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{f.icon}</svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{f.desc}</p>
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
