import { redirect } from 'next/navigation';
import { DEFAULT_LOCALE } from '@/i18n/config';

interface LegacyTopicDetailProps {
  params: Promise<{ topic: string }>;
}

export default async function LegacyTopicDetailPage(props: LegacyTopicDetailProps) {
  const { topic } = await props.params;
  redirect(`/${DEFAULT_LOCALE}/topics/${topic}`);
}
