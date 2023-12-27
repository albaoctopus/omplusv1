import { redirect } from "next/navigation";
import Link from 'next/link';
import { UserButton } from "@clerk/nextjs";
import Image from 'next/image';


import { ScrollArea } from "@/components/ui/scroll-area";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { currentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db";


import { NavigationAction } from "./navigation-action";
import { NavigationItem } from "./navigation-item";


export const NavigationSidebar = async () => {
  const profile = await currentProfile();


  if (!profile) {
    return redirect("/");
  }


  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  });


  return (
    <div
      className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3"
    >
      <NavigationAction />
      <Separator
        className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto"
      />
     
     <div className="relative inline-flex items-center justify-center h-[48px] w-[48px] overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
     <Link href="/hello">
      
        <Image
          src="/home.png" // Replace with your image path
          alt="home"
          width={60}  // Replace with your image's width
          height={60} // Replace with your image's height
        />
    
    </Link>
    </div>
    <div className="relative inline-flex items-center justify-center h-[48px] w-[48px] overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
     <Link href="https://lms.grechkapp.online/">
      
        <Image
          src="/home.svg" // Replace with your image path
          alt="home"
          width={60}  // Replace with your image's width
          height={60} // Replace with your image's height
        />
    
    </Link>
</div>




<Separator
        className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto"
      />


      <ScrollArea className="flex-1 w-full">
     
        {servers.map((server) => (
          <div key={server.id} className="mb-4">
            <NavigationItem
              id={server.id}
              name={server.name}
              imageUrl={server.imageUrl}
            />
          </div>
        ))}
      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
        <ModeToggle />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-[48px] w-[48px]"
            }
          }}
        />
      </div>
    </div>
  )
}
