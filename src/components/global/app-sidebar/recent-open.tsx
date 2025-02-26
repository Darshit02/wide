import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSlideStore } from "@/store/useSlideStore";
import { Project } from "@prisma/client";
import { JsonValue } from "@prisma/client/runtime/library";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

type Props = {
  recentProjects: Project[];
};

const RecentOpen = ({ recentProjects }: Props) => {
  const router = useRouter();
  const { setSlides , slides } = useSlideStore();
  const handleClick = (projectId: string, slides: JsonValue) => {
    if (!projectId || !slides) {
      toast.error("project Not Found", {
        description: "Please Try Again",
      });
      return;
    }
    setSlides(JSON.parse(JSON.stringify(slides)));
    router.push(`/presantation/${projectId}`);
  };
  return (
    recentProjects.length > 0 && (
      <SidebarGroup>
        <SidebarGroupLabel>Recently Opened</SidebarGroupLabel>
        <SidebarMenu>
          {recentProjects.length > 0 ? (
            recentProjects.map((item, index) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  className={`hover:bg-primary-80`}
                >
                  <Button
                    variant={"link"}
                    //   onClick={() => handleClick(item.id)}
                    className="text-xs items-center justify-start"
                  >
                    <span className="">{item.title}</span>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))
          ) : (
            <></>
          )}
        </SidebarMenu>
      </SidebarGroup>
    )
  );
};

export default RecentOpen;
