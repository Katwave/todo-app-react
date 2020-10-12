import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function TodoDiv(props) {
  // variables

  const [checked, getChecked] = useState(props.completed);
  const [delete_todo, getDeleteTodo] = useState(false);

  // Use effect
  useEffect(() => {
    saveToLocalStorage();
  }, [props.todoItems, checked, delete_todo]);

  //   Functions

  // save todos to local storage
  const saveToLocalStorage = () => {
    if (localStorage.getItem("todo-items") === null) {
      localStorage.setItem("todo-items", []);
    } else {
      localStorage.setItem("todo-items", JSON.stringify(props.todoItems));
    }
  };

  const checkButton = () => {
    getChecked(!checked);
    props.setTodoItems(
      props.todoItems.map((el) => {
        if (el._id === props.todo._id) {
          return {
            ...el,
            completed: !el.completed,
          };
        } else {
          return el;
        }
      })
    );
  };

  //   Delete the todo div
  const delete_todo_button = () => {
    getDeleteTodo(true);

    props.setTodoItems(
      props.todoItems.filter((el) => el._id !== props.todo._id)
    );
  };

  return (
    <div>
      <div className={delete_todo ? "delete-todo" : "todo-item"}>
        <li
          style={
            checked
              ? { opacity: 0.6, textDecoration: "line-through" }
              : { opacity: 1 }
          }
        >
          {props.name}
        </li>

        <button onClick={checkButton}>
          <i className="fas fa-check"></i>
        </button>

        <button onClick={delete_todo_button}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
