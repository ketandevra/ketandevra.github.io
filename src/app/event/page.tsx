export default function Event() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Events</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Sample event card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Upcoming Event</h2>
          <p className="text-gray-600 mb-4">Event description goes here</p>
          <div className="text-sm text-gray-500">
            <p>Date: TBD</p>
            <p>Location: TBD</p>
          </div>
        </div>
      </div>
    </main>
  );
} 