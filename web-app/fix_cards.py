import re

with open('dashboard.html', 'r', encoding='utf-8') as f:
    html = f.read()

# I will replace the block from "<!-- Brief Card 1 - Draft -->" to the end of Card 3
start_marker = r'<!-- Brief Card 1 - Draft -->'
end_marker = r'<!-- Brief Card 3 - Invited -->\s*<div class="bg-gray-50 p-4 sm:p-5 rounded-xl flex flex-col relative group">[\s\S]*?</div>\s*</div>'

cards_html = """              <!-- Brief Card 1 - Draft -->
              <div class="bg-gray-50 p-4 sm:p-5 rounded-xl flex flex-col relative group border border-transparent">
                <!-- Mobile Header -->
                <div class="flex justify-between items-center mb-3 sm:hidden w-full">
                  <div class="flex items-center gap-2">
                    <span class="bg-[#e0f2fe] text-[#0ea5e9] text-[13px] px-3 py-1 rounded-full font-medium">In Discussion</span>
                    <svg class="w-[18px] h-[18px] text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <a href="brief-detail.html" class="text-[13.5px] font-medium flex items-center gap-1.5 text-[#3b82f6]">
                    View Details
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path></svg>
                  </a>
                </div>

                <!-- Desktop Header -->
                <div class="hidden sm:flex justify-between items-start mb-3">
                  <div class="flex items-center gap-2">
                    <h3 class="text-base font-bold text-slate-900">Premium Vitamin D3 Supplement</h3>
                    <div class="flex items-center gap-1.5">
                      <span class="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded-full font-semibold border border-slate-200 uppercase tracking-wide">Draft</span>
                      <svg class="w-4 h-4 text-slate-400 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <a href="brief-detail.html" class="text-xs font-medium flex items-center gap-1 text-[#3B82F6]">
                    View Details
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>

                <!-- Content -->
                <h3 class="text-[15px] sm:text-base font-bold text-slate-900 mb-1 sm:hidden">Premium Vitamin D3 Supplement</h3>
                <p class="text-[14px] text-slate-500 mb-4 sm:hidden">Evergreenapparel.co</p>
                <p class="text-sm text-slate-500 mb-4 hidden sm:block line-clamp-2">This brief is being created with AI assistance. The AI will help you fill in the details.</p>

                <!-- Tags -->
                <div class="flex gap-2.5 flex-wrap">
                  <span class="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full sm:rounded-lg border border-slate-200 bg-white text-[13px] sm:text-xs font-medium text-slate-700 sm:text-slate-600">
                    <svg class="w-4 h-4 sm:w-3.5 sm:h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    Dietry Supplements
                  </span>
                  <span class="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full sm:rounded-lg border border-slate-200 bg-white text-[13px] sm:text-xs font-medium text-slate-700 sm:text-slate-600">
                    <svg class="w-4 h-4 sm:w-3.5 sm:h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    €1000 - €100000
                  </span>
                </div>
              </div>

              <!-- Brief Card 2 - Active -->
              <div class="bg-gray-50 p-4 sm:p-5 rounded-xl flex flex-col relative group border border-transparent">
                <!-- Mobile Header -->
                <div class="flex justify-between items-center mb-3 sm:hidden w-full">
                  <div class="flex items-center gap-2">
                    <span class="bg-[#dcfce7] text-[#166534] text-[13px] px-3 py-1 rounded-full font-medium">Active</span>
                    <svg class="w-[18px] h-[18px] text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <a href="brief-detail.html" class="text-[13.5px] font-medium flex items-center gap-1.5 text-[#3b82f6]">
                    View Details
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path></svg>
                  </a>
                </div>

                <!-- Desktop Header -->
                <div class="hidden sm:flex justify-between items-start mb-3">
                  <div class="flex items-center gap-2">
                    <h3 class="text-base font-bold text-slate-900">Premium Vitamin D3 Supplement</h3>
                    <div class="flex items-center gap-1.5">
                      <span class="bg-green-50 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-semibold border border-green-200 uppercase tracking-wide">Active</span>
                      <svg class="w-4 h-4 text-slate-400 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <a href="brief-detail.html" class="text-xs font-medium flex items-center gap-1 text-[#3B82F6]">
                    View Details
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>

                <!-- Content -->
                <h3 class="text-[15px] sm:text-base font-bold text-slate-900 mb-1 sm:hidden">Premium Vitamin D3 Supplement</h3>
                <p class="text-[14px] text-slate-500 mb-4 sm:hidden">Evergreenapparel.co</p>
                <p class="text-sm text-slate-500 mb-4 hidden sm:block line-clamp-2">This brief is being created with AI assistance. The AI will help you fill in the details.</p>

                <!-- Tags -->
                <div class="flex gap-2.5 flex-wrap">
                  <span class="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full sm:rounded-lg border border-slate-200 bg-white text-[13px] sm:text-xs font-medium text-slate-700 sm:text-slate-600">
                    <svg class="w-4 h-4 sm:w-3.5 sm:h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    Dietry Supplements
                  </span>
                  <span class="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full sm:rounded-lg border border-slate-200 bg-white text-[13px] sm:text-xs font-medium text-slate-700 sm:text-slate-600">
                    <svg class="w-4 h-4 sm:w-3.5 sm:h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    €1000 - €100000
                  </span>
                </div>
              </div>

              <!-- Brief Card 3 - Invited -->
              <div class="bg-gray-50 p-4 sm:p-5 rounded-xl flex flex-col relative group border border-transparent">
                <!-- Mobile Header -->
                <div class="flex justify-between items-center mb-3 sm:hidden w-full">
                  <div class="flex items-center gap-2">
                    <span class="bg-[#ffedd5] text-[#c2410c] text-[13px] px-3 py-1 rounded-full font-medium">Invited</span>
                    <svg class="w-[18px] h-[18px] text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <a href="brief-detail.html" class="text-[13.5px] font-medium flex items-center gap-1.5 text-[#3b82f6]">
                    View Details
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path></svg>
                  </a>
                </div>

                <!-- Desktop Header -->
                <div class="hidden sm:flex justify-between items-start mb-3">
                  <div class="flex items-center gap-2">
                    <h3 class="text-base font-bold text-slate-900">Premium Vitamin D3 Supplement</h3>
                    <div class="flex items-center gap-1.5">
                      <span class="bg-orange-50 text-orange-700 text-[10px] px-2 py-0.5 rounded-full font-semibold border border-orange-200 uppercase tracking-wide">Invited</span>
                      <svg class="w-4 h-4 text-slate-400 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <a href="brief-detail.html" class="text-xs font-medium flex items-center gap-1 text-[#3B82F6]">
                    View Details
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>

                <!-- Content -->
                <h3 class="text-[15px] sm:text-base font-bold text-slate-900 mb-1 sm:hidden">Premium Vitamin D3 Supplement</h3>
                <p class="text-[14px] text-slate-500 mb-4 sm:hidden">Evergreenapparel.co</p>
                <p class="text-sm text-slate-500 mb-4 hidden sm:block line-clamp-2">This brief is being created with AI assistance. The AI will help you fill in the details.</p>

                <!-- Tags -->
                <div class="flex gap-2.5 flex-wrap">
                  <span class="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full sm:rounded-lg border border-slate-200 bg-white text-[13px] sm:text-xs font-medium text-slate-700 sm:text-slate-600">
                    <svg class="w-4 h-4 sm:w-3.5 sm:h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    Dietry Supplements
                  </span>
                  <span class="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full sm:rounded-lg border border-slate-200 bg-white text-[13px] sm:text-xs font-medium text-slate-700 sm:text-slate-600">
                    <svg class="w-4 h-4 sm:w-3.5 sm:h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    €1000 - €100000
                  </span>
                </div>
              </div>"""

new_html = re.sub(start_marker + r'.*?' + end_marker, cards_html, html, flags=re.DOTALL)

with open('dashboard.html', 'w', encoding='utf-8') as f:
    f.write(new_html)
print("File successfully modified.")
