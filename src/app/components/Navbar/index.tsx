"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";
import SearchFilm from "../SearchFilm";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-2 pr-5 sm:pr-10 sm:pl-5">
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="m-3">
            <Menu size={30} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full md:hidden">
          <SheetHeader>
            <SheetTitle>Discover</SheetTitle>
          </SheetHeader>
          <ul>
            <li>Home</li>
            <li>Room</li>
          </ul>
          <SheetHeader>
            <SheetTitle>Genre</SheetTitle>
          </SheetHeader>
          <ul>
            <li>Action</li>
            <li>Adventure</li>
          </ul>
        </SheetContent>
      </Sheet>
      <div className="text-l font-bold sm:text-2xl">
        <Link href="/">NOBARKAN</Link>
      </div>
      <SearchFilm />
      <Button className="">Login</Button>
    </nav>
  );
};

export default Navbar;
