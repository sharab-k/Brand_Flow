import { useState } from 'react'
import { Link } from 'react-router-dom'
import AppHeader from '../components/layout/AppHeader'
import AppFooter from '../components/layout/AppFooter'
import AIChatWidget from '../components/AIChatWidget'

const manufacturers = [
  { name: 'EcoPack Solutions', initials: 'E', location: 'United States', rating: '4.8', certs: ['GOTS', 'ISO 9001'], aiMatch: true },
  { name: 'Nordic Manufacturing AB', initials: 'N', location: 'Sweden', rating: '4.6', certs: ['OEKO-TEX', 'ISO 14001'], aiMatch: true },
  { name: 'Rhein Produktion AG', initials: 'R', location: 'Germany', rating: '4.9', certs: ['ISO 9001', 'BCI'], aiMatch: false },
  { name: 'Adriatica Fabrics SRL', initials: 'A', location: 'Italy', rating: '4.5', certs: ['GOTS'], aiMatch: false },
  { name: 'Alpine Textiles GmbH', initials: 'A', location: 'Austria', rating: '4.8', certs: ['GOTS', 'ISO 9001'], aiMatch: false },
]

export default function BriefsInvited() {
  const [profilePanel, setProfilePanel] = useState(null)

  const aiMatched = manufacturers.filter(m => m.aiMatch)
  const otherManufacturers = manufacturers.filter(m => !m.aiMatch)

  return (
    <div className="bg-[#fafafa] text-slate-800 antialiased font-sans">
      <AppHeader activeNav="briefs" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-[26px] font-bold text-slate-900 tracking-tight">Matched Manufacturers</h1>
            <p className="text-[14px] text-slate-500 mt-1">AI-matched based on your brief requirements.</p>
          </div>
          <button className="bg-[#3b82f6] text-white px-6 py-2.5 rounded-lg text-[14px] font-bold hover:bg-blue-600 transition-colors shadow-sm">
            Send To All
          </button>
        </div>

        {/* Main Container */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          {/* Search & Filters */}
          <div className="p-5 flex flex-wrap items-center gap-4">
            <div className="relative flex-1 min-w-[300px]">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input type="text" placeholder="Search manufacturers..." className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl bg-white text-[14px] outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
            </div>
            <div className="relative min-w-[200px]">
              <select className="w-full pl-4 pr-10 py-2.5 border border-slate-200 rounded-xl bg-white text-[14px] text-slate-600 appearance-none outline-none cursor-pointer">
                <option>Filter by Category</option>
              </select>
            </div>
            <div className="relative min-w-[200px]">
              <select className="w-full pl-4 pr-10 py-2.5 border border-slate-200 rounded-xl bg-white text-[14px] text-slate-600 appearance-none outline-none cursor-pointer">
                <option>Filter by Capacity</option>
              </select>
            </div>
          </div>

          <div className="p-6 space-y-4">
            {/* AI Match Section */}
            <div className="border-[1.5px] border-[#e2e8f0] bg-[#f8fafc] rounded-[20px] p-5 space-y-5">
              <div className="flex items-center gap-3">
                <div className="bg-[#3b82f6] p-1.5 rounded-lg text-white">
                  <i className="ph ph-sparkle text-[18px]"></i>
                </div>
                <p className="text-[13px] font-medium text-slate-700">Based on your brief, these manufacturers best match your product and capacity needs.</p>
              </div>

              {aiMatched.map((mfr, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-[#e2e8f0] flex items-center justify-between group transition-all">
                  <div className="flex items-center gap-5">
                    <div className="h-12 w-12 rounded-full bg-[#dbeafe] flex items-center justify-center text-[#3b82f6] font-bold text-[18px]">{mfr.initials}</div>
                    <div>
                      <h3 className="text-[16px] font-bold text-slate-900 leading-tight">{mfr.name}</h3>
                      <div className="flex items-center gap-3 mt-1.5">
                        <div className="flex items-center gap-1.5 text-[12px] text-slate-500"><i className="ph ph-map-pin text-[14px]"></i>{mfr.location}</div>
                        <div className="flex items-center gap-1 text-[12px] text-slate-500"><i className="ph ph-star-fill text-amber-400"></i>{mfr.rating}</div>
                        <div className="flex items-center gap-1.5 text-[12px] text-slate-400"><i className="ph ph-calendar-blank text-[14px]"></i>Invited Jan 14, 2025</div>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        {mfr.certs.map((cert, j) => (
                          <span key={j} className="px-2.5 py-1 rounded-lg border border-slate-100 bg-slate-50 text-slate-600 text-[11px] font-semibold flex items-center gap-1.5">
                            <i className="ph ph-seal-check text-blue-500"></i> {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setProfilePanel(mfr)} className="px-6 py-2 border border-[#3b82f6] rounded-lg text-[13px] font-bold text-[#3b82f6] hover:bg-blue-50 transition-colors">View Profile</button>
                    <button className="px-6 py-2 bg-[#3b82f6] text-white rounded-lg text-[13px] font-bold hover:bg-blue-600 transition-colors">Send Invite</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Other Cards */}
            <div className="space-y-4">
              {otherManufacturers.map((mfr, i) => (
                <div key={i} className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-100 flex items-center justify-between group hover:border-slate-200 transition-all">
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-blue-500 focus:ring-blue-500/20" />
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-[18px]">{mfr.initials}</div>
                    </div>
                    <div>
                      <h3 className="text-[16px] font-bold text-slate-900 leading-tight">{mfr.name}</h3>
                      <div className="flex items-center gap-3 mt-1.5">
                        <div className="flex items-center gap-1.5 text-[12px] text-slate-500"><i className="ph ph-map-pin text-[14px]"></i>{mfr.location}</div>
                        <div className="flex items-center gap-1 text-[12px] text-slate-500"><i className="ph ph-star-fill text-amber-400"></i>{mfr.rating}</div>
                        <div className="flex items-center gap-1.5 text-[12px] text-slate-400"><i className="ph ph-calendar-blank text-[14px]"></i>Invited Jan 14, 2025</div>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        {mfr.certs.map((cert, j) => (
                          <span key={j} className="px-2.5 py-1 rounded-lg border border-slate-200 bg-white text-slate-600 text-[11px] font-semibold flex items-center gap-1.5">
                            <i className="ph ph-seal-check text-blue-500"></i> {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setProfilePanel(mfr)} className="px-6 py-2 border border-slate-200 bg-white rounded-lg text-[13px] font-bold text-slate-600 hover:bg-slate-50 transition-colors">View Profile</button>
                    <button className="px-6 py-2 bg-blue-500 text-white rounded-lg text-[13px] font-bold hover:bg-blue-600 transition-colors">Send Invite</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-base flex-shrink-0">{profilePanel.initials}</div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900 leading-tight">{profilePanel.name}</h2>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center gap-1"><i className="ph ph-map-pin text-[14px] text-slate-400"></i><span className="text-[11px] text-slate-500">{profilePanel.location}</span></div>
                      <div className="flex items-center gap-1"><i className="ph ph-star-fill text-[14px] text-amber-400"></i><span className="text-[11px] text-slate-500">{profilePanel.rating}</span></div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      {profilePanel.certs.map((cert, i) => (
                        <span key={i} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-100">
                          <i className="ph ph-seal-check text-[12px]"></i>{cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-xs font-medium hover:bg-blue-500 transition-colors">Invite to Brief</button>
                  <button onClick={() => setProfilePanel(null)} className="text-slate-400 hover:text-slate-500 focus:outline-none p-1 hover:bg-gray-50 rounded-full transition-colors">
                    <i className="ph ph-x text-[20px]"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="px-5 py-5 border-b border-gray-100">
                <h3 className="text-sm font-bold text-slate-900 mb-3">About</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Leading European textile manufacturer specializing in sustainable fabrics and finished garments. With over 25 years of experience, serving brands across the DACH region and beyond.</p>
              </div>
              <div className="px-5 py-5 border-b border-gray-100">
                <h3 className="text-sm font-bold text-slate-900 mb-4">Production Capabilities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[{ l: 'Product Category', v: 'Dietary Supplement' }, { l: 'Monthly Capacity', v: '10,000' }, { l: 'Minimum Order Qty', v: '5,000 units' }, { l: 'Lead Time', v: '2-3 weeks' }].map((c, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                      <p className="text-[10px] text-slate-400 font-medium mb-1">{c.l}</p>
                      <p className="text-xs font-bold text-slate-900">{c.v}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-5 py-5">
                <h3 className="text-sm font-bold text-slate-900 mb-4">Certifications</h3>
                <div className="space-y-3">
                  {[{ name: 'GOTS (Global Organic Textile Standard)', date: 'Issued: Jan 2023 · Expires: Jan 2026' }, { name: 'ISO 9001:2015 – Quality Management', date: 'Issued: Mar 2022 · Expires: Mar 2025' }, { name: 'OEKO-TEX Standard 100', date: 'Issued: Jun 2023 · Expires: Jun 2026' }].map((cert, i) => (
                    <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500"><i className="ph ph-shield-check text-[18px]"></i></div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">{cert.name}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">{cert.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <AppFooter />
      <AIChatWidget />
    </div>
  )
}
