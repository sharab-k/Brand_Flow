import AppHeader from '../components/layout/AppHeader'
import InfoFooter from '../components/layout/InfoFooter'

export default function HelpCenter() {
  const categories = [
    { title: 'Account & Billing', desc: 'Managing your subscription, users, and billing details.', bg: 'bg-blue-50', hoverBg: 'group-hover:bg-blue-100', text: 'text-blue-600', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> },
    { title: 'Creating Briefs', desc: 'How to use our AI tools to generate technical specs.', bg: 'bg-green-50', hoverBg: 'group-hover:bg-green-100', text: 'text-green-600', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> },
    { title: 'Manufacturer Communication', desc: 'Tips for effective messaging and negotiation.', bg: 'bg-purple-50', hoverBg: 'group-hover:bg-purple-100', text: 'text-purple-600', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /> },
  ]
  const articles = [
    'How to verify manufacturer certifications',
    'Understanding our pricing tiers',
    'Exporting 3D models for prototyping',
    'Resetting your password',
  ]
  return (
    <div className="bg-gray-50 text-slate-800 antialiased font-sans flex flex-col min-h-screen">
      <AppHeader activeNav="dashboard" />
      <main className="flex-grow w-full">
        <section className="bg-blue-600 py-20 border-b border-blue-500 text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white mb-6">How can we help you?</h1>
            <div className="relative">
              <input type="text" placeholder="Search for articles, guides, and more..." className="w-full pl-12 pr-4 py-4 rounded-xl shadow-lg border-0 focus:ring-4 focus:ring-blue-400 outline-none text-slate-800" />
              <svg className="w-6 h-6 text-gray-400 absolute left-4 top-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
          </div>
        </section>
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((c, i) => (
                <a key={i} href="#" className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group">
                  <div className={`w-16 h-16 ${c.bg} rounded-full flex items-center justify-center ${c.text} mx-auto mb-4 ${c.hoverBg} transition-colors`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">{c.icon}</svg>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{c.title}</h3>
                  <p className="text-slate-500 text-sm">{c.desc}</p>
                </a>
              ))}
            </div>
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Popular Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {articles.map((a, i) => (
                  <a key={i} href="#" className="flex items-center p-4 bg-white rounded-lg border border-gray-100 hover:border-blue-300 transition-colors">
                    <span className="bg-gray-100 p-2 rounded text-slate-400 mr-4">#</span>
                    <span className="text-slate-700 font-medium">{a}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <InfoFooter />
    </div>
  )
}
