import { get, post } from "../../../services/api";

export interface IRegisterUserBody {
	tgId: number;
	firstName: string;
	username?: string;
	languageCode?: string;
	lastName?: string;
}

export const register = (body: IRegisterUserBody) =>
	post<unknown>("user/register", { body });

export const getMe = () => get<unknown>("user/me", {});
export const getUser = (id: string) => get<unknown>(`user/${id}`, {});
export const getHistory = (id: string) =>
	get<unknown>(`user/${id}/history`, {});
