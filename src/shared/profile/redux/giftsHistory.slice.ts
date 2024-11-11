import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHistoryGifts, HistoryGifts } from "../data";

interface GiftsState {
	data: HistoryGifts[];
	loading: "pending" | "succeeded" | "failed";
}

const initialState: GiftsState = {
	data: [],
	loading: "succeeded",
};

export const fetchHistoryGifts = createAsyncThunk(
	"getHistoryGifts",
	async (userId: string) => {
		return await getHistoryGifts(userId);
	}
);

const giftsHistorySlice = createSlice({
	name: "profile",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchHistoryGifts.fulfilled, (state, action) => {
			state.data = action.payload;
			state.loading = "succeeded";
		});
		builder.addCase(fetchHistoryGifts.pending, (state) => {
			state.loading = "pending";
		});
		builder.addCase(fetchHistoryGifts.rejected, (state) => {
			state.loading = "failed";
		});
	},
});

export default giftsHistorySlice.reducer;
