import { redirect } from 'next/navigation';
import { DEFAULT_LOCALE } from '@/i18n/config';

interface LegacyLanguageDetailProps {
  params: Promise<{ language: string }>;
}

export default async function LegacyLanguageDetailPage(props: LegacyLanguageDetailProps) {
  const { language } = await props.params;
  redirect(`/${DEFAULT_LOCALE}/languages/${language}`);
}
