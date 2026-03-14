import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AppHeader from '../components/layout/AppHeader'

const initialChat = [
  { id: 1, sender: 'ai', text: "Hi! I'll help you connect with manufacturers. What product do you want to create?" },
  { id: 2, sender: 'user', text: 'face cream' },
  { id: 3, sender: 'ai', text: "For a face cream, it looks like Category → Skincare and Form Factor → Cream make sense. I'm going to set them to those.\n--- What's your maximum budget? (Most manufacturers need at least €5,000)" },
  { id: 4, sender: 'user', text: '5000' },
  { id: 5, sender: 'ai', text: "Great, I'm setting your budget to €5,000. --- What key ingredients do you want?" },
  { id: 6, sender: 'user', text: 'whitening' },
  { id: 7, sender: 'ai', text: "Perfect, I'm adding whitening ingredients to your description.\n--- When do you need it delivered? (YYYY-MM-DD)" },
]

export default function CreateBriefAI() {
  const [chatHistory, setChatHistory] = useState(initialChat)
  const [currentMessage, setCurrentMessage] = useState('')
  const [briefData, setBriefData] = useState({
    title: 'Ever Green Apparel Co',
    category: 'Haircare',
    formFactor: 'Cream',
    description: 'Face cream with whitening ingredients.',
    minBudget: 1000,
    maxBudget: 5000,
    deliveryDate: '2028-03-01',
    flexibility: 30,
    requirements: 'To be determined with AI assistance',
  })
  const chatRef = useRef(null)

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight
  }, [chatHistory])

  const sendMessage = () => {
    if (!currentMessage.trim()) return
    setChatHistory(prev => [...prev, { id: Date.now(), sender: 'user', text: currentMessage }])
    setCurrentMessage('')
  }

  return (
    <div className="bg-gray-50 text-slate-800 antialiased font-sans h-screen flex flex-col">
      <AppHeader activeNav="dashboard" />

      <main className="flex-grow flex flex-col p-6 max-w-[1600px] mx-auto w-full h-[calc(100vh-64px)]">
        {/* Action Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 flex-shrink-0">
          <div>
            <h1 className="text-xl font-bold text-slate-900">AI Brief Assistant</h1>
            <p className="text-sm text-slate-500 mt-1">Create your product brief with AI assistance</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/briefs" className="whitespace-nowrap px-5 py-2 bg-white border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 font-medium text-sm transition-colors">Cancel</Link>
            <button className="whitespace-nowrap px-5 py-2 bg-white border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 font-medium text-sm transition-colors">Save Draft</button>
            <button className="whitespace-nowrap px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-sm shadow-sm shadow-blue-200 transition-colors">Share Brief</button>
          </div>
        </div>

        {/* Split Content */}
        <div className="flex-grow flex flex-col md:flex-row gap-6 overflow-hidden">
          {/* Left: Chat */}
          <div className="w-full md:w-1/2 bg-white rounded-2xl border border-gray-100 flex flex-col shadow-sm">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="font-bold text-slate-900">AI Assistant</span>
                <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider">Connected</span>
              </div>
              <button className="text-blue-600 text-xs font-medium border border-blue-200 rounded px-3 py-1 hover:bg-blue-50">Clear Chat</button>
            </div>
            <div ref={chatRef} className="flex-grow overflow-y-auto p-6 space-y-6">
              <p className="text-xs text-slate-400 mb-4">Ask questions to help create your brief</p>
              {chatHistory.map(msg => (
                <div key={msg.id} className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-xl p-4 text-sm leading-relaxed whitespace-pre-line ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-50 text-slate-700'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-100">
              <div className="relative flex items-center bg-gray-50 rounded-xl border border-gray-200 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all">
                <button className="p-3 text-slate-400 hover:text-slate-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                </button>
                <input type="text" value={currentMessage} onChange={e => setCurrentMessage(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendMessage()}
                  placeholder="Type your response..." className="flex-grow bg-transparent border-none focus:ring-0 text-sm py-3 px-2 placeholder-slate-400 outline-none" />
                <button onClick={sendMessage} className="p-2 mr-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <svg className="w-4 h-4 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Preview */}
          <div className="hidden md:flex md:w-1/2 bg-white rounded-2xl border border-gray-100 flex-col shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="font-bold text-slate-900">Brief Preview</h2>
              <p className="text-xs text-slate-500 mt-1">Live preview of your product brief</p>
            </div>
            <div className="flex-grow overflow-y-auto p-6">
              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1.5">Title</label>
                  <input type="text" value={briefData.title} onChange={e => setBriefData({...briefData, title: e.target.value})} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1.5">Category</label>
                  <select value={briefData.category} onChange={e => setBriefData({...briefData, category: e.target.value})} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-blue-500 outline-none appearance-none bg-white">
                    <option>Haircare</option><option>Skincare</option><option>Apparel</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1.5">Form Factor</label>
                  <select value={briefData.formFactor} onChange={e => setBriefData({...briefData, formFactor: e.target.value})} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-blue-500 outline-none appearance-none bg-white">
                    <option>Cream</option><option>Serum</option><option>Lotion</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1.5">Description</label>
                  <textarea value={briefData.description} onChange={e => setBriefData({...briefData, description: e.target.value})} rows="3" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-blue-500 outline-none resize-none"></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1.5">Min Budget</label>
                    <input type="number" value={briefData.minBudget} onChange={e => setBriefData({...briefData, minBudget: e.target.value})} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1.5">Max Budget</label>
                    <input type="number" value={briefData.maxBudget} onChange={e => setBriefData({...briefData, maxBudget: e.target.value})} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-blue-500 outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1.5">Desired Delivery Date</label>
                    <input type="text" value={briefData.deliveryDate} onChange={e => setBriefData({...briefData, deliveryDate: e.target.value})} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1.5">Flexibility (days)</label>
                    <input type="number" value={briefData.flexibility} onChange={e => setBriefData({...briefData, flexibility: e.target.value})} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-blue-500 outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1.5">Requirements</label>
                  <textarea value={briefData.requirements} onChange={e => setBriefData({...briefData, requirements: e.target.value})} rows="3" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-blue-500 outline-none resize-none"></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
