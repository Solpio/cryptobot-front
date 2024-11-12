import ContentLoader from "react-content-loader";

const SkeletonStoreCard = () => (
	<ContentLoader
		speed={2}
		width={170}
		height={250}
		viewBox="0 0 170 250"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		<rect x="3" y="6" rx="12" ry="12" width="165" height="220" />
	</ContentLoader>
);

export default SkeletonStoreCard;
