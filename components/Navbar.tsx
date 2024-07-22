"use client";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import Login from "./LogIn/login";
import { signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  const { data: session, data: loading } = useSession();
  return (
    <div className="border-b">
      <div className="p-3 lg:container flex items-center justify-between mb-1 mt-2">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <h1 className="text-2xl font-bold">InsightFul</h1>
        </Link>
        <div className="flex items-center gap-2">
          {session ? (
            <div className="flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="cursor-pointer">
                  <Avatar>
                    <AvatarImage
                      src={
                        session.user?.image ??
                        `https://avatar.vercel.sh/${
                          session.user?.name as string
                        }`
                      }
                      alt="@shadcn"
                    />
                    <AvatarFallback>SK</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[240px] p-2"
                  align="end"
                  forceMount
                >
                  <h1>{session.user?.name as string}</h1>
                  <h2 className="text-sm text-gray-500 mb-2">
                    {session.user?.email as string}
                  </h2>
                  <DropdownMenuSeparator />
                  <Button
                    type="submit"
                    variant="outline"
                    onClick={() => signOut()}
                  >
                    <h1>Logout</h1>
                  </Button>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <>
              <Login />
            </>
          )}

          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
