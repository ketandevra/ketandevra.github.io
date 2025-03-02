import { Suspense } from 'react';
import EventDetailClient from './EventDetailClient';

export default function EventDetail() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EventDetailClient />
    </Suspense>
  );
}
