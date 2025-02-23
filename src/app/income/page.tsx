'use client';
import Link from 'next/link';

export default function Income() {
  const incomeData = {
    totalAmount: "₹1,53,745",
    receivedAmount: "₹1,48,000",
    interestEarned: "₹5,745",
    incomes: [
        {
            "serialNumber": "1",
            "date": "11-08-2024",
            "name": "रमेश परिहार (साबु)",
            "description": "Received from Ramesh Parihar (Saabu)",
            "amount": "₹50,000"
        },
        {
            "serialNumber": "2",
            "date": "01-09-2024",
            "name": "ब्याज अर्जित",
            "description": "Interest Earned",
            "amount": "₹258"
        },
        {
            "serialNumber": "3",
            "date": "01-10-2024",
            "name": "ब्याज अर्जित",
            "description": "Interest Earned",
            "amount": "₹371"
        },
        {
            "serialNumber": "4",
            "date": "09-10-2024",
            "name": "रमेश परिहार (साबु)",
            "description": "Received from Ramesh Parihar (Saabu)",
            "amount": "₹49,000"
        },
        {
            "serialNumber": "5",
            "date": "14-10-2024",
            "name": "रमेश परिहार (साबु)",
            "description": "Received from Ramesh Parihar (Saabu)",
            "amount": "₹49,000"
        },
        {
            "serialNumber": "6",
            "date": "01-11-2024",
            "name": "ब्याज अर्जित",
            "description": "Interest Earned",
            "amount": "₹979"
        },
        {
            "serialNumber": "7",
            "date": "01-12-2024",
            "name": "ब्याज अर्जित",
            "description": "Interest Earned",
            "amount": "₹1,365"
        },
        {
            "serialNumber": "8",
            "date": "01-01-2025",
            "name": "ब्याज अर्जित",
            "description": "Interest Earned",
            "amount": "₹1,379"
        },
        {
            "serialNumber": "9",
            "date": "01-02-2025",
            "name": "ब्याज अर्जित",
            "description": "Interest Earned",
            "amount": "₹1,393"
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
        <span className="text-gray-900">आय</span>
      </nav>

      <h1 className="text-4xl font-bold text-green-700 mb-8">आय प्रबंधन</h1>
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="mb-8 overflow-x-auto">
          <div className="min-w-[768px] md:min-w-full">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-100 p-4 rounded-lg border border-green-200">
                <h3 className="text-lg font-medium text-green-900">प्राप्त राशि</h3>
                <p className="text-3xl font-bold text-green-800">{incomeData.receivedAmount}</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg border border-blue-200">
                <h3 className="text-lg font-medium text-blue-900">कुल अर्जित ब्याज</h3>
                <p className="text-3xl font-bold text-blue-800">{incomeData.interestEarned}</p>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg border border-purple-200">
                <h3 className="text-lg font-medium text-purple-900">कुल राशि</h3>
                <p className="text-3xl font-bold text-purple-800">{incomeData.totalAmount}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[768px]">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-green-900 border border-green-200">
                    क्रम संख्या
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-green-900 border border-green-200">
                    दिनांक
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-green-900 border border-green-200">
                    नाम
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-green-900 border border-green-200">
                    विवरण
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-green-900 border border-green-200">
                    राशि
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...incomeData.incomes].reverse().map((income, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="border border-gray-200 px-4 py-2 text-gray-800">{income.serialNumber}</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-800">{income.date}</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-800">{income.name}</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-800">{income.description}</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-800">{income.amount}</td>
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