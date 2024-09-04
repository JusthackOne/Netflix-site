import useSWR from "swr";

import fetcher from "@/lib/fetcher";

const useMovie = (id?: string) => {
  const { data, error, isLoading } = useSWR(`/api/movies/${id}`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false
  });

  return { data, error, isLoading };
};

export default useMovie;
