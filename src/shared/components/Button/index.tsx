import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
	children?: React.ReactNode | string;
	onClick?: () => void;
	icon?: React.ReactNode;
	disabled?: boolean;
}

const Button = ({ children, onClick, icon, disabled }: ButtonProps) => {
	if (icon) {
		return (
			<button disabled={disabled} className={styles.Button} onClick={onClick}>
				<div className={styles.ButtonWrapper}>
					<div>{icon}</div>
					{children}
				</div>
			</button>
		);
	}

	return (
		<button disabled={disabled} className={styles.Button} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
