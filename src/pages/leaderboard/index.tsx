import Search from "../../shared/components/Search";

import styles from "./LeaderBoard.module.scss";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/helpers.ts";
import { fetchLeaderboard } from "../../shared/leaderboard/redux/leaderboard.slice.ts";
import LeaderboardMenu from "../../shared/components/LeaderboardMenu";
import useDebounce from "../../shared/hooks/useDebounce.tsx";

const PageLeaderboard = () => {
	const [search, setSearch] = useState("");

	const dispatch = useAppDispatch();
	const debouncedSearch = useDebounce(search, 500);
	const { leaderboardUsers } = useAppSelector((state) => ({
		leaderboardUsers: state.leaderboard.data,
	}));

	useEffect(() => {
		dispatch(fetchLeaderboard(debouncedSearch));
	}, [debouncedSearch]);

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	return (
		<div>
			<div className={styles.SearchWrapper}>
				<Search
					placeholder={"Search"}
					value={search}
					onChange={handleOnChange}
				/>
			</div>
			<LeaderboardMenu users={leaderboardUsers} />
		</div>
	);
};

export default PageLeaderboard;
