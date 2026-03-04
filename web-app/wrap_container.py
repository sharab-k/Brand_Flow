import re
from pathlib import Path

file_path = Path("briefs.html")
content = file_path.read_text("utf-8")

# We want to wrap from <!-- Filters --> down to <!-- Pagination --> inclusive
# in a container that has the border.

start_marker = "      <!-- Filters -->"
end_marker = "      <!-- Pagination -->"
end_marker_end = "Showing 1 to 5 of 15 results</p>\n          <div class=\"flex items-center gap-1\">\n            <button class=\"px-2 py-1 hover:bg-gray-100 rounded\">&lt;</button>\n            <button class=\"px-2 py-1 bg-blue-600 text-white rounded\">1</button>\n            <button class=\"px-2 py-1 hover:bg-gray-100 rounded\">2</button>\n            <button class=\"px-2 py-1 hover:bg-gray-100 rounded\">3</button>\n            <button class=\"px-2 py-1 hover:bg-gray-100 rounded\">4</button>\n            <button class=\"px-2 py-1 hover:bg-gray-100 rounded\">5</button>\n            <span class=\"px-2\">...</span>\n            <button class=\"px-2 py-1 hover:bg-gray-100 rounded\">12</button>\n            <button class=\"px-2 py-1 hover:bg-gray-100 rounded\">&gt;</button>\n          </div>\n        </div>"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker_end) + len(end_marker_end)

if start_idx != -1 and end_idx != -1:
    section_to_wrap = content[start_idx:end_idx]
    
    # Modify the Filters div to remove its own border, shadow, and background if we wrap it all
    # Or just keep it. The Figma shows the search and filter are inside the top of the main container.
    section_to_wrap = section_to_wrap.replace(
        'class="bg-white p-3 rounded-2xl border border-gray-200 shadow-sm mb-6 flex flex-col md:flex-row justify-between items-center gap-4"',
        'class="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-t-2xl border-b border-gray-100"'
    )
    
    # Modify individual brief cards to remove their borders and shadow and adjust background
    # Looking at Figma, cards don't have borders, they are just light grey rects grouped together inside white
    section_to_wrap = section_to_wrap.replace(
        'class="bg-slate-50 p-6 rounded-[20px] border border-gray-100 relative group"',
        'class="bg-slate-50 p-6 rounded-xl mx-4 relative group"'
    )
    section_to_wrap = section_to_wrap.replace(
        'class="bg-slate-50 p-6 rounded-[20px] border border-gray-100"',
        'class="bg-slate-50 p-6 rounded-xl mx-4"'
    )

    # Wrap the whole thing
    wrapped_section = f"""      <!-- Main List Container -->
      <div class="bg-white rounded-2xl border border-gray-200 shadow-sm mb-8">
{section_to_wrap}
      </div>"""
      
    # Modify the space-y-4 of the list
    wrapped_section = wrapped_section.replace('<div class="space-y-4">', '<div class="space-y-4 py-4">')
    
    # Modify pagination to match new container bottom padding
    wrapped_section = wrapped_section.replace(
        '<div class="flex justify-between items-center mt-8 text-xs text-slate-500">',
        '<div class="flex justify-between items-center px-4 py-4 border-t border-gray-100 text-xs text-slate-500 bg-white rounded-b-2xl">'
    )

    new_content = content[:start_idx] + wrapped_section + content[end_idx:]
    file_path.write_text(new_content, "utf-8")
    print("Successfully wrapped content")
else:
    print("Failed to find markers")
