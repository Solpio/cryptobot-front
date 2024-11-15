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
import PurchasedGift from "./pages/purchasedGift";
import { useAppDispatch, useAppSelector } from "./redux/helpers.ts";
import { fetchGifts } from "./shared/gifts/redux/gifts.slice.ts";
import {
	makeRegister,
	redirectedToGift,
} from "./shared/user/redux/user.slice.ts";
import { IRegisterUserBody } from "./shared/user/data";

function App() {
	const { tg, user, startParam } = useTelegram();
	const dispatch = useAppDispatch();
	const { loading, redirected } = useAppSelector((selector) => ({
		loading: selector.user.loading,
		redirected: selector.user.redirectedToGift,
	}));
	const navigate = useNavigate();
	let purchaseIdSending = "";
	let purchaseIdView = "";
	if (startParam) {
		if (startParam.includes("purchaseidsending")) {
			purchaseIdSending = startParam.split("-")[1];
		}

		if (startParam.includes("purchaseid")) {
			purchaseIdView = startParam.split("-")[1];
		}
	}
	console.log("debug", purchaseIdView, purchaseIdSending);
	console.log(window.location);
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
		if (loading === "succeeded" && purchaseIdSending && !redirected) {
			dispatch(redirectedToGift(true));
			navigate(`/purchased/${purchaseIdSending}/get`);
		} else if (loading === "succeeded" && purchaseIdView && !redirected) {
			dispatch(redirectedToGift(true));
			navigate(`/purchased/${purchaseIdView}/view`);
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
					<Route path={"profile/me"} element={<PageProfile />} />
					<Route
						path={"purchased/:id/get"}
						element={
							<PurchasedGift
								text={"Gift Purchased"}
								description={"The Delicious Cake gift was received"}
								received={false}
							/>
						}
					/>
					<Route
						path={"purchased/:id/view"}
						element={
							<PurchasedGift
								text={"Gift Received"}
								description={"You have received the gift."}
								received
							/>
						}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
