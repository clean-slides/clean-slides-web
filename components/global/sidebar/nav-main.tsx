"use client"

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import type { NavItem } from "@/lib/types"
import Link from "next/link"

export function NavMain({ items }: { items: NavItem[] }) {
  return (
    <SidebarGroup>
      <SidebarMenu className="gap-0.5">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton
                asChild
                className="cursor-pointer"
                isActive={item.isActive}
                tooltip={item.title}
              >
                <Link href={item.url ?? "#"}>
                  {Icon && (
                    <Icon
                      weight="BoldDuotone"
                      className="mr-2 size-4 text-[#006045] dark:text-[#5ee9b5]"
                    />
                  )}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
