import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const SearchFilm = () => {
  const router = useRouter();
  const [searchFilm, setSearchFilm] = useState("");

  const fetchAPI = async () => {
    const response = await fetch(
      `${process.env.MOVIE_SEARCH}?query=${searchFilm}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
      }
    );
    const api = await response.json();
  };
  useEffect(() => {
    fetchAPI;
  }, []);

  const handleSearch = () => {
    router.push("");
  };

  return (
    <div className="mx-5">
      <Dialog>
        <DialogTrigger>
          <Input className="sm:w-96" type="text" placeholder="Search..." />
        </DialogTrigger>
        <DialogContent className="w-96 sm:w-auto">
          <DialogHeader>
            <DialogTitle>What do you want to search?</DialogTitle>
            <DialogDescription className="flex justify-between">
              <Input
                className="w-[230px] sm:w-[360px]"
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearchFilm(e.target.value)}
              />
              <Button>Search</Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SearchFilm;
