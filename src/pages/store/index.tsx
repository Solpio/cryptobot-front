import { useAppSelector } from "../../redux/helpers.ts";

import styles from "./StorePage.module.scss";

import giftSVG from "../../static/icons/gift.svg";
import StoreMenu from "../../shared/components/StoreMenu";
import { useTelegram } from "../../telegramAPI/hooks/useTelegram.ts";

const PageStore = () => {
	const { gifts } = useAppSelector((state) => ({
		gifts: state.gifts.data,
	}));

	const { mainButton, onToggleButton } = useTelegram();

	mainButton.text = "Buy a gift";
	return (
		<div>
			<div className={styles.PageDescription}>
				<img className={styles.PageDescriptionIcon} src={giftSVG} alt="Gift" />
				<h1>Buy and Send Gifts</h1>
				<label>Unique gifts for everyone by Crypto Pay.</label>
			</div>
			<StoreMenu onClickActionButton={onToggleButton} gifts={gifts} />
		</div>
	);
};

export default PageStore;
