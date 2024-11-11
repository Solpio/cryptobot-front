import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/helpers.ts";
import {
	getMyProfile,
	getUserProfile,
} from "../../shared/user/redux/user.slice.ts";
import { useEffect } from "react";
import { fetchHistoryGifts } from "../../shared/profile/redux/giftsHistory.slice.ts";
import Profile from "../../shared/components/Profile";

const PageProfile = () => {
	const { id } = useParams();

	const { userProfile, profileGifts } = useAppSelector((state) => ({
		userProfile: state.user.userData,
		profileGifts: state.profileGifts.data,
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
			dispatch(fetchHistoryGifts(userProfile.id));
		}
	}, [userProfile]);

	return (
		<div>
			{profileGifts && (
				<Profile
					leaderboardPosition={3}
					name={`${userProfile?.firstName} ${userProfile?.lastName} `}
					showSettings={false}
					giftsCount={4}
					userGifts={profileGifts}
				/>
			)}
		</div>
	);
};

export default PageProfile;
