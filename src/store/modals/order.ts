import { Customer } from "./customer";

export interface Order {
    "order_number":number,
    "customer": Customer,
    "order_details":{
       "value": number,
       "date": string
    },
    "shipping_details":{
       "date":string
    },
    "status":string
 }