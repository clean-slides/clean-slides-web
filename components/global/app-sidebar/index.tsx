import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton, } from "@/components/ui/sidebar"
import { Project, User } from "@prisma/client"
import React from "react"
import NavMain from "./nav-main"

const AppSidebar = ({ recentProjects, user, ...props }: {
                    recentProjects: Project[]} & {user: User} & React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible="icon"
      className="max-w-[225px] bg-gradient-to-b from-background to-background-90 shadow-lg transition-all duration-300"
      {...props}>
      <SidebarHeader className="pt-6 px-3 pb-0">
        <SidebarMenuButton size="lg" className="data-[state=open]:text-sidebar-accent-foreground">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                <Avatar className="h-10 w-10 rounded-full">    
                    <AvatarImage
                    src={'/CleanSlide.png'}
                    alt={`CleanSlide-logo`}
                    />
                    <AvatarFallback className="rounded-lg">CS</AvatarFallback>
                </Avatar>
            </div>
            <span className="truncate text-primary text-2xl font-semibold pl-0.5 tracking-tight">
                Clean Sildes
            </span>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent className="px-2 mt-10 gap-y-6">
        //TODO: add items array into nav-main
        <NavMain/>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar
