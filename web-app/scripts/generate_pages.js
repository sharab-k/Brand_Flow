
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
    {filename: "for-brands.html", title: "For Brands"},
    {filename: "for-manufacturers.html", title: "For Manufacturers"},
    {filename: "ai-brief-assistant.html", title: "AI Brief Assistant"},
    {filename: "documentation.html", title: "API Documentation"},
    {filename: "help-center.html", title: "Help Center"},
    {filename: "product-categories.html", title: "Product Categories"},
    {filename: "success-stories.html", title: "Success Stories"},
    {filename: "about-us.html", title: "About Us"},
    {filename: "contact.html", title: "Contact"},
    {filename: "privacy.html", title: "Privacy Policy"},
    {filename: "terms.html", title: "Terms of Service"},
    {filename: "faq.html", title: "FAQ"},
    {filename: "support.html", title: "Contact Support"},
    {filename: "status.html", title: "System Status"},
    {filename: "report-issue.html", title: "Report an Issue"},
];

const template = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DonauAI - {title}</title>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
  </head>
  <body class="bg-gray-50 text-slate-800 antialiased font-sans flex flex-col min-h-screen">
    <div id="app" class="flex flex-col min-h-screen">
        <!-- Header -->
        <header class="bg-white border-b border-gray-100 flex-shrink-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <!-- Logo -->
                    <div class="flex items-center gap-10">
                        <a href="/" class="flex-shrink-0 flex items-center gap-2">
                            <img src="/donau-logo.png" alt="DonauAI" class="h-8">
                        </a>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
            <div class="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center">
                <h1 class="text-3xl font-bold text-slate-900 mb-4">{title}</h1>
                <p class="text-slate-500 mb-8">This page is currently under construction.</p>
                <div class="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
        </main>

        <!-- Footer -->
        <footer class="bg-white border-t border-gray-100 py-12 mt-auto">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
                <div class="col-span-1">
                  <img src="/donau-logo.png" alt="DonauAI" class="h-8 mb-4" />
                  <p class="text-sm text-slate-500 leading-relaxed">
                    AI-powered platform connecting brands with manufacturers
                  </p>
                </div>
                <div>
                  <h4 class="font-bold text-slate-900 mb-4">Platform</h4>
                  <ul class="space-y-2 text-sm text-slate-500">
                    <li><a href="index.html" class="hover:text-blue-600">Home</a></li>
                    <li><a href="for-brands.html" class="hover:text-blue-600">For Brands</a></li>
                    <li>
                      <a href="for-manufacturers.html" class="hover:text-blue-600">For Manufacturers</a>
                    </li>
                    <li>
                      <a href="ai-brief-assistant.html" class="hover:text-blue-600">AI Brief Assistant</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-bold text-slate-900 mb-4">Resources</h4>
                  <ul class="space-y-2 text-sm text-slate-500">
                    <li>
                      <a href="documentation.html" class="hover:text-blue-600">API Documentation</a>
                    </li>
                    <li><a href="help-center.html" class="hover:text-blue-600">Help Center</a></li>
                    <li>
                      <a href="product-categories.html" class="hover:text-blue-600">Product Categories</a>
                    </li>
                    <li>
                      <a href="success-stories.html" class="hover:text-blue-600">Success Stories</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-bold text-slate-900 mb-4">Company</h4>
                  <ul class="space-y-2 text-sm text-slate-500">
                    <li><a href="about-us.html" class="hover:text-blue-600">About Us</a></li>
                    <li><a href="contact.html" class="hover:text-blue-600">Contact</a></li>
                    <li>
                      <a href="privacy.html" class="hover:text-blue-600">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="terms.html" class="hover:text-blue-600">Terms of Service</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-bold text-slate-900 mb-4">Support</h4>
                  <ul class="space-y-2 text-sm text-slate-500">
                    <li><a href="faq.html" class="hover:text-blue-600">FAQ</a></li>
                    <li>
                      <a href="support.html" class="hover:text-blue-600">Contact Support</a>
                    </li>
                    <li>
                      <a href="status.html" class="hover:text-blue-600">System Status</a>
                    </li>
                    <li>
                      <a href="report-issue.html" class="hover:text-blue-600">Report an Issue</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500"
              >
                <p>&copy; 2026 DonauApp</p>
                <div class="flex items-center gap-6 mt-4 md:mt-0">
                    <!-- Social icons placeholder -->
                </div>
              </div>
            </div>
        </footer>
    </div>
    <script type="module" src="/main.js"></script>
  </body>
</html>`;

const baseDir = path.resolve(__dirname, '..');

pages.forEach(page => {
    const content = template.replace("{title}", page.title);
    const filePath = path.join(baseDir, page.filename);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Created ${page.filename}`);
});
