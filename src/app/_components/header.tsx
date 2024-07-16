import React from "react"
import { ArrowLeft, ArrowRight, FeatherIcon, MenuIcon, MoveLeft, MoveRight, Search, SearchIcon, ShoppingBag, ShoppingCart, ShoppingCartIcon } from 'lucide-react';
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/_components/ui/sheet";
import { PinLeftIcon, PinRightIcon } from "@radix-ui/react-icons";


const NavActions: string[] = ["Categories", "Sale", "Clearance", "New stock", "Trending"]

export function Header() {
    return (


        <nav className="sticky top-0 z-10 bg-white-100 backdrop-filter backdrop-blur-lg bg-opacity-30">
            <div >
                <div className="flex justify-end items-center px-4 py-2 text-sm text-muted-foreground gap-4 ">
                    <Link href="#" className="hover:text-foreground" prefetch={false}>
                        Help
                    </Link>
                    <Link href="#" className="hover:text-foreground" prefetch={false}>
                        Orders and Returns
                    </Link>
                    <Link href="#" className="hover:text-foreground" prefetch={false}>
                        Hi, John Doe
                    </Link>

                </div>

                <header className="border-b">
                    <div className="container mx-auto flex items-center justify-between py-3">
                        <Link href="#" className="text-2xl font-bold" prefetch={false}>
                            ECOMMERCE
                        </Link>
                        <div className="hidden md:flex items-center space-x-6">
                            {NavActions.map((action) =>
                                <Link href="#" className=" font-medium transition-colors hover:text-primary" prefetch={false}>
                                    {action}
                                </Link>)}
                        </div>
                        <div className="flex items-center space-x-4">
                            <SearchIcon />
                            <span className="sr-only">Search</span>
                            <ShoppingCartIcon />
                            <span className="sr-only">Cart</span>

                        </div>
                        <div className="block md:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <MenuIcon />
                                </SheetTrigger>
                                <SheetContent side="right" className="w-64">
                                    <div className="flex flex-col space-y-4 p-4">
                                        {NavActions.map((action) =>
                                            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
                                                {action}
                                            </Link>)}
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>


                    </div>
                    <div className="flex items-center justify-center gap-3 bg-gray-300 py-2">
                        <PinLeftIcon />
                        <span className="text-xs"> Get 10% off on business sign up</span>
                        <PinRightIcon />
                    </div>
                </header>

            </div>


        </nav>


    )
}


