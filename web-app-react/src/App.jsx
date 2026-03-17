import { Routes, Route } from 'react-router-dom'
import useLenis from './hooks/useLenis'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/auth/ProtectedRoute'

// Auth Pages
import SignIn from './pages/SignIn'
// ... (rest of imports remain same)
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import OTPVerification from './pages/OTPVerification'
import CreateNewPassword from './pages/CreateNewPassword'
import PasswordSuccessful from './pages/PasswordSuccessful'

// Dashboard & Briefs
import Dashboard from './pages/Dashboard'
import Briefs from './pages/Briefs'
import BriefsInvited from './pages/BriefsInvited'
import BriefDetail from './pages/BriefDetail'
import CreateBriefManual from './pages/CreateBriefManual'
import CreateBriefAI from './pages/CreateBriefAI'
import AIBriefAssistant from './pages/AIBriefAssistant'
import ProductCategories from './pages/ProductCategories'

// Messages & Settings
import Messages from './pages/Messages'
import Settings from './pages/Settings'
import SettingsProfile from './pages/SettingsProfile'
import SettingsOrgInfo from './pages/SettingsOrgInfo'
import SettingsSecurity from './pages/SettingsSecurity'
import SettingsBilling from './pages/SettingsBilling'

// Info Pages
import AboutUs from './pages/AboutUs'
import ForBrands from './pages/ForBrands'
import ForManufacturers from './pages/ForManufacturers'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import HelpCenter from './pages/HelpCenter'
import Support from './pages/Support'
import Documentation from './pages/Documentation'
import Status from './pages/Status'
import SuccessStories from './pages/SuccessStories'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import ReportIssue from './pages/ReportIssue'

function App() {
  useLenis()

  return (
    <AuthProvider>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        <Route path="/create-new-password" element={<CreateNewPassword />} />
        <Route path="/password-successful" element={<PasswordSuccessful />} />

        {/* Protected Dashboard & Briefs */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/briefs" element={<ProtectedRoute><Briefs /></ProtectedRoute>} />
        <Route path="/briefs-invited" element={<ProtectedRoute><BriefsInvited /></ProtectedRoute>} />
        <Route path="/brief-detail" element={<ProtectedRoute><BriefDetail /></ProtectedRoute>} />
        <Route path="/create-brief-manual" element={<ProtectedRoute><CreateBriefManual /></ProtectedRoute>} />
        <Route path="/create-brief-ai" element={<ProtectedRoute><CreateBriefAI /></ProtectedRoute>} />
        <Route path="/ai-brief-assistant" element={<ProtectedRoute><AIBriefAssistant /></ProtectedRoute>} />
        <Route path="/product-categories" element={<ProtectedRoute><ProductCategories /></ProtectedRoute>} />

        {/* Protected Messages & Settings */}
        <Route path="/messages" element={<ProtectedRoute><Messages /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path="/settings-profile" element={<ProtectedRoute><SettingsProfile /></ProtectedRoute>} />
        <Route path="/setting-organization-info" element={<ProtectedRoute><SettingsOrgInfo /></ProtectedRoute>} />
        <Route path="/setting-security" element={<ProtectedRoute><SettingsSecurity /></ProtectedRoute>} />
        <Route path="/settings-billing" element={<ProtectedRoute><SettingsBilling /></ProtectedRoute>} />

        {/* Info Pages (Public) */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/for-brands" element={<ForBrands />} />
        <Route path="/for-manufacturers" element={<ForManufacturers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/support" element={<Support />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/status" element={<Status />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/report-issue" element={<ReportIssue />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
