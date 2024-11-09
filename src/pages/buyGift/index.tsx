import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/helpers.ts";
import Card from "../../shared/components/Card";
import { useTelegram } from "../../telegramAPI/hooks/useTelegram.ts";
import { CardSizeEnum } from "../../shared/components/Card/Card.interface.ts";

const BuyGiftPage = () => {
	const { id } = useParams();

	const { gifts } = useAppSelector((state) => ({
		gifts: state.gifts.data,
	}));

	const gift = gifts.find((gift) => gift.id === id);
	const { colorScheme, mainButton, switchInlineQuery } = useTelegram();

	mainButton.onClick(() => {
		// if (id) {
		// 	buyGift(user.id, id);
		// }
		switchInlineQuery(id, ["users"]);
		mainButton.hide();
	});

	return (
		<div>
			{gift && (
				<Card
					backgroundColor={
						colorScheme === "dark" ? gift.backgroundDark : gift.backgroundLight
					}
					animationData={JSON.stringify(gift.lottie)}
					size={CardSizeEnum.large}
				/>
			)}
		</div>
	);
};

export default BuyGiftPage;
