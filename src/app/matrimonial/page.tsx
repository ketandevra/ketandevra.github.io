export default function Matrimonial() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">मैट्रिमोनियल्स</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <div className="max-w-2xl mx-auto text-center bg-white rounded-lg shadow-lg p-12">
        <div className="mb-8">
          <svg
            className="w-24 h-24 mx-auto text-gray-400 mb-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 className="text-3xl font-bold text-gray-700 mb-4">जल्द आ रहा है</h2>
          <p className="text-xl text-gray-600">
            हम आपके लिए एक बेहतर मैट्रिमोनियल सेवा तैयार कर रहे हैं। कृपया थोड़ा इंतज़ार करें।
          </p>
        </div>
      </div>
    </div>
  );
} 