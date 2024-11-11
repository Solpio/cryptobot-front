import { get, post } from "../../../services/api";

export interface IRegisterUserBody {
	tgId: number;
	firstName: string;
	username?: string;
	languageCode?: string;
	lastName?: string;
}

export interface User {
	id: string;
	tgId: number;
	firstName: string;
	username?: string;
	languageCode?: string;
	lastName?: string;
	userPhoto?: string;
}

export const register = (body: IRegisterUserBody) =>
	post<unknown>("user/register", { body });

export const getMe = () => get<User>("user/me", {});
export const getUser = (id: string) => get<User>(`user/${id}`, {});
