import { get, post } from "../../../services/api";
import { Gift } from "../dto/gift.ts";

export const getGifts = () => get<Gift[]>("gifts", {});

export const buyGift = (giftId: string) =>
	post<Gift[]>("purchase", {
		body: { giftId },
	});
