'use client'
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Suspense } from "react";
import { Github } from "lucide-react";
import { Button } from "./ui/button";
import type { SiteLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

interface SiteHeaderContentProps {
    locale: SiteLocale;
}

export function SiteHeaderContent({ locale }: SiteHeaderContentProps) {
    const messages = getMessages(locale);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center ">
                <Link href={`/${locale}`} className="font-semibold text-lg hover:underline underline-offset-4">
                    {messages.siteName}
                </Link>
                <div className="flex flex-1 items-center  space-x-2 justify-end">
                    <nav aria-label={messages.nav.mainAriaLabel} className="flex items-center space-x-4">
                        <Link href={`/${locale}`} className="text-sm text-muted-foreground hover:text-foreground">
                            {messages.nav.home}
                        </Link>
                        <Link href={`/${locale}/languages`} className="text-sm text-muted-foreground hover:text-foreground">
                            {messages.nav.languages}
                        </Link>
                        <Link href={`/${locale}/topics`} className="text-sm text-muted-foreground hover:text-foreground">
                            {messages.nav.topics}
                        </Link>
                        <ModeToggle />
                        <Button variant="outline" size="icon" onClick={()=>{
                            window.open('https://github.com/lxw15337674/github-trending-history')
                        }}>
                            <Github />
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

interface SiteHeaderProps {
    locale?: SiteLocale;
}

export function SiteHeader({ locale = 'zh-CN' }: SiteHeaderProps) {
    const messages = getMessages(locale);

    return (
        <Suspense fallback={<div>{messages.nav.loading}</div>}>
            <SiteHeaderContent locale={locale} />
        </Suspense>
    );
}
