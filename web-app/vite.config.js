import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        about: resolve(__dirname, 'about-us.html'),
        ai_brief_assistant: resolve(__dirname, 'ai-brief-assistant.html'),
        briefs: resolve(__dirname, 'briefs.html'),
        contact: resolve(__dirname, 'contact.html'),
        create_brief_ai: resolve(__dirname, 'create-brief-ai.html'),
        create_brief_manual: resolve(__dirname, 'create-brief-manual.html'),
        documentation: resolve(__dirname, 'documentation.html'),
        faq: resolve(__dirname, 'faq.html'),
        for_brands: resolve(__dirname, 'for-brands.html'),
        for_manufacturers: resolve(__dirname, 'for-manufacturers.html'),
        forgot_password: resolve(__dirname, 'forgot-password.html'),
        help_center: resolve(__dirname, 'help-center.html'),
        messages: resolve(__dirname, 'messages.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        product_categories: resolve(__dirname, 'product-categories.html'),
        report_issue: resolve(__dirname, 'report-issue.html'),
        signup: resolve(__dirname, 'signup.html'),
        status: resolve(__dirname, 'status.html'),
        success_stories: resolve(__dirname, 'success-stories.html'),
        support: resolve(__dirname, 'support.html'),
        terms: resolve(__dirname, 'terms.html')
      }
    }
  }
})
