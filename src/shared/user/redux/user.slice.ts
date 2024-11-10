import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMe, IRegisterUserBody, register } from "../data";

interface RegisterState {
	data: unknown;
	loading: "pending" | "succeeded" | "failed";
}

const initialState: RegisterState = {
	data: [],
	loading: "succeeded",
};

export const makeRegister = createAsyncThunk(
	"makeRegister",
	async (body: IRegisterUserBody) => {
		return await register(body);
	}
);

export const getMyProfile = createAsyncThunk("getMe", async () => {
	return await getMe();
});

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(makeRegister.fulfilled, (state, action) => {
			state.data = action.payload;
			state.loading = "succeeded";
		});
		builder.addCase(makeRegister.pending, (state) => {
			state.loading = "pending";
		});
		builder.addCase(makeRegister.rejected, (state) => {
			state.loading = "failed";
		});

		builder.addCase(getMyProfile.fulfilled, (state, action) => {
			state.data = action.payload;
			state.loading = "succeeded";
		});
		builder.addCase(getMyProfile.pending, (state) => {
			state.loading = "pending";
		});
		builder.addCase(getMyProfile.rejected, (state) => {
			state.loading = "failed";
		});
	},
});

export default userSlice.reducer;
