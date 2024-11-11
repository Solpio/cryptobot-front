import { get } from "../../../services/api";
import { User } from "../../user/data";

export interface HistoryGifts {
	id: string;
	owner: User;
	previousOwner?: User;
	previousOwnerId: string;
	purchase: {
		giftId: string;
	};
}

export const getHistoryGifts = (userId: string) =>
	get<HistoryGifts[]>(`/user/${userId}/history`, {});
