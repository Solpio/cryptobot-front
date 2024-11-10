import { get, post } from "../../../services/api";
import { GiftDto } from "../dto/gift.dto.ts";
import { ReceiptDto } from "../dto/receipt.dto.ts";

export const getGifts = () => get<GiftDto[]>("gifts", {});

export const buyGift = (giftId: string) =>
	post<ReceiptDto>("purchase", {
		body: { giftId },
	});
