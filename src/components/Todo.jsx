import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [inputText, setInputText] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  return (
    <div className="todo">
      <AddTodo
        setInputText={setInputText}
        inputText={inputText}
        setTodoItems={setTodoItems}
        todoItems={todoItems}
      />
      <TodoItem setTodoItems={setTodoItems} todoItems={todoItems} />
    </div>
  );
}
