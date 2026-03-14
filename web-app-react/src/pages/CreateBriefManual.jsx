import { Link } from 'react-router-dom'
import AppHeader from '../components/layout/AppHeader'
import AppFooter from '../components/layout/AppFooter'
import AIChatWidget from '../components/AIChatWidget'

const sparkleIcon = "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"

function AISuggestBtn() {
  return (
    <button type="button" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-blue-500 border border-blue-500 text-[13px] font-semibold rounded-[10px] hover:bg-[#eff6ff] transition-all">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d={sparkleIcon} /></svg>
      AI Suggest
    </button>
  )
}

export default function CreateBriefManual() {
  return (
    <div className="bg-white text-slate-800 antialiased font-sans min-h-screen flex flex-col">
      <AppHeader activeNav="briefs" />

      <main className="max-w-4xl mx-auto px-4 pt-16 pb-20 w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-[30px] font-bold text-slate-900 tracking-tight">Create New Brief</h1>
          <button className="flex items-center gap-2 px-4 py-2 border border-[#a2c5ea] text-blue-500 rounded-[8px] text-[14px] font-medium hover:bg-blue-50 transition-colors bg-white">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d={sparkleIcon} /></svg>
            Draft Brief
          </button>
        </div>
        <p className="text-[16px] text-[#64748b] font-normal mb-8">Create a detailed brief to find the right manufacturer for your product</p>

        {/* Info Alert */}
        <div className="bg-[#f0f4f9] rounded-[20px] p-6 flex gap-6 mb-12 border border-[#a2c5ea]">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 bg-[#428cf4] rounded-[14px] flex items-center justify-center text-white">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d={sparkleIcon} /></svg>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-[16px] text-[#1e293b] leading-relaxed font-normal">You can keep this high-level for now. Details like pricing and timelines are often refined after discussions begin.</p>
          </div>
        </div>

        <form className="space-y-6">
          {/* Basic Information */}
          <div className="bg-white border border-[#f1f5f9] rounded-2xl p-8 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)]">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-[18px] font-bold text-[#0f172a]">Basic Information</h2>
              <AISuggestBtn />
            </div>
            <div className="space-y-5">
              <div>
                <label className="block text-[13px] font-semibold text-[#334155] mb-2.5">Product Title</label>
                <input type="text" placeholder="Enter Title" className="w-full py-3 px-4 border border-[#e2e8f0] rounded-xl text-[14px] text-[#1e293b] placeholder-[#94a3b8] focus:outline-none focus:border-blue-500 transition-all" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-semibold text-[#334155] mb-2.5">Category</label>
                  <select className="w-full py-3 px-4 border border-[#e2e8f0] rounded-xl text-[14px] text-[#1e293b] appearance-none cursor-pointer focus:outline-none focus:border-blue-500">
                    <option value="">Select Category</option>
                    <option>Apparel</option><option>Electronics</option><option>Furniture</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-[#334155] mb-2.5">Material</label>
                  <select className="w-full py-3 px-4 border border-[#e2e8f0] rounded-xl text-[14px] text-[#1e293b] appearance-none cursor-pointer focus:outline-none focus:border-blue-500">
                    <option value="">Select Material</option>
                    <option>Cotton</option><option>Plastic</option><option>Metal</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#334155] mb-2.5">Description</label>
                <textarea placeholder="Type Here" className="w-full py-3.5 px-4 border border-[#e2e8f0] rounded-xl text-[14px] text-[#1e293b] placeholder-[#94a3b8] resize-none min-h-[120px] focus:outline-none focus:border-blue-500"></textarea>
                <p className="text-[11px] text-slate-400 mt-2">Detailed information helps manufacturers understand your requirements better</p>
              </div>
            </div>
          </div>

          {/* Production Volume */}
          <div className="bg-white border border-[#f1f5f9] rounded-2xl p-8 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)]">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-[18px] font-bold text-[#0f172a]">Production Volume</h2>
              <AISuggestBtn />
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-[#334155] mb-2.5">Minimum Order Quantity</label>
              <input type="text" placeholder="e.g. 500 units" className="w-full py-3 px-4 border border-[#e2e8f0] rounded-xl text-[14px] text-[#1e293b] placeholder-[#94a3b8] focus:outline-none focus:border-blue-500" />
            </div>
          </div>

          {/* Budget Information */}
          <div className="bg-white border border-[#f1f5f9] rounded-2xl p-8 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)]">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-[18px] font-bold text-[#0f172a]">Budget Information</h2>
              <AISuggestBtn />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-[13px] font-semibold text-[#334155] mb-2.5">Minimum Budget</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">$</span>
                  <input type="text" placeholder="10000" className="w-full py-3 pl-6 pr-4 border border-[#e2e8f0] rounded-xl text-[14px] text-[#1e293b] placeholder-[#94a3b8] focus:outline-none focus:border-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#334155] mb-2.5">Maximum Budget</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">$</span>
                  <input type="text" placeholder="25000" className="w-full py-3 pl-6 pr-4 border border-[#e2e8f0] rounded-xl text-[14px] text-[#1e293b] placeholder-[#94a3b8] focus:outline-none focus:border-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#334155] mb-2.5">Currency</label>
                <select className="w-full py-3 px-4 border border-[#e2e8f0] rounded-xl text-[14px] text-[#1e293b] appearance-none cursor-pointer focus:outline-none focus:border-blue-500">
                  <option>USD</option><option>EUR</option><option>GBP</option>
                </select>
              </div>
            </div>
          </div>

          {/* Timeline Information */}
          <div className="bg-white border border-[#f1f5f9] rounded-2xl p-8 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)]">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-[18px] font-bold text-[#0f172a]">Timeline Information</h2>
              <AISuggestBtn />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[13px] font-semibold text-[#334155] mb-2.5">Desired Delivery Date</label>
                <div className="relative">
                  <input type="text" placeholder="DD/MM/YY" className="w-full py-3 px-4 border border-[#e2e8f0] rounded-xl text-[14px] text-[#1e293b] placeholder-[#94a3b8] focus:outline-none focus:border-blue-500" />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#334155] mb-2.5">Flexibility (days)</label>
                <input type="text" placeholder="14" className="w-full py-3 px-4 border border-[#e2e8f0] rounded-xl text-[14px] text-[#1e293b] placeholder-[#94a3b8] focus:outline-none focus:border-blue-500" />
                <p className="text-[11px] text-slate-400 mt-2">How many days can you be flexible with the delivery date?</p>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-white border border-[#f1f5f9] rounded-2xl p-8 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)]">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-[18px] font-bold text-[#0f172a]">Requirements</h2>
              <AISuggestBtn />
            </div>
            <p className="text-[12px] text-slate-500 mb-4">Add at least one requirement for your product (e.g., certifications, quality standards)</p>
            <div className="space-y-4">
              <input type="text" placeholder="e.g., FDA-approved facility" className="w-full py-3 px-4 bg-slate-50 border-none rounded-xl text-[14px] text-[#1e293b] placeholder-[#94a3b8] focus:outline-none focus:ring-1 focus:ring-blue-500" />
              <button type="button" className="flex items-center gap-2 text-blue-600 text-xs font-bold px-3 py-2 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                Add Requirement
              </button>
            </div>
          </div>

          {/* File Attachments */}
          <div className="bg-white border border-[#f1f5f9] rounded-2xl p-8 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)]">
            <h2 className="text-[18px] font-bold text-[#0f172a] mb-2">File Attachments</h2>
            <p className="text-[12px] text-slate-500 mb-6">Upload supporting documents (specifications, images, certifications)</p>
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-12 text-center bg-white transition-colors hover:bg-slate-50 cursor-pointer">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
              </div>
              <p className="text-[14px] text-blue-600 font-bold mb-1 underline">Browse</p>
              <p className="text-[12px] text-slate-400">or drop your file (PNG, JPG, PDF) here</p>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-between pt-4">
            <Link to="/briefs" className="px-8 py-2.5 border border-slate-200 text-slate-600 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors">Cancel</Link>
            <div className="flex items-center gap-4">
              <button type="button" className="px-8 py-2.5 border border-slate-200 text-slate-600 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors">Save as Draft</button>
              <button type="button" className="px-8 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200">Create Brief</button>
            </div>
          </div>
        </form>
      </main>

      <AppFooter />
      <AIChatWidget />
    </div>
  )
}
