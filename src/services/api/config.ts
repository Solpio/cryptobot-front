export const config = {
	api: {
		baseURL:
			import.meta.env.VITE_MODE === "LOCAL"
				? "http://localhost:8080"
				: `${import.meta.env.VITE_BASE_URL}`,
		timeout: 60000,
		headers: {
			// @ts-ignore
			authorization: window.Telegram.WebApp.initData,
		},
	},
};
