import todolist from "./todolist.js"

const content = (data, category) => html`
<div id="todo-content" class="min-h-screen flex flex-col gap-1.5 flex-2 p-4">
  <h1 class="text-xl font-bold mb-2" id="content-title">${category}</h1>
  ${category !== "All" ? `
  <form hx-post="/todo" hx-swap="none" class="flex flex-col gap-4 mb-4" hx-indicator="#loading-indicator">
    <label for="todo">Add New Todo:</label>
    <div class="flex justify-around gap-4">
      <input class="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        name="todo"
        type="text"
      />
      <input id="todo-category" name="category" type="hidden" value=${category} />
      <button hx-disabled-elt="this" type="submit" class="button w-16">Add</button>
    </div>
    <p class="text-red-500" id="error-message"></p>
  </form>
  `: ""
  }
${todolist(data, category, false)}
</div>
`
export default content

