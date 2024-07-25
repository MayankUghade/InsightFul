"use client";
import { Button } from "@/components/ui/button";
import { Copy, EditIcon } from "lucide-react";
import { ImArrowUpRight, ImBin } from "react-icons/im";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import Link from "next/link";
import { format } from "date-fns";
import toast, { Toaster } from "react-hot-toast";
import { BiSolidDashboard } from "react-icons/bi";
import DeleteProject from "@/components/Dashboard/DeleteProject";
import EditProject from "@/components/Actions/EditProject";
import Edit from "@/components/Dashboard/EditProject";

interface ProjectProps {
  id: string;
  userEmail?: string;
  name: string;
  createdAt: Date;
  messagescount: number;
}

function cancelspace(name: string): string {
  return name.replace(/\s/g, "-");
}

const notify = () => toast.success("Copied to clipboard");

export default function Card({
  id,
  userEmail,
  name,
  createdAt,
  messagescount,
}: ProjectProps) {
  const formattedDate = format(new Date(createdAt), "MMMM dd, yyyy");

  return (
    <div className="w-full border rounded-xl p-5 sm:mb-3 h-[200px] mt-5">
      <Toaster />
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <AiOutlineFundProjectionScreen className="text-3xl" />
          <h1 className="font-bold sm:text-2xl text-lg">{name}</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <DeleteProject id={id} name={name as string} />
            <Edit name={name as string} id={id} />
          </div>
        </div>
      </div>

      <div className="w-full flex items-center gap-3 mt-4">
        <div className="p-2 border rounded-lg sm:w-[300px] w-full overflow-hidden text-sm text-nowrap">
          http://localhost:3000/{cancelspace(name)}
        </div>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(
              `http://localhost:3000/${cancelspace(name)}`
            );
            notify();
          }}
        >
          <Copy />
        </Button>
        <Link href={`/${cancelspace(name)}`}>
          <Button>
            <ImArrowUpRight />
          </Button>
        </Link>
      </div>

      <div className="mt-5 flex items-center gap-2">
        <GoComment className="text-xl" />
        Comments: {messagescount}
      </div>

      <div className="mt-3 text-sm">
        Created on:{" "}
        <span className="text-muted-foreground">{formattedDate}</span>
      </div>
    </div>
  );
}
