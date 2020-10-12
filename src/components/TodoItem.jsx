import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoItem(props) {
  const todoItems = props.todoItems;
  return (
    <div className="todo-item-container">
      <TodoListItem todoItems={todoItems} />
    </div>
  );
}
