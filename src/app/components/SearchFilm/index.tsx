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
import { useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";

const SearchFilm = () => {
  const router = useRouter();
  const [searchFilm, setSearchFilm] = useState("");

  const handleSearch = () => {
    router.push(`/search/${searchFilm}`);
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
              <DialogClose>
                <Button onClick={handleSearch}>Search</Button>
              </DialogClose>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SearchFilm;
