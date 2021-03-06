import { createSelector } from '@reduxjs/toolkit'
import dayjs from 'dayjs'
import { RootState } from '../store'

const ordersSelector = (state: RootState) => state.order.orders

export const orderLoadingSelector = (state: RootState) => state.order.loading

const makeSelectOrders = createSelector(
    ordersSelector,
    orders => orders.map(order => {
        return {
            orderNumber: order.order_number,
            customerName: `${order.customer.first_name}, ${order.customer.last_name}`,
            customerAddress: `${order.customer.address.line1} ${order.customer.address.line2}`,
            orderValue: `$${order.order_details.value}`,
            orderDate: dayjs(order.order_details.date).format('YYYY-MM-DD'),
            shipDate: dayjs(order.shipping_details.date).format('YYYY-MM-DD'),
            status: order.status
        }
    })
  )

export default makeSelectOrders;