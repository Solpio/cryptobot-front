import { useAppSelector } from "../../redux/helpers.ts";

import styles from "./Store.module.scss";

import giftSVG from "../../static/icons/gift.svg";
import StoreMenu from "../../shared/components/StoreMenu";

const PageStore = () => {
	const { gifts } = useAppSelector((state) => ({
		gifts: state.gifts.data,
	}));

	return (
		<div>
			<div className={styles.PageDescription}>
				<img className={styles.PageDescriptionIcon} src={giftSVG} alt="Gift" />
				<h1>Buy and Send Gifts</h1>
				<label>Unique gifts for everyone by Crypto Pay.</label>
			</div>
			<StoreMenu gifts={gifts} />
			{/*{gifts.map((gift) => (*/}
			{/*	<Card*/}
			{/*		title={gift.name}*/}
			{/*		key={gift.id}*/}
			{/*		animationData={JSON.stringify(gift.lottie)}*/}
			{/*		backgroundColor={*/}
			{/*			"linear-gradient(180deg, rgba(254, 159, 65, 0.2) 0%, rgba(254, 159, 65, 0.2) 100%)"*/}
			{/*		}*/}
			{/*	/>*/}
			{/*))}*/}
			{/*<Card*/}
			{/*	title={"Delicious Cake"}*/}
			{/*	backgroundColor={*/}
			{/*		"linear-gradient(180deg, rgba(254, 159, 65, 0.2) 0%, rgba(254, 159, 65, 0.2) 100%)"*/}
			{/*	}*/}
			{/*	animationData={JSON.stringify(testSvg)}*/}
			{/*/>*/}
			{/*<Card*/}
			{/*	title={"Green Star"}*/}
			{/*	backgroundColor={*/}
			{/*		"linear-gradient(180deg, rgba(70, 209, 0, 0.2) 0%, rgba(70, 209, 0, 0.2) 100%)"*/}
			{/*	}*/}
			{/*	animationData={JSON.stringify(testSvg)}*/}
			{/*/>*/}
		</div>
	);
};

export default PageStore;
