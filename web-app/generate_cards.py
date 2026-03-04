import re
from pathlib import Path

html_content = """        <!-- Brief Card 1 (Draft) -->
        <div class="bg-slate-50 p-6 rounded-[20px] border border-gray-100 relative group">
          <div class="flex justify-between items-start mb-4">
            <div>
              <div class="flex items-center gap-3">
                <h3 class="text-[16px] font-bold text-slate-900">Premium Vitamin D3 Supplement</h3>
                <span class="bg-[#F1F5F9] text-gray-600 text-[12px] px-3 py-0.5 rounded-full font-medium tracking-wide">Draft</span>
                <span class="text-gray-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </span>
              </div>
              <p class="text-[14px] text-slate-500 mt-2">This brief is being created with AI assistance. The AI will help you fill in the details.</p>
            </div>
            
            <div class="flex items-center gap-3">
              <button class="px-8 py-2 border border-blue-500 text-blue-500 rounded-lg font-medium text-[13px] hover:bg-blue-50 transition-colors bg-transparent">View</button>
              <div class="relative">
                <button class="text-blue-500 hover:bg-blue-50 p-1.5 rounded-lg transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                  </svg>
                </button>
                <!-- Popover Menu -->
               <div class="hidden group-hover:block absolute right-0 top-10 w-48 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-xl border border-gray-100 py-2 z-20 animate-fade-in-up">
                  <button class="w-full text-left px-4 py-2 text-[13px] font-medium text-slate-600 hover:bg-slate-50 flex items-center gap-3"><svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Mark as Ready</button>
                  <button class="w-full text-left px-4 py-2 text-[13px] font-medium text-slate-600 hover:bg-slate-50 flex items-center gap-3"><svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg> Edit</button>
                  <button class="w-full text-left px-4 py-2 text-[13px] font-medium text-slate-600 hover:bg-slate-50 flex items-center gap-3"><svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg> Delete</button>
                  <button class="w-full text-left px-4 py-2 text-[13px] font-medium text-slate-600 hover:bg-slate-50 flex items-center gap-3"><svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg> Duplicate</button>
                  <button class="w-full text-left px-4 py-2 text-[13px] font-medium text-slate-600 hover:bg-slate-50 flex items-center gap-3"><svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg> Export as PDF</button>
               </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap items-center gap-3 text-[13px] text-slate-600 font-medium font-inter">
            <span class="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200">
              <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              Dietary Supplements
            </span>
            <span class="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200">
              <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              €1000 - €100000 USD
            </span>
            <span class="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200">
              <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              5 Invited
            </span>
            <span class="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200">
              <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              3 Proposals
            </span>
            <span class="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200">
              <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              12/02/2026
            </span>
          </div>
        </div>

"""

cards_data = [
    ("Active", "bg-blue-100 text-blue-600", "12/02/2026", "calendar"),
    ("Invited", "bg-indigo-100 text-indigo-600", "12/02/2026", "calendar"),
    ("Matched", "bg-[#FEF6E1] text-[#D97706]", "2 days ago", "clock"), # Matched is yellow
    ("Proposal Received", "bg-cyan-100 text-cyan-600", "12/02/2026", "calendar")
]

for idx, (status, pill_class, time_str, icon_type) in enumerate(cards_data):
    if icon_type == "calendar":
        time_icon = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>'
    else:
        time_icon = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>'
        
    card = f"""        <!-- Brief Card {idx+2} ({status}) -->
        <div class="bg-slate-50 p-6 rounded-[20px] border border-gray-100">
          <div class="flex justify-between items-start mb-4">
            <div>
              <div class="flex items-center gap-3">
                <h3 class="text-[16px] font-bold text-slate-900">Premium Vitamin D3 Supplement</h3>
                <span class="{pill_class} text-[12px] px-3 py-0.5 rounded-full font-medium tracking-wide">{status}</span>
                <span class="text-gray-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </span>
              </div>
              <p class="text-[14px] text-slate-500 mt-2">This brief is being created with AI assistance. The AI will help you fill in the details.</p>
            </div>
            
            <div class="flex items-center gap-3">
              <button class="px-8 py-2 border border-blue-500 text-blue-500 rounded-lg font-medium text-[13px] hover:bg-blue-50 transition-colors bg-transparent">View</button>
              <button class="text-blue-500 hover:bg-blue-50 p-1.5 rounded-lg transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="flex flex-wrap items-center gap-3 text-[13px] text-slate-600 font-medium font-inter">
            <span class="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200">
              <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              Dietary Supplements
            </span>
            <span class="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200">
              <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              €1000 - €100000 USD
            </span>
            <span class="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200">
              <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              5 Invited
            </span>
            <span class="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200">
              <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              3 Proposals
            </span>
            <span class="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200">
              <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">{time_icon}</svg>
              {time_str}
            </span>
          </div>
        </div>
"""
    html_content += card

html_content = html_content.strip()

file_path = Path("briefs.html")
content = file_path.read_text("utf-8")
import re
new_content = re.sub(
    r'<!-- Brief Card 1 \(Draft\).*?<div class="flex justify-between items-center mt-8',
    html_content + '\n\n        <!-- Pagination -->\n        <div class="flex justify-between items-center mt-8',
    content,
    flags=re.DOTALL
)

file_path.write_text(new_content, "utf-8")
print("Successfully replaced content")
