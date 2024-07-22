"use client";
import { Button } from "../ui/button";
import { Copy, EditIcon, Globe } from "lucide-react";
import { ImArrowUpRight, ImBin } from "react-icons/im";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { Project } from "@prisma/client";
import Link from "next/link";
import { format } from "date-fns";
import toast, { Toaster } from "react-hot-toast";

function cancelspace(name: string): string {
  return name.replace(/\s/g, "-");
}

const notify = () => toast.success("Copied to clipboard");

export default function Card({
  id,
  userEmail,
  name,
  link,
  createdAt,
}: Project) {
  const formattedDate = format(new Date(createdAt), "MMMM dd, yyyy");

  return (
    <div className="sm:w-[550px] w-full border rounded-xl p-5 sm:mb-3">
      <Toaster />
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <AiOutlineFundProjectionScreen className="text-3xl" />
          <h1 className="font-bold sm:text-2xl text-lg">{name}</h1>
        </div>

        <div className="flex items-center gap-3">
          <ImBin className="text-xl text-red-600" />
          <EditIcon className="text-xs" />
        </div>
      </div>

      <div className="w-full flex items-center gap-3 mt-4">
        <div className="p-2 border rounded-lg sm:w-[300px] w-full overflow-hidden text-sm text-nowrap">
          http://localhost:3000/{cancelspace(name as string)}
        </div>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(
              `http://localhost:3000/${cancelspace(name as string)}`
            );
            notify();
          }}
        >
          <Copy />
        </Button>
        <Link href={`/${cancelspace(name as string)}`}>
          <Button>
            <ImArrowUpRight />
          </Button>
        </Link>
      </div>

      <div className="mt-5 flex items-center gap-2">
        <GoComment className="text-xl" />
        12 comments
      </div>

      <div className="mt-3 text-sm">
        Created on:{" "}
        <span className="text-muted-foreground">{formattedDate}</span>
      </div>

      <Link href={link}>
        <Button className="flex items-center gap-2 mt-5">
          <Globe />
          Project Link
        </Button>
      </Link>
    </div>
  );
}
