import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../dto/users.ts";
import { getLeaderboard } from "../data";

interface LeaderboardState {
	data: User[];
	loading: "pending" | "succeeded" | "failed";
}

const initialState: LeaderboardState = {
	data: [],
	loading: "succeeded",
};

export const fetchLeaderboard = createAsyncThunk(
	"leaderboard",
	async (search?: string) => {
		return await getLeaderboard(search);
	}
);

const leaderBoardSlice = createSlice({
	name: "gifts",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchLeaderboard.fulfilled, (state, action) => {
			state.data = action.payload;
			state.loading = "succeeded";
		});
		builder.addCase(fetchLeaderboard.pending, (state) => {
			state.loading = "pending";
		});
		builder.addCase(fetchLeaderboard.rejected, (state) => {
			state.loading = "failed";
		});
	},
});

export default leaderBoardSlice.reducer;
