import React, { useState } from "react";
import { ITodo } from "./types";
import Todo from "./Todo/Todo";
import FormTodo from "./FormTodo/FormTodo";

const Todos = () => {
  // stast
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 1,
      title: "slklskf",
      complete: false,
    },
  ]);

  // onDelete
  const onDelete = (id: number) => {
    const updateTodos: ITodo[] = [...todos].filter((todo: ITodo) => {
      return todo.id !== id;
    });
    setTodos(updateTodos);
  };

  // onCompleted
  const onComplete = (id: number, complete: boolean) => {
    const updateTodos: ITodo[] = [...todos].map((todo: ITodo) => {
      if (todo.id === id) todo.complete = complete;
      return todo;
    })
    setTodos(updateTodos)
  }

// addTodo
  const addTodo = (event: React.FormEvent<HTMLFormElement>, title: string) => {
    event.preventDefault()
    const todo: ITodo = {
      id: Date.now(),
      title: title,
      complete: false
    };
    setTodos((prev: ITodo[]) => [...prev, todo])

  }

  return (
    <div>
      <h1>List Todo</h1>
      {/* form add */}
      <FormTodo addTodo={addTodo}/>

      
      {todos.map((todo: ITodo) => {
        return <Todo
          key={todo.id}
          todo={todo}
          onDelete={() => onDelete(todo.id)}
          onComplete={(complete)=>onComplete(todo.id,complete)}
        />
      })}
    </div>
  );
};

export default Todos;
