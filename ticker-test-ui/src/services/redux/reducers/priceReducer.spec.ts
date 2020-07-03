import { Price } from "../../../state/types";
import { newPrice, unsubscribeAck } from "../actions";
import priceReducer from "./priceReducer";

describe("priceReducer", () => {
  it("should add new price", () => {
    const price = { instrumentId: "1", value: 1.1234 };
    const initialState: Price[] = [];
    const expectedNewState: Price[] = [price];

    const newState = priceReducer(initialState, newPrice(price));
    expect(newState).toEqual(expectedNewState);
  });

  it("should update existing price", () => {
    const price = { instrumentId: "1", value: 1.1234 };
    const initialState: Price[] = [price];
    const updatedPrice = { instrumentId: "1", value: 9999 };
    const expectedNewState: Price[] = [updatedPrice];

    const newState = priceReducer(initialState, newPrice(updatedPrice));
    expect(newState).toEqual(expectedNewState);
  });

  it("should clear existing on unsubscribe ack", () => {
    const price = { instrumentId: "1", value: 1.1234 };
    const initialState: Price[] = [price];
    const expectedNewState: Price[] = [];

    const newState = priceReducer(initialState, unsubscribeAck("1"));
    expect(newState).toEqual(expectedNewState);
  });
});
