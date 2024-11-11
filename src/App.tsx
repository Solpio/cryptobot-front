import "./static/css/main.scss";

import { useTelegram } from "./telegramAPI/hooks/useTelegram.ts";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./shared/components/Layout";
import PageStore from "./pages/store";
import PageProfile from "./pages/profile";
import PageGifts from "./pages/gifts";
import PageLeaderboard from "./pages/leaderboard";
import BuyGiftPage from "./pages/buyGift";
import { useAppDispatch, useAppSelector } from "./redux/helpers.ts";
import { fetchGifts } from "./shared/gifts/redux/gifts.slice.ts";
import { makeRegister } from "./shared/user/redux/user.slice.ts";
import { IRegisterUserBody } from "./shared/user/data";
import PurchasedGift from "./pages/purchasedGift";

function App() {
	const { tg, user } = useTelegram();
	const dispatch = useAppDispatch();
	const { loading } = useAppSelector((selector) => ({
		loading: selector.user.loading,
	}));
	const navigate = useNavigate();
	const searchParams = new URLSearchParams(location.search);
	const purchaseId = searchParams.get("purchaseId");
	const sending = searchParams.get("sending");
	console.log("debug", purchaseId, sending);
	useEffect(() => {
		tg.ready();
	}, [tg]);

	const regData: IRegisterUserBody = {
		tgId: user.id,
		firstName: user.first_name,
		username: user.username,
		lastName: user.last_name,
		languageCode: user.language_code,
	};

	useEffect(() => {
		dispatch(fetchGifts());
		dispatch(makeRegister(regData));
	}, []);

	useEffect(() => {
		if (loading === "succeeded" && purchaseId) {
			if (sending) {
				navigate(`/purchased/${purchaseId}/get`);
			}
			navigate(`/purchased/${purchaseId}/view`);
		}
	}, [loading]);

	return (
		<>
			<Routes>
				<Route path={"/"} element={<Layout />}>
					<Route index element={<PageStore />} />
					<Route path={"profile"} element={<PageProfile />} />
					<Route path={"gifts"} element={<PageGifts />} />
					<Route path={"leaderboard"} element={<PageLeaderboard />} />
					<Route path={"gift/:id"} element={<BuyGiftPage />} />
					<Route path={"profile/:id"} element={<PageProfile />} />
					<Route
						path={"purchased/:id/get"}
						element={<PurchasedGift received={false} />}
					/>
					<Route
						path={"purchased/:id/view"}
						element={<PurchasedGift received />}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
