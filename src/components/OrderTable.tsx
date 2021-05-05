import React, { useEffect } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import { fetchOrders } from '../store/reducers/orderReducer'
import './OrderTable.scss'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import makeSelectOrders, { orderLoadingSelector } from '../store/selectors/orderSelector';
import { useAppDispatch, useAppSelector } from '../store/hooks';

function OrderTable() {
    const dispatch = useAppDispatch()
    const orders= useAppSelector(makeSelectOrders);
    const loading= useAppSelector(orderLoadingSelector);
    

    useEffect(()=> {
      dispatch(fetchOrders())
    }, [dispatch])
    
    return (
        <div className="ag-theme-alpine order-table">
            <h3 className="order-label">Orders</h3>
            {loading ? 
                <p>Loading orders.....</p>:
            <AgGridReact
                rowSelection="multiple"
                pagination={true}
                rowData={orders}>
                <AgGridColumn field="orderNumber" sortable={ true } filter={ true } checkboxSelection={true} ></AgGridColumn>
                <AgGridColumn field="customerName" sortable={ true } filter={ true } ></AgGridColumn>
                <AgGridColumn field="customerAddress" sortable={ true } filter={ true } ></AgGridColumn>
                <AgGridColumn field="orderValue" sortable={ true } filter={ true } ></AgGridColumn>
                <AgGridColumn field="orderDate" sortable={ true } filter={ true } ></AgGridColumn>
                <AgGridColumn field="shipDate" sortable={ true } filter={ true } ></AgGridColumn>
                <AgGridColumn field="status" sortable={ true } filter={ true } ></AgGridColumn>
            </AgGridReact>
            }
        </div>
    );
}

export default OrderTable;
