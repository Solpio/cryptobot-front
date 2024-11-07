import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

export default defineConfig({
	plugins: [
		react({
			include: "**/*.{jsx,tsx}",
			babel: {
				plugins: ["babel-plugin-styled-components"],
			},
		}),
	],
	css: {
		preprocessorOptions: {
			scss: {
				api: "modern-compiler",
			},
		},
	},
	server: {
		port: 3001,
		host: "localhost.cryptopay.com",
	},
	preview: {
		port: 3001,
		host: "localhost.cryptopay.com",
	},

	resolve: {
		alias: {
			shared: path.resolve(__dirname, "src/shared"),
			hooks: path.resolve(__dirname, "src/hooks"),
			public: path.resolve(__dirname, "src/public"),
			static: path.resolve(__dirname, "src/static"),
			services: path.resolve(__dirname, "src/services"),
			telegramAPI: path.resolve(__dirname, "src/telegramAPI"),
		},
	},
});
