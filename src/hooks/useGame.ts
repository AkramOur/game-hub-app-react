import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../services/api-client";
import { Game } from "./useGames";

const client = new ApiClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery<Game, Error>({
    queryKey: [`games/${slug}`],
    queryFn: () => client.getById(slug),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default useGame;
