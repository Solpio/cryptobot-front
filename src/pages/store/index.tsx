import Button from "../../shared/components/Button";
import { useEffect } from "react";
import { fetchGifts } from "../../shared/gifts/redux/gifts.slice.ts";
import { useAppDispatch, useAppSelector } from "../../redux/helpers.ts";

import StoreMenu from "../../shared/components/StoreMenu";

const PageStore = () => {
	const dispatch = useAppDispatch();

	const { gifts } = useAppSelector((state) => ({
		gifts: state.gifts.data,
	}));

	console.log("daata", gifts);
	useEffect(() => {
		dispatch(fetchGifts());
	}, []);
	return (
		<div>
			<h1>Buy and Send Gifts</h1>
			<label>Unique gifts for everyone by Crypto Pay.</label>
			<Button>10 USDT</Button>
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
