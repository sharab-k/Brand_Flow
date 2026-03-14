import { useState } from 'react'
import { Link } from 'react-router-dom'
import AppHeader from '../components/layout/AppHeader'
import AppFooter from '../components/layout/AppFooter'
import AIChatWidget from '../components/AIChatWidget'
import DiscussionModal from '../components/modals/DiscussionModal'
import PauseModal from '../components/modals/PauseModal'

export default function BriefDetail() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isDiscussionModalOpen, setIsDiscussionModalOpen] = useState(false)
  const [isPauseModalOpen, setIsPauseModalOpen] = useState(false)
  const [profilePanel, setProfilePanel] = useState(null)
  const [messagePanel, setMessagePanel] = useState(null)
  const [proposalPanel, setProposalPanel] = useState(null)

  return (
    <div className="bg-white text-slate-800 antialiased font-sans">
      <AppHeader activeNav="briefs" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 leading-tight mb-2">Premium Vitamin D3 Supplement</h1>
            <p className="text-xs text-slate-500 flex items-center gap-2">
              <span className="text-blue-500 font-medium">#BR12345678</span>
              <span className="w-1 h-1 rounded-full bg-slate-400"></span>
              <span>Dietary Supplements</span>
              <span className="w-1 h-1 rounded-full bg-slate-400"></span>
              <span>Created 12/01/2026</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/briefs-invited" className="whitespace-nowrap px-5 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium text-xs transition-colors flex items-center gap-2">
              Invite Manufacturers
            </Link>
            <button className="p-2 border border-gray-200 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
            </button>
          </div>
        </div>

        {/* Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-8 flex flex-col sm:flex-row items-center gap-3">
          <div className="bg-blue-500 rounded p-1 flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
          </div>
          <div className="flex-grow"><p className="text-xs text-blue-900 font-medium">Your brief is ready to share. Inviting a small set of relevant manufacturers helps you get higher-quality proposals.</p></div>
          <Link to="/briefs-invited" className="text-xs font-bold text-blue-600 hover:text-blue-700 whitespace-nowrap underline decoration-blue-300 underline-offset-2">Invite Manufacturers</Link>
        </div>

        {/* Progress Stepper */}
        <div className="bg-white rounded-xl border border-gray-100 px-6 py-1 mb-8">
          <div className="flex items-stretch justify-between">
            {['Draft', 'Active', 'Invited', 'In Discussion', 'Proposal Received', 'Matched', 'Completed'].map((step, i) => (
              <div key={i} className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 ${
                    i === 0 ? 'bg-blue-500 text-white' : i === 1 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {i === 0 ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    ) : `0${i + 1}`}
                  </div>
                  <span className={`text-xs font-medium ${i === 1 ? 'font-bold text-blue-600' : i === 0 ? 'text-slate-700' : 'text-slate-400'}`}>{step}</span>
                </div>
                {i < 6 && (
                  <div className="w-3 self-stretch -my-1 mx-1 flex-shrink-0">
                    <svg width="12" height="72" viewBox="0 0 12 72" fill="none" className="h-full w-full"><path d="M0 0L12 36L0 72" stroke="#e2e8f0" strokeWidth="1"></path></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
              { id: 'manufacturers', label: 'Invited Manufacturers (0)', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
              { id: 'proposals', label: 'Proposals (2)', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
            ].map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`border-b-2 py-3 px-1 text-xs font-bold focus:outline-none flex items-center gap-2 ${
                  activeTab === tab.id ? 'border-blue-500 text-blue-600' : 'border-transparent text-slate-500 hover:border-gray-300 hover:text-slate-700'
                }`}>
                <svg className={`w-4 h-4 ${activeTab === tab.id ? 'text-blue-500' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tab.icon}></path>
                </svg>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Brief Description */}
              <div className="bg-white rounded-xl border border-gray-100 p-8">
                <h3 className="text-sm font-bold text-slate-900 mb-4">Brief Description</h3>
                <p className="text-xs text-slate-500 leading-relaxed text-justify">
                  We are looking for a manufacturer to produce a high-quality vitamin D3 supplement. The product should use cholecalciferol (D3) form with enhanced bioavailability. We need the product in both softgel and liquid drop formats.
                </p>
              </div>

              {/* Product Specifications */}
              <div className="bg-white rounded-xl border border-gray-100 p-8">
                <h3 className="text-sm font-bold text-slate-900 mb-4">Product Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Category</span>
                    <span className="text-xs font-bold text-slate-900">Dietary Supplements</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Materials</span>
                    <span className="text-xs font-bold text-slate-900">Gelatin</span>
                  </div>
                </div>
              </div>

              {/* Brief Details */}
              <div className="bg-white rounded-xl border border-gray-100 p-8">
                <h3 className="text-sm font-bold text-slate-900 mb-6">Brief Details</h3>
                <div className="space-y-6">
                  {[
                    { label: 'Budget', value: '€10,000 - €25,000 USD', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
                    { label: 'Timeline', value: 'February 14, 2026', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
                    { label: 'Volume', value: '250 units', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
                  ].map((detail, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="bg-gray-50 p-2.5 rounded-lg text-slate-400 border border-gray-100">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={detail.icon}></path></svg>
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 font-medium mb-0.5">{detail.label}</p>
                        <p className="text-xs font-bold text-slate-900">{detail.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-xl border border-gray-100 p-8">
                <h3 className="text-sm font-bold text-slate-900 mb-6">Requirements</h3>
                <div className="space-y-4">
                  {['FDA registered facility', 'GMP certified', 'Third-party testing available', 'Experience with vitamin supplements', 'Minimum 2 years in business'].map((req, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full border border-green-500 flex items-center justify-center text-green-500 bg-white">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span className="text-xs text-slate-600 font-medium">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Attachments */}
              <div className="bg-white rounded-xl border border-gray-100 p-8">
                <h3 className="text-sm font-bold text-slate-900 mb-4">Attachments</h3>
                <div className="space-y-3">
                  {[{ name: 'Specs.pdf', size: 'PDF Document • 2.4 MB' }, { name: 'Design-mockup.png', size: 'PDF Document • 2.4 MB' }].map((file, i) => (
                    <div key={i} className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="p-2 bg-white rounded border border-gray-200 mr-3">
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                      </div>
                      <div className="flex-grow">
                        <p className="text-xs font-bold text-slate-900">{file.name}</p>
                        <p className="text-[10px] text-slate-500 mt-0.5">{file.size}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'manufacturers' && (
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="text-base font-bold text-slate-900">Invited Manufacturers</h3>
              <p className="text-xs text-slate-500 mt-1 mb-6">AI-matched manufacturers based on your requirements</p>
              <div className="space-y-4">
                {[
                  { name: 'EcoPack Solutions', initials: 'ES', location: 'United States' },
                  { name: 'Lincoln Pharma LLC', initials: 'LP', location: 'United States' },
                ].map((mfr, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">{mfr.initials}</div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{mfr.name}</h4>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-[11px] text-slate-500">{mfr.location}</span>
                          <span className="text-[11px] text-slate-500">4.8 (127 reviews)</span>
                          <span className="text-[11px] text-slate-500">Submitted Jan 16</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button onClick={() => setMessagePanel(mfr)} className="bg-white px-4 py-1.5 rounded-lg border border-blue-200 text-blue-600 text-xs font-medium hover:bg-blue-50 transition-colors">Message</button>
                      <button onClick={() => setProfilePanel(mfr)} className="bg-white px-4 py-1.5 rounded-lg border border-blue-200 text-blue-600 text-xs font-medium hover:bg-blue-50 transition-colors">View Profile</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'proposals' && (
            <div className="bg-white rounded-xl border border-gray-100 p-6 flex flex-col gap-4">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Received Proposals</h3>
                  <p className="text-xs text-slate-500 mt-1">Compare and evaluate proposals from manufacturers</p>
                </div>
                <div className="relative">
                  <select className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 text-xs text-slate-700 font-medium pr-8 focus:outline-none focus:border-blue-500 cursor-pointer min-w-[120px]">
                    <option value="active">Active</option>
                    <option value="paused">Paused</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {/* First Card */}
                <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-4 border border-gray-100">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-[42px] w-[42px] rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">
                        GM
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 mb-1">GreenThread Manufacturing</h4>
                        <div className="flex flex-wrap items-center gap-4 mt-1">
                          <div className="flex items-center gap-1.5 text-slate-500">
                            <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-[11px] font-medium">€4000</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-500">
                            <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-[11px] font-medium">2 weeks</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-500">
                            <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            <span className="text-[11px] font-medium">100 units</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-500">
                            <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            <span className="text-[11px] font-medium">Invited Jan 14, 2025</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                      <button onClick={() => setProposalPanel({ name: 'GreenThread Manufacturing', initials: 'GM', location: 'United States', rating: '4.8', certs: ['GOTS', 'ISO 9001'] })} className="w-full sm:w-auto bg-white px-5 py-2.5 rounded-lg border border-blue-200 text-blue-500 text-xs font-bold hover:bg-blue-50 transition-colors whitespace-nowrap">
                        View Proposal
                      </button>
                      <button onClick={() => setIsPauseModalOpen(true)} className="w-full sm:w-auto bg-white px-5 py-2.5 rounded-lg border border-blue-200 text-blue-500 text-xs font-bold hover:bg-blue-50 transition-colors">
                        Pause
                      </button>
                      <button onClick={() => setIsDiscussionModalOpen(true)} className="w-full sm:w-auto bg-blue-500 px-5 py-2.5 rounded-lg text-white text-xs font-bold hover:bg-blue-600 transition-colors whitespace-nowrap shadow-sm shadow-blue-200">
                        Continue Discussion
                      </button>
                    </div>
                  </div>
                </div>

                {/* Second Card */}
                <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-4 border border-gray-100">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-[42px] w-[42px] rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">
                        GM
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 mb-1">GreenThread Manufacturing</h4>
                        <div className="flex flex-wrap items-center gap-4 mt-1">
                          <div className="flex items-center gap-1.5 text-slate-500">
                            <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-[11px] font-medium">€4000</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-500">
                            <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-[11px] font-medium">2 weeks</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-500">
                            <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            <span className="text-[11px] font-medium">100 units</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-500">
                            <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            <span className="text-[11px] font-medium">Invited Jan 14, 2025</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto relative group">
                      <button onClick={() => setProposalPanel({ name: 'GreenThread Manufacturing', initials: 'GM', location: 'United States', rating: '4.8', certs: ['GOTS', 'ISO 9001'] })} className="w-full sm:w-auto bg-white px-5 py-2.5 rounded-lg border border-blue-200 text-blue-500 text-xs font-bold hover:bg-blue-50 transition-colors whitespace-nowrap">
                        View Proposal
                      </button>
                      <button onClick={() => setIsPauseModalOpen(true)} className="w-full sm:w-auto bg-white px-5 py-2.5 rounded-lg border border-blue-200 text-blue-500 text-xs font-bold hover:bg-blue-50 transition-colors">
                        Pause
                      </button>
                      <div className="relative">
                        <button onClick={() => setIsDiscussionModalOpen(true)} className="w-full sm:w-auto bg-blue-500 px-5 py-2.5 rounded-lg text-white text-xs font-bold hover:bg-blue-600 transition-colors whitespace-nowrap shadow-sm shadow-blue-200 peer">
                          Continue Discussion
                        </button>
                        
                        {/* Tooltip visible natively, mimicking the image state */}
                        <div className="hidden md:block absolute top-[115%] right-0 mt-3 bg-[#111827] text-white text-[11px] font-medium p-3.5 rounded-xl min-w-[260px] shadow-xl z-20 leading-relaxed">
                          <div className="absolute -top-1.5 right-12 w-3.5 h-3.5 bg-[#111827] transform rotate-45 rounded-sm"></div>
                          This does not represent a final decision or purchase. You can continue exploring other manufacturers.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#eff6ff] border border-blue-200 rounded-lg p-3.5 flex items-center gap-3">
                    <div className="w-[30px] h-[30px] rounded bg-blue-500 flex items-center justify-center text-white flex-shrink-0 shadow-sm border border-blue-600">
                      <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.428-1.428L13.5 18.75l1.178-.394a2.25 2.25 0 001.428-1.428L16.5 15.75l.394 1.178a2.25 2.25 0 001.428 1.428l1.178.394-1.178.394a2.25 2.25 0 00-1.428 1.428z" />
                      </svg>
                    </div>
                    <p className="text-[13px] font-medium text-slate-800">Best match based on your brief requirements and response quality.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Profile Side Panel */}
      {profilePanel && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-30 z-[95]" onClick={() => setProfilePanel(null)}></div>
          <div className="fixed inset-y-0 right-0 bg-white z-[100] flex flex-col border-l border-gray-200 shadow-xl" style={{ width: '490px' }}>
            <div className="px-5 py-5 border-b border-gray-100 bg-white">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-base flex-shrink-0">
                    {profilePanel.initials}
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900 leading-tight">{profilePanel.name}</h2>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span className="text-[11px] text-slate-500">{profilePanel.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <span className="text-[11px] text-slate-500">4.8</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-100">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            GOTS
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-100">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            ISO 9001
                        </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-xs font-medium hover:bg-blue-500 transition-colors">Invite to Brief</button>
                  <button onClick={() => setProfilePanel(null)} className="text-slate-400 hover:text-slate-500 focus:outline-none p-1 hover:bg-gray-50 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="px-5 py-5 border-b border-gray-100">
                <h3 className="text-sm font-bold text-slate-900 mb-3">About</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Alpine Textiles is a leading European textile manufacturer specializing in sustainable fabrics and finished garments. With over 25 years of experience, we serve brands across the DACH region and beyond.</p>
              </div>
              <div className="px-5 py-5 border-b border-gray-100">
                <h3 className="text-sm font-bold text-slate-900 mb-4">Production Capabilities</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <p className="text-[10px] text-slate-400 font-medium mb-1">Product Category</p>
                    <p className="text-xs font-bold text-slate-900">Dietary Supplement</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <p className="text-[10px] text-slate-400 font-medium mb-1">Monthly Capacity</p>
                    <p className="text-xs font-bold text-slate-900">10,000</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <p className="text-[10px] text-slate-400 font-medium mb-1">Minimum Order Qty</p>
                    <p className="text-xs font-bold text-slate-900">5,000 units</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <p className="text-[10px] text-slate-400 font-medium mb-1">Lead Time</p>
                    <p className="text-xs font-bold text-slate-900">2-3 weeks</p>
                  </div>
                </div>
              </div>
              <div className="px-5 py-5">
                <h3 className="text-sm font-bold text-slate-900 mb-4">Certifications</h3>
                <div className="space-y-3">
                    <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-900">GOTS (Global Organic Textile Standard)</p>
                            <p className="text-[10px] text-slate-400 mt-0.5">Issued: Jan 2023 · Expires: Jan 2026</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-900">ISO 9001:2015 – Quality Management</p>
                            <p className="text-[10px] text-slate-400 mt-0.5">Issued: Mar 2022 · Expires: Mar 2025</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-900">OEKO-TEX Standard 100</p>
                            <p className="text-[10px] text-slate-400 mt-0.5">Issued: Jun 2023 · Expires: Jun 2026</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Message Side Panel */}
      {messagePanel && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-30 z-[95]" onClick={() => setMessagePanel(null)}></div>
          <div className="fixed inset-y-0 right-0 w-[380px] bg-white z-[100] flex flex-col border-l border-gray-200 shadow-xl">
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between bg-white">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                  {messagePanel.initials}
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900 leading-tight">{messagePanel.name}</h2>
                  <p className="text-[11px] text-slate-500 leading-tight mt-0.5">{messagePanel.location}</p>
                </div>
              </div>
              <button onClick={() => setMessagePanel(null)} className="text-slate-400 hover:text-slate-500 focus:outline-none p-1 hover:bg-gray-50 rounded-full transition-colors">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-gray-50">
              <div className="flex justify-center"><span className="text-[10px] text-slate-400 bg-white px-3 py-1 rounded-full border border-gray-100 font-medium">22/01/2024</span></div>
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[75%] shadow-sm">
                  <p className="text-xs text-slate-700 leading-relaxed">Hello</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-blue-500 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[75%]">
                  <p className="text-xs text-white leading-relaxed">Hi! Yes, I'm looking for a reliable manufacturer...</p>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-100 bg-white">
              <div className="relative flex items-center gap-2">
                <input type="text" className="block w-full rounded-lg border border-gray-200 py-2.5 px-4 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Type your response..." />
                <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 flex items-center justify-center">
                  <svg className="w-5 h-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Proposal Side Panel */}
      {proposalPanel && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-30 z-[95]" onClick={() => setProposalPanel(null)}></div>
          <div className="fixed inset-y-0 right-0 bg-white z-[100] flex flex-col border-l border-gray-200 shadow-xl" style={{ width: '490px' }}>
            <div className="px-5 py-5 border-b border-gray-100 bg-white">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-base flex-shrink-0">
                    {proposalPanel.initials}
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900 leading-tight">{proposalPanel.name}</h2>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
                        <span className="text-[11px] text-slate-500">{proposalPanel.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <span className="text-[11px] text-slate-500">{proposalPanel.rating}</span>
                      </div>
                    </div>
                    {proposalPanel.certs && (
                      <div className="flex items-center gap-2 mt-2">
                          {proposalPanel.certs.map(cert => (
                            <span key={cert} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                {cert}
                            </span>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
                <button onClick={() => setProposalPanel(null)} className="text-slate-400 hover:text-slate-500 focus:outline-none p-1 hover:bg-gray-50 rounded-full transition-colors">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              <div className="px-5 py-5 border-b border-gray-100">
                <h3 className="text-sm font-bold text-slate-900 mb-3">Production Feasibility</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Alpine Textiles is a leading European textile manufacturer specializing in sustainable fabrics and finished garments. With over 25 years of experience, we serve brands across the DACH region and beyond.</p>
              </div>

              <div className="px-5 py-5 border-b border-gray-100">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <p className="text-[10px] text-slate-400 font-medium mb-1">Total Price (€)</p>
                    <p className="text-xs font-bold text-slate-900">€10,000</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <p className="text-[10px] text-slate-400 font-medium mb-1">Order Quantity</p>
                    <p className="text-xs font-bold text-slate-900">5,000 units</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <p className="text-[10px] text-slate-400 font-medium mb-1">Lead Time</p>
                    <p className="text-xs font-bold text-slate-900">2-3 weeks</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <p className="text-[10px] text-slate-400 font-medium mb-1">Materials</p>
                    <p className="text-xs font-bold text-slate-900">Gelatin</p>
                  </div>
                </div>
              </div>

              <div className="px-5 py-5">
                <h3 className="text-sm font-bold text-slate-900 mb-4">Attachments</h3>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="p-2 bg-white rounded border border-gray-200 mr-3">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="text-xs font-bold text-slate-900">Specs.pdf</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">PDF Document • 2.4 MB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-gray-100 bg-white flex items-center justify-end gap-3">
              <button onClick={() => { setProposalPanel(null); setIsPauseModalOpen(true); }} className="px-6 py-2 rounded-lg border border-blue-200 text-blue-600 text-xs font-medium hover:bg-blue-50 transition-colors">Pause</button>
              <button onClick={() => { setProposalPanel(null); setIsDiscussionModalOpen(true); }} className="px-6 py-2 rounded-lg bg-blue-500 text-white text-xs font-medium hover:bg-blue-600 transition-colors hidden md:block">Continue Discussion</button>
            </div>
          </div>
        </>
      )}

      <AppFooter />
      <AIChatWidget />

      <DiscussionModal isOpen={isDiscussionModalOpen} onClose={() => setIsDiscussionModalOpen(false)} />
      <PauseModal isOpen={isPauseModalOpen} onClose={() => setIsPauseModalOpen(false)} />
    </div>
  )
}
