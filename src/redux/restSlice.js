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
        allRestaurantsContainer:[],
        error:''
    },
    reducers:{

        SearchRestaurants:(state,action)=>{
            state.allRestaurants = state.allRestaurantsContainer.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }

    },
   extraReducers:(builder)=>{
    builder.addCase(fetchRestaurants.pending,(state)=>{
        state.loading = true
    })
    builder.addCase(fetchRestaurants.fulfilled,(state,action)=>{

        state.loading = false
        state.allRestaurants=action.payload
        state.allRestaurantsContainer = action.payload
        state.error=""  
    })
    builder.addCase(fetchRestaurants.rejected,(state,action)=>{

        state.loading = false
        state.allRestaurants=[]
        state.error=action.error.message
    })

   }
})

export const { SearchRestaurants } = restSlice.actions
export default restSlice.reducer
