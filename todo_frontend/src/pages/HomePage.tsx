import { useEffect, useState } from "react";
import { fetchTodosByUserID } from "../store/todoSlice";
import { useAppDispatch, useAppSelector } from "../App";
import { getUserID } from "../utils/helpers";
import Loader from "../components/Loader";
import TodoCard from "../components/TodoCard";
import Button from "../components/Button";
import { FaPlus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import TodoForm from "../components/TodoForm";
import { ITodo } from "../interfaces/todo";
import { CompleteAPI, deleteTodoAPI } from "../apiRoutes/api";
import toast from "react-hot-toast";

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [formType, setFormType] = useState<"edit" | "add">("add");
  const [formData, setFromData] = useState<ITodo | null>(null);
  const { data, isLoading } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();
  const userId =
    useAppSelector((state) => state?.auth?.user?.id) || getUserID();

  useEffect(() => {
    dispatch(fetchTodosByUserID(userId));
  }, [dispatch, userId]);

  const handleEdit = (todo: ITodo) => {
    setModalOpen(true);
    setFormType("edit");
    setFromData(todo);
  };

  const handleAdd = () => {
    setModalOpen(true);
    setFormType("add");
    console.log("Clicked +");
  };

  const handleComplete = async (id: number) => {
    try {
      const response = await CompleteAPI(id, userId);
      toast.success(response?.data?.message);
      dispatch(fetchTodosByUserID(userId));
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
        dispatch(fetchTodosByUserID(userId));
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
          <h4 className="text-indigo uppercase text-center my-3 font-bold">Pending Todos</h4>
          <div className="flex flex-center gap-5 ml-auto">
            <Link
              to={"/completed"}
              className="w-11 px-4 py-3 bg-[#3ecd64] flex items-center justify-center rounded-lg"
              title="Completed todos"
            >
              <FaCheck className="text-white" size={18} />
            </Link>
            <Button
              title="Create Todo"
              type="button"
              className="bg-[#0f1c31] w-11 px-4 py-3 flex items-center justify-center rounded-lg"
              onClick={handleAdd}
            >
              <FaPlus size={18} />
            </Button>
          </div>
          {data && data.length > 0 ? (
            data?.map((todo, index) => (
              <TodoCard
                todo={todo}
                key={todo?.id}
                index={index}
                handleEdit={handleEdit}
                handleComplete={handleComplete}
                type="pending"
                handleDelete={handleDelete}
              />
            ))
          ) : (
            <div>
              <h5 className="text-center">No Todos Found.</h5>
            </div>
          )}
          <Modal
            isOpen={modalOpen}
            heading={formType == "edit" ? "Edit Todo" : "Create Todo"}
            closeHandler={setModalOpen}
          >
            <TodoForm
              type={formType}
              data={formData}
              setModalOpen={setModalOpen}
            />
          </Modal>
        </div>
      )}
    </>
  );
};

export default HomePage;
