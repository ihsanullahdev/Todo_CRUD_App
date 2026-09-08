import React from "react";
import TodoActions from "./todoActions";
import { CircleCheck } from "lucide-react";

function TodoList({ todo, handleDelete, handleEdit }) {
  if (todo.length === 0) {
    return (
      <div className="mt-5 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-5 py-10 text-center">
        <p className="text-sm text-slate-400">
          No todos yet. Add your first task!
        </p>
      </div>
    );
  }

  return (
    <div className="mt-5 space-y-3">
      {todo.map((item, index) => {
        return (
          <div
            key={item.id}
            className="group flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-[1px] hover:shadow-md sm:flex-row sm:items-center sm:justify-between sm:p-5"
          >
            {/* TODO CONTENT */}
            <div className="flex min-w-0 items-center gap-4">
              {/* CHECK ICON */}
              <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-50">
                <CircleCheck size={24} className="text-indigo-500" />
              </button>

              {/* TEXT */}
              <div className="min-w-0">
                <p className="break-words text-base font-semibold text-slate-900 sm:text-lg">
                  {index + 1}. {item.text}
                </p>

                {/* <p className="mt-1 text-xs text-slate-400">
                  Created a few seconds ago
                </p> */}
              </div>
            </div>

            {/* ACTIONS */}
            <TodoActions
              item={item}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
