"use client";
import { Button } from "@/components/ui/button";
import { Copy, CopyIcon, EditIcon } from "lucide-react";
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
import { Input } from "@/components/ui/input";

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

      <div className="flex sm:flex-row flex-col sm:items-center space-x-2 mt-5 sm:gap-0 gap-2">
        <Input
          value={`https://insightful-two.vercel.app/${cancelspace(name)}`}
          readOnly
          className="flex-1 cursor-pointer bg-muted text-muted-foreground p-3"
        />
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            onClick={() => {
              navigator.clipboard.writeText(
                `https://insightful-two.vercel.app/${cancelspace(name)}`
              );
              notify();
            }}
          >
            <CopyIcon className="h-5 w-5" />
          </Button>
          <Link
            href={`https://insightful-two.vercel.app/${cancelspace(name)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <ImArrowUpRight />
            </Button>
          </Link>
        </div>
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
