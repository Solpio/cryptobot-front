// @ts-ignore
const tg = window.Telegram.WebApp;

export function useTelegram() {
	const onClose = () => {
		tg.close();
	};

	const onExpand = () => {
		tg.expand();
	};

	const onToggleButton = () => {
		if (tg.MainButton.isVisible) {
			tg.MainButton.hide();
		} else {
			tg.MainButton.show();
		}
	};

	return {
		onClose,
		onToggleButton,
		onExpand,
		tg,
		theme: tg.themeParams,
		user: tg.initDataUnsafe?.user,
		queryId: tg.initDataUnsafe?.query_id,
		startParam: tg.initDataUnsafe?.start_param,
		mainButton: tg.MainButton,
		backButton: tg.BackButton,
		secondaryButton: tg.SecondaryButton,
		requestContact: tg.requestContact,
		colorScheme: tg.colorScheme,
		switchInlineQuery: tg.switchInlineQuery,
		openTelegramLink: tg.openTelegramLink,
	};
}
