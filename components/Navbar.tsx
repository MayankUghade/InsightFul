import Image from "next/image";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <div className="border-b ">
      <div className="p-3 lg:container flex items-center justify-between mt-1 mb-1">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <h1 className="text-2xl font-bold">InsightFul</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button>Register</Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
