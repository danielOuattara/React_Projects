import { logoutAndClearReduxState } from "../_11_redux_toolkit_functions_solution/redux/user/userAsyncThunk";

export const handleUnauthorizedOrErrorResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    //logout and clear all store because of 401
    thunkAPI.dispatch(logoutAndClearReduxState(401));
    return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
  }
  return thunkAPI.rejectWithValue(error.response.data.msg);
};
