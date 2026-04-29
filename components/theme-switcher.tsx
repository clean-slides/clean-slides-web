"use client"

import { Button } from "@/components/ui/button"
import { Sun, Moon } from "@solar-icons/react"
import { useTheme } from "next-themes"

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const isDark = theme === "dark"

  return (
    <Button
      size="icon-sm"
      className="cursor-pointer"
      variant="ghost"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  )
}
