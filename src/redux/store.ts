import { configureStore } from "@reduxjs/toolkit";
import giftsReducer from "../shared/gifts/redux/gifts.slice.ts";
import LeaderboardReducer from "../shared/leaderboard/redux/leaderboard.slice.ts";
import userReducer from "../shared/user/redux/user.slice.ts";
import giftHistoryReducer from "../shared/profile/redux/profile.slice.ts";

export const store = configureStore({
	reducer: {
		gifts: giftsReducer,
		leaderboard: LeaderboardReducer,
		user: userReducer,
		profileGifts: giftHistoryReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
