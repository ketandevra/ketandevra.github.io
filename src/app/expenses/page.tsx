'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function Expenses() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

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
    doc.text("Expenses Management", doc.internal.pageSize.width/2, 40, { align: "center" });
    
    // Summary box
    doc.setFontSize(12);
    doc.text(`Total Expenses: ${expensesData.totalExpenses.toLocaleString()}`, 20, 60);

    // Table
    autoTable(doc, {
      startY: 70,
      head: [['Sr. No.', 'Date', 'Particulars', 'Amount']],
      body: expensesData.expenses.map(expense => [
        expense.serialNumber,
        expense.date,
        expense.description,
        expense.amount
      ]),
      styles: {
        fontSize: 10
      },
      headStyles: {
        fillColor: [220, 38, 38], // Red color for expenses
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

    doc.save('expenses-report.pdf');
  };

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
        name: "स्मार्ट कार्ड कैंप पर खर्च",
        description: "Expenses on smart card camp",
        amount: "170"
      },
      {
        serialNumber: "2",
        date: "06-08-2024",
        name: "दूध पैकेट्स",
        description: "Milk packets",
        amount: "4,000"
      },
      {
        serialNumber: "3",
        date: "10-08-2024",
        name: "HSRP कैंप पर खर्च",
        description: "Expenses on HSRP camp",
        amount: "1,000"
      },
      {
        serialNumber: "4",
        date: "25-08-2024",
        name: "रामदेवरा यात्रियों के लिए पोहा",
        description: "Poha for Ramdevra travelers",
        amount: "8,100"
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
            className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 text-red-600 dark:text-red-400 rounded-lg border border-red-200 dark:border-red-700 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
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
            className="absolute left-0 top-1/2 -translate-y-1/2 inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 text-red-600 dark:text-red-400 rounded-lg border border-red-200 dark:border-red-700 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            वापस जाएं
          </Link>
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-red-700 dark:text-red-400 text-center flex-grow">खर्च प्रबंधन</h1>
            <button
              onClick={exportToPDF}
              className="inline-flex items-center px-4 py-2 bg-red-600 dark:bg-red-700 text-white rounded-lg border border-red-600 dark:border-red-700 hover:bg-red-700 dark:hover:bg-red-800 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Print PDF
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6">
        <div className="mb-8">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-shadow duration-300">
                <h3 className="text-lg font-medium text-red-900 dark:text-red-300">खर्च राशि</h3>
                <p className="text-3xl font-bold text-red-800 dark:text-red-400">
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
                <tr className="bg-red-50 dark:bg-red-900/30">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-red-900 dark:text-red-300 border border-red-200 dark:border-red-800">
                    क्रम संख्या
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-red-900 dark:text-red-300 border border-red-200 dark:border-red-800">
                    दिनांक
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-red-900 dark:text-red-300 border border-red-200 dark:border-red-800">
                    नाम
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-red-900 dark:text-red-300 border border-red-200 dark:border-red-800">
                    विवरण
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-red-900 dark:text-red-300 border border-red-200 dark:border-red-800">
                    राशि
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...expensesData.expenses].reverse().map((expense, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700/50' : 'bg-white dark:bg-gray-800'}>
                    <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-300">{expense.serialNumber}</td>
                    <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-300">{expense.date}</td>
                    <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-300">{expense.name}</td>
                    <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-300">{expense.description}</td>
                    <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-300">₹{expense.amount}</td>
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