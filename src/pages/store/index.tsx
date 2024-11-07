import Button from "../../shared/components/Button";
import { useEffect } from "react";
import { fetchGifts } from "../../shared/gifts/store/gifts.slice.ts";
import { useAppDispatch } from "../../redux/helpers.ts";

const PageStore = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchGifts());
	}, []);

	return (
		<div>
			<h1>Buy and Send Gifts</h1>
			<label>Unique gifts for everyone by Crypto Pay.</label>
			<Button>10 USDT</Button>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
			<div>Store</div>
		</div>
	);
};

export default PageStore;
