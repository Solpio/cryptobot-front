import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import TabBar from "../TabBar";
import TabBarItem from "../TabBarItem";

import profileLottie from "../../../static/animations/tab-profile.json";
import storeLottie from "../../../static/animations/tab-store.json";
import giftsLottie from "../../../static/animations/tab-gifts.json";
import liderboardLottie from "../../../static/animations/tab-leaderboard.json";

const Layout = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<Outlet />
			</div>
			<TabBar>
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? "link-active" : "")}
				>
					<TabBarItem
						animationData={JSON.stringify(storeLottie)}
						title={"Store"}
					/>
				</NavLink>
				<NavLink
					to="gifts"
					className={({ isActive }) => (isActive ? "link-active" : "")}
				>
					<TabBarItem
						animationData={JSON.stringify(giftsLottie)}
						title={"Gifts"}
					/>
				</NavLink>
				<NavLink
					to="leaderboard"
					className={({ isActive }) => (isActive ? "link-active" : "")}
				>
					<TabBarItem
						animationData={JSON.stringify(liderboardLottie)}
						title={"Liderboard"}
					/>
				</NavLink>
				<NavLink
					to="profile"
					className={({ isActive }) => (isActive ? "link-active" : "")}
				>
					<TabBarItem
						animationData={JSON.stringify(profileLottie)}
						title={"Profile"}
					/>
				</NavLink>
			</TabBar>
		</>
	);
};

export default Layout;
