import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      {/* Banner Image */}
      <div className="w-full aspect-[16/7] relative">
        <Image
          src="/images/banner.png"
          alt="Banner Image"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main Sections */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          {/* Funds Section */}
          <Link href="/fund" className="group">
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white flex items-center gap-6">
              <div className="w-32 h-32 relative flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop"
                  alt="Funds"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">कोष</h2>
                <p className="text-gray-700 mb-2">Explore our available funds and investment opportunities.</p>
                <p className="text-blue-600 group-hover:text-blue-800 flex items-center gap-2">
                  Show more 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </p>
              </div>
            </div>
          </Link>

          {/* Events Section */}
          <Link href="/event" className="group">
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white flex items-center gap-6">
              <div className="w-32 h-32 relative flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
                  alt="Events"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">कार्यक्रम</h2>
                <p className="text-gray-700 mb-2">Check out our upcoming events and activities.</p>
                <p className="text-blue-600 group-hover:text-blue-800 flex items-center gap-2">
                  Show more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </p>
              </div>
            </div>
          </Link>

          {/* Committee Section */}
          <Link href="/committee" className="group">
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white flex items-center gap-6">
              <div className="w-32 h-32 relative flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop"
                  alt="Committee"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">कमिटी</h2>
                <p className="text-gray-700 mb-2">Meet our committee members and leadership team.</p>
                <p className="text-blue-600 group-hover:text-blue-800 flex items-center gap-2">
                  Show more 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
