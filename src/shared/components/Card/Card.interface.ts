import React from "react";

export const enum CardSizeEnum {
	small = "small",
	medium = "medium",
	large = "large",
}

export interface CardProps {
	animationData: string;
	title?: string;
	hasOwnBackground: boolean;
	backgroundColor?: string;
	size?: CardSizeEnum;
	actionButton?: React.ReactNode;
	playAnimation: boolean;
}
