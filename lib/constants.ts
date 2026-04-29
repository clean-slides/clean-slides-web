import type { SidebarData } from "@/lib/types"
import {
  Home,
  Palette,
  TrashBinMinimalistic,
  Widget4,
} from "@solar-icons/react"

export const data: SidebarData = {
  user: {
    name: "heynzar",
    email: "heynzar@gmail.com",
    avatar: "https://avatars.githubusercontent.com/u/20271968",
  },
  navMain: [
    {
      id: "dashboard",
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
      isActive: true,
    },

    {
      id: "templates",
      title: "Templates",
      url: "/templates",
      icon: Widget4,
    },
    {
      id: "brand",
      title: "Brand",
      url: "/brand",
      icon: Palette,
    },
    {
      id: "deleted",
      title: "Deleted",
      url: "/deleted",
      icon: TrashBinMinimalistic,
    },
  ],
}
