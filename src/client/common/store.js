import { createAsyncThunk, createAction, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    properties: [],
    regions: [],
    managers: [],
    property: {},
    note: { msg: null, type: null }
}

export const getProperties = createAsyncThunk(
    "store/properties",
    async () => {
        const response =
            await axios.get(`${process.env.API_URL}/api/properties`, {}).catch((err) => console.log(err));
        return response.data;
    }
);

export const getRegions = createAsyncThunk(
    "store/regions",
    async () => {
        const response =
            await axios.get(`${process.env.API_URL}/api/regions`, {}).catch((err) => console.log(err));
        return response.data;
    }
);

export const getManager = createAsyncThunk(
    "store/managers",
    async (id) => {
        const response =
            await axios.get(`${process.env.API_URL}/api/manager/${id}`, {}).catch((err) => console.log(err));
        return response.data;
    }
);

export const getProperty = createAsyncThunk(
    "store/getProperty",
    async (id) => {
        const response =
            await axios.get(`${process.env.API_URL}/api/properties/${id}`, {}).catch((err) => console.log(err));
        return response.data;
    }
);

export const setProperty = createAction(
    'store/setProperty',
    (value) => { return { payload: {...value} } }
);


export const setPropertyItem = createAction(
    'store/setPropertyItem',
    (value) => { return { payload: value } }
);

export const setNote = createAction(
    'store/note',
    (text) => { return { payload: text } }
);

const propertiesSlice = createSlice({
    name: 'store',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getProperties.fulfilled, (state, action) => { state.properties = action.payload })
            .addCase(getRegions.fulfilled, (state, action) => { state.regions = action.payload })
            .addCase(getManager.fulfilled, (state, action) => { state.managers.push(action.payload) })
            .addCase(getProperty.fulfilled, (state, action) => { state.property = action.payload })
            .addCase(setProperty, (state, action) => { state.property = action.payload })
            .addCase(setPropertyItem, (state, action) => { state.property = {...state.property, ...action.payload} })
            .addCase(setNote, (state, action) => { state.note = action.payload })
    },
})

export default propertiesSlice.reducer