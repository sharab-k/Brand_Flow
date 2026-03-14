import { useState, useEffect } from 'react'
import AppHeader from '../components/layout/AppHeader'
import InfoFooter from '../components/layout/InfoFooter'

export default function Status() {
  const [lastUpdated, setLastUpdated] = useState('Just now')

  useEffect(() => {
    setLastUpdated(new Date().toLocaleTimeString())
    const interval = setInterval(() => {
      setLastUpdated(new Date().toLocaleTimeString())
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  const components = [
    { name: 'API Gateway', status: 'Operational' },
    { name: 'Brief Generation Engine (AI)', status: 'Operational' },
    { name: 'Manufacturer Matching', status: 'Operational' },
    { name: 'Messaging System', status: 'Operational' },
    { name: 'Payments & Billing', status: 'Operational' },
  ]

  return (
    <div className="bg-gray-50 text-slate-800 antialiased font-sans flex flex-col min-h-screen">
      <AppHeader activeNav="dashboard" />
      <main className="flex-grow w-full bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Overall Status */}
          <div className="bg-green-600 rounded-xl p-8 text-white mb-8 shadow-lg shadow-green-200">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <h1 className="text-2xl font-bold">All Systems Operational</h1>
            </div>
            <p className="text-green-50 opacity-90">Last updated: <span>{lastUpdated}</span></p>
          </div>

          {/* Components */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-100 font-bold text-slate-900 flex justify-between items-center">
              <span>Platform Components</span>
              <span className="text-xs font-normal text-slate-500 bg-gray-100 px-2 py-1 rounded">Uptime 99.99%</span>
            </div>
            <div className="divide-y divide-gray-50">
              {components.map((c, i) => (
                <div key={i} className="p-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-slate-700">{c.name}</span>
                  <span className="text-green-600 text-sm font-bold flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Past Incidents */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 font-bold text-slate-900">
              Past Incidents
            </div>
            <div className="p-8 text-center text-slate-500 text-sm">
              No incidents reported in the last 30 days.
            </div>
          </div>
        </div>
      </main>
      <InfoFooter />
    </div>
  )
}
