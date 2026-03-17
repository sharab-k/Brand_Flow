import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AppHeader from '../components/layout/AppHeader'
import AppFooter from '../components/layout/AppFooter'
import AIChatWidget from '../components/AIChatWidget'
import { useAuth } from '../contexts/AuthContext'
import { briefService } from '../services/briefService'

export default function Dashboard() {
  const { user, logout } = useAuth()
  const [recentBriefs, setRecentBriefs] = useState([])
  const [stats, setStats] = useState({
    active: '0',
    discussion: '0',
    proposals: '0',
    matched: '0'
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    setIsLoading(true)
    try {
      const data = await briefService.getBriefs({ limit: 3 })
      // Use real data or fallback to mocks if API is not fully implemented yet
      setRecentBriefs(data.briefs || (Array.isArray(data) ? data.slice(0, 3) : []))
      setStats(data.stats || { active: '15', discussion: '3', proposals: '5', matched: '2' })
    } catch (err) {
      // Fallback for visual consistency
      setRecentBriefs([
        { title: 'Premium Vitamin D3 Supplement', status: 'Draft', statusClass: 'bg-slate-100 text-slate-600 border-slate-200', category: 'Dietary Supplements', budget: '€1000 - €100000 USD' },
        { title: 'Premium Vitamin D3 Supplement', status: 'Active', statusClass: 'bg-green-50 text-green-700 border-green-200', category: 'Dietary Supplements', budget: '€1000 - €100000 USD' },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white text-slate-800 antialiased font-sans min-h-screen flex flex-col">
      <AppHeader activeNav="dashboard" user={user} onLogout={logout} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-grow relative">
        {isLoading && (
          <div className="absolute inset-x-0 top-0 h-1 z-50">
            <div className="h-full bg-blue-500 animate-[loading_2s_ease-in-out_infinite] w-1/3"></div>
          </div>
        )}

        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-[28px] font-bold text-slate-900 tracking-tight">Welcome, {user?.firstName || 'User'}!</h1>
          <p className="text-[15px] text-slate-500 mt-1">Manage your product briefs and track manufacturer engagement</p>
        </div>

        {/* Notification Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-8 flex flex-col sm:flex-row items-center gap-3">
          <div className="bg-blue-500 rounded p-1 flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z">
              </path>
            </svg>
          </div>
          <div className="flex-grow">
            <p className="text-xs text-blue-900 font-medium">Your latest brief matches are ready. <Link to="/briefs" className="font-bold underline">Review matches now</Link></p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Active Briefs', value: stats.active, icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
            { label: 'In Discussion', value: stats.discussion, icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
            { label: 'Proposals Received', value: stats.proposals, icon: 'M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2' },
            { label: 'Matched Manufacturers', value: stats.matched, icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start justify-between">
              <div>
                <p className="text-[14px] text-slate-500 mb-1">{stat.label}</p>
                <p className="text-[32px] font-bold text-slate-900 leading-none">{stat.value}</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl text-slate-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={stat.icon}></path>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Briefs */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-[16px] font-bold text-slate-900">Recent Briefs</h2>
              <Link to="/briefs" className="text-xs font-medium text-blue-500 hover:text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg transition-colors">View All</Link>
            </div>
            <div className="p-4 sm:p-6 pt-0 space-y-4">
              {recentBriefs.map((brief, i) => (
                <div key={i} className="bg-gray-50 p-4 sm:p-5 rounded-xl">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-bold text-slate-900">{brief.title}</h3>
                        <div className="flex items-center gap-1.5">
                          <span className={`${brief.statusClass || 'bg-blue-50 text-blue-700 border-blue-200'} text-[10px] px-2 py-0.5 rounded-full font-semibold border uppercase tracking-wide`}>{brief.status}</span>
                        </div>
                      </div>
                    </div>
                    <Link to="/brief-detail" className="text-xs font-medium flex items-center gap-1 text-blue-500 hover:text-blue-600 transition-colors whitespace-nowrap">
                      View Details
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </Link>
                  </div>
                  <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                    {brief.description || 'This brief is being created with AI assistance. The AI will help you fill in the details.'}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-600">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      {brief.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-600">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {brief.budget}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden h-fit">
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-100">
              <h2 className="text-[16px] font-bold text-slate-900">Recent Activity</h2>
              <button className="text-[13px] font-medium text-blue-600 hover:text-blue-800 transition-colors">Mark all as read</button>
            </div>
            
            <div className="flex flex-col">
              {/* Activity Item 1 */}
              <div className="p-4 sm:p-5 bg-blue-50/50 border-b border-gray-100">
                <div className="flex justify-between items-start mb-1.5">
                  <h4 className="text-[14px] font-bold text-slate-900">New manufacturer match</h4>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full text-blue-600 bg-blue-100">New</span>
                </div>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  3 new manufacturers have been matched to your product brief
                </p>
              </div>

              {/* Activity Item 2 */}
              <div className="p-4 sm:p-5 bg-white border-b border-gray-100">
                <div className="mb-1.5">
                  <h4 className="text-[14px] font-bold text-slate-900">Brief updated</h4>
                </div>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  Your latest brief has been successfully updated
                </p>
              </div>

              {/* Activity Item 3 */}
              <div className="p-4 sm:p-5 bg-white border-b border-gray-100">
                <div className="mb-1.5">
                  <h4 className="text-[14px] font-bold text-slate-900">Draft reminder</h4>
                </div>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  You have drafts that haven't been updated in over a week
                </p>
              </div>
              
              <div className="p-4 sm:p-5 bg-white text-center">
                <Link to="/messages" className="text-xs font-bold text-blue-600 hover:underline">View All Activity</Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AppFooter />
      <AIChatWidget />
    </div>
  )
}
