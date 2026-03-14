import AppHeader from '../components/layout/AppHeader'
import InfoFooter from '../components/layout/InfoFooter'

export default function Documentation() {
  return (
    <div className="bg-gray-50 text-slate-800 antialiased font-sans flex flex-col min-h-screen">
      <AppHeader activeNav="dashboard" />
      <main className="flex-grow w-full flex">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-50 border-r border-gray-100 hidden md:block flex-shrink-0 h-[calc(100vh-64px)] overflow-y-auto sticky top-16">
          <div className="p-6">
            <h3 className="font-bold text-slate-900 mb-4 px-2">Getting Started</h3>
            <ul className="space-y-1 mb-8">
              <li><a href="#" className="block px-2 py-1.5 bg-blue-50 text-blue-700 rounded-md text-sm font-medium">Introduction</a></li>
              <li><a href="#" className="block px-2 py-1.5 text-slate-600 hover:bg-gray-100 rounded-md text-sm">Authentication</a></li>
              <li><a href="#" className="block px-2 py-1.5 text-slate-600 hover:bg-gray-100 rounded-md text-sm">Rate Limits</a></li>
            </ul>
            <h3 className="font-bold text-slate-900 mb-4 px-2">Endpoints</h3>
            <ul className="space-y-1">
              <li><a href="#" className="block px-2 py-1.5 text-slate-600 hover:bg-gray-100 rounded-md text-sm">Briefs</a></li>
              <li><a href="#" className="block px-2 py-1.5 text-slate-600 hover:bg-gray-100 rounded-md text-sm">Manufacturers</a></li>
              <li><a href="#" className="block px-2 py-1.5 text-slate-600 hover:bg-gray-100 rounded-md text-sm">Orders</a></li>
              <li><a href="#" className="block px-2 py-1.5 text-slate-600 hover:bg-gray-100 rounded-md text-sm">Webhooks</a></li>
            </ul>
          </div>
        </aside>

        {/* Content */}
        <div className="flex-grow max-w-4xl mx-auto px-8 py-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-6">API Introduction</h1>
          <p className="text-slate-600 mb-8 leading-relaxed">
            The DonauAI API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.
          </p>
          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-slate-200 font-mono text-sm overflow-x-auto">
            <div className="flex items-center gap-4 mb-4 border-b border-gray-700 pb-4">
              <span className="text-green-400">GET</span>
              <span>https://api.donau.ai/v1/briefs</span>
            </div>
            <pre><code>{`{
  "data": [
    {
      "id": "brf_123456789",
      "status": "draft",
      "title": "Summer Collection 2026",
      "created_at": 1678901234
    }
  ],
  "has_more": false
}`}</code></pre>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Authentication</h2>
          <p className="text-slate-600 mb-4">
            Authenticate your account when using the API by including your secret API key in the request. You can manage your API keys in the Dashboard.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-sm text-slate-700">
            Authorization: Bearer sk_test_123456789
          </div>
        </div>
      </main>
      <InfoFooter />
    </div>
  )
}
