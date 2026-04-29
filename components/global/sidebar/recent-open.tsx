"use client"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ChevronDown } from "lucide-react"
import { File } from "@solar-icons/react"
import { Project } from "@prisma/client"
import { toast } from "sonner"
import { useSlideStore } from "@/store/use-slide-store"
import { useRouter } from "next/navigation"
import { JsonValue } from "@prisma/client/runtime/library"

type Props = {
  recentProjects: Project[]
}

export default function RecentOpen({ recentProjects }: Props) {
  const router = useRouter()
  const { setSlides } = useSlideStore()

  const handleClick = (projectId: string, slides: JsonValue) => {
    if (!projectId || !slides) {
      toast.error("Project not found", {
        description: "Please try again",
      })
      return
    }
    setSlides(JSON.parse(JSON.stringify(slides)))
    router.push(`/presentation/${projectId}`)
  }

  return (
    <div className="space-y-0">
      {recentProjects.length > 0 && (
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel
              asChild
              className="text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <CollapsibleTrigger>
                Recent
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu className="gap-0.5">
                  {recentProjects.slice(0, 4).map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton asChild tooltip={item.title}>
                        <button
                          onClick={() => handleClick(item.id, item.slides)}
                          className="flex cursor-pointer items-center gap-4"
                        >
                          <File
                            weight="BoldDuotone"
                            color="#5ee9b5"
                            className="size-4 text-[#006045] dark:text-[#5ee9b5]"
                          />
                          <span className="truncate">{item.title}</span>
                        </button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      )}
    </div>
  )
}
