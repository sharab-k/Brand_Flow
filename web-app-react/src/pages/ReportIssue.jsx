import AppHeader from '../components/layout/AppHeader'
import InfoFooter from '../components/layout/InfoFooter'

export default function ReportIssue() {
  return (
    <div className="bg-gray-50 text-slate-800 antialiased font-sans flex flex-col min-h-screen">
      <AppHeader activeNav="dashboard" />
      <main className="flex-grow w-full bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-red-500 mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <h1 className="text-2xl font-bold text-slate-900">Report a Technical Issue</h1>
              <p className="text-slate-500 mt-2">Found a bug? Let us know so we can fix it.</p>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Issue Type</label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all">
                  <option>Bug Report</option>
                  <option>Security Vulnerability</option>
                  <option>Performance Issue</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Where is the issue occurring?</label>
                <input type="text" placeholder="e.g., Dashboard > Recent Briefs" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Description & Steps to Reproduce</label>
                <textarea rows="5" placeholder="1. Go to..." className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Severity</label>
                <div className="flex gap-4">
                  {['Low', 'Medium', 'High', 'Critical'].map((s, i) => (
                    <label key={i} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="severity" value={s} className="text-red-600 focus:ring-red-500" />
                      <span className="text-sm text-slate-700">{s}</span>
                    </label>
                  ))}
                </div>
              </div>
              <button type="button" className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition-colors">Submit Report</button>
            </form>
          </div>
        </div>
      </main>
      <InfoFooter />
    </div>
  )
}
