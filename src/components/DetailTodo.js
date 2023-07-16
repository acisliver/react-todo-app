import React, { useState } from "react";

export default function DetailTodo({
  id,
  title,
  detail,
  setTodoDataList,
  handleDisplayDetail,
}) {
  const [editTitle, setEditTitle] = useState(title);
  const [editDetail, setEditDetail] = useState(detail);

  const changeTitle = (event) => {
    setEditTitle(event.target.value);
    setTodoDataList((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          todo.title = event.target.value;
        }
        return todo;
      });
    });
  };

  const changeDetail = (event) => {
    setEditDetail(event.target.value);
    setTodoDataList((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          todo.detail = event.target.value;
        }
        return todo;
      });
    });
  };

  const hideDetail = (event) => {
    if (event.target.id === "detail") handleDisplayDetail();
  };

  return (
    <div
      id="detail"
      className="fixed w-screen h-screen overflow-auto left-0 top-0 bg-[rgba(0,0,0,0.4)]"
      onClick={(event) => hideDetail(event)}
    >
      <div className="fixed w-[700px] h-[500px] rounded bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <input
            value={editTitle}
            onChange={(event) => changeTitle(event)}
            placeholder="제목"
            className="w-[96%] px-1 mx-auto my-3 border-solid border-2 border-black-100"
          ></input>
          <textarea
            value={editDetail}
            onChange={(event) => changeDetail(event)}
            placeholder="상세 정보"
            className="w-[96%] h-[70%] px-1 mx-auto border-solid border-2 border-black-100 resize-none"
          ></textarea>
          <button
            className="fixed right-5 top-3 text-2xl"
            onClick={handleDisplayDetail}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
}
