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
import { useEffect, useState } from "react";

const Navbar = () => {
  const [genreList, setGenreList] = useState({ genres: [] });
  useEffect(() => {
    const fetchGenreList = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
          },
        }
      );
      const data = await response.json();

      setGenreList(data);
    };
    fetchGenreList();
  }, []);
  return (
    <nav className="flex justify-between items-center py-2 pr-5 sm:pr-10 sm:pl-5">
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="m-3">
            <Menu size={30} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full md:hidden overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Discover</SheetTitle>
          </SheetHeader>
          <ul className="mt-3">
            <li className="py-2">
              <Link href="/">Home</Link>
            </li>
            <li className="py-2">
              <Link href="/recommendation">Recommendation</Link>
            </li>
          </ul>
          <SheetHeader>
            <SheetTitle>Genre</SheetTitle>
          </SheetHeader>
          <ul className="mt-3">
            {genreList.genres.map((item: any) => {
              return (
                <div key={item.id}>
                  <li className="py-2">
                    <Link href={`/genre/${item.id}`}>{item.name}</Link>
                  </li>
                </div>
              );
            })}
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
