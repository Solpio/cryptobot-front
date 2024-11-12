import ProfileHeader from "./ProfileHeader";
import { GiftDto } from "../../gifts/dto/gift.dto.ts";
import GiftMenu from "../GiftMenu";
import { useAppSelector } from "../../../redux/helpers.ts";
import { ProfileGifts } from "../../profile/data";

interface ProfileProps {
	name: string;
	giftsCount: number;
	leaderboardPosition: number;
	showSettings: boolean;
	photoUrl?: string;

	userGifts: ProfileGifts[];
}

const Profile = ({
	giftsCount,
	photoUrl,
	leaderboardPosition,
	showSettings,
	name,
	userGifts,
}: ProfileProps) => {
	const { gifts } = useAppSelector((state) => ({
		gifts: state.gifts.data,
	}));
	const filledLottieGifts: GiftDto[] = userGifts.reduce(
		(acc: GiftDto[], item) => {
			const result = gifts.find((gift) => item.giftId === gift.id);
			if (result) {
				return [...acc, result];
			}
			return acc;
		},
		[]
	);
	return (
		<div>
			<ProfileHeader
				name={name}
				giftsCount={giftsCount}
				leaderboardPosition={leaderboardPosition}
				showSettings={showSettings}
				photoUrl={photoUrl}
			/>
			<GiftMenu hasSend={false} gifts={filledLottieGifts} />
		</div>
	);
};

export default Profile;
