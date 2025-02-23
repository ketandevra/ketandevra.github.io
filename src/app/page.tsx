import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      {/* Banner Image */}
      <div className="w-full aspect-[16/7] relative">
        <Image
          src="/ketandevra.github.io/images/banner.png"
          alt="Banner Image"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main Sections */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Funds Section */}
          <Link href="/fund" className="group">
            <div className="border rounded-lg hover:shadow-lg transition-shadow bg-white">
              <div className="w-full aspect-[3/2] relative">
                <Image
                  src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop"
                  alt="Funds"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2 text-gray-900">कोष</h2>
                <p className="text-sm text-gray-700 mb-2">
                  हमारे उपलब्ध कोष और निवेश अवसरों का अन्वेषण करें.
                </p>
                <p className="text-sm text-blue-600 group-hover:text-blue-800 flex items-center gap-2">
                  अधिक दिखाएं
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </Link>

          {/* Events Section */}
          <Link href="/event" className="group">
            <div className="border rounded-lg hover:shadow-lg transition-shadow bg-white">
              <div className="w-full aspect-[3/2] relative">
                <Image
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
                  alt="Events"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2 text-gray-900">
                  कार्यक्रम
                </h2>
                <p className="text-sm text-gray-700 mb-2">
                  हमारे आगामी कार्यक्रमों और गतिविधियों को देखें.
                </p>
                <p className="text-sm text-blue-600 group-hover:text-blue-800 flex items-center gap-2">
                  अधिक दिखाएं
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </Link>

          {/* Committee Section */}
          <Link href="/committee" className="group">
            <div className="border rounded-lg hover:shadow-lg transition-shadow bg-white">
              <div className="w-full aspect-[3/2] relative">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop"
                  alt="Committee"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2 text-gray-900">कमिटी</h2>
                <p className="text-sm text-gray-700 mb-2">
                  हमारे समिति सदस्य और नेतृत्व टीम से मिलें.
                </p>
                <p className="text-sm text-blue-600 group-hover:text-blue-800 flex items-center gap-2">
                  अधिक दिखाएं
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </Link>

          {/* Blood Donor Section */}
          <Link href="/blood-donor" className="group">
            <div className="border rounded-lg hover:shadow-lg transition-shadow bg-white">
              <div className="w-full aspect-[3/2] relative">
                <Image
                  src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=2070&auto=format&fit=crop"
                  alt="Blood Donor"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2 text-gray-900">
                  रक्तदाता
                </h2>
                <p className="text-sm text-gray-700 mb-2">
                  रक्त दाताओं से जुड़ें और जानें बचाएं.
                </p>
                <p className="text-sm text-blue-600 group-hover:text-blue-800 flex items-center gap-2">
                  अधिक दिखाएं
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </Link>

          {/* Matrimonial Section */}
          <Link href="/matrimonial" className="group">
            <div className="border rounded-lg hover:shadow-lg transition-shadow bg-white">
              <div className="w-full aspect-[3/2] relative">
                <Image
                  src="https://images.unsplash.com/photo-1583939411023-14783179e581?q=80&w=2070&auto=format&fit=crop"
                  alt="Indian Wedding Ceremony"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2 text-gray-900">
                  मैट्रिमोनियल्स
                </h2>
                <p className="text-sm text-gray-700 mb-2">
                  विवाह योग्य उम्मीदवारों की जानकारी प्राप्त करें।
                </p>
                <p className="text-sm text-blue-600 group-hover:text-blue-800 flex items-center gap-2">
                  Show more 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
