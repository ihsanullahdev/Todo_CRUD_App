import React from "react";
import { PlusCircle, Save } from "lucide-react";

function SearchBar({
  inputSearch,
  setinputSearch,
  handleSubmit,
  editTodo,
  todoLength,
}) {
  function handleFormSubmit(e) {
    e.preventDefault();

    if (!inputSearch.trim()) {
      return;
    }

    handleSubmit();
  }

  return (
    <div className="mt-8">
      {/* FORM */}
      <form
        onSubmit={handleFormSubmit}
        className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm sm:p-4"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          {/* INPUT */}
          <input
            type="text"
            value={inputSearch}
            onChange={(e) => setinputSearch(e.target.value)}
            placeholder="Enter your todo..."
            className="h-14 w-full rounded-xl border border-slate-200 px-4 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 sm:flex-1"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 text-base font-medium text-white shadow-lg shadow-indigo-100 transition hover:bg-indigo-600 active:scale-[0.98] sm:w-auto sm:min-w-[160px]"
          >
            {editTodo !== null ? (
              <>
                <Save size={20} />
                Update
              </>
            ) : (
              <>
                Add Item
                <PlusCircle size={21} />
              </>
            )}
          </button>
        </div>
      </form>

      {/* TODO HEADING */}
      <div className="mt-8 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
          Your Todos
        </h2>

        <span className="rounded-full bg-indigo-50 px-4 py-2 text-xs font-medium text-indigo-500 sm:text-sm">
          {todoLength} {todoLength === 1 ? "Task" : "Tasks"}
        </span>
      </div>
    </div>
  );
}

export default SearchBar;
