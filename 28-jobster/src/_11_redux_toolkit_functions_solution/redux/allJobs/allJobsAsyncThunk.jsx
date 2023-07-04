import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { fetchingInstance } from "../../../utilities";

// const createJob = createAsyncThunk(
//   "singleJob/addJob",
//   async (jobData, thunkAPI) => {
//     try {
//       const response = await fetchingInstance.post("/jobs", jobData, {
//         headers: {
//           authorization: `Bearer ${thunkAPI.getState().userState.user.token}`,
//         },
//       });
//       thunkAPI.dispatch(singleJobAction.clearJobInput());
//       return response.data;
//     } catch (error) {
//       if (error.response.status === 401) {
//         thunkAPI.dispatch(userActions.logoutUser());
//         return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
//       }
//       toast.error(error.response.data.msg);
//       return thunkAPI.rejectWithValue(error.response.data.msg);
//     }
//   },
// );

// export { createJob };
