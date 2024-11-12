import styles from "./GiftsPage.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/helpers.ts";
import { useEffect } from "react";
import { getMyProfile } from "../../shared/user/redux/user.slice.ts";
import { userGifts } from "../../shared/profile/redux/profile.slice.ts";
import { GiftDto } from "../../shared/gifts/dto/gift.dto.ts";
import GiftMenu from "../../shared/components/GiftMenu";

const PageGifts = () => {
	const { userProfile, gifts, profileGifts } = useAppSelector((state) => ({
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
			dispatch(userGifts(userProfile.id));
		}
	}, [userProfile]);

	const filledLottieGifts: GiftDto[] = profileGifts.reduce(
		(acc: GiftDto[], item) => {
			const result = gifts.find((gift) => item.giftId === gift.id);

			if (result) {
				return [...acc, { ...result, purchaseId: item.id }];
			}
			return acc;
		},
		[]
	);

	return (
		<div>
			<div className={styles.PageDescription}>
				<h1>Send Gifts in Telegram</h1>
				<label className={styles.Label}>
					Send gifts to users that can be stored <br /> in their app profile.
				</label>
			</div>
			{filledLottieGifts && <GiftMenu hasSend gifts={filledLottieGifts} />}
		</div>
	);
};

export default PageGifts;
