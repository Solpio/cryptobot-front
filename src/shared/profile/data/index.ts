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

//метод на recent activity
export const getRecentActivityGifts = (userId: string) =>
	get<HistoryGifts[]>(`/user/${userId}/history`, {});

export const getProfileGifts = (userId: string) =>
	get<HistoryGifts[]>(`/purchase/user/${userId}`, {});
