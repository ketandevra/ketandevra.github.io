'use client';

import CountUp from 'react-countup';
import { formatInr } from '@/lib/accounts';

export default function AnimatedAmount({
  amount,
  animate,
}: {
  amount: number | null;
  animate: boolean;
}) {
  if (amount == null) {
    return <>—</>;
  }

  if (!animate) {
    return <>{formatInr(amount)}</>;
  }

  return (
    <CountUp
      end={amount}
      duration={2.5}
      preserveValue
      formattingFn={(value) => formatInr(Math.round(value))}
    />
  );
}
