export default function ContactUs() {
  return (
    <main className="flex flex-col gap-8 items-center p-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Contact Us</h1>
      <div className="max-w-2xl w-full">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 bg-white dark:bg-gray-800 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 bg-white dark:bg-gray-800 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 bg-white dark:bg-gray-800 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Our Office</h3>
            <p className="text-gray-700 dark:text-gray-300">123 Business Street</p>
            <p className="text-gray-700 dark:text-gray-300">City, State 12345</p>
            <p className="text-gray-700 dark:text-gray-300">Country</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Contact Info</h3>
            <p className="text-gray-700 dark:text-gray-300">Email: info@example.com</p>
            <p className="text-gray-700 dark:text-gray-300">Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </main>
  );
} 