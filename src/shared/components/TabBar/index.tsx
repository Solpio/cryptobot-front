import React from "react";
import styles from "./TabBar.module.scss";

interface TabBarProps {
	children?: React.ReactNode;
}

const TabBar = ({ children }: TabBarProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.menu}>{children}</div>
		</div>
	);
};

export default TabBar;
