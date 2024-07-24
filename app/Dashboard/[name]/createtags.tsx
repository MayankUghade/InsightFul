"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Updatetags from "../(actions)/fetchsingleproject";
import { MessageStatus } from "@prisma/client";
import { ReloadIcon } from "@radix-ui/react-icons";

export function CreateTags({
  id,
  projectName,
  currentstatus,
}: {
  id: string;
  projectName: string;
  currentstatus: MessageStatus;
}) {
  const [position, setPosition] = React.useState<MessageStatus>(currentstatus);
  const [loading, setLoading] = React.useState(false);

  const StatusDisplay = (status: MessageStatus) => {
    switch (status) {
      case "NEW":
        return <h1>⭐ New</h1>;
      case "COMPLETED":
        return <h1>✅ Completed</h1>;
      case "IN_PROGRESS":
        return <h1>💻 In-Progress</h1>;
      case "REJECTED":
        return <h1>❌ Rejected</h1>;
      default:
        return <h1>Unknown Status</h1>;
    }
  };

  const HandleUpdateTags = async (position: MessageStatus) => {
    setLoading(true);
    await Updatetags(id, position, projectName);
    setLoading(false);
  };

  return (
    <DropdownMenu>
      {loading ? (
        <Button disabled variant="outline">
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          {StatusDisplay(position)}
        </Button>
      ) : (
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{StatusDisplay(position)}</Button>
        </DropdownMenuTrigger>
      )}

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Tags</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={position}
          onValueChange={(value) => {
            setPosition(value as MessageStatus);
            HandleUpdateTags(value as MessageStatus);
          }}
        >
          <DropdownMenuRadioItem value="NEW">⭐ New</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="COMPLETED">
            ✅ Completed
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="IN_PROGRESS">
            💻 In-Progress
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="REJECTED">
            ❌ Rejected
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
