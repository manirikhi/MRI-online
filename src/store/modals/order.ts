import { Customer } from "./customer";

export interface Order {
    "order_number":number,
    "customer": Customer,
    "order_details":{
       "value": number,
       "date": Date
    },
    "shipping_details":{
       "date":Date
    },
    "status":string
 }