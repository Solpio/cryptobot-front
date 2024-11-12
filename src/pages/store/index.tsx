import { useAppSelector } from "../../redux/helpers.ts";

import styles from "./StorePage.module.scss";

import giftSVG from "../../static/icons/gift.svg";
import StoreMenu from "../../shared/components/StoreMenu";
import { useTelegram } from "../../telegramAPI/hooks/useTelegram.ts";

const PageStore = () => {
	const { gifts, loading } = useAppSelector((state) => ({
		gifts: state.gifts.data,
		loading: state.gifts.loading,
	}));

	const { mainButton } = useTelegram();

	mainButton.text = "Buy a gift";
	return (
		<div>
			<div className={styles.PageDescription}>
				<img className={styles.PageDescriptionIcon} src={giftSVG} alt="Users" />
				<h1 className={styles.Title}>Buy and Send Gifts</h1>
				<label className={styles.Label}>
					Unique gifts for everyone by Crypto Pay.
				</label>
			</div>
			<StoreMenu
				isLoading={loading === "pending"}
				onClickActionButton={mainButton.show}
				gifts={gifts}
			/>
		</div>
	);
};

export default PageStore;
