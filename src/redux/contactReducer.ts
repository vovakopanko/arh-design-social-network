import { InfernActionsType } from "./reduxStore";

let initialState = {
  officeLocation:
    "https://www.google.com/maps/vt/data=8g-9O6ddvFP19bha_-GKofBsZwnliqF0LY_0zI9yhte5kKYnnpu7thV4A1Ill9PLX1AuCTRQ9mBXYW-Pk74xLHimyn16uut_qTVOcK9oh7obkwVqLDAque8DI6w10Emu3eWWKI92S1ulJMf4iEBxyyVjE9ApXxE3rp7U",
};

type initialStateType = typeof initialState

type ActionsType = InfernActionsType<typeof contactActions>
const contactActions = {

}

const ContactReducer = (state = initialState, action:ActionsType):initialStateType => {
  switch (action.type) {
    default:
      return state;
  }
};

// [ActionCreator]

// [ThunkActionCreator]

export default ContactReducer;
