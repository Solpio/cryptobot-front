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
	playAnimation,
	hasOwnBackground,
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
	if (playAnimation) {
		play();
	}

	if (size === CardSizeEnum.large) {
		return (
			<div
				onClick={handleOnClick}
				className={styles.Card}
				style={{
					background: backgroundColor,
				}}
			>
				<div className={styles.CardWrapper}>
					<div className={classNames(styles.Icon, styles.IconLarge)}>
						{View}
					</div>
				</div>
			</div>
		);
	}
	return (
		<div
			onClick={handleOnClick}
			className={classNames(
				styles.Card,
				!hasOwnBackground && styles.noBackground
			)}
			style={{
				background: backgroundColor,
			}}
		>
			<div
				className={classNames(
					styles.CardWrapper,
					size === CardSizeEnum.medium && styles.CardWrapperMedium,
					size === CardSizeEnum.small && styles.CardWrapperSmall
				)}
			>
				{size === CardSizeEnum.small && (
					<h3 className={styles.SmallTitle}>{title}</h3>
				)}
				<div
					className={classNames(
						styles.Icon,
						size === CardSizeEnum.medium && styles.IconMedium
					)}
				>
					{View}
				</div>
				{size === CardSizeEnum.medium && (
					<h2 className={styles.MediumTitle}>{title}</h2>
				)}
				<div>{actionButton}</div>
			</div>
		</div>
	);
};

export default Card;
