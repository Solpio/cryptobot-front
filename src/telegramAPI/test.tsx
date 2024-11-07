interface TestProps {
	onExpand?: () => void;
}

const Test = ({ onExpand }: TestProps) => {
	return (
		<>
			<button onClick={onExpand}>test</button>
		</>
	);
};

export default Test;
