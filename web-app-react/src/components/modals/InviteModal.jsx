export default function InviteModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110]" aria-labelledby="invite-modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          {/* Modal Panel */}
          <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg border border-gray-100">
            <div className="bg-white px-6 pb-6 pt-5 sm:p-8 sm:pb-6">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 sm:mx-0 sm:h-12 sm:w-12 border border-blue-100 mb-6 sm:mb-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:ml-6 sm:mt-0 sm:text-left flex-1">
                  <h3 className="text-[20px] font-bold text-slate-900 mb-4" id="invite-modal-title">Invite Manufacturers</h3>
                  <div className="mb-6">
                    <p className="text-[14px] text-slate-500 mb-3 leading-relaxed">
                      Select multiple manufacturers to invite to your brief. We've pre-selected the best matches based on your specific requirements.
                    </p>
                  </div>
                  
                  {/* Manufacturers List */}
                  <div className="space-y-3 max-h-[240px] overflow-y-auto pr-2 custom-scrollbar">
                    {/* Item 1 */}
                    <div className="flex items-center p-3 rounded-xl border border-blue-100 bg-blue-50/50 hover:bg-blue-50 transition-colors cursor-pointer group">
                      <div className="relative flex items-center justify-center w-5 h-5 mr-4">
                        <input type="checkbox" className="peer w-5 h-5 appearance-none border-2 border-slate-300 rounded focus:ring-blue-500 focus:ring-2 focus:ring-offset-1 transition-all cursor-pointer checked:bg-blue-600 checked:border-blue-600" defaultChecked />
                        <svg className="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-[14px] font-bold text-slate-900">EcoPack Solutions</p>
                        <p className="text-[12px] text-slate-500">98% Match Score</p>
                      </div>
                      <span className="text-[11px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Top Match</span>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center p-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer group">
                      <div className="relative flex items-center justify-center w-5 h-5 mr-4">
                        <input type="checkbox" className="peer w-5 h-5 appearance-none border-2 border-slate-300 rounded focus:ring-blue-500 focus:ring-2 focus:ring-offset-1 transition-all cursor-pointer checked:bg-blue-600 checked:border-blue-600" />
                        <svg className="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-[14px] font-bold text-slate-900">GreenThread Manufacturing</p>
                        <p className="text-[12px] text-slate-500">92% Match Score</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-4 sm:flex sm:flex-row-reverse sm:px-8">
              <button 
                type="button" 
                onClick={onClose}
                className="inline-flex w-full justify-center rounded-xl bg-blue-600 px-6 py-2.5 text-[14px] font-bold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto transition-colors"
              >
                Send Invites (1)
              </button>
              <button 
                type="button" 
                onClick={onClose}
                className="mt-3 inline-flex w-full justify-center rounded-xl bg-white px-6 py-2.5 text-[14px] font-bold text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 md:mt-0 sm:w-auto transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
