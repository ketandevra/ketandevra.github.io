'use client';
import Link from 'next/link';

export default function Fund() {

  return (
    <main className="container mx-auto px-4 py-10 overflow-x-hidden">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-4">कोष विवरण</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        {/* <p className="mt-4 text-lg text-black">समाज पर समर्पित समिति सदस्यों की टीम</p> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-x-auto">
        <Link href="/income" className="block">
          <section className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-green-800">कोष</h2>
              <span className="text-green-700 hover:text-green-900">विवरण देखें →</span>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-medium mb-2 text-green-800">प्राप्त राशि</h3>
                <p className="text-xl font-bold text-green-700">₹148,000</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-medium mb-2 text-green-800">ब्याज अर्जित</h3>
                <p className="text-xl font-bold text-green-700">₹5,745</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-medium mb-2 text-green-800">कुल राशि</h3>
                <p className="text-xl font-bold text-green-700">₹153,745</p>
              </div>
            </div>
          </section>
        </Link>

        <Link href="/expenses" className="block">
          <section className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-red-800">खर्चे</h2>
              <span className="text-red-700 hover:text-red-900">विवरण देखें →</span>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-lg">
                <h3 className="font-medium mb-2 text-red-800">खर्च राशि</h3>
                <p className="text-xl font-bold text-red-700">₹13,100</p>
              </div>
            </div>
          </section>
        </Link>

        <Link href="#" className="block">
          <section className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-blue-800">खाता</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium mb-2 text-blue-800">शेष राशि</h3>
                <p className="text-xl font-bold text-blue-700">₹140,645</p>
              </div>
            </div>
          </section>
        </Link>
      </div>
    </main>
  );
}