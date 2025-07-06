import categoryItem from "./categoryItem.js"

const categories = (data, listCategories) => {
  const counter = {}
  listCategories.forEach((category) => {
    if (category === "All") {
      counter[category] = data.length
    } else {
      counter[category] = 0
    }
  })
  data.forEach(todo => {
    if (!counter[todo.category]) {
      counter[todo.category] = 1
    } else {
      counter[todo.category]++
    }
  });
  return html`
  <div class="min-h-screen bg-sidebar flex-1 p-4">
    <form
      hx-get="/search"
      hx-trigger="input changed delay:500ms, keyup[key=='Enter'], load"
      hx-target="#todo-content"
      hx-swap="outerHTML"
      hx-push-url="true"
    >
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search..."
        class="w-full h-12 mb-4 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </form>

    <ul class="grid grid-cols-2 gap-2">
      ${listCategories.map((category) => `
      <li class="flex justify-center items-center h-16 button">
        ${categoryItem(category, counter[category])}
      </li>
      `).join("")}
    </ul>
  </div>
    `
}

export default categories

