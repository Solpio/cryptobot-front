import React from "react";

export const enum CardSizeEnum {
	small = "small",
	medium = "medium",
}

export interface CardProps {
	title: string;
	animationData: string;
	backgroundColor?: string;
	size?: CardSizeEnum;
	actionButton?: React.ReactNode;
}
