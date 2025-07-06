const todolist = (data, category, swap) => html`
  <ul id="content-todolist" ${swap ? "hx-swap-oob=true" : ""} class="grid grid-cols-2 gap-4 mb-8">
    ${data.map((item) => html`
      <li class="bg-card border-gray-100 border-[1px] text-card-foreground p-6 rounded-lg shadow gap-4 flex flex-col">
        <p>${item.todo}</p>
        ${category === "All" ? "" : `<button
            id="delete-confirm"
            hx-confirm="Are you sure to delete ${item.todo}"
            hx-delete="/todo/${category}/${item.id}"
            hx-swap="none"
            class="bg-destructive button max-w-fit">
              Remove
          </button>`}
      </li>`).join("")
  }
  </ul>
  <div id="loading-indicator" class="htmx-indicator">loading...</div>
`
export default todolist
