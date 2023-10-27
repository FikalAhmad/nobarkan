const Sidebar = () => {
  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Romance",
    "Science Fiction",
    "TV Movie",
    "Thriller",
    "War",
    "Western",
  ];

  return (
    <div className="hidden md:block p-5">
      <div className="fixed h-[99vh] pr-20 overflow-y-auto">
        <div>
          <h1 className="text-xl font-semibold">Discover</h1>
          <ul className="mt-3">
            <li className="py-2">Home</li>
            <li className="py-2">Recommendation</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold mt-5">Genres</h1>
          <ul className="mt-3">
            {genres.map((item: any, index) => {
              return (
                <div key={index + 1}>
                  <li className="py-2">{item}</li>
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
