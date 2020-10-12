import React from "react";
import { useState } from "react";
import TodoDiv from "./TodoDiv";

export default function TodoListItem({ todoItems, setTodoItems }) {
  return (
    <div>
      <ul className="todoList">
        {todoItems.map((todo) => (
          <TodoDiv
            setTodoItems={setTodoItems}
            name={todo.name}
            key={todo._id}
            completed={todo.completed}
            todo={todo}
            todoItems={todoItems}
          />
        ))}
      </ul>
    </div>
  );
}
