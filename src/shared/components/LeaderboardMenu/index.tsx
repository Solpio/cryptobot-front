import LeaderboardCard from "../LeaderboardCard";
import { User } from "../../leaderboard/dto/users.ts";

interface LeaderboardMenuProps {
	users: User[];
}

const LeaderboardMenu = ({ users }: LeaderboardMenuProps) => {
	return (
		<div>
			<div></div>
			{users.map((user, id) => (
				<LeaderboardCard
					username={
						user.username || `${user.firstName || ""} ${user.lastName || ""}`
					}
					countGifts={user.giftsCount}
					position={id + 1}
					key={user.tgId}
				/>
			))}
		</div>
	);
};

export default LeaderboardMenu;
