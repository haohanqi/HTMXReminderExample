import content from "./content.js"
import categories from "./categories.js"
const mainPage = (data, listCategories) => html`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Reminder App</title>
        <script src="https://unpkg.com/htmx.org@2.0.4" integrity="sha384-HGfztofotfshcF7+8n44JQL2oJmowVChPTg48S+jvZoztPfvwD79OC/LTtG6dMp+" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="/styles.css">
        <script src="/assets/main.js"></script>
        <style>
        </style>
      </head>
      <body>
        <div class="w-full min-h-screen flex items-center justify-between">
          ${categories(data, listCategories)}
          ${content(data, "All")}
        </div>
      </body>
    </html>
  `

export default mainPage
