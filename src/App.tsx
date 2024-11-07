import "./static/css/main.scss";

import { useTelegram } from "./telegramAPI/hooks/useTelegram.ts";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./shared/components/Layout";
import PageStore from "./pages/store";
import PageProfile from "./pages/profile";
import PageGifts from "./pages/gifts";
import PageLeaderboard from "./pages/leaderboard";
import BuyGiftPage from "./pages/buyGift";
import { useAppDispatch } from "./redux/helpers.ts";
import { fetchGifts } from "./shared/gifts/redux/gifts.slice.ts";

function App() {
	const { tg, theme, mainButton } = useTelegram();
	const dispatch = useAppDispatch();
	useEffect(() => {
		tg.ready();
		mainButton.text = "123";
	}, [tg]);

	useEffect(() => {
		dispatch(fetchGifts());
	}, []);

	console.log(theme);
	return (
		<>
			<Routes>
				<Route path={"/"} element={<Layout />}>
					<Route index element={<PageStore />} />
					<Route path={"profile"} element={<PageProfile />} />
					<Route path={"gifts"} element={<PageGifts />} />
					<Route path={"leaderboard"} element={<PageLeaderboard />} />
					<Route path={"gift/:id"} element={<BuyGiftPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
