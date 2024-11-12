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

export interface ProfileGifts {
	amount: string;
	currencyType: string;
	currencyAsset?: string;
	currencyFiat?: string;
	recipientTgId?: number;
	status: string;
	userId: string;
	giftId: string;
	user: User;
}

//метод на recent activity
export const getRecentActivityGifts = (userId: string) =>
	get<HistoryGifts[]>(`/user/${userId}/history`, {});

export const getProfileGifts = (userId: string) =>
	get<ProfileGifts[]>(`/purchase/user/${userId}`, {});
