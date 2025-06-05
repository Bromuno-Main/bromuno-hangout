import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: 'Bromuno Hangout - Connect and Collaborate',
        template: '%s | Bromuno Hangout'
    },
    description: 'Connect with fellow developers, join events, find jobs, and collaborate on projects.',
    keywords: ['social network', 'developers', 'collaboration', 'events', 'jobs', 'projects'],
    authors: [{ name: 'Bromuno Team' }],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://bromuno-hangout.com',
        title: 'Bromuno Hangout - Connect and Collaborate',
        description: 'Connect with fellow developers, join events, find jobs, and collaborate on projects.',
        siteName: 'Bromuno Hangout',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Bromuno Hangout'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Bromuno Hangout - Connect and Collaborate',
        description: 'Connect with fellow developers, join events, find jobs, and collaborate on projects.',
        images: ['/og-image.png']
    },
    robots: {
        index: true,
        follow: true
    },
    icons: "/fav.svg",
};
