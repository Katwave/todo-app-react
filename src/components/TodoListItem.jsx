import React from "react";
import { useState } from "react";
import TodoDiv from "./TodoDiv";

export default function TodoListItem({ todoItems }) {
  const onAnimationEnd = () => {};

  return (
    <div>
      <ul className="todoList">
        {todoItems.map((todo) => (
          <TodoDiv name={todo.name} key={todo._id} completed={todo.completed} />
        ))}
      </ul>
    </div>
  );
}
