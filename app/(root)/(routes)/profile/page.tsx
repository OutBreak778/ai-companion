"use client";

import { CreateOrganization, UserProfile, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { dark } from "@clerk/themes";

const ProfilePage = () => {
  const { user } = useUser();

  return (
    <div className="absolute mb-4 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[23%] text-center">
        <UserProfile
        appearance={{ 
          baseTheme: dark,
          variables: { colorPrimary: "white" },
        }}
      />
    </div>
  );
};

export default ProfilePage;

