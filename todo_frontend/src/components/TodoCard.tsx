import {ITodo} from "../interfaces/todo.ts"
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const TodoCard = ({todo, index}:TodoProps) => {
  return (
    <div className="flex flex-col gap-3 border p-4 rounded-sm">
      {/* todo  */}
      <div className="flex flex-between">
        <h6 className="text-gray-700 text-start">{index + 1} - {todo?.todo}</h6>
        <div className="flex flex-between gap-5">
            <MdEdit className="text-cyan-500" size={24}/>
            <MdDelete className=" text-red-600" size={24}/>
        </div>
      </div>
      {/* date */}
    </div>
  )
}

interface TodoProps {
  todo : ITodo,
  index: number
}

export default TodoCard