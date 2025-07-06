import "./src/utils/global.js"
import express from "express"
import mainPage from "./src/views/components/index.js";
import { v4 as uuid } from "uuid"
import content from "./src/views/components/content.js";
import todolist from "./src/views/components/todolist.js";
import categoryItem from "./src/views/components/categoryItem.js";
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('dist'));

const data = [
  {
    id: uuid(),
    todo: "Today's todo list",
    category: "Today",
  },
  {
    id: uuid(),
    todo: "Today's todo list 2",
    category: "Today",
  },
  {
    id: uuid(),
    todo: "Completed todo list",
    category: "Completed",
  },
  {
    id: uuid(),
    todo: "Completed todo list 2",
    category: "Completed",
  },
  {
    id: uuid(),
    todo: "Emergency todo list",
    category: "Emergency",
  },
  {
    id: uuid(),
    todo: "Emergency todo list 2",
    category: "Emergency",
  },
  {
    id: uuid(),
    todo: "Scheduled todo list",
    category: "Scheduled",
  },
  {
    id: uuid(),
    todo: "Scheduled todo list 2",
    category: "Scheduled",
  },
  {
    id: uuid(),
    todo: "Scheduled todo list 2",
    category: "Scheduled",
  }
]

const listCategories = ["All", "Emergency", "Today", "Scheduled", "Flagged", "Completed"]

// Return single page application
app.get("/", (req, res) => {
  res.send(mainPage(data, listCategories))
});

// Api route
app.get("/todo/:category", (req, res) => {
  const category = req.params.category
  const todoUnderCategory = data.filter((item) => item.category === category)
  if (req.get("HX-Request")) {
    res.send(`${content(category === "All" ? data : todoUnderCategory, category)}`)
  } else {
    res.status(404).send(`<div>404 not found</div>`)
  }
})

app.post("/todo", (req, res) => {
  const formData = req.body
  const { category, todo } = formData
  const newTodo = {
    id: uuid(),
    todo: todo,
    category: category
  }

  if (todo === "") {
    return res.send(
      html`<p id="error-message" hx-swap-oob="#error-message">Todo can't be empty</p>`
    )
  }

  data.push(newTodo)

  const todoUnderCategory = data.filter((todo) => todo.category === category)
  // Mock loading delay
  setTimeout(() => {
    res.send(html`
      ${categoryItem(category, todoUnderCategory.length)}
      ${categoryItem("All", data.length)}
     <p id="error-message" hx-swap-oob="#error-message"></p>
     ${todolist(todoUnderCategory, category, true)}
    `)
  }, [2000])
})

app.get("/search", (req, res) => {
  const searchTerm = req.query.search
  // const searchTerm = req.body.query
  const searchResult = data.filter((todo) => {
    if (todo.todo.toLowerCase().includes(searchTerm.toLowerCase())) {
      return todo
    }
  })

  if (searchResult.length === 0) {
    res.send(html`
     <div id="todo-content" class="min-h-screen flex flex-col gap-1.5 flex-2 p-4">
        search result empty
     </div>
    `)
    return
  }

  res.send(html`
    <div id="todo-content" class="min-h-screen flex flex-col gap-1.5 flex-2 p-4">
      ${todolist(searchResult, "All")}
    </div>
  `)
})

app.delete("/todo/:category/:id", (req, res) => {
  const { id, category } = req.params
  const index = data.findIndex((todo) => todo.id === id)
  data.splice(index, 1)
  const todoUnderCategory = data.filter((todo) => todo.category === category)

  res.send(
    html`
    ${categoryItem(category, todoUnderCategory.length)}
    ${categoryItem("All", data.length)}
   ${todolist(todoUnderCategory, category, true)}
  `
  )
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

