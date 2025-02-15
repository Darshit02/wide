import { onAuthenticatedUser } from '@/actions/user'
import { SidebarProvider } from '@/components/ui/sidebar'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    children: React.ReactNode 
}

const DasboardLayout = async ({children}: Props) => {
    //const recentProjects = await getRecentProjects()
    const checkUser = await onAuthenticatedUser()

    if (!checkUser.user) {
redirect('/sign-in')
    }
  return (
    <SidebarProvider>
        {/* <AppSidebar>

        </AppSidebar> */}
        {children}
        </SidebarProvider>
  )
}

export default DasboardLayout