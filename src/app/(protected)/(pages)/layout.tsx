import { getRecentProjects } from "@/actions/project";
import { onAuthenticatedUser } from "@/actions/user";
import AppSidebar from "@/components/global/app-sidebar";
import UpperInfoBar from "@/components/global/upper-info-bar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DasboardLayout = async ({ children }: Props) => {
  const recentProjects = await getRecentProjects();
  const checkUser = await onAuthenticatedUser();

  if (!checkUser.user) {
    redirect("/sign-in");
  }
  return (
    <SidebarProvider>
      <AppSidebar
        recentProjects={recentProjects.data || []}
        user={checkUser.user}
      />
      <SidebarInset>
        <UpperInfoBar user={checkUser?.user}/>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DasboardLayout;
