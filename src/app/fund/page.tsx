'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import CountUp from 'react-countup';

export default function Fund() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Check if we've animated before in this session
    const hasAnimated = sessionStorage.getItem('fundAnimated');
    if (!hasAnimated) {
      setShouldAnimate(true);
      sessionStorage.setItem('fundAnimated', 'true');
    }
  }, []);

  return (
    <main className="px-4 py-10 overflow-x-hidden">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">कोष विवरण</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        {/* <p className="mt-4 text-lg text-black">समाज पर समर्पित समिति सदस्यों की टीम</p> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/income" className="block">
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-shadow duration-300 cursor-pointer">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-green-800 dark:text-green-400">कोष</h2>
              <span className="text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300">विवरण देखें →</span>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <h3 className="font-medium mb-2 text-green-800 dark:text-green-400">कुल राशि</h3>
                <p className="text-xl font-bold text-green-700 dark:text-green-400">
                  ₹{!shouldAnimate ? (
                    "161,688"
                  ) : (
                    <CountUp 
                      end={161688} 
                      duration={2.5}
                      separator="," 
                      onEnd={() => setShouldAnimate(false)}
                    />
                  )}
                </p>
              </div>
            </div>
          </section>
        </Link>

        <Link href="/expenses" className="block">
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-shadow duration-300 cursor-pointer">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-red-800 dark:text-red-400">खर्चे</h2>
              <span className="text-red-700 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300">विवरण देखें →</span>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
                <h3 className="font-medium mb-2 text-red-800 dark:text-red-400">खर्च राशि</h3>
                <p className="text-xl font-bold text-red-700 dark:text-red-400">
                  ₹{!shouldAnimate ? (
                    "97,276"
                  ) : (
                    <CountUp 
                      end={97276} 
                      duration={2.5} 
                      separator="," 
                      onEnd={() => setShouldAnimate(false)}
                    />
                  )}
                </p>
              </div>
            </div>
          </section>
        </Link>

        <Link href="#" className="block">
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-shadow duration-300 cursor-pointer">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-400">खाता</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <h3 className="font-medium mb-2 text-blue-800 dark:text-blue-400">शेष राशि</h3>
                <p className="text-xl font-bold text-blue-700 dark:text-blue-400">
                  ₹{!shouldAnimate ? (
                    "64,412"
                  ) : (
                    <CountUp 
                      end={64412} 
                      duration={2.5}
                      separator="," 
                      onEnd={() => setShouldAnimate(false)}
                    />
                  )}
                </p>
              </div>
            </div>
          </section>
        </Link>
      </div>
    </main>
  );
}