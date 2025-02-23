'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';

export default function Expenses() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Check if we've animated before in this session
    const hasAnimated = sessionStorage.getItem('expensesAnimated');
    if (!hasAnimated) {
      setShouldAnimate(true);
      sessionStorage.setItem('expensesAnimated', 'true');
    }
  }, []);
  
  const expensesData = {
    totalExpenses: 13100,
    expenses: [
      {
        serialNumber: "1",
        date: "24-07-2024",
        name: "स्मार्ट कार्ड कैंप",
        description: "स्मार्ट कार्ड कैंप पर खर्च",
        amount: "₹170"
      },
      {
        serialNumber: "2",
        date: "06-08-2024",
        name: "दूध पैकेट्स",
        description: "दूध पैकेट्स",
        amount: "₹4,000"
      },
      {
        serialNumber: "3",
        date: "10-08-2024",
        name: "HSRP कैंप",
        description: "HSRP कैंप पर खर्च",
        amount: "₹1,000"
      },
      {
        serialNumber: "4",
        date: "25-08-2024",
        name: "पोहा",
        description: "रामदेवरा के लिए पोहा",
        amount: "₹8,100"
      }
    ]
  };

  return (
    <main className="px-4 py-8 overflow-x-hidden">
      {/* Back Button */}
      <div className="mb-8">
        <div className="mb-4 sm:hidden">
          <Link 
            href="/fund" 
            className="inline-flex items-center px-4 py-2 bg-white text-red-600 rounded-lg border border-red-200 hover:bg-red-50 transition-colors"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            वापस जाएं
          </Link>
        </div>
        <div className="relative hidden sm:block">
          <Link 
            href="/fund" 
            className="absolute left-0 top-1/2 -translate-y-1/2 inline-flex items-center px-4 py-2 bg-white text-red-600 rounded-lg border border-red-200 hover:bg-red-50 transition-colors"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            वापस जाएं
          </Link>
          <h1 className="text-3xl font-bold text-red-700 text-center">खर्च प्रबंधन</h1>
        </div>
        <h1 className="sm:hidden text-3xl font-bold text-red-700 text-center">खर्च प्रबंधन</h1>
      </div>

      <div className="bg-white rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6">
        <div className="mb-8">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-red-100 p-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-shadow duration-300">
                <h3 className="text-lg font-medium text-red-900">खर्च राशि</h3>
                <p className="text-3xl font-bold text-red-800">
                  ₹{!shouldAnimate ? (
                    "13,100"
                  ) : (
                    <CountUp 
                      end={expensesData.totalExpenses} 
                      duration={2.5}
                      separator=","
                      preserveValue={true}
                    />
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[768px]">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-red-50">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-red-900 border border-red-200">
                    क्रम संख्या
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-red-900 border border-red-200">
                    दिनांक
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-red-900 border border-red-200">
                    नाम
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-red-900 border border-red-200">
                    विवरण
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-red-900 border border-red-200">
                    राशि
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...expensesData.expenses].reverse().map((expense, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="border border-gray-200 px-4 py-2 text-gray-800">{expense.serialNumber}</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-800">{expense.date}</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-800">{expense.name}</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-800">{expense.description}</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-800">{expense.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
} 