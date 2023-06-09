import {loginStart } from "../users/userSlice";
import { publicRequest } from "../../requestMethods";

// For Login
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    console.log(res)
    return [{data: res.data, error: null}]
  } catch (error) {
    return [{data: null, error: error}]
    // dispatch(loginFailure());
  }
};
