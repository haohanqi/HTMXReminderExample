const categoryItem = (category, length) => {
  return html`
  <a
      id="category-button-${category}"
      hx-swap-oob="true"
      hx-get="/todo/${category}"
      hx-target="#todo-content"
      hx-swap="outerHTML"
      class="h-full w-full flex justify-around items-center"
      hx-on::after-request="document.getElementById('search').value=''"
    >
      <span>${category}</span>
      <span class="text-gray-200">${length}</span>
    </a>
`
}

export default categoryItem
