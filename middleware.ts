// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define paths that belong to the authentication group
const authPaths = ['/login', '/register'];

// Define root path
const rootPath = '/';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('bromuno-hangout-token');
    const path = request.nextUrl.pathname;

    const isAuthPath = authPaths.includes(path);
    const isRootPath = path === rootPath;


    if (!token && isAuthPath) {
        // Allow navigation within /auth paths when there's no token
        return NextResponse.next();
    }

    if (!token && isRootPath) {
        // Redirect to /auth/login when trying to access root without a token
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (token && isAuthPath) {
        // Redirect to root when trying to access /auth paths with a token
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/<path> (Next.js internal files)
         * - static/<path> (static files)
         * - favicon.ico (favicon file)
         * - api/<path> (API routes)
         */
        '/((?!_next/|_vercel/|static/|favicon.ico|api/).*)',
        '/auth/:path*', // Protect all routes under /auth
    ],
};
