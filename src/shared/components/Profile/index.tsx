import ProfileHeader from "./ProfileHeader";
import { GiftDto } from "../../gifts/dto/gift.dto.ts";
import GiftMenu from "../GiftMenu";

interface ProfileProps {
	name: string;
	giftsCount: number;
	leaderboardPosition: number;
	showSettings: boolean;
	photoUrl?: string;

	userGifts: GiftDto[];
}

const Profile = ({
	giftsCount,
	photoUrl,
	leaderboardPosition,
	showSettings,
	name,
	userGifts,
}: ProfileProps) => {
	return (
		<div>
			<ProfileHeader
				name={name}
				giftsCount={giftsCount}
				leaderboardPosition={leaderboardPosition}
				showSettings={showSettings}
				photoUrl={photoUrl}
			/>
			<GiftMenu gifts={userGifts} />
		</div>
	);
};

export default Profile;
