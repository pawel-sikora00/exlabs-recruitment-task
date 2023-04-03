import { Link } from "react-router-dom";

const Baner = () => {
  return (
    <Link to="/">
      <div className="p-8 text-center text-4xl md:text-5xl rg:text-6xl bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 mb-4 shadow-md text-yellow-600 font-bold">
        BEERS🍻
      </div>
    </Link>
  );
};

export default Baner;
