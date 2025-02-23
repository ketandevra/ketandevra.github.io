export default function Committee() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Committee Members</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Sample committee member card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Member Name</h2>
          <p className="text-gray-600">Position</p>
        </div>
      </div>
    </main>
  );
} 