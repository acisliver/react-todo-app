import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import TodoItem from "./TodoItem";

export const List = React.memo(
  ({ todoDataList, setTodoDataList, handleClick }) => {
    const handleEnd = (result) => {
      if (!result.destination) return;

      const newTodoDataList = todoDataList;

      const [reorderedItem] = newTodoDataList.splice(result.source.index, 1);

      newTodoDataList.splice(result.destination.index, 0, reorderedItem);
      setTodoDataList(newTodoDataList);
    };

    return (
      <div>
        <DragDropContext onDragEnd={handleEnd}>
          <Droppable droppableId="todo">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {todoDataList.map((data, index) => (
                  <Draggable
                    key={data.id}
                    draggableId={data.id.toString()}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <TodoItem
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        detail={data.detail}
                        completed={data.completed}
                        setTodoDataList={setTodoDataList}
                        provided={provided}
                        snapshot={snapshot}
                        handleClick={handleClick}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
);

export default List;
