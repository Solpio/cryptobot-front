import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMe, getUser, IRegisterUserBody, register, User } from "../data";

interface UserState {
	registrationData: unknown;
	userData?: User;
	redirectedToGift: boolean;
	loading: "pending" | "succeeded" | "failed";
}

const initialState: UserState = {
	registrationData: [],
	redirectedToGift: false,
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

export const getUserProfile = createAsyncThunk(
	"getUserProfile",
	async (id: string) => {
		return await getUser(id);
	}
);

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		redirectedToGift: (state, action) => {
			state.redirectedToGift = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(makeRegister.fulfilled, (state, action) => {
			state.registrationData = action.payload;
			state.loading = "succeeded";
		});
		builder.addCase(makeRegister.pending, (state) => {
			state.loading = "pending";
		});
		builder.addCase(makeRegister.rejected, (state) => {
			state.loading = "failed";
		});

		builder.addCase(getMyProfile.fulfilled, (state, action) => {
			state.userData = action.payload;
			state.loading = "succeeded";
		});
		builder.addCase(getMyProfile.pending, (state) => {
			state.loading = "pending";
		});
		builder.addCase(getMyProfile.rejected, (state) => {
			state.loading = "failed";
		});

		builder.addCase(getUserProfile.fulfilled, (state, action) => {
			state.userData = action.payload;
			state.loading = "succeeded";
		});
		builder.addCase(getUserProfile.pending, (state) => {
			state.loading = "pending";
		});
		builder.addCase(getUserProfile.rejected, (state) => {
			state.loading = "failed";
		});
	},
});

export const { redirectedToGift } = userSlice.actions;

export default userSlice.reducer;
