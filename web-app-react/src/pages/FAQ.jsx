import { useState } from 'react'
import AppHeader from '../components/layout/AppHeader'
import InfoFooter from '../components/layout/InfoFooter'

const faqItems = [
  { q: 'How does the AI Brief Assistant work?', a: 'Our AI Brief Assistant asks you a series of dynamic questions about your product idea. It then uses industry data to fill in technical gaps (like material standards or tolerance levels) to create a professional-grade specification document that manufacturers can instantly quote on.' },
  { q: 'Is DonauAI free for brands?', a: "It's free to create an account and generate initial briefs. We charge a small service fee upon successful project initiation with a manufacturer. We also offer premium subscriptions for advanced AI features and priority support." },
  { q: 'How do you vet manufacturers?', a: 'We have a rigorous 5-step verification process including document verification (ISO certifications, business licenses), virtual factory tours, and credit checks. Only top-tier manufacturers are accepted into the network.' },
  { q: "What if I'm unhappy with the production quality?", a: 'DonauAI creates a digital contract based on the technical brief. If the delivered goods do not meet these specifications, our dispute resolution team steps in. We also hold payments in escrow until milestones are verified.' },
]

export default function FAQ() {
  const [active, setActive] = useState(null)
  return (
    <div className="bg-gray-50 text-slate-800 antialiased font-sans flex flex-col min-h-screen">
      <AppHeader activeNav="dashboard" />
      <main className="flex-grow w-full">
        <section className="bg-white py-16 border-b border-gray-100 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-slate-500">Everything you need to know about DonauAI.</p>
          </div>
        </section>
        <section className="py-16 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                  <button onClick={() => setActive(active === i ? null : i)} className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none">
                    <span className="font-bold text-slate-900">{item.q}</span>
                    <svg className={`w-5 h-5 text-gray-400 transform transition-transform ${active === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {active === i && (
                    <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">{item.a}</div>
                  )}
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
