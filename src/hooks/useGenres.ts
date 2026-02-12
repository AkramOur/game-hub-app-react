import { useQuery } from "@tanstack/react-query";
import { ApiClient, FetchResponse } from "../services/api-client";
import ms from "ms";
import { Genre } from "../entities/Genre";

const client = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: client.getAll,
    staleTime: ms("24h"), // 24h
  });

export default useGenres;
