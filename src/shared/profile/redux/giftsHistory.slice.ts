import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProfileGifts, getRecentActivityGifts, HistoryGifts } from "../data";

interface GiftsState {
	recentActivityProfile: HistoryGifts[];
	ownGits: unknown;
	loading: "pending" | "succeeded" | "failed";
}

const initialState: GiftsState = {
	recentActivityProfile: [],
	ownGits: [],
	loading: "succeeded",
};

export const recentActivityUserGifts = createAsyncThunk(
	"getHistoryGifts",
	async (userId: string) => {
		return await getRecentActivityGifts(userId);
	}
);

export const userGifts = createAsyncThunk(
	"getProfileGifts",
	async (userId: string) => {
		return await getProfileGifts(userId);
	}
);

const giftsHistorySlice = createSlice({
	name: "profile",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(recentActivityUserGifts.fulfilled, (state, action) => {
			state.recentActivityProfile = action.payload;
			state.loading = "succeeded";
		});
		builder.addCase(recentActivityUserGifts.pending, (state) => {
			state.loading = "pending";
		});
		builder.addCase(recentActivityUserGifts.rejected, (state) => {
			state.loading = "failed";
		});

		builder.addCase(userGifts.fulfilled, (state, action) => {
			state.ownGits = action.payload;
			state.loading = "succeeded";
		});
		builder.addCase(userGifts.pending, (state) => {
			state.loading = "pending";
		});
		builder.addCase(userGifts.rejected, (state) => {
			state.loading = "failed";
		});
	},
});

export default giftsHistorySlice.reducer;
