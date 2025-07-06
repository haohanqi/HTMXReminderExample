# A min example by using HTMX to build a reminder app

HTMX using hypermedia driven application approach, instead of using traditional JSON.

It combines the simplicity and flexibility of traditional muti-page application with better user experience of single page application

### Tech stack 

Backend: Express.js (but not limited to js backend framework)

Frontend: HTMX, Tailwind css, Minimum Javascript

### Features

1. Display different todo categories
2. Add, Delete todo item (customized alert modal)
3. Searching todo item (with debounce)

Covers basic HTMX attributes: 

1. For triggering request: `hx-get`, `hx-post`, `hx-delete`, `hx-on`, `hx-trigger`
2. For target and swap content: `hx-target`,`hx-swap-oob`
3. Some HTMX event: `after-request`...
