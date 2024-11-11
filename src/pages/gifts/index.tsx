import styles from "./GiftsPage.module.scss";
import GiftMenu from "../../shared/components/GiftMenu";
import { useAppSelector } from "../../redux/helpers.ts";

const PageGifts = () => {
	const { gifts } = useAppSelector((state) => ({
		gifts: state.gifts.data,
	}));

	return (
		<div>
			<div className={styles.PageDescription}>
				<h1>Send Gifts in Telegram</h1>
				<label>
					Send gifts to users that can be stored <br /> in their app profile.
				</label>
			</div>

			<GiftMenu hasSend gifts={gifts} />
		</div>
	);
};

export default PageGifts;
