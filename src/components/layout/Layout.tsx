import { ThemeProvider } from "@/components/theme-provider";
import type React from "react";
import { Toaster } from "../ui/sonner";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster />
      {children}
    </ThemeProvider>
  );
}

export default Layout;
