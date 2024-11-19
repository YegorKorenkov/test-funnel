import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { getStartRoute } from 'lib/utils/getRoute'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL(`/${getStartRoute()}`, request.url))
  }
}
