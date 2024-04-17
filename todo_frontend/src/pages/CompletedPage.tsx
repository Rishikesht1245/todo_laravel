import { useEffect, useState } from "react";
import {  useAppSelector } from "../App";
import { getUserID } from "../utils/helpers";
import Loader from "../components/Loader";
import TodoCard from "../components/TodoCard";
import { MdOutlinePendingActions } from "react-icons/md";
import { Link } from "react-router-dom";
import { ITodo } from "../interfaces/todo";
import { CompleteAPI, deleteTodoAPI, fetchCompletedTodosAPI } from "../apiRoutes/api";
import toast from "react-hot-toast";

const CompletedPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState<ITodo[] | []>([]);
  const userId =
    useAppSelector((state) => state?.auth?.user?.id) || getUserID();

    const fetchCompletedTodos = async() => {
      try {
        setIsLoading(true);
        const response = await fetchCompletedTodosAPI(userId);
        if(response?.data?.todos){
          setTodos(response?.data?.todos);
        }else{
          setTodos([]);
        }

      } catch (error) {
        console.log("Error in fetching completed todos ", error);
      }finally{
        setIsLoading(false);
      }
    }
  useEffect(() => {
    fetchCompletedTodos();
  }, [userId]);


  const handleChangeStatus = async (id: number) => {
    try {
      const response = await CompleteAPI(id, userId);
      toast.success(response?.data?.message);
      fetchCompletedTodos();
    } catch (error) {
      console.log("Error in marking the status to completed", error);
      toast.error("Something went wrong!");
    }
  };

  const handleDelete = async(id : number) => {
    try {
      const response = await deleteTodoAPI(id, userId);
      if(response?.data?.message){
        toast.success(response?.data?.message);
        fetchCompletedTodos();
      }
    } catch (error) {
      console.log("Error in deleting the todo: ", error);
      toast.error("Something went wrong!");
    }
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="todo-container">
          <h4 className="text-indigo uppercase text-center my-3 font-bold">Completed Todos</h4>
          <div className="flex flex-center gap-5 ml-auto">
            <Link
              to={"/"}
              className="w-11 px-4 py-3 bg-[#3ecd64] flex items-center justify-center rounded-lg"
              title="Pending todos"
            >
              <MdOutlinePendingActions className="text-white" size={24} />
            </Link>
          </div>
          {todos && todos.length > 0 ? (
            todos?.map((todo, index) => (
              <TodoCard
                todo={todo}
                key={todo?.id}
                index={index}
                handleComplete={handleChangeStatus}
                type="completed"
                handleDelete={handleDelete}
              />
            ))
          ) : (
            <div>
              <h5 className="text-center">No Todos Found.</h5>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CompletedPage;
