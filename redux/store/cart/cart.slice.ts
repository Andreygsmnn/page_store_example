import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/redux/api/products/product.types";

const initialState: IProduct[] = []


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IProduct>) => {
      state.push(action.payload)
    },
    clearItem: (state, action: PayloadAction<{ id: number }>) => {
      return state.filter(el => el.id !== action.payload.id)
    }
  }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions