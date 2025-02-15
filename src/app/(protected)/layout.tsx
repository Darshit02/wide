export const dynamic = "force-dynamic"

import { onAuthenticatedUser } from '@/actions/user'
import React from 'react'


type Props = { children: React.ReactNode }

const Layout = async ({children}: Props) => {
    const auth = await onAuthenticatedUser()
  return (
    <div className='w-full min-h-screen'>
        {children}
    </div>
  )
}

export default Layout