import React, { useState } from "react";
import DetailTodo from "./DetailTodo";

const TodoItem = React.memo(
  ({
    id,
    title,
    detail,
    completed,
    setTodoDataList,
    provided,
    snapshot,
    handleClick,
  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [isDetail, setDetail] = useState(false);

    const handleCompleteChange = (id) => {
      setTodoDataList((prev) => {
        return prev.map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        });
      });
    };

    const handleEditChange = (event) => {
      setEditedTitle(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      setTodoDataList((prev) => {
        return prev.map((todo) => {
          if (todo.id === id) {
            todo.title = editedTitle;
          }
          return todo;
        });
      });
      setIsEditing(false);
    };

    const handleDisplayDetail = () => {
      setDetail((prev) => !prev);
    };

    if (isEditing) {
      return (
        <div
          className={`flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
        >
          <div className="items-center">
            <form onSubmit={handleSubmit}>
              <input
                value={editedTitle}
                onChange={handleEditChange}
                className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
              />
            </form>
          </div>
          <div className="items-center">
            <button
              className="px-4 py-2 float-right"
              onClick={() => setIsEditing(false)}
            >
              x
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 float-right"
              type="submit"
            >
              save
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div
            key={id}
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            className={`${
              snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
            } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
            onClick={handleDisplayDetail}
          >
            <div className="items-center">
              <input
                type="checkbox"
                defaultChecked={completed}
                onChange={() => handleCompleteChange(id)}
              />
              <span
                className={`${completed ? "line-through" : undefined} pl-1`}
              >
                {title}
              </span>
            </div>
            <div className="items-center">
              <button
                className="px-4 py-2 float-right"
                onClick={() => handleClick(id)}
              >
                x
              </button>
              <button
                className="px-4 py-2 float-right"
                onClick={() => setIsEditing(true)}
              >
                edit
              </button>
            </div>
          </div>
          {isDetail && (
            <DetailTodo
              id={id}
              title={title}
              detail={detail}
              setTodoDataList={setTodoDataList}
              handleDisplayDetail={handleDisplayDetail}
            />
          )}
        </>
      );
    }
  }
);

export default TodoItem;
