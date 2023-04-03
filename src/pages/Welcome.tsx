import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <p className="text-4xl text-center my-8">Welcome!</p>
      <p className="text-center">
        <Link to="/page/1" className="animate-pulse text-yellow-700">
          Click here to display beers 😀
        </Link>
      </p>
    </div>
  );
};

export default Welcome;
