export default function Accounts() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Account Management</h1>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Account Overview</h2>
          {/* Add account summary components here */}
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Account Details</h2>
          {/* Add account details/balances here */}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Transaction History</h2>
          {/* Add transaction history here */}
        </div>
      </div>
    </main>
  );
} 