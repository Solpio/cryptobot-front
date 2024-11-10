import { get } from "../../../services/api";
import { Gift } from "../dto/gift.ts";

export const getHistoryGifts = (userId: string) =>
	get<Gift[]>(`/user/${userId}/history`, {});
