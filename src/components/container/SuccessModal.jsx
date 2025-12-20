import React from "react";

const SuccessModal = ({ isOpen, onClose, isDark }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
      {/* Overlay - Latar belakang gelap transparan dengan blur */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className={`relative w-full max-w-md transform transition-all duration-500 scale-100 animate-in fade-in zoom-in ${
        isDark ? "bg-[#1A1C1E] text-white border border-white/10" : "bg-white text-slate-900 shadow-2xl"
      } rounded-[2.5rem] overflow-hidden`}>
        
        {/* Top Section with Icon Background */}
        <div className={`h-48 flex items-center justify-center relative ${isDark ? "bg-gradient-to-b from-white/10 to-transparent" : "bg-gradient-to-b from-gray-50 to-white"}`}>
          <div className="relative">
            {/* Envelope Icon Container */}
            <div className="w-50 h-50 flex items-center justify-center animate-bounce">
                {/* Menggunakan path relatif yang benar untuk public folder di React */}
                <img 
                  src="/assets/images/Message.svg" 
                  alt="Success" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback jika gambar tidak ditemukan
                    e.target.src = "https://cdn-icons-png.flaticon.com/512/3124/3124749.png";
                  }}
                />
            </div>
            
           
          </div>

          {/* Tombol Close (X) di pojok kanan atas */}
          <button 
            onClick={onClose}
            className={`absolute top-6 right-6 p-2 rounded-full transition-colors ${isDark ? "hover:bg-white/10 text-gray-400" : "hover:bg-gray-100 text-gray-500"}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Text Content */}
        <div className="p-8 pt-2 text-center">
          <h3 className="text-3xl font-bold mb-3 tracking-tight">Success!</h3>
          <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-500"} mb-8 leading-relaxed`}>
            Your message has been received. We'll get back to you shortly!
          </p>

          {/* Button */}
          <button
            onClick={onClose}
            className="w-full bg-[#FF6A00] hover:bg-[#FF7A10] text-white font-extrabold py-5 rounded-2xl transition-all active:scale-95 shadow-lg shadow-[#FF6A00]/30 text-lg"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;