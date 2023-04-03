import { Box, CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getBeer } from "../api/fetchBeer";

const BeerDetailPage = () => {
  const { beerId } = useParams();
  const idOfBeer = Number(beerId);

  const {
    isLoading,
    isError,
    error,
    data: beer,
    isFetching,
  } = useQuery({
    queryKey: ["beer", idOfBeer],
    queryFn: () => getBeer(idOfBeer),
    keepPreviousData: true,
  });

  if (isLoading)
    return (
      <Box className="h-screen flex justify-center items-center">
        <CircularProgress />
      </Box>
    );

  if (isError) return <p>Error.. {error instanceof Error && error.message}</p>;

  const content = (
    <div className="m-[5%] rg:mx-[8%] xl:mx-[20%]">
      <p className="text-2xl text-center m-4 rg:text-4xl">{beer?.name}</p>
      <div className="flex flex-col rg:flex-row items-center">
        <div className="h-80 rg:h-96 rg:w-full">
          <img
            src={beer?.image_url || "../public/no_image_available.png"}
            alt={beer?.name}
            className="object-contain w-full h-full mx-auto"
            loading="lazy"
          />
        </div>
        <div className="w-[90%] rg:w-[60%]">
          <dl className="mt-8">
            <dt className="font-bold text-lg">Tagline</dt>
            <dd className="mx-4 my-2">{beer?.tagline}</dd>

            <dt className="font-bold text-lg">Description:</dt>
            <dd className="mx-4 my-2">{beer?.description}</dd>

            <dt className="font-bold text-lg">ABV:</dt>
            <dd className="mx-4 my-2">{beer?.abv}</dd>

            <dt className="font-bold text-lg">IBU:</dt>
            <dd className="mx-4 my-2">{beer?.ibu}</dd>
          </dl>
          <div>
            <p className="font-bold text-lg mb-2">Ingredients:</p>
            {Object.keys(beer!.ingredients).map((ingredient, i) => {
              return (
                <p className="mx-4 my-2" key={i}>{`${i + 1}. ${ingredient}`}</p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {isFetching && (
        <Box className="h-screen flex justify-center items-center">
          <CircularProgress />
        </Box>
      )}
      {content}
    </>
  );
};

export default BeerDetailPage;
