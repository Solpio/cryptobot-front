import { configureStore } from "@reduxjs/toolkit";
import giftsReducer from "../shared/gifts/redux/gifts.slice.ts";
import LeaderboardReducer from "../shared/leaderboard/redux/leaderboard.slice.ts";

export const store = configureStore({
	reducer: {
		gifts: giftsReducer,
		leaderboard: LeaderboardReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
