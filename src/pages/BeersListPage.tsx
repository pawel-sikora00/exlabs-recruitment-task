import { useQuery } from "react-query";
import { getBeers, beersPerPageAmount } from "../api/fetchBeers";
import Beer from "../components/Beer";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Link, useParams } from "react-router-dom";

const BeersListPage = () => {
  const { pageId } = useParams();
  const page = Number(pageId);

  const {
    isLoading,
    isError,
    error,
    data: beers,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ["beers", page],
    queryFn: () => getBeers(page),
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
    <div className="grid grid-cols-1 md:grid-cols-2 rg:grid-cols-3 my-6 gap-2 md:gap-6 mx-[5%] rg:mx-[8%] xl:mx-[20%]">
      {beers?.map((beer: Beer) => (
        <Beer key={beer.id} beer={beer} isFetching={isFetching} />
      ))}
    </div>
  );

  const navigation = (
    <div className="flex justify-center bottom-0">
      <div className="self-center">
        <Link
          to={`/page/${page - 1}`}
          className={
            isPreviousData || page === 1
              ? "pointer-events-none cursor-default"
              : ""
          }
          onClick={() => {
            scroll.scrollToTop({ smooth: true, duration: 400 });
          }}
        >
          <AiOutlineDoubleLeft
            color={isPreviousData || page === 1 ? "#C0C0C0" : "#000000"}
          />
        </Link>
      </div>
      <div className="bg-yellow-500 text-white w-10 h-10 m-2 flex justify-center items-center rounded-md font-bold text-xl">
        {page}
      </div>
      <div className="self-center">
        <Link
          to={`/page/${page + 1}`}
          className={
            isPreviousData || beers!.length < beersPerPageAmount
              ? "pointer-events-none cursor-default"
              : ""
          }
          onClick={() => {
            scroll.scrollToTop({ smooth: true, duration: 400 });
          }}
        >
          <AiOutlineDoubleRight
            color={
              isPreviousData || beers!.length < beersPerPageAmount
                ? "#C0C0C0"
                : "#000000"
            }
          />
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {content}
      {isFetching && (
        <Box className="h-screen flex justify-center items-center">
          <CircularProgress />
        </Box>
      )}
      {navigation}
    </>
  );
};

export default BeersListPage;
