import React from "react";
import { useEffect } from "react";

export default function AddTodo(props) {
  // Variables

  // Functions

  const add_todo_input = (e) => {
    const value = e.target.value;
    props.setInputText(value);
  };

  // Use effect
  useEffect(() => {
    getTodosFromLocalStorage();
  }, []);

  const add_todo_button = (e) => {
    if (props.inputText.trim() !== "") {
      props.setTodoItems([
        ...props.todoItems,
        {
          name: props.inputText,
          completed: false,
          _id: Math.random() * 1000000,
        },
      ]);
    }

    e.preventDefault();
    props.setInputText("");
  };

  // Get todos from local storage
  const getTodosFromLocalStorage = () => {
    if (localStorage.getItem("todo-items") === null) {
      localStorage.setItem("todo-items", []);
    } else if (localStorage.getItem("todo-items")) {
      let todoItems = JSON.parse(localStorage.getItem("todo-items"));
      props.setTodoItems(todoItems);
    } else {
      console.log("Working fine");
    }
  };

  return (
    <div className="add-todo">
      <form>
        <input
          value={props.inputText}
          onChange={add_todo_input}
          type="text"
          id="todoInput"
          placeholder="Enter todo..."
        />
        <button type="submit" onClick={add_todo_button}>
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
  );
}
