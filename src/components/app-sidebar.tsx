import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Akshay",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Fantastic Furnishings",
      logo: GalleryVerticalEnd, // Replace with suitable icon
      plan: "Pro Seller",
    },
    {
      name: "Cozy Living Co.",
      logo: AudioWaveform,
      plan: "Basic",
    },
    {
      name: "Modern Nest",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Shop",
      url: "#",
      icon: SquareTerminal, // Replace with shopping icon if desired
      isActive: true,
      items: [
        {
          title: "Furniture",
          url: "#",
        },
        {
          title: "Lighting",
          url: "#",
        },
        {
          title: "Rugs & Carpets",
          url: "#",
        },
        {
          title: "Home Decor",
          url: "#",
        },
      ],
    },
    {
      title: "Categories",
      url: "#",
      icon: Bot, // Consider changing to a category-like icon
      items: [
        {
          title: "Living Room",
          url: "#",
        },
        {
          title: "Bedroom",
          url: "#",
        },
        {
          title: "Dining",
          url: "#",
        },
        {
          title: "Office",
          url: "#",
        },
      ],
    },
    {
      title: "Inspiration",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Room Ideas",
          url: "#",
        },
        {
          title: "Style Guides",
          url: "#",
        },
        {
          title: "Trends",
          url: "#",
        },
      ],
    },
    {
      title: "Account",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Profile",
          url: "#",
        },
        {
          title: "Orders",
          url: "#",
        },
        {
          title: "Wishlist",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "New Arrivals",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Promotions",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Lookbook",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
