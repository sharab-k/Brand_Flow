import { Link } from 'react-router-dom'

export default function InfoFooter() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12 text-sm">
          <div className="col-span-1">
            <div className="flex items-center mb-4"><img src="/logo.svg" alt="Donau AI Logo" className="h-8 w-auto" /></div>
            <p className="text-sm text-slate-500 leading-relaxed">AI-powered platform connecting brands with manufacturers</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link to="/dashboard" className="hover:text-blue-600">Home</Link></li>
              <li><Link to="/for-brands" className="hover:text-blue-600">For Brands</Link></li>
              <li><Link to="/for-manufacturers" className="hover:text-blue-600">For Manufacturers</Link></li>
              <li><Link to="/ai-brief-assistant" className="hover:text-blue-600">AI Brief Assistant</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link to="/documentation" className="hover:text-blue-600">API Documentation</Link></li>
              <li><Link to="/help-center" className="hover:text-blue-600">Help Center</Link></li>
              <li><Link to="/product-categories" className="hover:text-blue-600">Product Categories</Link></li>
              <li><Link to="/success-stories" className="hover:text-blue-600">Success Stories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link to="/about-us" className="hover:text-blue-600">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-600">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link to="/faq" className="hover:text-blue-600">FAQ</Link></li>
              <li><Link to="/support" className="hover:text-blue-600">Contact Support</Link></li>
              <li><Link to="/status" className="hover:text-blue-600">System Status</Link></li>
              <li><Link to="/report-issue" className="hover:text-blue-600">Report an Issue</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; 2026 DonauApp</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <div className="flex gap-4">
              <span>English</span> <span>EUR</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
