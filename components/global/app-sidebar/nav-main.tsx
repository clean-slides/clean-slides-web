"use client"

import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { Clock } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const NavMain = ({items}: {
                  items: {
                    title: string
                    url: string
                    icon: React.FC<React.SVGProps<SVGSVGElement>>
                    isActive?: boolean
                    items?: {
                      title: string
                      url: string
                    }[]
                  }[]
}) => {
  const pathname = usePathname()
  return (
      <SidebarGroup className="p-0">
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton
                asChild
                //FIXME: deprecated prop -- no longer exists -- check: "https://ui.shadcn.com/docs/components/radix/sidebar"
                //tooltip={'CLEAAAN'}
                className={`${pathname.includes('SLIDES') && 'bg-background-80'}`}>
                    <Link href={"PFE"} className={`text-lg ${pathname.includes("PFE") && 'font-bold'}`}>
                        <Clock className="text-lg"/>
                        <span>Clean Slide sidebar item</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
  )
}

export default NavMain
