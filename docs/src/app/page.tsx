'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const today = dayjs().format('YYYY-MM-DD');
    router.replace(`/history/${today}`);
  }, [router]);

  return null;
}