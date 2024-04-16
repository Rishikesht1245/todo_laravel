import { useState } from "react";
import { createTodoAPI, updateTodoAPI } from "../apiRoutes/api";
import toast from "react-hot-toast";
import { ITodo, ITodoAddResponse } from "../interfaces/todo";
import { useFormik } from "formik";
import { todoSchema } from "../schema/todoSchema";
import Input from "./Input";
import Button from "./Button";
import { getUserID } from "../utils/helpers";
import { useAppDispatch, useAppSelector } from "../App";
import { fetchTodosByUserID } from "../store/todoSlice";
const TodoForm = ({type, data, setModalOpen}: TodoFormProps) => {

    const [errorMessage, setErrorMessage] = useState<string>("");
    const dispatch = useAppDispatch();
    const userId =useAppSelector((state) => state?.auth?.user?.id) || getUserID();

    const handleSubmit = async (values : {
        todo: string;
        user_id : string;
    }) => {
        if(type == "add"){
            try {
                const response = await createTodoAPI(values);
                toast.success(response?.data?.message);
                dispatch(fetchTodosByUserID(userId));
                setModalOpen(false);
                
            } catch (error) {
                console.log("Error in todo creation", error);
                setErrorMessage("Something went wrong!");
            }

        }else if(type == "edit"){
            try {
                const response = await updateTodoAPI(values, data?.id!);
                toast.success(response?.data?.message);
                dispatch(fetchTodosByUserID(userId));
                setModalOpen(false);
            } catch (error) {
                console.log("Error in todo creatigon", error);
                setErrorMessage("Something went wrong!");
            }
        }
    }

  const formik = useFormik({
    initialValues: {
     user_id : userId,
     todo : data?.todo || "",
    },
    validationSchema: todoSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

   
  return (
    <>
     <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
        <Input 
          name="todo"
          type="text"
          label="Todo"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.todo}
          error={formik.errors.todo}
          touched={formik.touched.todo}
        />
        <Button
          type="submit"
          className="bg-cyan-500 mt-5 uppercase tracking-wider"
        >
          {type == "edit" ? "Edit" : "Create"}
        </Button>
      </form>
      {errorMessage && (
        <span className="text-red-600 text-sm text-center font-medium ml-1">
          {errorMessage}
        </span>
      )}</>
  )
}

interface TodoFormProps{
    type : "edit" | "add";
    data ?: ITodo | null
    setModalOpen:(value : boolean)=> void
}

export default TodoForm