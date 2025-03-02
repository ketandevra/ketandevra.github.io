import { events } from "../data";
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  return events.map((event) => ({
    id: event.id.toString(),
  }));
}

export default async function EventDetail({ params }: { params: { id: string } }) {
  const event = events.find((e) => e.id === Number(params?.id));

  if (!event) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            कार्यक्रम नहीं मिला
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          href="/event"
          className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-lg border border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          वापस जाएं
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden">
        {/* Event Image */}
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <Image
            src={event.photo}
            alt={event.NameHindi}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Event Details */}
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {event.NameHindi}
          </h1>

          <div className="flex flex-wrap gap-4 mb-6 text-sm md:text-base text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{event.location}</span>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
              {event.DescriptionHindi}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
