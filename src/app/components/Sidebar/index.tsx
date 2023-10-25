const Sidebar = () => {
  return (
    <div className="hidden md:block p-5 h-[99vh]">
      <div className="fixed ">
        <div>
          <h1 className="text-xl font-semibold">Discover</h1>
          <ul className="mt-3">
            <li>Home</li>
            <li>Recommendation</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold mt-5">Genres</h1>
          <ul className="mt-3">
            <li>Action</li>
            <li>Adventure</li>
            <li>Animation</li>
            <li>Comedy</li>
            <li>Crime</li>
            <li>Documentary</li>
            <li>Drama</li>
            <li>Family</li>
            <li>Fantasy</li>
            <li>History</li>
            <li>Horror</li>
            <li>Music</li>
            <li>Mystery</li>
            <li>Romance</li>
            <li>Science Fiction</li>
            <li>TV Movie</li>
            <li>Thriller</li>
            <li>War</li>
            <li>Western</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
