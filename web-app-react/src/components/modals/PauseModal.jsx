export default function PauseModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110]" aria-labelledby="pause-modal-title" role="dialog" aria-modal="true">
      <div 
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-[24px] bg-white px-8 pt-8 pb-8 text-center transition-all sm:my-8 sm:w-full sm:max-w-md shadow-2xl border border-slate-100">
            {/* Icon */}
            <div className="mx-auto flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#fef2f2] mb-6">
              <div className="h-[32px] w-[32px] rounded-full bg-[#ef4444] flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="mb-8">
              <h3 className="text-[20px] font-bold text-slate-900 mb-4" id="pause-modal-title">Pause Discussion with This Manufacturer</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed px-2">
                You've paused discussions with this manufacturer for now. You can return to this proposal anytime to resume or review.
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-3 flex flex-col items-center">
              <button 
                type="button" 
                onClick={onClose}
                className="w-full justify-center rounded-xl bg-blue-500 px-6 py-3.5 text-[15px] font-bold text-white hover:bg-blue-600 transition-all shadow-md shadow-blue-100 flex items-center"
              >
                Return Later
              </button>
              <button 
                type="button" 
                onClick={onClose}
                className="w-full justify-center rounded-xl bg-white px-6 py-3.5 text-[15px] font-bold text-blue-500 ring-1 ring-inset ring-blue-500 hover:bg-blue-50 transition-all flex items-center"
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
