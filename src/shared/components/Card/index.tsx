import classNames from "classnames";
import styles from "./Card.module.scss";
import { CardProps, CardSizeEnum } from "./Card.interface.ts";
import { useLottie } from "lottie-react";

const Card = ({
	title,
	size = CardSizeEnum.medium,
	actionButton,
	backgroundColor,
	animationData,
}: CardProps) => {
	const options = {
		animationData: JSON.parse(animationData),
		loop: false,
		autoplay: false,
	};
	const { View, play, goToAndStop } = useLottie(options);
	const handleOnClick = () => {
		goToAndStop(0, true);
		play();
	};
	goToAndStop(0, true);
	play();
	return (
		<div
			onClick={handleOnClick}
			className={styles.Card}
			style={{
				background: backgroundColor,
			}}
		>
			<div className={styles.CardWrapper}>
				<div
					className={classNames(
						styles.Icon,
						size === CardSizeEnum.medium && styles.IconMedium
					)}
				>
					{View}
				</div>
				<h2>{title}</h2>
				{actionButton}
			</div>
		</div>
	);
};

export default Card;
