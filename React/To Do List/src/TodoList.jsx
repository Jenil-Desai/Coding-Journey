import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "Sample Task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    if (newTodo == "") {
      alert("New Task Can't Be");
    } else {
      setTodos((prevTodos) => {
        return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
      });
      setNewTodo("");
    }
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return todos.filter((prevTodos) => prevTodos.id != id);
    });
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let upperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  let markAsDoneAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  return (
    <div>
      <div className="inputContainer">
        <input type="text" placeholder="Write Task" value={newTodo} onChange={updateTodoValue} />
        <button onClick={addNewTask}>Add Task</button>
      </div>
      <div className="btnContainer">
        <button className="upperCaseButton" onClick={upperCaseAll}>
          Upper Case All
        </button>
        <button className="upperCaseButton" onClick={markAsDoneAll}>
          Mark As Done All
        </button>
      </div>
      <hr />
      <h4>To Do List</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span data-isdone={todo.isDone}>{todo.task}</span>
            <div>
              <button onClick={() => deleteTodo(todo.id)} className="deleteButton">
                Delete
              </button>
              &nbsp;
              <button onClick={() => upperCaseOne(todo.id)}>Upper Case</button>&nbsp;
              <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
            </div>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
