document.addEventListener("htmx:confirm", (event) => {
  if (!event.detail.question) return

  event.preventDefault();

  const body = document.querySelector("body");

  const dialog = document.createElement("dialog");

  const dialogContainer = document.createElement("div");
  dialogContainer.className = "max-w-[25rem] bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-4";

  const confirmMessage = document.createElement("p");
  confirmMessage.textContent = "Are you sure you want to delete this item ?";

  const closeButton = document.createElement("button");
  closeButton.textContent = "Cancel";
  closeButton.className = "button bg-accent text-black";
  closeButton.addEventListener("click", () => {
    dialog.close();
    dialog.remove();
  })

  const confirmButton = document.createElement("button");
  confirmButton.textContent = "Confirm";
  confirmButton.className = "button";
  confirmButton.addEventListener("click", () => {
    event.detail.issueRequest(true)
    dialog.close();
    dialog.remove();
  });

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "flex justify-end gap-4 w-full";

  buttonContainer.appendChild(closeButton);
  buttonContainer.appendChild(confirmButton);

  dialog.className = "min-w-full min-h-full flex justify-center items-center p-4 bg-transparent z-100 backdrop:bg-popover backdrop:opacity-70";

  dialogContainer.appendChild(confirmMessage);
  dialogContainer.appendChild(buttonContainer);
  dialog.appendChild(dialogContainer);
  body.appendChild(dialog);

  dialog.showModal();
})
