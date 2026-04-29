"use client"

import { Button } from "@/components/ui/button"

import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { ThemeSwitcher } from "@/components/theme-switcher"
import { RoundArrowUp } from "@solar-icons/react"
import { BadgeCheck, Loader } from "lucide-react"
import { useState } from "react"
import { User } from "@prisma/client"
import { useUser } from "@clerk/nextjs"

export function NavFooter({
  prismaUser,
  hasUpgraded = false,
}: {
  prismaUser: User
  hasUpgraded?: boolean
}) {
  const { isLoaded, isSignedIn } = useUser()
  const [loading, setLoading] = useState(false)
  if (!isLoaded || !isSignedIn) return null
  return (
    <SidebarFooter className="border-t p-4">
      <SidebarMenu>
        <SidebarMenuItem>
          <div className="flex items-center justify-between gap-2">
            {!prismaUser.subscription && !hasUpgraded ? (
              <Button
                variant="secondary"
                className="gap-1.5 px-2 capitalize"
                size="sm"
              >
                {loading ? (
                  <Loader className="size-4 animate-spin" />
                ) : (
                  <RoundArrowUp className="size-4" />
                )}

                {loading ? "Upgrading..." : "Upgrade to pro"}
              </Button>
            ) : (
              <Button
                className="cursor-default gap-1.5 px-2 capitalize active:translate-none!"
                size="sm"
              >
                <BadgeCheck className="size-4" />
                Pro Version
              </Button>
            )}

            <ThemeSwitcher />
          </div>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  )
}
