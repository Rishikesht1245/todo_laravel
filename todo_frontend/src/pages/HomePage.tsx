import { useEffect, useState } from "react"
import { fetchTodosByUserID } from "../store/todoSlice";
import { useAppDispatch, useAppSelector } from "../App";
const HomePage = () => {

  const todos = useAppSelector((state) => state.todo.data)
  const dispatch = useAppDispatch();

  console.log(todos, "===todos")

  useEffect(() => {
    dispatch(fetchTodosByUserID());
  },[dispatch]);

  return (
    <div className="parent-container">HomePage</div>
  )
}

export default HomePage