"use client";

import { Home, Plus, Settings, User } from "lucide-react";
import { cn } from '../lib/utils';
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {

    const pathName = usePathname()
    const router = useRouter()

    const routes = [
        {
            icon: Home,
            href: "/",
            label: "Home",
            pro: false
        },
        {
            icon: Plus,
            href: "/companion/new",
            label: "Create",
            pro: false
        },
        {
            icon: User,
            href: "/profile",
            label: "Profile",
            pro: false
        }
    ]

    const onNavigate = (url: string, pro: boolean) => {
        return router.push(url)
    }

  return (
    <div className="space-y-2 flex flex-col h-full text-primary bg-secondary">
      <div className="pt-4 p-1 flex flex-1 justify-center">
        <div className="space-y-3">
            {routes.map((route) => (
                <div key={route.href}
                onClick={() => onNavigate(route.href, route.pro)}
                    className={cn(
                        "text-muted-foreground text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",pathName === route.href && "bg-primary/10 text-primary"
                    )}
                >
                    <div className="flex flex-col gap-y-2 items-center flex-1">
                        <route.icon className="w-5 h-5" />
                        {route.label}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
