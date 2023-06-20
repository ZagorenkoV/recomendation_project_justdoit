import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from "axios";
import {SERVER_URL} from "../../../config";
import {DataType} from "../../types/types";

type DataState = {
	surveyData: DataType[];
	surveyLoading: boolean;
	surveyError: null | string;
	dateData: DataType[];
	dateLoading: boolean;
	dateError: null | string;
}

export const fetchSurvey = createAsyncThunk<string, string, { rejectValue: string }>(
	'recommended/fetchSurvey',
	async function (result: string, {rejectWithValue}) {
		try {
			const response = await axios.get(`${SERVER_URL}/api/survey?n=${result}`)
			return response.data
		} catch (e) {
			return rejectWithValue("Не удалось загрузить данные")
		}
	}
);

export const fetchDate = createAsyncThunk<string, string, { rejectValue: string }>(
	'date/fetchDate',
	async function (date: string, {rejectWithValue}) {
		try {
			const response = await axios.get(`${SERVER_URL}/api/date?date=${date}&to_date=${date}`)
			return response.data
		} catch (e) {
			return rejectWithValue("Не удалось загрузить данные")
		}
	}
);

const initialState: DataState = {
	surveyData: [],
	surveyLoading: false,
	surveyError: null,
	dateData: [],
	dateLoading: false,
	dateError: null,
}

const recommendedSlice = createSlice({
	name: 'recommended',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchSurvey.pending.type]: (state) => {
			state.surveyLoading = true
		},
		[fetchSurvey.fulfilled.type]: (state, action: PayloadAction<DataType[]>) => {
			state.surveyData = action.payload;
			state.surveyLoading = false;
			state.surveyError = ''
		},
		[fetchSurvey.rejected.type]: (state, action: PayloadAction<string>) => {
			state.surveyLoading = false;
			state.surveyError = action.payload
		},
		[fetchDate.pending.type]: (state) => {
			state.dateLoading = true
		},
		[fetchDate.fulfilled.type]: (state, action: PayloadAction<DataType[]>) => {
			state.dateData = action.payload;
			state.dateLoading = false;
			state.dateError = ''
		},
		[fetchDate.rejected.type]: (state, action: PayloadAction<string>) => {
			state.dateLoading = false;
			state.dateError = action.payload
		}
	}
});

export default recommendedSlice.reducer;