import { useState, useEffect, useRef } from 'react'

export default function AIChatWidget() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const toggleRef = useRef(null)
  const sidebarRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target) &&
          toggleRef.current && !toggleRef.current.contains(e.target) &&
          sidebarOpen) {
        setSidebarOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [sidebarOpen])

  return (
    <>
      {/* Floating AI Button */}
      <button
        ref={toggleRef}
        onClick={(e) => {
          e.stopPropagation()
          setSidebarOpen(prev => !prev)
        }}
        id="ai-chat-toggle"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg text-white flex items-center justify-center transition-transform hover:scale-105 focus:outline-none z-[90]"
        style={{ background: 'linear-gradient(135deg, #3B82F6, #2563EB)' }}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z">
          </path>
        </svg>
      </button>

      {/* AI Assistant Popup */}
      {sidebarOpen && (
        <div
          ref={sidebarRef}
          id="ai-sidebar"
          className="fixed bottom-24 right-6 z-[100] w-[380px] bg-white rounded-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col overflow-hidden border border-[#e2e8f0] transition-all duration-300 origin-bottom-right"
          style={{ height: '520px' }}>
          {/* Header */}
          <div className="px-5 py-4 border-b border-[#e2e8f0] flex items-center justify-between bg-white">
            <div className="flex items-center gap-3">
              <div className="text-[#3B82F6] flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h2 className="text-[16px] font-bold text-[#0e1726] leading-tight">Donau AI Assistant</h2>
            </div>
            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              id="close-ai-sidebar"
              className="text-[#64748b] hover:text-[#0e1726] focus:outline-none p-1.5 hover:bg-gray-50 rounded-full transition-colors flex-shrink-0">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-5 bg-white flex flex-col gap-4">
            <div className="bg-[#f0f7ff] text-[#0f172a] rounded-[10px] p-4 text-[14px] leading-relaxed w-[92%]">
              I&apos;m here to help you analyze new briefs, draft competitive proposals, or answer questions about active invites.
            </div>
          </div>

          {/* Input Area */}
          <div className="p-5 border-t border-[#e2e8f0] bg-white">
            <div className="relative flex items-center gap-3">
              <input
                type="text"
                className="block w-full rounded-xl border border-[#e2e8f0] py-[10px] px-4 text-[14px] text-[#0f172a] placeholder:text-[#94a3b8] focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6] transition-colors"
                placeholder="Type your response..."
              />
              <button
                className="bg-[#3B82F6] text-white rounded-xl hover:bg-[#2563eb] transition-colors shadow-sm focus:outline-none flex-shrink-0 flex items-center justify-center h-[42px] w-[42px]">
                <svg className="w-5 h-5 block transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  style={{ marginLeft: '-2px' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
