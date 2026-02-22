"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider
    defaultTheme="system"       // "light" | "dark" | "system"
    enableSystem                // respects prefers-color-scheme
    // disableTransitionOnChange   // prevents flash / ugly transition on toggle
    // storageKey="my-app-theme"   // optional: custom localStorage key (default = "theme")
    {...props}
  >
    {children}
  </NextThemesProvider>
}