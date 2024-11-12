import { useEffect } from "react";
import { receivePurchasedGift } from "../../shared/gifts/data";
import { useParams } from "react-router-dom";

interface PurchasedGift {
	received: boolean;
}

const PurchasedGift = ({ received }: PurchasedGift) => {
	const { id } = useParams();
	console.log(id, received, "debug");
	useEffect(() => {
		if (!received) {
			if (id)
				receivePurchasedGift(id).then((res) => {
					console.log("PurchasedGift", res);
				});
		}
	}, [received]);
	return <div>Gift Purchased</div>;
};

export default PurchasedGift;
