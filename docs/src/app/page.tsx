import dayjs from 'dayjs';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function Page() {
  const today = dayjs().format('YYYY-MM-DD');
  redirect(`/history/${today}`);
}