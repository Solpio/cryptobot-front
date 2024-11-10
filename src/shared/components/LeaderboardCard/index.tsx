import styles from "./LeaderboardCard.module.scss";

interface LeaderboardCard {
	username: string;
	countGifts: number;
	position: number;
	avatarUrl?: string;
}

const LeaderboardCard = ({
	countGifts,
	avatarUrl,
	position,
	username,
}: LeaderboardCard) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.innerWrapper}>
				<div>{avatarUrl || "test"}</div>
				<div className={styles.contentWrapper}>
					<div>
						<div>{username}</div>
						<div>{countGifts || 0}</div>
					</div>
					<div>{position}</div>
				</div>
			</div>
		</div>
	);
};

export default LeaderboardCard;
