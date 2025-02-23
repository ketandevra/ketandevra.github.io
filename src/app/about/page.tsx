export default function AboutUs() {
  return (
    <main className="flex flex-col gap-8 items-center p-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">About Us</h1>
      <div className="max-w-3xl text-center">
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Welcome to our company! We are dedicated to providing excellent service
          and innovative solutions to our customers.
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Our mission is to deliver high-quality products while maintaining the
          highest standards of customer satisfaction.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Our Vision</h3>
            <p className="text-gray-700 dark:text-gray-300">To become the leading provider in our industry</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Our Values</h3>
            <p className="text-gray-700 dark:text-gray-300">Integrity, Innovation, and Excellence</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Our Promise</h3>
            <p className="text-gray-700 dark:text-gray-300">Consistent quality and reliable service</p>
          </div>
        </div>
      </div>
    </main>
  );
} 