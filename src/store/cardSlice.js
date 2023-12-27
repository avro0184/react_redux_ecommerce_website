import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers:{
        addcart:(state , action)=>{
            state.push(action.payload)
        },
        remove:(state ,action)=>{
          return state.filter((item)=> 
                item.id !==action.payload
            )
        }
    }
})

export const {addcart , remove} = cartSlice.actions;
export default cartSlice.reducer;




