import { FaCheck } from "react-icons/fa";
import { ITodo } from "../interfaces/todo.ts";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";

const TodoCard = ({ todo, index, handleEdit, handleComplete, type }: TodoProps) => {
  return (
    <div className="flex flex-col gap-3 border p-4 rounded-sm">
      {/* todo  */}
      <div className="flex flex-between">
        <h6 className="text-gray-700 text-start">
          {index + 1} - {todo?.todo}
        </h6>
        <div className="flex flex-between gap-5">
          {type == "pending" && handleEdit && (
            <>
              <MdEdit
                className="text-cyan-500 cursor-pointer"
                size={24}
                onClick={() => handleEdit(todo)}
                title="Edit todo"
              />
            </>
          )}
          {type == "pending" && handleComplete ? (
             <FaCheck
             className="text-[#2c6b3c] cursor-pointer"
             size={20}
             onClick={() => handleComplete(todo?.id)}
             title="Mark as complete"
           />
          ): (
            <MdOutlinePendingActions
             className="text-[#47c065] cursor-pointer"
             size={20}
             onClick={() => handleComplete(todo?.id)}
             title="Mark as pending"
           />
          )}
         
          <MdDelete
            className=" text-red-600 cursor-pointer"
            size={24}
            title="Delete todo"
          />
        </div>
      </div>
      {/* date */}
    </div>
  );
};

interface TodoProps {
  todo: ITodo;
  index: number;
  type: "completed" | "pending";
  handleEdit?: (todo: ITodo) => void;
  handleComplete: (id: number) => void;
}

export default TodoCard;
