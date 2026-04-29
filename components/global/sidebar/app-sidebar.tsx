"use client"

import { Sidebar, SidebarContent } from "@/components/ui/sidebar"

import RecentOpen from "@/components/global/sidebar/recent-open"
import { NavFooter } from "@/components/global/sidebar/nav-footer"
import { NavHeader } from "@/components/global/sidebar/nav-header"
import { NavMain } from "@/components/global/sidebar/nav-main"
import Link from "next/link"
import { AddCircle } from "@solar-icons/react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { data } from "@/lib/constants"
import { Project, User } from "@prisma/client"

const AppSidebar = ({
  recentProjects,
  user,
  hasUpgraded = false,
  ...props
}: {
  recentProjects: Project[]
  user: User
  hasUpgraded?: boolean
} & React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar {...props}>
      <NavHeader user={user} />
      <SidebarContent>
        <Link href="/new" className={cn(buttonVariants(), "m-2 rounded-md")}>
          <AddCircle className="size-4" weight="Bold" />
          Create New Slide
        </Link>
        <NavMain items={data.navMain} />

        <RecentOpen recentProjects={recentProjects} />
      </SidebarContent>
      <NavFooter prismaUser={user} />
    </Sidebar>
  )
}

export default AppSidebar
