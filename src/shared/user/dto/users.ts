export interface User {
	id: string;
	firstName: string;
	lastName: string;
	giftsCount: number;
	languageCode: string;
	tgId: number;
	username?: string;
	userPhoto: {
		photoUrl: string;
	};
}
