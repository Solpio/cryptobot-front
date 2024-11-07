import { useLottie } from "lottie-react";

import styles from "./TabBarItem.module.scss";

interface TabBarItem {
	animationData: string;
	title: string;
	active?: boolean;
	loop?: boolean;
	autoplay?: boolean;
}

const TabBarItem = ({ animationData, title }: TabBarItem) => {
	const options = {
		animationData: JSON.parse(animationData),
		loop: false,
		autoplay: false,
		style: {
			fill: "#ff00ff",
		},
	};

	const { View, play, goToAndStop } = useLottie(options);
	const handleOnClick = () => {
		goToAndStop(0, true);
		play();
	};

	return (
		<div className={styles.tabBarWrapper} onClick={handleOnClick}>
			<div className={styles.tabBarIcon}>{View}</div>
			<div>{title}</div>
		</div>
	);
};

export default TabBarItem;
