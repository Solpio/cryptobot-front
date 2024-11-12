import { useEffect } from "react";
import { receivePurchasedGift } from "../../shared/gifts/data";
import { useParams } from "react-router-dom";

interface PurchasedGift {
	received: boolean;
}

const PurchasedGift = ({ received }: PurchasedGift) => {
	const { purchaseId } = useParams();
	console.log(purchaseId, received, "debug");
	useEffect(() => {
		if (!received) {
			if (purchaseId)
				receivePurchasedGift(purchaseId).then((res) => {
					console.log("PurchasedGift", res);
				});
		}
	}, [received]);
	return <div>Gift Purchased</div>;
};

export default PurchasedGift;
