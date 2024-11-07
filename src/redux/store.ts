import { configureStore } from "@reduxjs/toolkit";
import giftsReducer from "../shared/gifts/store/gifts.slice.ts";

export const store = configureStore({
	reducer: {
		gifts: giftsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
