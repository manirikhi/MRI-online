import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import OrderTable from "./OrderTable";
import { store } from "../store/store";

test("renders OrderTable with loading state", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <OrderTable />
    </Provider>
  );
  const orderLabel = screen.getByText("Orders");
  expect(orderLabel).toBeInTheDocument();
  const loading = screen.getByText("Loading orders.....");
  expect(loading).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});

test("renders OrderTable with table data", async () => {
  render(
    <Provider store={store}>
      <OrderTable />
    </Provider>
  );
  await waitFor(() => {
    const orderNumber = screen.getByText("Order Number");
    expect(orderNumber).toBeInTheDocument();
    const order = screen.getByText("100000");
    expect(order).toBeInTheDocument();
  });
});

test("renders OrderTable with table data", async () => {
  render(
    <Provider store={store}>
      <OrderTable />
    </Provider>
  );
  await waitFor(() => {
    const orderNumber = screen.getByText("Order Number");
    expect(orderNumber).toBeInTheDocument();
    const order = screen.getByText("100000");
    expect(order).toBeInTheDocument();
    fireEvent.click(orderNumber)
    expect(screen.getByText("100000")).toBeInTheDocument();
    fireEvent.click(orderNumber)
    expect(screen.getByText("100000")).toBeInTheDocument();
  });
});
