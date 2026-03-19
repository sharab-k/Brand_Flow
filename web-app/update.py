import re

def update_header():
    base_dir = r"c:\Users\Airaf\Downloads\New folder (4)\Brand_Flow-main\web-app"
    dashboard_path = base_dir + r"\dashboard.html"
    briefs_path = base_dir + r"\briefs.html"
    
    with open(dashboard_path, "r", encoding="utf-8") as f:
        dash_content = f.read()
        
    with open(briefs_path, "r", encoding="utf-8") as f:
        briefs_content = f.read()
        
    # Extract header from dashboard
    header_match = re.search(r'(    <!-- Header -->\n    <header .*?</header>)', dash_content, re.DOTALL)
    if not header_match:
        print("Could not find dashboard header")
        return
        
    header_html = header_match.group(1)
    
    # In the header_html, the dashboard link is active and briefs is inactive.
    # Dashboard link
    dash_active_class = 'text-blue-500 font-medium text-xs flex items-center gap-2 border-b-2 border-blue-500 pb-[21px] mt-[21px]'
    dash_inactive_class = 'text-slate-500 hover:text-slate-900 font-medium text-xs flex items-center gap-2 transition-colors'
    
    # Replace dashboard class
    header_html = header_html.replace(dash_active_class, dash_inactive_class, 1)
    
    # Replace briefs class. Note we want to replace the FIRST occurrence in the specific <a href="briefs.html"> block.
    # It's easier just to do string replacement since we know the structure.
    # Wait, the string 'text-slate-500 hover:text-slate-900 font-medium text-xs flex items-center gap-2 transition-colors'
    # appears multiple times (for Briefs, Messages).
    # We can split the nav block and modify it carefully.
    
    nav_match = re.search(r'(<nav.*?</nav>)', header_html, re.DOTALL)
    if nav_match:
        nav_html = nav_match.group(1)
        # Regex to find briefs link
        # <a href="briefs.html"\n                class="text-slate-500 hover:text-slate-900 font-medium text-xs flex items-center gap-2 transition-colors">
        nav_html_new = nav_html.replace(
            '<a href="briefs.html"\n                class="text-slate-500 hover:text-slate-900 font-medium text-xs flex items-center gap-2 transition-colors">',
            '<a href="briefs.html"\n                class="text-blue-500 font-medium text-xs flex items-center gap-2 border-b-2 border-blue-500 pb-[21px] mt-[21px]">'
        )
        
        # Also need to make dashboard inactive
        nav_html_new = nav_html_new.replace(
            '<a href="#"\n                class="text-blue-500 font-medium text-xs flex items-center gap-2 border-b-2 border-blue-500 pb-[21px] mt-[21px]">',
            '<a href="dashboard.html"\n                class="text-slate-500 hover:text-slate-900 font-medium text-xs flex items-center gap-2 transition-colors">'
        )
        
        header_html = header_html.replace(nav_html, nav_html_new)
    
    # Replace the briefs header
    briefs_content_new = re.sub(r'    <!-- Header -->\n    <header .*?</header>', header_html, briefs_content, flags=re.DOTALL)
    
    with open(briefs_path, "w", encoding="utf-8") as f:
        f.write(briefs_content_new)
        
    print("Updated briefs.html")

update_header()
