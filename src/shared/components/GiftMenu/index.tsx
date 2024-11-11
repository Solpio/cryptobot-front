import { GiftDto } from "../../gifts/dto/gift.dto.ts";
import styles from "./GiftMenu.module.scss";
import Card from "../Card";
import Button from "../Button";
import { CardSizeEnum } from "../Card/Card.interface.ts";
import Popup from "../Popup";
import { useEffect, useState } from "react";
import { useTelegram } from "../../../telegramAPI/hooks/useTelegram.ts";

interface GiftMenuProps {
	gifts: GiftDto[];
	hasSend: boolean;
}

const GiftMenu = ({ gifts, hasSend }: GiftMenuProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const { mainButton, switchInlineQuery } = useTelegram();

	const handleOnClose = () => {
		setIsOpen(false);
	};

	const handleOnOpen = () => {
		setIsOpen(true);
	};

	mainButton.onClick(() => switchInlineQuery(["users"]));
	useEffect(() => {
		if (isOpen) {
			mainButton.text = "Send gift to a user";
			mainButton.show();
		} else {
			mainButton.onClick = () => {};
			mainButton.hide();
		}
		return () => {
			mainButton.onClick = () => {};
		};
	}, [isOpen]);

	return (
		<div className={styles.GiftMenuContainer}>
			{gifts.map((gift, id) => (
				<Card
					title={gift.name}
					size={CardSizeEnum.small}
					animationData={JSON.stringify(gift.lottie)}
					backgroundColor={"#2C2C2E"}
					key={`${gift.id}${id}`}
					playAnimation={false}
					actionButton={
						hasSend ? <Button onClick={handleOnOpen}>Send</Button> : null
					}
				/>
			))}
			<Popup isOpen={isOpen} onClose={handleOnClose}>
				<div></div>
			</Popup>
		</div>
	);
};

export default GiftMenu;
