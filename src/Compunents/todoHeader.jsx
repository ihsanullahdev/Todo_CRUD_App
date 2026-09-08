import React, { useState } from "react";
import SearchBar from "./searchBar";
import TodoList from "./todoList";
import { NotebookPen, SquarePen } from "lucide-react";

function TodoHeader({ inputSearch, setinputSearch }) {
  const [todo, setTodo] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  function handleDelete(id) {
    const updateTodo = todo.filter((item) => item.id !== id);
    setTodo(updateTodo);
  }

  function handleEdit(id) {
    const selectedTodo = todo.find((item) => item.id === id);

    setEditTodo(id);
    setinputSearch(selectedTodo.text);
  }

  function handleSubmit() {
    if (editTodo !== null) {
      const updatedTodos = todo.map((item) => {
        if (item.id === editTodo) {
          return {
            ...item,
            text: inputSearch,
          };
        }

        return item;
      });

      setTodo(updatedTodos);
      setinputSearch("");
      setEditTodo(null);

      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputSearch,
    };

    setTodo([...todo, newTodo]);
    setinputSearch("");
  }

  return (
    <div className="w-full max-w-5xl overflow-hidden rounded-2xl bg-white p-5 shadow-xl shadow-indigo-100 sm:p-8 lg:p-12">
      {/* HEADER */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 sm:h-16 sm:w-16">
            <NotebookPen size={30} className="text-indigo-500 sm:h-9 sm:w-9" />
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              CRUD TODO APP
            </h1>

            <p className="mt-1 text-xs text-slate-500 sm:text-sm lg:text-base">
              Add, edit and manage your todos easily
            </p>
          </div>
        </div>

        {/* Header Icon */}
        <button className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-50 sm:flex">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500">
            <SquarePen size={19} className="text-white" />
          </div>
        </button>
      </div>

      {/* SEARCH / ADD */}
      <SearchBar
        inputSearch={inputSearch}
        setinputSearch={setinputSearch}
        handleSubmit={handleSubmit}
        editTodo={editTodo}
        todoLength={todo.length}
      />

      {/* TODO LIST */}
      <TodoList
        todo={todo}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default TodoHeader;
