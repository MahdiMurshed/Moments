import * as api from "../api";
import * as actionType from "../constants/actionTypes";
export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signin(formData);
    dispatch({ type: actionType.AUTH, payload: data });
    history.push("/");
  } catch (error) {
    console.log("error signing in", error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);
    dispatch({ type: actionType.AUTH, payload: data });
    history.push("/");
  } catch (error) {
    console.log("error signing up", error);
  }
};
