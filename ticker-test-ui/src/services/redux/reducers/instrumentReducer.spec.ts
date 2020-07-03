import { Instrument } from "../../../state/types";
import { newInstrument } from "../actions";
import instrumentReducer from "./instrumentReducer";

describe("instrumentReducer", () => {
  it("should add new instrument", () => {
    const instrument = { id: "1", name: "1" };
    const initialState: Instrument[] = [];
    const expectedNewState: Instrument[] = [instrument];

    const newState = instrumentReducer(initialState, newInstrument(instrument));
    expect(newState).toEqual(expectedNewState);
  });

  it("should update existing instrument", () => {
    const instrument = { id: "1", name: "1" };
    const initialState: Instrument[] = [instrument];
    const instrumentUpdate = { id: "1", name: "2" };
    const expectedNewState: Instrument[] = [instrumentUpdate];

    const newState = instrumentReducer(
      initialState,
      newInstrument(instrumentUpdate)
    );
    expect(newState).toEqual(expectedNewState);
  });
});
