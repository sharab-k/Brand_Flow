import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AppHeader from '../components/layout/AppHeader'
import AppFooter from '../components/layout/AppFooter'
import AIChatWidget from '../components/AIChatWidget'
import InviteModal from '../components/modals/InviteModal'
import { briefService } from '../services/briefService'

function MetaTag({ icon, label }) {
  return (
    <span className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200">
      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={icon}></path>
      </svg>
      {label}
    </span>
  )
}

export default function Briefs() {
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false)
  const [briefs, setBriefs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [stats, setStats] = useState({
    active: '0',
    discussion: '0',
    proposals: '0',
    matched: '0'
  })

  useEffect(() => {
    fetchBriefs()
  }, [])

  const fetchBriefs = async () => {
    setIsLoading(true)
    setError('')
    try {
      const data = await briefService.getBriefs()
      // If the backend returns stats and briefs as separate fields:
      setBriefs(data.briefs || data) 
      setStats(data.stats || { active: '15', discussion: '3', proposals: '5', matched: '2' }) // Fallback to mock if stats missing
    } catch (err) {
      setError('Failed to load briefs. Showing cached data.')
      // Fallback to mock data for demonstration if API fails in this phase
      setBriefs([
        { title: 'Premium Vitamin D3 Supplement', status: 'Draft', statusBg: 'bg-[#F1F5F9]', statusText: 'text-gray-600', category: 'Dietary Supplements', budget: '€1000 - €100000 USD', invited: '5 Invited', proposals: '3 Proposals', date: '12/02/2026' },
        { title: 'Premium Vitamin D3 Supplement', status: 'Active', statusBg: 'bg-blue-100', statusText: 'text-blue-600', category: 'Dietary Supplements', budget: '€1000 - €100000 USD', invited: '5 Invited', proposals: '3 Proposals', date: '12/02/2026' },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white text-slate-800 antialiased font-sans flex flex-col min-h-screen">
      <AppHeader activeNav="briefs" />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-[28px] font-bold text-slate-900 tracking-tight">My Briefs</h1>
            <p className="text-[15px] text-slate-500 mt-1">Manage your product briefs and track manufacturer engagement</p>
          </div>
          <div className="flex items-center gap-3">
             <button onClick={() => setIsInviteModalOpen(true)} className="px-6 py-2.5 bg-indigo-50 text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-100 font-medium text-[15px] transition-colors shadow-sm">
              Invite Manufacturers
            </button>
            <Link to="/create-brief-manual" className="px-6 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium text-[15px] transition-colors shadow-sm">
              Create Brief
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Active Briefs', value: stats.active, icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
            { label: 'Under Discussion', value: stats.discussion, icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
            { label: 'Proposals Received', value: stats.proposals, icon: 'M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2' },
            { label: 'Matched Manufacturers', value: stats.matched, icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start justify-between">
              <div>
                <p className="text-[14px] text-slate-500 mb-1">{stat.label}</p>
                <p className="text-[32px] font-bold text-slate-900 leading-none">{stat.value}</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl text-slate-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={stat.icon}></path></svg>
              </div>
            </div>
          ))}
        </div>

        {/* Main List Container */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm mb-8 relative min-h-[400px]">
          {isLoading && (
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center z-10 rounded-2xl">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {error && <div className="px-5 py-3 bg-amber-50 text-amber-600 text-xs border-b border-amber-100">{error}</div>}

          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center bg-white px-5 py-5 rounded-t-2xl">
            <div className="relative w-full md:w-auto">
              <svg className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input type="text" placeholder="Search..."
                className="w-full md:w-[200px] pl-10 pr-4 py-3 border border-slate-200 rounded-xl bg-white text-[13px] text-slate-700 placeholder-slate-400 outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-shadow" />
            </div>
            <div className="w-full md:w-auto relative mt-3 md:mt-0">
              <select className="w-full md:w-[260px] pl-4 pr-10 py-3 border border-slate-300 rounded-xl bg-white text-slate-600 text-[14px] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer transition-shadow">
                <option>Filter by status</option>
              </select>
              <svg className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>

          {/* Brief Cards */}
          <div className="space-y-4 py-4">
            {!isLoading && briefs.length === 0 && (
              <div className="py-20 text-center text-slate-400 text-sm">No briefs found. Create your first brief to get started.</div>
            )}
            {briefs.map((brief, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl mx-4 group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-[16px] font-bold text-slate-900">{brief.title}</h3>
                      <span className={`${brief.statusBg || 'bg-blue-100'} ${brief.statusText || 'text-blue-600'} text-[12px] px-3 py-0.5 rounded-full font-medium tracking-wide`}>{brief.status}</span>
                    </div>
                    <p className="text-[14px] text-slate-500 mt-2">{brief.description || 'This brief is being created with AI assistance. The AI will help you fill in the details.'}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setIsInviteModalOpen(true)} className="px-5 py-2 border border-blue-200 text-blue-600 rounded-lg font-medium text-[13px] bg-white hover:bg-blue-50 transition-colors">Invite</button>
                    <Link to="/brief-detail" state={{ briefId: brief.id }} className="px-8 py-2 border border-blue-500 text-blue-500 rounded-lg font-medium text-[13px] hover:bg-blue-50 transition-colors bg-transparent">View</Link>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-[13px] text-slate-600 font-medium">
                  <MetaTag icon="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" label={brief.category} />
                  <MetaTag icon="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" label={brief.budget} />
                  <MetaTag icon="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" label={brief.invited} />
                  <MetaTag icon="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" label={brief.proposals} />
                  <MetaTag icon="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" label={brief.date} />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center px-4 py-4 border-t border-gray-100 text-xs text-slate-500 bg-white rounded-b-2xl">
            <p>Showing 1 to {briefs.length} of {briefs.length} results</p>
            <div className="flex items-center gap-1">
              <button className="px-2 py-1 hover:bg-gray-100 rounded">&lt;</button>
              <button className="px-2 py-1 bg-blue-600 text-white rounded">1</button>
              <button className="px-2 py-1 hover:bg-gray-100 rounded">&gt;</button>
            </div>
          </div>
        </div>
      </main>

      <AppFooter />
      <AIChatWidget />
      
      <InviteModal isOpen={isInviteModalOpen} onClose={() => setIsInviteModalOpen(false)} />
    </div>
  )
}
