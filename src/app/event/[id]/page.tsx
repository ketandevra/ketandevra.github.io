import Image from 'next/image';
import Link from 'next/link';
import { events } from '../data';

export async function generateStaticParams() {
  return events.map((event) => ({
    id: event.id.toString(),
  }));
}

export const dynamic = 'force-static';

export default async function EventDetail({
  params,
}: {
  params: { id: string }
}) {
  const event = events.find(e => e.id === Number(params.id));

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            कार्यक्रम नहीं मिला
          </h1>
          <Link 
            href="/event"
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            वापस जाएं
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/event"
          className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-6 transition-colors"
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
              strokeWidth="2" 
              d="M15 19l-7-7 7-7"
            />
          </svg>
          वापस जाएं
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="relative aspect-video w-full">
            <Image 
              src={event.photo}
              alt={event.NameHindi}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="p-6 md:p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {event.NameHindi}
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <span className="mr-2">📅</span>
                {event.date}
              </div>
              <div className="flex items-center">
                <span className="mr-2">📍</span>
                {event.location}
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="whitespace-pre-wrap text-gray-700 dark:text-gray-300">
                {event.DescriptionHindi}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 