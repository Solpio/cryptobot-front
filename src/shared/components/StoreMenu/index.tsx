import Card from "../Card";
import { GiftDTO } from "../../gifts/dto/gift.dto.ts";

import styles from "./StoreMenu.module.scss";
import Button from "../Button";
import { useTelegram } from "../../../telegramAPI/hooks/useTelegram.ts";

interface StoreMenuProps {
	gifts: GiftDTO[];
}

const StoreMenu = ({ gifts }: StoreMenuProps) => {
	const { colorScheme } = useTelegram();
	console.log(gifts);
	return (
		<div className={styles.StoreMenuContainer}>
			{gifts.map((gift) => (
				<Card
					title={gift.name}
					animationData={JSON.stringify(gift.lottie)}
					backgroundColor={
						colorScheme === "dark" ? gift.backgroundDark : gift.backgroundLight
					}
					actionButton={
						<Button>
							{gift.price} {gift.currency}
						</Button>
					}
				/>
			))}
		</div>
	);
};

export default StoreMenu;
