import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/helpers.ts";
import {
	getMyProfile,
	getUserProfile,
} from "../../shared/user/redux/user.slice.ts";
import { useEffect } from "react";
import {
	recentActivityUserGifts,
	userGifts,
} from "../../shared/profile/redux/giftsHistory.slice.ts";

const PageProfile = () => {
	const { id } = useParams();

	const { userProfile, profileGifts } = useAppSelector((state) => ({
		userProfile: state.user.userData,
		recentlyActions: state.profileGifts.recentActivityProfile,
		profileGifts: state.profileGifts.ownGits,
	}));

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (id) {
			dispatch(getUserProfile(id));
		} else {
			dispatch(getMyProfile());
		}
	}, [id]);

	useEffect(() => {
		if (userProfile) {
			dispatch(recentActivityUserGifts(userProfile.id));
			dispatch(userGifts(userProfile.id));
		}
	}, [userProfile]);

	console.log(profileGifts);

	return (
		<div>
			{/*{profileGifts.length && (*/}
			{/*	<Profile*/}
			{/*		leaderboardPosition={3}*/}
			{/*		name={`${userProfile?.firstName} ${userProfile?.lastName} `}*/}
			{/*		showSettings={false}*/}
			{/*		giftsCount={4}*/}
			{/*		userGifts={profileGifts}*/}
			{/*	/>*/}
			{/*)}*/}
		</div>
	);
};

export default PageProfile;
