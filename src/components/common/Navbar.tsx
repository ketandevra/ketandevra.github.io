import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden sm:flex items-center justify-between px-6 py-2 bg-white dark:bg-gray-800 shadow-sm">
        <div className="flex items-center gap-3">
          <Image
            src="/ketandevra.github.io/logo.svg"
            alt="श्री क्षत्रीय घाँची युवा महासभा समिति Logo"
            width={32}
            height={32}
            priority
            className="w-8 h-8"
          />
          <Link href="/">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">श्री क्षत्रीय घाँची युवा महासभा समिति</span>
          </Link>
        </div>
        <div className="flex gap-6">
          <Link href="/fund" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">कोष</Link>
          <Link href="/event" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">कार्यक्रम</Link>
          <Link href="/committee" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">कमिटी</Link>
          <Link href="/blood-donor" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">रक्तदाता</Link>
          <Link href="/matrimonial" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">मैट्रिमोनियल्स</Link>
        </div>
      </nav>

      {/* Mobile Top Header */}
      <div className="sm:hidden flex items-center justify-center px-4 py-2 bg-white dark:bg-gray-800 shadow-sm">
        <span className="text-sm font-semibold text-gray-900 dark:text-white">श्री क्षत्रीय घाँची युवा महासभा समिति</span>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
        <div className="flex justify-around items-center h-16">
          <Link href="/" className="flex flex-col items-center gap-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs">होम</span>
          </Link>
          <Link href="/fund" className="flex flex-col items-center gap-1">
            <span className="text-xl font-semibold">₹</span>
            <span className="text-xs">कोष</span>
          </Link>
          <Link href="/event" className="flex flex-col items-center gap-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs">कार्यक्रम</span>
          </Link>
          <Link href="/committee" className="flex flex-col items-center gap-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-xs">कमिटी</span>
          </Link>
          <Link href="/blood-donor" className="flex flex-col items-center gap-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="text-xs">रक्तदाता</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;