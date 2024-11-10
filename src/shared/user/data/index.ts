import { post } from "../../../services/api";

export interface IRegisterUserBody {
	tgId: number;
	firstName: string;
	username?: string;
	languageCode?: string;
	lastName?: string;
}

export const register = (body: IRegisterUserBody) =>
	post<unknown>("user/register", { body });
