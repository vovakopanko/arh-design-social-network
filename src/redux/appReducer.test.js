import appReducer, { appActionswdqo2doo } from "./appReducer";

it("Change initializedSuccess status NetWork", () => {
  let state = {
    initialized: false,
  };

  let NewState = appReducer(state, appActions.initializedSuccess());

  expect(NewState.initialized).toBe(true);
});
