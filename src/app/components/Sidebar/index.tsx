import Link from "next/link";

const Sidebar = async () => {
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

  return (
    <div className="hidden md:block p-5">
      <div className="fixed h-[99vh] pr-20 overflow-y-auto">
        <div>
          <h1 className="text-xl font-semibold">Discover</h1>
          <ul className="mt-3">
            <li className="py-2">
              <Link href="/">Home</Link>
            </li>
            <li className="py-2">
              <Link href="/recommendation">Recommendation</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold mt-5">Genres</h1>
          <ul className="my-3">
            {data.genres.map((item: any) => {
              return (
                <div key={item.id}>
                  <li className="py-2">
                    <Link href={`/genre/${item.id}`}>{item.name}</Link>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
