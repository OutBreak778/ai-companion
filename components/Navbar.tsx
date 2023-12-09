"use client";

import { cn } from "@/lib/utils";
import { UserButton, useUser } from "@clerk/nextjs";
import { MenuIcon, Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Toggle from "./ThemeToggle";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {

  const { user } = useUser()

  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        {/* <MenuIcon className="block md:hidden" /> */}
        <MobileSidebar />
        <Link href={"/"}>
          <h1
            className={cn(
              "hidden md:block capitalize text-xl md:text-2xl font-medium text-primary"
            )}
          >
            OUTBREAK
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-4">
        <Button size="sm" variant="premium">
            Welcome&nbsp; <span className="capitalize underline-offset-2">{user?.firstName}</span>
          </Button>
        <Toggle />
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </div>
  );
};

export default Navbar;
