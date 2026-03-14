import { Routes, Route } from 'react-router-dom'
import useLenis from './hooks/useLenis'

// Auth Pages
import SignIn from './pages/SignIn'
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
import SettingsOrganizationInfo from './pages/SettingsOrganizationInfo'
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
    <Routes>
      {/* Auth */}
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/otp-verification" element={<OTPVerification />} />
      <Route path="/create-new-password" element={<CreateNewPassword />} />
      <Route path="/password-successful" element={<PasswordSuccessful />} />

      {/* Dashboard & Briefs */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/briefs" element={<Briefs />} />
      <Route path="/briefs-invited" element={<BriefsInvited />} />
      <Route path="/brief-detail" element={<BriefDetail />} />
      <Route path="/create-brief-manual" element={<CreateBriefManual />} />
      <Route path="/create-brief-ai" element={<CreateBriefAI />} />
      <Route path="/ai-brief-assistant" element={<AIBriefAssistant />} />
      <Route path="/product-categories" element={<ProductCategories />} />

      {/* Messages & Settings */}
      <Route path="/messages" element={<Messages />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/settings-profile" element={<SettingsProfile />} />
      <Route path="/setting-organization-info" element={<SettingsOrganizationInfo />} />
      <Route path="/setting-security" element={<SettingsSecurity />} />
      <Route path="/settings-billing" element={<SettingsBilling />} />

      {/* Info Pages */}
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
  )
}

export default App
