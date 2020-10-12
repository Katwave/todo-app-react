import React from "react";

export default function AddTodo(props) {
  // Variables

  // Functions

  const add_todo_input = (e) => {
    const value = e.target.value;
    props.setInputText(value);
  };

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
