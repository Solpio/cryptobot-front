import Card from "../Card";
import { GiftDto } from "../../gifts/dto/gift.dto.ts";

import styles from "./StoreMenu.module.scss";
import Button from "../Button";
import { useTelegram } from "../../../telegramAPI/hooks/useTelegram.ts";
import { NavLink } from "react-router-dom";
import SkeletonStoreCard from "../Card/Skeleton/SkeletonStoreCard.tsx";

interface StoreMenuProps {
	gifts: GiftDto[];
	onClickActionButton?: () => void;
	isLoading: boolean;
}

const StoreMenu = ({
	gifts,
	onClickActionButton,
	isLoading,
}: StoreMenuProps) => {
	const { colorScheme } = useTelegram();
	return (
		<div className={styles.StoreMenuContainer}>
			{!isLoading &&
				gifts.map((gift) => (
					<Card
						hasOwnBackground
						title={gift.name}
						animationData={JSON.stringify(gift.lottie)}
						playAnimation
						backgroundColor={
							colorScheme === "dark"
								? gift.backgroundDark
								: gift.backgroundLight
						}
						actionButton={
							<NavLink to={`gift/${gift.id}`}>
								<Button onClick={onClickActionButton}>
									{gift.price} {gift.currency}
								</Button>
							</NavLink>
						}
					/>
				))}
			{isLoading && new Array(6).fill(0).map(() => <SkeletonStoreCard />)}
		</div>
	);
};

export default StoreMenu;
