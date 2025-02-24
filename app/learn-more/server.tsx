import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
   
    return {
      title: 'Learn More',
      description:  'Learn more about Bromuno',
      openGraph: {
        title:  'Learn More',
        description: 'Learn more about Brmouno',
        images: [{ url: '/default-og-image.jpg' }],
        url: `https://yourdomain.com/blog/}`,
        type: 'article',
      },
    };
  }
