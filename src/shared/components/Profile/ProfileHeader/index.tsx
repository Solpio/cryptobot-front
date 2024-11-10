interface ProfileHeaderProps {
	name: string;
	giftsCount: number;
	leaderboardPosition: number;
	showSettings: boolean;
	photoUrl?: string;
}
const ProfileHeader = ({
	showSettings,
	giftsCount,
	leaderboardPosition,
	name,
	photoUrl,
}: ProfileHeaderProps) => {
	return (
		<div>
			{showSettings && <div>Switch theme</div>}
			<div>
				<div>
					Photo Component {photoUrl} {leaderboardPosition}
				</div>
				<div>{name}</div>
				<div>{giftsCount}</div>
			</div>
			{showSettings && <div>Switch Lang</div>}
		</div>
	);
};

export default ProfileHeader;
