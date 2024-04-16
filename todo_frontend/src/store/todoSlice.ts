import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TodoAPI } from "../config/api";

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

export const fetchTodosByUserID = createAsyncThunk<ITodo[], string>("todos/fetchByUserID", async (userID) => {
    try {
        const response = await TodoAPI.get(`/all/${userID}`);
        return response.data.todos;
    } catch (error : any) {
        console.log(error, "===error");
        return error?.response?.data.todos || "Something went wrong!"
    }
});
export default TodoSlice.reducer;