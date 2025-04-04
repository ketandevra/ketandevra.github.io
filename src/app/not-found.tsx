import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          We can&apos;t seem to find the page you&apos;re looking for.
        </p>
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          Return Home
        </Link>
      </div>
    </div>
  );
} 