import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoItem(props) {
  const todoItems = props.todoItems;
  const setTodoItems = props.setTodoItems;
  return (
    <div className="todo-item-container">
      <TodoListItem todoItems={todoItems} setTodoItems={setTodoItems} />
    </div>
  );
}
