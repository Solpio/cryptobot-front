import { useParams } from "react-router-dom";

const BuyGiftPage = () => {
	const { id } = useParams();
	return <div>test {id}</div>;
};

export default BuyGiftPage;
