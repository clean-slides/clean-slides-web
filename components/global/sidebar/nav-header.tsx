import { ChevronDown } from "lucide-react"
import { SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar"
import { Button, buttonVariants } from "@/components/ui/button"
import { User } from "@prisma/client"
import { UserButton, useUser } from "@clerk/nextjs"
import { cn } from "@/lib/utils"

export function NavHeader({ user }: { user: User }) {
  const { isLoaded, isSignedIn } = useUser()
  if (!isLoaded || !isSignedIn) return null

  return (
    <SidebarHeader className="border-b">
      <div className="flex cursor-pointer items-center justify-between py-1">
        <div
          className={cn(buttonVariants({ variant: "ghost" }), "px-1")}
          onClick={() =>
            document
              .querySelector<HTMLButtonElement>(
                '[data-clerk-component="UserButton"] button'
              )
              ?.click()
          }
        >
          <UserButton
            appearance={{
              elements: {
                avatarBox: { width: 24, height: 24 },
              },
            }}
          />
          <span className="text-xs capitalize">{user.name}</span>
          <ChevronDown className="size-4" />
        </div>

        <SidebarTrigger />
      </div>
    </SidebarHeader>
  )
}
