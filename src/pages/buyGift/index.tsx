import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/helpers.ts";
import Card from "../../shared/components/Card";
import { useTelegram } from "../../telegramAPI/hooks/useTelegram.ts";
import { CardSizeEnum } from "../../shared/components/Card/Card.interface.ts";
import { buyGift } from "../../shared/gifts/data";
import { useEffect, useState } from "react";

const BuyGiftPage = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(false);
	const { gifts } = useAppSelector((state) => ({
		gifts: state.gifts.data,
	}));

	const gift = gifts.find((gift) => gift.id === id);
	const { colorScheme, mainButton, openTelegramLink } = useTelegram();

	useEffect(() => {
		mainButton.onClick(() => {
			if (id) {
				setLoading(true);
				buyGift(id)
					.then((res) => {
						openTelegramLink(res.miniAppPayUrl);
						mainButton.hide();
						setLoading(false);
					})
					.catch(() => {
						mainButton.show();
					});
			}

			// switchInlineQuery(id, ["users"]);
		});
		return () => {
			mainButton.onClick = () => {};
		};
	}, []);

	useEffect(() => {
		if (loading) {
			mainButton.showProgress();
		} else {
			mainButton.hideProgress();
		}
	}, [loading]);

	return (
		<div>
			{gift && (
				<Card
					backgroundColor={
						colorScheme === "dark" ? gift.backgroundDark : gift.backgroundLight
					}
					animationData={JSON.stringify(gift.lottie)}
					size={CardSizeEnum.large}
					playAnimation
				/>
			)}
		</div>
	);
};

export default BuyGiftPage;
