import { get } from "../../../services/api";
import { User } from "../dto/users.ts";

export const getLeaderboard = (search?: string) =>
	get<User[]>("leaderboard", { query: { search } });
