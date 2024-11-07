import Card from "../Card";
import { GiftDTO } from "../../gifts/dto/gift.dto.ts";

import styles from "./StoreMenu.module.scss";
import Button from "../Button";
import { useTelegram } from "../../../telegramAPI/hooks/useTelegram.ts";
import { NavLink } from "react-router-dom";

interface StoreMenuProps {
	gifts: GiftDTO[];
}

const StoreMenu = ({ gifts }: StoreMenuProps) => {
	const { colorScheme } = useTelegram();
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
						<NavLink to={`gift/${gift.id}`}>
							<Button>
								{gift.price} {gift.currency}
							</Button>
						</NavLink>
					}
				/>
			))}
		</div>
	);
};

export default StoreMenu;
