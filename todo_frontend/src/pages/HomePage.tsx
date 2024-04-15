import { useEffect } from "react";
import { fetchTodosByUserID } from "../store/todoSlice";
import { useAppDispatch, useAppSelector } from "../App";
import { getUserID } from "../utils/localstorage";
import Loader from "../components/Loader";

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
      ) : data && data.length > 0 ? (
        <div>
          {data.map((todo) => (
            <h1>{todo.todo}</h1>
          ))}
        </div>
      ) : (
        <div>No todos found</div>
      )}
    </>
  );
};

export default HomePage;
