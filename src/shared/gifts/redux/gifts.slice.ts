import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GiftDTO } from "../dto/gift.dto.ts";
import { getGifts } from "../data";

interface GiftsState {
	data: GiftDTO[];
	loading: "pending" | "succeeded" | "failed";
}

const initialState: GiftsState = {
	data: [],
	loading: "succeeded",
};

export const fetchGifts = createAsyncThunk("gifts", async () => {
	return await getGifts();
});

const giftsSlice = createSlice({
	name: "gifts",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchGifts.fulfilled, (state, action) => {
			state.data = action.payload;
			state.loading = "succeeded";
		});
		builder.addCase(fetchGifts.pending, (state) => {
			state.loading = "pending";
		});
		builder.addCase(fetchGifts.rejected, (state) => {
			state.loading = "failed";
		});
	},
});

export default giftsSlice.reducer;
