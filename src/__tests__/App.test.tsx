import React from "react";
import { cleanup, render, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import App from "../App";

jest.mock("axios");
afterEach(cleanup);

test("Axios request is firing to get data", async () => {
  // 1. setup (e.g. generate data, use mock data, other setup)
  const searchKeyword = "getify";
  const { getByLabelText } = render(<App />);
  const input = getByLabelText("search-input");
  // 2. call function/method
  fireEvent.change(input, { target: { value: searchKeyword } });
  // 3. do assertsions or check
  await waitFor(() => {
    expect(axios.get).toHaveBeenCalled();
  });
});

test("Axios not to fire if the same keyword", async () => {
  // 1. setup (e.g. generate data, use mock data, other setup)
  const searchKeyword = "getify";
  const { getByLabelText } = render(<App />);
  const input = getByLabelText("search-input");
  // 2. call function/method
  fireEvent.change(input, { target: { value: searchKeyword } });
  // 3. do assertsions or check
  await waitFor(() => {
    expect(axios.get).toHaveBeenCalled();
  });

  fireEvent.change(input, { target: { value: "test" } });

  await waitFor(() => {
    expect(axios.get).toHaveBeenCalledTimes(2);
  });

  fireEvent.change(input, { target: { value: searchKeyword } });

  await waitFor(() => {
    expect(axios.get).toHaveBeenCalledTimes(2);
  });
});

test("List element will render when change keyword", async () => {
  // 1. setup (e.g. generate data, use mock data, other setup)
  const searchKeyword = "getify";
  const { getByLabelText } = render(<App />);
  const input = getByLabelText("search-input");
  // 2. call function/method
  fireEvent.change(input, { target: { value: searchKeyword } });
  // 3. do assertsions or check
  await waitFor(() => {
    expect(getByLabelText("search-output")).toBeInTheDocument();
  });
});
