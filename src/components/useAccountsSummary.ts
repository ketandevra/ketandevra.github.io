'use client';

import { useEffect, useState } from 'react';
import { AccountsSummary, getAccountsSummary } from '@/lib/accounts';

export default function useAccountsSummary() {
  const [summary, setSummary] = useState<AccountsSummary | null>(null);

  useEffect(() => {
    setSummary(getAccountsSummary(new Date()));
  }, []);

  return summary;
}
