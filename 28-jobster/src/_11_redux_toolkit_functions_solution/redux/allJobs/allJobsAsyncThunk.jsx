import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { fetchingInstance } from "../../../utilities";
import { userActions } from "../user/userSlice";

const getAllJobs = createAsyncThunk("allJobs/getJobs", async (_, thunkAPI) => {
  try {
    const response = await fetchingInstance.get("/jobs", {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().userState.user.token}`,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(userActions.logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
    }
    toast.error(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});

export { getAllJobs };
