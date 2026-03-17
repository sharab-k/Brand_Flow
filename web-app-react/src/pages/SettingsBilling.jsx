import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AppHeader from '../components/layout/AppHeader'
import { useAuth } from '../contexts/AuthContext'
import { userService } from '../services/userService'

export default function SettingsBilling() {
  const { user, logout } = useAuth()
  const [billingInfo, setBillingInfo] = useState({
    plan: 'Pro Plan',
    amount: '€49/month',
    nextBilling: 'Feb 28, 2026',
    status: 'Active',
    paymentMethod: {
      type: 'Visa',
      last4: '4242',
      expiry: '12/28'
    },
    history: [
      { date: 'Jan 28, 2026', amount: '€49.00', status: 'Paid' },
      { date: 'Dec 28, 2025', amount: '€49.00', status: 'Paid' }
    ]
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBilling = async () => {
      setIsLoading(true)
      try {
        const data = await userService.getBillingInfo()
        if (data) setBillingInfo(prev => ({ ...prev, ...data }))
      } catch (err) {
        console.error('Failed to fetch billing info')
      } finally {
        setIsLoading(false)
      }
    }
    fetchBilling()
  }, [])

  return (
    <div className="bg-gray-50 text-slate-800 antialiased font-sans flex flex-col min-h-screen">
      <AppHeader activeNav="dashboard" user={user} onLogout={logout} />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full relative">
        {isLoading && (
          <div className="absolute inset-x-0 top-0 h-1 z-50">
            <div className="h-full bg-blue-500 animate-pulse w-full"></div>
          </div>
        )}
        <h1 className="text-2xl font-bold text-slate-900 mb-8">Billing & Plans</h1>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex border-b border-gray-100">
            <Link to="/settings-profile" className="px-6 py-3 text-sm font-medium text-slate-500 hover:text-slate-800">General</Link>
            <Link to="/settings-billing" className="px-6 py-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600">Billing</Link>
          </div>
          <div className="p-8">
            {/* Current Plan */}
            <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-1">Current Plan</p>
                  <h2 className="text-2xl font-bold text-slate-900">{billingInfo.plan}</h2>
                  <p className="text-sm text-slate-600 mt-1">{billingInfo.amount} • Next billing date: {billingInfo.nextBilling}</p>
                </div>
                <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-bold">{billingInfo.status}</span>
              </div>
            </div>
            {/* Payment Method */}
            <div className="mb-8">
              <h3 className="text-base font-bold text-slate-900 mb-4">Payment Method</h3>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-16 bg-gray-100 rounded flex items-center justify-center text-xs font-bold text-slate-500">{billingInfo.paymentMethod.type.toUpperCase()}</div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{billingInfo.paymentMethod.type} ending in {billingInfo.paymentMethod.last4}</p>
                    <p className="text-xs text-slate-500">Expires {billingInfo.paymentMethod.expiry}</p>
                  </div>
                </div>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-700">Edit</button>
              </div>
            </div>
            {/* Billing History */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-bold text-slate-900">Billing History</h3>
                <button className="text-sm text-blue-600 font-medium hover:underline">Download All</button>
              </div>
              <div className="overflow-hidden border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Invoice</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {billingInfo.history.map((row, i) => (
                      <tr key={i}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">{row.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{row.amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap"><span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${row.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{row.status}</span></td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" className="text-blue-600 hover:text-blue-900">Download</a></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white border-t border-gray-100 py-8 mt-auto"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex justify-center text-slate-400 text-sm">&copy; 2026 DonauApp</div></div></footer>
    </div>
  )
}
