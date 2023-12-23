import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import apiClient from "../../apiClient";
import { useEffect } from "react";


const initialState = {
    items: [],
    status: null,
};

//create productsfetch with the thunk
//export const productsFetch = createAsyncThunk(
//    "products/productsFetch",
//    async () => {
//        try{
//        const response = await axios.get("http://localhost:8080/products/");
//        return response.data;
//    } catch (error) {
//        console.log(error)
//    }
//    }
//);
export const productsFetch = createAsyncThunk(
     "products/productsFetch", async ( ) => {
        return apiClient.get("http://localhost:8080/products/")
        .then(() => response.data.map((product) => product.id ))
     })

//useEffect(() => {
//    apiClient
//        .get("/products", {
//            headers: { token: localStorage.getItem("token") },
//        }) // get the token from localstorage to authorize our requests
//        .then((res) => {
//            setProduct(res.data);
//        })
//        .catch((error) => console.log(error));
//}, []);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: {
        // Add reducers for additional action types here, and handle loading state as needed
        [productsFetch.pending]: (state, action) => {
            state.status = "pending";
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.status = "success";
            state.items = action.payload;
        },
        [productsFetch.rejected]: (state, action) => {
            state.status = "rejected";
        },
    },
});

export default productsSlice.reducer;
