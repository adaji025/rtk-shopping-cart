import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: data,
        totalAmount: 0,
        totalQty: 0
    }, 
    reducers: {}
})

export default cartSlice.reducer