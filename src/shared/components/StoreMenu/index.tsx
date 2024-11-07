import Card from "../Card";
import { CardSizeEnum } from "../Card/Card.interface.ts";
import { GiftDTO } from "../../gifts/dto/gift.dto.ts";

import styles from "./StoreMenu.module.scss";

interface StoreMenuProps {
	gifts: GiftDTO[];
}

const StoreMenu = ({ gifts }: StoreMenuProps) => {
	return (
		<div>
			<div className={styles.StoreMenuContainer}>
				{gifts.map((gift) => (
					<Card
						title={gift.name}
						animationData={JSON.stringify(gift.lottie)}
						backgroundColor={
							"linear-gradient(180deg, rgba(70, 209, 0, 0.2) 0%, rgba(70, 209, 0, 0.2) 100%)"
						}
						size={CardSizeEnum.medium}
					/>
				))}
			</div>
		</div>
	);
};

export default StoreMenu;
