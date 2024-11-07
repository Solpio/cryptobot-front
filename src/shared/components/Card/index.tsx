import React from "react";

interface CardProps {
	title: string;
	icon: React.ReactNode;
	backgroundColor?: string;
	size?: "small" | "medium" | "large";
	actionButton?: React.ReactNode;
}

const Card = ({
	icon,
	title,
	size = "medium",
	actionButton,
	backgroundColor,
}: CardProps) => {
	return (
		<div>
			<h2>{title}</h2>
			<div>{icon}</div>
			{actionButton}
		</div>
	);
};

export default Card;
