import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TodoAPI } from "../config/api";
import axios from "axios";

interface InitialState {
    isLoading : boolean;
    isSuccess : boolean;
    errorMessage : string | "";
    data : ITodo[] | [];
};

const initialState : InitialState ={
    isLoading : false,
    isSuccess : false,
    errorMessage : "",
    data : []
}

interface ITodo 
    {
        id: number;
        todo: string;
        is_finished: boolean;
        created_at : Date;
        updated_at : Date;
    }




const TodoSlice = createSlice({
    name : "todo",
    initialState,
    reducers :{

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodosByUserID.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTodosByUserID.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload; // Payload is now an array of ITodo objects
            })
            .addCase(fetchTodosByUserID.rejected, (state) => {
                state.isLoading = false;
                state.data = [];
                state.errorMessage = "Something went wrong, please try again";
            });
    },
    
});

export const fetchTodosByUserID = createAsyncThunk<ITodo[]>("todos/fetchByUserID", async () => {
    try {
        const response = await axios.get("http://localhost:8000/api/test");
        console.log(response, "===response")
        return response.data.todos;
    } catch (error) {
        console.log(error);
        throw error;
    }
});
export default TodoSlice.reducer;