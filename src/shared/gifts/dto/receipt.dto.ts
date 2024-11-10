export interface ReceiptDto {
	amount: string;
	currencyAsset: string;
	currencyFiat: string;
	currencyType: string;
	giftId: string;
	id: string;
	miniAppPayUrl: string;
	recipientTgId?: number;
	status: string;
	userId: string;
}
