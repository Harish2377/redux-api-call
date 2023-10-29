import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//api call createAsyncThunk
export const fetchRestaurants = createAsyncThunk('restaurantList/fetchRestaurants',()=>{
    //api call statement write here
    return axios.get('/restaurants.json').then(reponse=>reponse.data.restaurants)


})

const restSlice = createSlice({
    name:'restaurantList',
    initialState:{
        loading:false,
        allRestaurants:[],
        error:''
    },
   extraReducers:(builder)=>{
    builder.addCase(fetchRestaurants.pending,(state)=>{
        state.loading = true
    })
    builder.addCase(fetchRestaurants.fulfilled,(state,action)=>{

        state.loading = false
        state.allRestaurants=action.payload
        state.error=""  
    })
    builder.addCase(fetchRestaurants.rejected,(state,action)=>{

        state.loading = false
        state.allRestaurants=[]
        state.error=action.error.message
    })

   }
})

export default restSlice.reducer