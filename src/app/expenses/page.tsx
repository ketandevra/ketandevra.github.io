'use client';
import Link from 'next/link';

export default function Expenses() {
  const expensesData = {
    totalExpenses: "₹13,100",
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
        date: "2024-03-01",
        name: "पोहा",
        description: "रामदेवरा के लिए पोहा",
        amount: "₹8,100"
      }
    ]
  };

  return (
    <main className="container mx-auto px-4 py-8 overflow-x-hidden">
      {/* Breadcrumbs */}
      <nav className="flex mb-4 text-sm">
        <Link href="/fund" className="text-gray-500 hover:text-gray-700">
          कोष
        </Link>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-900">खर्च</span>
      </nav>

      <h1 className="text-4xl font-bold text-red-700 mb-8">खर्च प्रबंधन</h1>
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="mb-8 overflow-x-auto">
          <div className="min-w-[768px] md:min-w-full">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-red-100 p-4 rounded-lg border border-red-200">
                <h3 className="text-lg font-medium text-red-900">खर्च राशि</h3>
                <p className="text-3xl font-bold text-red-800">{expensesData.totalExpenses}</p>
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