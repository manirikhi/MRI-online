import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/store";

test("renders app", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const orderLabel = screen.getByText("Orders");
  expect(orderLabel).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
