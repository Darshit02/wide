"use client";
import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const NewProjectButton = ({ user }: { user: User }) => {
  //WIP : handle new project creation needs complitions
  const router = useRouter();

  return (
    <Button
      className="rounded-lg font-semibold"
      disabled={!user.subscription}
      onClick={() => router.push("/create-page")}
    >
      <PlusCircle className="w-4 h-4 mr-2" />
      New Project
    </Button>
  );
};

export default NewProjectButton;
