import { GiftDto } from "../../gifts/dto/gift.dto.ts";
import styles from "./GiftMenu.module.scss";
import Card from "../Card";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import { CardSizeEnum } from "../Card/Card.interface.ts";

interface GiftMenuProps {
	gifts: GiftDto[];
}

const GiftMenu = ({ gifts }: GiftMenuProps) => {
	return (
		<div className={styles.GiftMenuContainer}>
			{gifts.map((gift) => (
				<Card
					title={gift.name}
					size={CardSizeEnum.small}
					animationData={JSON.stringify(gift.lottie)}
					backgroundColor={"#2C2C2E"}
					actionButton={
						<NavLink to={`gift/${gift.id}`}>
							<Button>Send</Button>
						</NavLink>
					}
				/>
			))}
		</div>
	);
};

export default GiftMenu;
