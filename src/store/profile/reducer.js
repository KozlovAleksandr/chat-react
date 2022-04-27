import { UPDATE_PROFILE, TOGGLE_VISIBLE_PROFILE } from "./types";

const initialState = {
  isVisiableProfile: true,
  firstName: "Aleksandr",
  lastName: "Kozlov",
  role: "admin",
  country: "RU",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_VISIBLE_PROFILE:
      return { ...state, isVisibleProfile: !state.isVisibleProfile };
    case UPDATE_PROFILE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
