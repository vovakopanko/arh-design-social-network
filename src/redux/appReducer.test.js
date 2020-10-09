const { default: appReducer , initializedSuccess } = require("./appReducer");

it("Change initializedSuccess status NetWork", () => {
  let action = initializedSuccess();
  let state = {
    initialized: false,
  };

  let NewState = appReducer(state, action);

  expect(NewState.initialized).toBe(true);
});
