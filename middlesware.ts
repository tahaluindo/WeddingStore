/* Support in Next.js version >= 13.0.0 */

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.rewrite(new URL('/auth/login', request.url))
  }

  if (request.nextUrl.pathname.startsWith('/register')) {
    return NextResponse.rewrite(new URL('/auth/register', request.url))
  }
}