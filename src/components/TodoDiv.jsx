import React from "react";
import { useState } from "react";

export default function TodoDiv(props) {
  // variables

  const [checked, getChecked] = useState(props.completed);
  const [delete_todo, getDeleteTodo] = useState(false);

  //   Functions

  const checkButton = () => {
    getChecked(!checked);
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
