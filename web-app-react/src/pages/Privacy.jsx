import AppHeader from '../components/layout/AppHeader'
import InfoFooter from '../components/layout/InfoFooter'

export default function Privacy() {
  return (
    <div className="bg-gray-50 text-slate-800 antialiased font-sans flex flex-col min-h-screen">
      <AppHeader activeNav="dashboard" />
      <main className="flex-grow w-full bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto bg-white p-12 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-3xl font-bold text-slate-900 mb-8 pb-4 border-b border-gray-100">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none text-slate-600 text-sm">
            <p><strong>Last Updated: January 30, 2026</strong></p>
            <h3 className="text-slate-900 text-lg font-bold mt-8 mb-4">1. Introduction</h3>
            <p>Welcome to DonauAI. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this policy, or our practices with regards to your personal information, please contact us at privacy@donau.ai.</p>
            <h3 className="text-slate-900 text-lg font-bold mt-8 mb-4">2. Information We Collect</h3>
            <p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services or otherwise when you contact us.</p>
            <ul className="list-disc pl-5 space-y-2 my-4">
              <li><strong>Personal Data:</strong> Name, email address, postal address, phone number, and other similar contact data.</li>
              <li><strong>Credentials:</strong> Passwords, password hints, and similar security information used for authentication and account access.</li>
              <li><strong>Payment Data:</strong> Data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument.</li>
            </ul>
            <h3 className="text-slate-900 text-lg font-bold mt-8 mb-4">3. How We Use Your Information</h3>
            <p>We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
            <ul className="list-disc pl-5 space-y-2 my-4">
              <li>To facilitate account creation and logon process.</li>
              <li>To send you marketing and promotional communications.</li>
              <li>To fulfill and manage your orders.</li>
              <li>To protect our Services.</li>
            </ul>
            <h3 className="text-slate-900 text-lg font-bold mt-8 mb-4">4. Sharing Your Information</h3>
            <p>We may process or share your data that we hold based on the following legal basis:</p>
            <ul className="list-disc pl-5 space-y-2 my-4">
              <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
              <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
              <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
            </ul>
            <h3 className="text-slate-900 text-lg font-bold mt-8 mb-4">5. Contact Us</h3>
            <p>If you have questions or comments about this policy, you may email us at privacy@donau.ai or by post to:</p>
            <address className="not-italic mt-4 p-4 bg-gray-50 border border-gray-100 rounded-lg">
              DonauAI, Inc.<br />
              123 Innovation Drive<br />
              Berlin, 10115<br />
              Germany
            </address>
          </div>
        </div>
      </main>
      <InfoFooter />
    </div>
  )
}
