import { subscribeAck, unsubscribeAck } from "../actions";
import subscriptionReducer from "./subscriptionReducer";

describe("subscriptionReducer", () => {
  it("should handle subcribe to instrument price", () => {
    const instrumentId = "1";
    const initialState = {
      subscribedInstruments: []
    };
    const expectedNewState = {
      subscribedInstruments: [instrumentId]
    };
    const newState = subscriptionReducer(
      initialState,
      subscribeAck(instrumentId)
    );
    expect(newState).toEqual(expectedNewState);
  });

  it("should handle duplicate subcribe to instrument price", () => {
    const instrumentId = "1";
    const initialState = {
      subscribedInstruments: []
    };
    const expectedNewState = {
      subscribedInstruments: [instrumentId]
    };
    var newState = subscriptionReducer(
      initialState,
      subscribeAck(instrumentId)
    );
    newState = subscriptionReducer(initialState, subscribeAck(instrumentId));
    expect(newState).toEqual(expectedNewState);
  });

  it("should handle unsubcribe to instrument price", () => {
    const instrumentId = "1";
    const initialState = {
      subscribedInstruments: [instrumentId]
    };
    const expectedNewState = {
      subscribedInstruments: []
    };
    const newState = subscriptionReducer(
      initialState,
      unsubscribeAck(instrumentId)
    );
    expect(newState).toEqual(expectedNewState);
  });

  it("should handle duplicate unsubcribe to instrument price", () => {
    const instrumentId = "1";
    const initialState = {
      subscribedInstruments: [instrumentId]
    };
    const expectedNewState = {
      subscribedInstruments: []
    };
    var newState = subscriptionReducer(
      initialState,
      unsubscribeAck(instrumentId)
    );
    newState = subscriptionReducer(initialState, unsubscribeAck(instrumentId));
    expect(newState).toEqual(expectedNewState);
  });
});
