import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from "axios";
import {SERVER_URL} from "../../../config";
import {DataType} from "../../types/types";

type DataState = {
	popularData: DataType[];
	popularLoading: boolean;
	popularError: null | string;
}

export const fetchPopular = createAsyncThunk<{ rejectValue: string }>(
	'popular/fetchPopular',
	async function (_, {rejectWithValue}) {
		try {
			const response = await axios.get(`${SERVER_URL}/api/popular`)
			return response.data
		} catch (e) {
			return rejectWithValue("Не удалось загрузить данные")
		}
	}
);

const initialState: DataState = {
	popularData: [],
	popularLoading: false,
	popularError: null,
}

const popularSlice = createSlice({
	name: 'popular',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchPopular.pending.type]: (state) => {
			state.popularLoading = true
		},
		[fetchPopular.fulfilled.type]: (state, action: PayloadAction<DataType[]>) => {
			state.popularData = action.payload;
			state.popularLoading = false;
			state.popularError = ''
		},
		[fetchPopular.rejected.type]: (state, action: PayloadAction<string>) => {
			state.popularLoading = false;
			state.popularError = action.payload
		}
	}
});

export default popularSlice.reducer;