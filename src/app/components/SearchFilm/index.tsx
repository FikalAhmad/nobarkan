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

  const [films, setFilms] = useState([]);
  const [searchFilm, setSearchFilm] = useState("");

  const fetchFilm = async () => {
    const data = await fetch(
      `${process.env.API_MOVIE}?query=saw&include_adult=false&language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
      }
    );
    console.log(data.json());
  };

  useEffect(() => {
    fetchFilm();
  }, []);

  return (
    <div className="mx-5">
      <Dialog>
        <DialogTrigger>
          <Input className="sm:w-96" type="text" placeholder="Search..." />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>What do you want to search?</DialogTitle>
            <DialogDescription className="flex justify-between">
              <Input
                className="sm:w-[360px]"
                type="text"
                placeholder="Search..."
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
