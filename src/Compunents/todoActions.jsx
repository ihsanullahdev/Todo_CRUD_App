import React from "react";
import { Pencil, Trash2 } from "lucide-react";

function TodoActions({ item, handleDelete, handleEdit }) {
  return (
    <div className="flex items-center gap-3 sm:shrink-0">
      {/* DELETE */}
      <button
        type="button"
        onClick={() => handleDelete(item.id)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-200 bg-red-50 transition hover:bg-red-100 active:scale-95"
        aria-label="Delete todo"
      >
        <Trash2 size={22} className="text-red-500" />
      </button>

      {/* EDIT */}
      <button
        type="button"
        onClick={() => handleEdit(item.id)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-200 bg-amber-50 transition hover:bg-amber-100 active:scale-95"
        aria-label="Edit todo"
      >
        <Pencil size={22} className="text-amber-500" />
      </button>
    </div>
  );
}

export default TodoActions;
