import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchdata = createAsyncThunk("fetchdata", async () => {
  const response = await fetch(
    "https://mytodo2222-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"
  );
  const result = response.json();
  return result;
});
export const deleteData = createAsyncThunk("deleteData", async (id) => {
  try {
    const response = await fetch(
      `https://mytodo2222-default-rtdb.asia-southeast1.firebasedatabase.app/${id}.json`,
      {
        method: "delete",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete data");
    }
    return id;
  } catch (error) {
    throw new Error("Failed to delete data");
  }
});
export const insertapi = createAsyncThunk("insertapi", async (data) => {
  try {
    const response = await fetch(
      "https://mytodo2222-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to insert data");
    }
    const result = response.json();
    return result;
  } catch (error) {
    throw new Error("Failed to insert data");
  }
});
export const editData = createAsyncThunk("editData", async ({ id, data }) => {
  try {
    const response = await fetch(
      `https://mytodo2222-default-rtdb.asia-southeast1.firebasedatabase.app/users/${id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to edit data");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error("Failed to edit data");
  }
});

const apidata = createSlice({
  name: "apidata",
  initialState: {
    isFetching: false,
    isDeleting: false,
    isInserting: false,
    isEditing: false,
    data: [],
    isError: false,
  },
  extraReducers: {
    [fetchdata.pending]: (state) => {
      state.isFetching = true;
    },
    [fetchdata.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.data = action.payload;
    },
    [fetchdata.rejected]: (state) => {
      state.isFetching = false;
    },
    [deleteData.pending]: (state) => {
      state.isDeleting = true;
    },
    [deleteData.fulfilled]: (state, action) => {
      state.isDeleting = false;
      const deletedId = action.payload;
      delete state.data[deletedId];
      console.log("Data deleted with ID:", deletedId);
    },
    [deleteData.rejected]: (state, action) => {
      console.log("Erorr", action.payload);
      state.isDeleting = false;
      state.isError = true;
    },
    [insertapi.pending]: (state) => {
      state.isInserting = true;
    },
    [insertapi.fulfilled]: (state) => {
      state.isInserting = false;
    },
    [insertapi.rejected]: (state, action) => {
      state.isInserting = false;
      console.log("Erorr", action.payload);
      state.isError = true;
    },
    [editData.pending]: (state) => {
      state.isEditing = true;
    },
    [editData.fulfilled]: (state, action) => {
      state.isEditing = false;
      const editData = action.payload;
      state.data = {
        ...state.data,
        [editData.id]: editData,
      };
      console.log("Data edit with ID:", editData);
    },
    [editData.rejected]: (state, action) => {
      state.isEditing = false;
      console.log("Erorr", action.payload);
      state.isError = true;
    },
  },
});
export default apidata.reducer;
