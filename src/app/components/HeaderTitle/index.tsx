import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Title {
  title: string;
  link: string;
}
const HeaderTitle = ({ title, link }: Title) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="ml-5 py-5 text-2xl font-semibold sm:text-3xl">{title}</h1>
      <Button variant="link">
        <Link href={link} className="mr-5 text-sm sm:text-md">
          Lihat Semua
        </Link>
      </Button>
    </div>
  );
};

export default HeaderTitle;
