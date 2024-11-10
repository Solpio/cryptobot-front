import { useEffect } from "react";
import { receivePurchasedGift } from "../../shared/gifts/data";
import { useParams } from "react-router-dom";

interface PurchasedGift {
	received: boolean;
}

const PurchasedGift = ({ received }: PurchasedGift) => {
	const { purchaseId } = useParams();
	useEffect(() => {
		if (!received) {
			if (purchaseId) receivePurchasedGift(purchaseId);
		}
	}, [received]);
	return <div>Gift Purchased</div>;
};

export default PurchasedGift;
