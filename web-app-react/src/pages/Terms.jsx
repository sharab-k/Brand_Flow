import AppHeader from '../components/layout/AppHeader'
import InfoFooter from '../components/layout/InfoFooter'

export default function Terms() {
  return (
    <div className="bg-gray-50 text-slate-800 antialiased font-sans flex flex-col min-h-screen">
      <AppHeader activeNav="dashboard" />
      <main className="flex-grow w-full bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto bg-white p-12 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-3xl font-bold text-slate-900 mb-8 pb-4 border-b border-gray-100">Terms of Service</h1>
          <div className="prose prose-slate max-w-none text-slate-600 text-sm">
            <p><strong>Last Updated: January 30, 2026</strong></p>
            <h3 className="text-slate-900 text-lg font-bold mt-8 mb-4">1. Acceptance of Terms</h3>
            <p>By accessing or using the DonauAI website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site.</p>
            <h3 className="text-slate-900 text-lg font-bold mt-8 mb-4">2. Use License</h3>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on DonauAI's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
            <h3 className="text-slate-900 text-lg font-bold mt-8 mb-4">3. User Accounts</h3>
            <p>To access certain features of the platform, you must register for an account. You agree to providing accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
            <h3 className="text-slate-900 text-lg font-bold mt-8 mb-4">4. Manufacturing Services</h3>
            <p>DonauAI acts as an intermediary connecting Brands with Manufacturers. We are not a party to the actual manufacturing contract between Brands and Manufacturers, although we provide tools to facilitate the transaction.</p>
            <h3 className="text-slate-900 text-lg font-bold mt-8 mb-4">5. Intellectual Property</h3>
            <p>The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of DonauAI and its licensors.</p>
            <h3 className="text-slate-900 text-lg font-bold mt-8 mb-4">6. Limitation of Liability</h3>
            <p>In no event shall DonauAI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
          </div>
        </div>
      </main>
      <InfoFooter />
    </div>
  )
}
