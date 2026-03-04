import os

dir_path = r"c:\Users\Airaf\Downloads\New folder (4)\Brand_Flow-main\web-app"

new_bell = """            <div class="relative flex items-center">
              <button id="notification-button" data-dropdown-trigger data-dropdown-target="notification-dropdown"
                  class="text-[#64748b] hover:text-[#0e1726] transition-colors relative h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-50 outline-none">
                  <i class="ph ph-bell text-[20px]"></i>
              </button>
              <!-- Notification Dropdown -->
              <div id="notification-dropdown" data-dropdown-content
                  class="hidden absolute right-0 mt-3 top-full w-[85vw] max-w-[280px] md:w-[300px] animate-fade-in rounded-[10px] border border-[#e2e8f0] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden text-left z-50">
                  <div class="flex items-center justify-between border-b border-[#e2e8f0] px-4 py-3 bg-white">
                      <h4 class="text-[14px] font-bold text-[#0e1726]">Notifications</h4>
                      <a href="javascript:void(0)"
                          class="text-[12px] font-medium text-[#448ae6] hover:underline">Mark all as read</a>
                  </div>
                  <div class="max-h-[340px] overflow-y-auto w-full bg-white">
                      <div class="p-3 border-b border-[#e2e8f0] bg-[#f8fafc] hover:bg-gray-50 transition-colors cursor-pointer w-full text-left">
                          <div class="flex items-start justify-between mb-1 gap-2">
                              <h5 class="text-[13px] font-bold text-[#0e1726] flex-1 leading-tight m-0">New Proposal Received</h5>
                              <span class="text-[11px] text-[#64748b] whitespace-nowrap">Today</span>
                          </div>
                          <p class="text-[12px] text-[#64748b] leading-relaxed text-left w-full break-words m-0">Ecopack solutions submitted a proposal for "sustainable packaging fororganic skincare line"</p>
                      </div>
                      <div class="p-3 border-b border-[#e2e8f0] hover:bg-gray-50 transition-colors cursor-pointer w-full text-left bg-white">
                          <div class="flex items-start justify-between mb-1 gap-2">
                              <h5 class="text-[13px] font-bold text-[#0e1726] flex-1 leading-tight m-0">Proposal Accepted</h5>
                              <span class="text-[11px] text-[#64748b] whitespace-nowrap">Yesterday</span>
                          </div>
                          <p class="text-[12px] text-[#64748b] leading-relaxed text-left w-full break-words m-0">Your proposal for "industrial metal components" has been accepted by TechMatch industries</p>
                      </div>
                      <div class="p-3 border-b border-[#e2e8f0] hover:bg-gray-50 transition-colors cursor-pointer w-full text-left bg-white">
                          <div class="flex items-start justify-between mb-1 gap-2">
                              <h5 class="text-[13px] font-bold text-[#0e1726] flex-1 leading-tight m-0">New Brief Invitation</h5>
                              <span class="text-[11px] text-[#64748b] whitespace-nowrap">14/01/2026</span>
                          </div>
                          <p class="text-[12px] text-[#64748b] leading-relaxed text-left w-full break-words m-0">You have bee invited to submit a proposal for " Custom Furniture for Hotel Chain"</p>
                      </div>
                      <div class="p-3 border-b border-[#e2e8f0] hover:bg-gray-50 transition-colors cursor-pointer w-full text-left bg-white">
                          <div class="flex items-start justify-between mb-1 gap-2">
                              <h5 class="text-[13px] font-bold text-[#0e1726] flex-1 leading-tight m-0">New Brief Invitation</h5>
                              <span class="text-[11px] text-[#64748b] whitespace-nowrap">12/01/2026</span>
                          </div>
                          <p class="text-[12px] text-[#64748b] leading-relaxed text-left w-full break-words m-0">You have bee invited to submit a proposal for " Custom Furniture for Hotel Chain"</p>
                      </div>
                      <div class="p-3 hover:bg-gray-50 transition-colors cursor-pointer w-full text-left bg-white">
                          <div class="flex items-start justify-between mb-1 gap-2">
                              <h5 class="text-[13px] font-bold text-[#0e1726] flex-1 leading-tight m-0">New Brief Invitation</h5>
                              <span class="text-[11px] text-[#64748b] whitespace-nowrap">1 month ago</span>
                          </div>
                          <p class="text-[12px] text-[#64748b] leading-relaxed text-left w-full break-words m-0">You have bee invited to submit a proposal for " Custom Furniture for Hotel Chain"</p>
                      </div>
                  </div>
              </div>
            </div>"""

phosphor_script = '<!-- Phosphor Icons -->\n  <script src="https://unpkg.com/@phosphor-icons/web"></script>'

modified_count = 0
for filename in os.listdir(dir_path):
    if not filename.endswith('.html'):
        continue
    
    file_path = os.path.join(dir_path, filename)
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the right actions block
    search_str = '<!-- Right Actions -->\n          <div class="flex items-center gap-3">'
    idx = content.find(search_str)
    
    if idx == -1:
        # Some headers might have slightly different spacing, try a more flexible search
        search_flex = '<!-- Right Actions -->'
        if content.find(search_flex) == -1:
            continue
    
    # Locate the bell icon by finding the specific SVG path
    bell_path_str = 'M15 17h5l-1.405-1.405'
    if bell_path_str not in content:
        continue

    # Find exact boundaries:
    # After `<div class="flex items-center gap-3">`
    # Before `<div class="w-px h-5 bg-gray-200 mx-1"></div>`
    
    start_marker = '<div class="flex items-center gap-3">'
    end_marker = '<div class="w-px h-5 bg-gray-200 mx-1"></div>'
    
    right_actions_idx = content.find('<!-- Right Actions -->')
    flex_container_idx = content.find(start_marker, right_actions_idx)
    
    if flex_container_idx == -1:
        print(f"Skipping {filename}: could not find flex container")
        continue
        
    start_replace = flex_container_idx + len(start_marker)
    end_replace = content.find(end_marker, start_replace)
    
    if end_replace == -1:
        print(f"Skipping {filename}: could not find end marker")
        continue
    
    # Check if bell icon is in this block
    if bell_path_str not in content[start_replace:end_replace]:
        print(f"Skipping {filename}: bell icon not in extraction block")
        continue

    # Replace the block
    new_content = content[:start_replace] + "\n" + new_bell + "\n\n            " + content[end_replace:]
        
    # Inject Phosphor Icons if needed
    if 'unpkg.com/@phosphor-icons' not in new_content:
        head_close_idx = new_content.find('</head>')
        if head_close_idx != -1:
            new_content = new_content[:head_close_idx] + "  " + phosphor_script + "\n" + new_content[head_close_idx:]
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    modified_count += 1
    print(f"Modified {filename}")

print(f"Total files modified: {modified_count}")
