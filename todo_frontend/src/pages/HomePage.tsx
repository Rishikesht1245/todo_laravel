import { useEffect } from "react";
import { fetchTodosByUserID } from "../store/todoSlice";
import { useAppDispatch, useAppSelector } from "../App";
import { getUserID } from "../utils/localstorage";
import Loader from "../components/Loader";
import TodoCard from "../components/TodoCard";
import Button from "../components/Button";
import { FaPlus } from "react-icons/fa6";

const HomePage = () => {
  const { data, isLoading } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state?.auth?.user?.id) || getUserID();

  useEffect(() => {
    dispatch(fetchTodosByUserID(userId));
  }, [dispatch, userId]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="todo-container">
          <Button type="button" className="bg-cyan-500 w-12 flex items-center justify-center ml-auto my-2">
            <FaPlus size={18} />
          </Button>
          {data && data.length > 0 ? (
            data.map((todo, index) => (
              <TodoCard todo={todo} key={todo?.id} index={index} />
            ))
          ) : (
            <div>No todos found</div>
          )}
        </div>
      )}
    </>
  );
};

export default HomePage;
