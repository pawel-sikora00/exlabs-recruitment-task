import { Link } from "react-router-dom";

type Props = {
  beer: Beer;
  isFetching: boolean;
};

const Beer = ({ beer, isFetching }: Props) => {
  return (
    <Link to={`/${beer.id}`}>
      <article className="border h-36 md:h-80 p-2 rg:p-6 flex md:flex-col justify-between items-center gap-x-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-500 hover:scale-105 hover:border-gray-400 cursor-pointer">
        {isFetching ? (
          <div className="w-full h-full rounded-2xl animate-pulse bg-gray-200"></div>
        ) : (
          <img
            src={beer.image_url || "../public/no_image_available.png"}
            alt={beer.name}
            loading="lazy"
            className="w-[80%] h-[80%] object-contain"
          />
        )}
        <div className="flex flex-col w-full">
          <p className="text-center font-bold line-clamp-2 md:line-clamp-1">
            {beer.name}
          </p>
          <p className="text-xs text-center line-clamp-2 md:line-clamp-1">
            {beer.tagline}
          </p>
        </div>
      </article>
    </Link>
  );
};
export default Beer;
