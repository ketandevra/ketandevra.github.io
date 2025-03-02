"use client";
import Image from "next/image";
import Link from "next/link";
import { events } from "./data";
import { useRouter } from "next/navigation";

interface Event {
  id: number;
  NameHindi: string;
  DescriptionHindi: string;
  date: string;
  location: string;
  photo: string;
}

export default function Event() {
  const router = useRouter();

  const handleEventClick = (event: Event) => {
    router.push(`/event/detail?id=${event.id}`);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          कार्यक्रम
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...events].reverse().map((event) => (
          <div
            onClick={() => handleEventClick(event)}
            key={event.id}
            className="block bg-white dark:bg-gray-800 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-shadow duration-300 overflow-hidden cursor-pointer"
          >
            <div className="aspect-[3/3] w-full relative">
              <Image
                src={event.photo}
                alt={event.NameHindi}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {event.NameHindi}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-5">
                {event.DescriptionHindi}
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p className="mb-1">📅 {event.date}</p>
                <p>📍 {event.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
