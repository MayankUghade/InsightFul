"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { FaGoogle } from "react-icons/fa";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Login</Button>
      </DialogTrigger>
      <DialogContent className="w-[400px] p-6 bg-background rounded-lg shadow-lg">
        <div className="flex flex-col items-center space-y-6">
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="mt-3"
          />
          <div className="space-y-2 text-center">
            <h3 className="text-2xl font-bold">Welcome to InsightFul</h3>
            <p className="text-muted-foreground">
              Sign in to access your account.
            </p>
          </div>
          <div className="w-full space-y-2">
            <Button
              onClick={() => signIn("github")}
              className="w-full py-6 bg-gray-900 flex items-center justify-center gap-2 rounded-lg hover:bg-gray-800 text-white"
            >
              <GitHubLogoIcon className="mr-2 h-6 w-6" />
              <h1 className="font-semibold">Sign in with GitHub</h1>
            </Button>
            <Button
              onClick={() => signIn("google")}
              className="w-full py-6 bg-red-600 flex items-center justify-center gap-2 rounded-lg hover:bg-red-500 text-white"
            >
              <FaGoogle className="mr-2 h-6 w-6" />
              <h1 className="font-semibold">Sign in with Google</h1>
            </Button>
          </div>
        </div>
        <DialogFooter>
          <Button>
            <DialogClose>Cancel</DialogClose>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
