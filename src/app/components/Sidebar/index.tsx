const Sidebar = () => {
  return (
    <div className="hidden md:block p-5 h-[99vh]">
      <div className="fixed overflow-y-auto">
        <div>
          <h1 className="text-xl font-semibold">Discover</h1>
          <ul className="mt-3">
            <li className="py-1">Home</li>
            <li className="py-1">Recommendation</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold mt-5">Genres</h1>
          <ul className="mt-3">
            <li className="py-1">Action</li>
            <li className="py-1">Adventure</li>
            <li className="py-1">Animation</li>
            <li className="py-1">Comedy</li>
            <li className="py-1">Crime</li>
            <li className="py-1">Documentary</li>
            <li className="py-1">Drama</li>
            <li className="py-1">Family</li>
            <li className="py-1">Fantasy</li>
            <li className="py-1">History</li>
            <li className="py-1">Horror</li>
            <li className="py-1">Music</li>
            <li className="py-1">Mystery</li>
            <li className="py-1">Romance</li>
            <li className="py-1">Science Fiction</li>
            <li className="py-1">TV Movie</li>
            <li className="py-1">Thriller</li>
            <li className="py-1">War</li>
            <li className="py-1">Western</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
