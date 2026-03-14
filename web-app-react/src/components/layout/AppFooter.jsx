import { Link } from 'react-router-dom'

export default function AppFooter() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Column */}
          <div>
            <div className="flex items-center mb-3">
              <img src="/logo.svg" alt="Donau AI Logo" className="h-8 w-auto" />
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">AI-powered platform connecting brands with manufacturers</p>
          </div>

          {/* Platform Column */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4">Platform</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Home</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Brands</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Manufacturers</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Contact</a></li>
              <li><Link to="/privacy" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4">Contact</h4>
            <p className="text-sm text-slate-500 mb-4">info@donauai.com</p>
            <div className="flex gap-3">
              <a href="#"
                className="w-9 h-9 flex items-center justify-center bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="#"
                className="w-9 h-9 flex items-center justify-center bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"></rect>
                </svg>
              </a>
              <a href="#"
                className="w-9 h-9 flex items-center justify-center bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.008 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.548 1.549zm1.336 9.764H5.666V9.75H8.344v8.589z">
                  </path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">&copy; 2026 DonauApp</p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9">
              </path>
            </svg>
            English
          </div>
        </div>
      </div>
    </footer>
  )
}
