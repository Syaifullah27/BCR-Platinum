import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    data: [],
    name: '',
    price: '',
    category: '',
    status: 'idle',
    currentPage: 1,
    totalPages: 0,
};


// Fetch data thunk
export const fetchData = createAsyncThunk('data/fetchData', async ({ name, page, category, price, statusCar }) => {
    const nama = name === '' ? '' : name;
    const kategory = category === '' ? '' : category;
    const harga = price === '' ? '' : price;
    const status = statusCar === '' ? '' : statusCar;
    const url = `https://api-car-rental.binaracademy.org/customer/v2/car?name=${nama}&category=${kategory}&isRented=${status}&minPrice=${harga}&page=${page}&pageSize=9`
    const response = await axios.get(url);

    // console.log(response.data);
    return response.data;
}
);


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setPrice: (state, action) => {
            state.price = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
                state.totalPages = action.payload.pageCount;
            })
            .addCase(fetchData.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { setName, setPrice, setCategory, setPage, } = productSlice.actions;
export default productSlice.reducer;