import styles from "./GiftsPage.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/helpers.ts";
import { useEffect } from "react";
import { getMyProfile } from "../../shared/user/redux/user.slice.ts";
import { recentActivityUserGifts } from "../../shared/profile/redux/giftsHistory.slice.ts";

const PageGifts = () => {
	const { userProfile } = useAppSelector((state) => ({
		userProfile: state.user.userData,
		profileGifts: state.profileGifts.ownGits,
		gifts: state.gifts.data,
	}));

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getMyProfile());
	}, []);

	useEffect(() => {
		if (userProfile) {
			dispatch(recentActivityUserGifts(userProfile.id));
		}
	}, [userProfile]);

	// const filledLottieGifts: GiftDto[] = profileGifts.reduce(
	// 	(acc: GiftDto[], item) => {
	// 		const result = gifts.find((gift) => item.purchase.giftId === gift.id);
	//
	// 		if (result) {
	// 			return [...acc, { ...result, purchaseId: item.purchase.giftId }];
	// 		}
	// 		return acc;
	// 	},
	// 	[]
	// );

	return (
		<div>
			<div className={styles.PageDescription}>
				<h1>Send Gifts in Telegram</h1>
				<label>
					Send gifts to users that can be stored <br /> in their app profile.
				</label>
			</div>
			{/*{filledLottieGifts && <GiftMenu hasSend gifts={filledLottieGifts} />}*/}
		</div>
	);
};

export default PageGifts;
