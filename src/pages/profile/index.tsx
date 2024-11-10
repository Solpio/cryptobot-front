import { useParams } from "react-router-dom";
import { useTelegram } from "../../telegramAPI/hooks/useTelegram.ts";
import Profile from "../../shared/components/Profile";
import { useAppDispatch, useAppSelector } from "../../redux/helpers.ts";
import { useEffect } from "react";
import { getMyProfile } from "../../shared/user/redux/user.slice.ts";

const PageProfile = () => {
	const { id } = useParams();
	const { user } = useTelegram();

	const { userProfile } = useAppSelector((state) => ({
		userProfile: state.user.data,
	}));

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getMyProfile());
	}, []);

	const mockData = {
		leaderboardPosition: 1,
		name: "Mark",
	};

	const isMyProfile = user.id === id;
	return (
		<div>
			{/*<Profile*/}
			{/*	leaderboardPosition={mockData.leaderboardPosition}*/}
			{/*	name={mockData.name}*/}
			{/*	showSettings={false}*/}
			{/*	giftsCount={4}*/}
			{/*	userGifts={gifts}*/}
			{/*/>*/}
		</div>
	);
};

export default PageProfile;
