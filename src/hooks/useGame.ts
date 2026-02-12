import { useQuery } from "@tanstack/react-query";
import { Game } from "../entities/Game";
import { ApiClient } from "../services/api-client";

const client = new ApiClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery<Game, Error>({
    queryKey: [`games/${slug}`],
    queryFn: () => client.getById(slug),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default useGame;
