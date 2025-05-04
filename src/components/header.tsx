import { signOut } from "@/auth";
import Link from "next/link";
import { ChartNoAxesCombined, SearchIcon } from "lucide-react";
import { User } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "./ui/input";


export default async function Header({ user }: { user: User }) {

    if (!user) return null;
    return (
        <header className="flex justify-between items-center">
            <Link href="" className="flex gap-1 items-center ">
                <ChartNoAxesCombined />
                AmazonPriceTracker
            </Link>
            <div className="flex gap-4 items-center ">
                <div className="flex rounded-full bg-white pl-1 items-center relative">
                    <SearchIcon className="left-2 absolute pointer-events-none" />
                    <Input className="rounded-full shadow-none bg-white border-0 pl-8"
                        placeholder="Search" />
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <Avatar className="cursor-pointer">
                                    <AvatarImage src={user.image || ""} />
                                    <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                                </Avatar>
                            </HoverCardTrigger>

                            <HoverCardContent className="w-64 p-4 flex items-center space-x-4">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src={user.image || ""} />
                                    <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-medium">{user.name}</p>
                                    <p className="text-sm text-muted-foreground">{user.email}</p>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                {/* ////////////////// logout will see later ///////////////////////////  */}
                                <form
                                    action={async () => {
                                        'use server';
                                        await signOut()
                                    }}
                                >
                                    <button className="py-0, cursor-pointer">Logout</button>
                                </form>

                            </DropdownMenuItem>
                        </DropdownMenuContent>

                    </DropdownMenuTrigger>
                </DropdownMenu>

            </div>

        </header>
    )
}