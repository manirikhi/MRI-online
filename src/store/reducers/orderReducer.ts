import { createReducer, createAsyncThunk } from '@reduxjs/toolkit'

import { Order } from '../modals/order'

interface OrderState {
  orders: Order[],
  loading: boolean
}

export const fetchOrders = createAsyncThunk<Order>(
    'fetchOrders',
    async () => {
      const response = await fetch('https://gist.githubusercontent.com/ryanjn/07512cb1c008a5ec754aea6cbbf4afab/raw/eabb4d324270cf0d3d17a79ffb00ff3cfaf9acc3/orders.json')
      // The value we return becomes the `fulfilled` action payload
      return (await response.json()) as Order;
    }
  );
const initialState = { orders: [], loading: false } as OrderState

const orderReducer = createReducer(initialState, {
    [fetchOrders.pending.type]: (state) => {
        return {
            ...state,
            loading: true
        }
    },
    [fetchOrders.fulfilled.type]: (state, action) => {
        return {
            ...state,
            loading:false,
            orders: action.payload
        }
    },
})

export default orderReducer;