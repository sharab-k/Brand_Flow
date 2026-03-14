import AppHeader from '../components/layout/AppHeader'
import InfoFooter from '../components/layout/InfoFooter'

export default function AboutUs() {
  return (
    <div className="bg-gray-50 text-slate-800 antialiased font-sans flex flex-col min-h-screen">
      <AppHeader activeNav="dashboard" />
      <main className="flex-grow w-full">
        {/* Hero */}
        <section className="bg-white py-20 border-b border-gray-100 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">We Are Building the <br /><span className="text-blue-600">Operating System</span> for Manufacturing</h1>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">DonauAI was born from a simple observation: great products often die in email threads. We're here to change that with AI-driven clarity and connection.</p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
                <p className="text-slate-600 leading-relaxed mb-6">To democratize access to high-quality manufacturing for brands of all sizes, while empowering manufacturers to fill their capacity with the right projects.</p>
                <ul className="space-y-4">
                  {['Transparency in every transaction', 'Technology that simplifies complexity', 'Sustainability as a default choice'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-2 rounded-2xl shadow-xl">
                <div className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center text-slate-400">
                  <span className="font-medium">Company/Team Image</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[{ val: '2024', label: 'Founded' }, { val: '30+', label: 'Team Members' }, { val: '10+', label: 'Countries' }, { val: '500+', label: 'Partners' }].map((s, i) => (
                <div key={i}>
                  <div className="text-4xl font-bold mb-2">{s.val}</div>
                  <div className="text-blue-100">{s.label}</div>
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
