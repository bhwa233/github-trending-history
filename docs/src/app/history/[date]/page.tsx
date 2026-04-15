import { redirect } from 'next/navigation';
import { DEFAULT_LOCALE } from '@/i18n/config';

interface LegacyHistoryPageProps {
  params: Promise<{ date: string }>;
}

export default async function LegacyHistoryPage(props: LegacyHistoryPageProps) {
  const { date } = await props.params;
  redirect(`/${DEFAULT_LOCALE}/history/${date}`);
}
