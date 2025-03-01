'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function Income() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Check if we've animated before in this session
    const hasAnimated = sessionStorage.getItem('incomeAnimated');
    if (!hasAnimated) {
      setShouldAnimate(true);
      sessionStorage.setItem('incomeAnimated', 'true');
    }
  }, []);

  const incomeData = {
    totalAmount: 155151,
    receivedAmount: 148000,
    interestEarned: 7151,
    incomes: [
        {
            "serialNumber": "1",
            "date": "11-08-2024",
            "name": "रमेश परिहार (साबु) से प्राप्त",
            "description": "Received from Ramesh Parihar (Saabu)",
            "amount": "50,000"
        },
        {
            "serialNumber": "2",
            "date": "01-09-2024",
            "name": "ब्याज अर्जित",
            "description": "Interest Earned",
            "amount": "258"
        },
        {
            "serialNumber": "3",
            "date": "01-10-2024",
            "name": "ब्याज अर्जित",
            "description": "Interest Earned",
            "amount": "371"
        },
        {
            "serialNumber": "4",
            "date": "09-10-2024",
            "name": "रमेश परिहार (साबु) से प्राप्त",
            "description": "Received from Ramesh Parihar (Saabu)",
            "amount": "49,000"
        },
        {
            "serialNumber": "5",
            "date": "14-10-2024",
            "name": "रमेश परिहार (साबु) से प्राप्त",
            "description": "Received from Ramesh Parihar (Saabu)",
            "amount": "49,000"
        },
        {
            "serialNumber": "6",
            "date": "01-11-2024",
            "name": "ब्याज अर्जित",
            "description": "Interest Earned",
            "amount": "979"
        },
        {
            "serialNumber": "7",
            "date": "01-12-2024",
            "name": "ब्याज अर्जित",
            "description": "Interest Earned",
            "amount": "1,365"
        },
        {
            "serialNumber": "8",
            "date": "01-01-2025",
            "name": "ब्याज अर्जित",
            "description": "Interest Earned",
            "amount": "1,379"
        },
        {
            "serialNumber": "9",
            "date": "01-02-2025",
            "name": "ब्याज अर्जित",
            "description": "Interest Earned",
            "amount": "1,393"
        },
        {
          "serialNumber": "10",
          "date": "01-03-2025",
          "name": "ब्याज अर्जित",
          "description": "Interest Earned",
          "amount": "1,406"
        }
    ]
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    
    // Use default font
    doc.setFont("times", "normal");
    
    // Add organization name at top
    doc.setFontSize(20);
    doc.text("Shri Kshatriya Ghanchi Yuva Mahasabha, Pali", doc.internal.pageSize.width/2, 20, { align: "center" });
    
    // Add horizontal line
    doc.setLineWidth(0.5);
    doc.line(20, 25, doc.internal.pageSize.width - 20, 25);
    
    // Title
    doc.setFontSize(16);
    doc.text("Income Management", doc.internal.pageSize.width/2, 40, { align: "center" });
    
    // Summary boxes
    doc.setFontSize(12);
    doc.text(`Received Amount: ${incomeData.receivedAmount.toLocaleString()}`, 20, 60);
    doc.text(`Total Interest Earned: ${incomeData.interestEarned.toLocaleString()}`, 20, 70);
    doc.text(`Total Amount: ${incomeData.totalAmount.toLocaleString()}`, 20, 80);

    // Table
    autoTable(doc, {
      startY: 90,
      head: [['Sr. No.', 'Date', 'Particulars', 'Amount']],
      body: incomeData.incomes.map(income => [
        income.serialNumber,
        income.date,
        income.description,
        income.amount
      ]),
      styles: {
        fontSize: 10
      },
      headStyles: {
        fillColor: [0, 128, 0],
        textColor: 255,
        fontSize: 10,
        fontStyle: 'bold'
      },
      alternateRowStyles: {
        fillColor: [240, 240, 240]
      }
    });

    // Add footer
    doc.setFontSize(10);
    doc.text("© Shri Kshatriya Ghanchi Yuva Mahasabha, Pali", doc.internal.pageSize.width/2, doc.internal.pageSize.height - 10, { align: "center" });

    doc.save('income-report.pdf');
  };

  return (
    <main className="px-4 py-8 overflow-x-hidden">
      {/* Back Button and Title */}
      <div className="mb-8">
        <div className="mb-4 sm:hidden">
          <Link 
            href="/fund" 
            className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 rounded-lg border border-green-200 dark:border-green-700 hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            वापस जाएं
          </Link>
        </div>
        <div className="relative hidden sm:block">
          <Link 
            href="/fund" 
            className="absolute left-0 top-1/2 -translate-y-1/2 inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 rounded-lg border border-green-200 dark:border-green-700 hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            वापस जाएं
          </Link>
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-green-700 dark:text-green-400 text-center flex-grow">आय प्रबंधन</h1>
            <button
              onClick={exportToPDF}
              className="inline-flex items-center px-4 py-2 bg-green-600 dark:bg-green-700 text-white rounded-lg border border-green-600 dark:border-green-700 hover:bg-green-700 dark:hover:bg-green-800 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Print PDF
            </button>
          </div>
        </div>
        <div className="sm:hidden flex justify-between items-center">
          <h1 className="text-3xl font-bold text-green-700 dark:text-green-400">आय प्रबंधन</h1>
          <button
            onClick={exportToPDF}
            className="inline-flex items-center px-4 py-2 bg-green-600 dark:bg-green-700 text-white rounded-lg border border-green-600 dark:border-green-700 hover:bg-green-700 dark:hover:bg-green-800 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            PDF निर्यात करें
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6">
        <div className="mb-8">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-shadow duration-300">
                <h3 className="text-lg font-medium text-green-900 dark:text-green-300">प्राप्त राशि</h3>
                <p className="text-3xl font-bold text-green-800 dark:text-green-400">
                  ₹{!shouldAnimate ? (
                    "148,000"
                  ) : (
                    <CountUp 
                      end={incomeData.receivedAmount} 
                      duration={2.5}
                      separator=","
                      preserveValue={true}
                    />
                  )}
                </p>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-shadow duration-300">
                <h3 className="text-lg font-medium text-blue-900 dark:text-blue-300">कुल ब्याज अर्जित</h3>
                <p className="text-3xl font-bold text-blue-800 dark:text-blue-400">
                  ₹{!shouldAnimate ? (
                    "7,151"
                  ) : (
                    <CountUp 
                      end={incomeData.interestEarned} 
                      duration={2.5}
                      separator=","
                      preserveValue={true}
                    />
                  )}
                </p>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-shadow duration-300">
                <h3 className="text-lg font-medium text-purple-900 dark:text-purple-300">कुल राशि</h3>
                <p className="text-3xl font-bold text-purple-800 dark:text-purple-400">
                  ₹{!shouldAnimate ? (
                    "155,151"
                  ) : (
                    <CountUp 
                      end={incomeData.totalAmount} 
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
                <tr className="bg-green-50 dark:bg-green-900/30">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-green-900 dark:text-green-300 border border-green-200 dark:border-green-800">
                    क्रम संख्या
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-green-900 dark:text-green-300 border border-green-200 dark:border-green-800">
                    दिनांक
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-green-900 dark:text-green-300 border border-green-200 dark:border-green-800">
                    नाम
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-green-900 dark:text-green-300 border border-green-200 dark:border-green-800">
                    विवरण
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-green-900 dark:text-green-300 border border-green-200 dark:border-green-800">
                    राशि
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...incomeData.incomes].reverse().map((income, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700/50' : 'bg-white dark:bg-gray-800'}>
                    <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-300">{income.serialNumber}</td>
                    <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-300">{income.date}</td>
                    <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-300">{income.name}</td>
                    <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-300">{income.description}</td>
                    <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-300">₹{income.amount}</td>
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