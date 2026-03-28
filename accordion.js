const accordionBtns = document.querySelectorAll(".accordion");

function closePanel(button) {
  const panel = document.getElementById(button.getAttribute("aria-controls"));
  button.classList.remove("is-open");
  button.setAttribute("aria-expanded", "false");
  panel.style.maxHeight = null;
  panel.hidden = true;
}

function openPanel(button) {
  const panel = document.getElementById(button.getAttribute("aria-controls"));
  button.classList.add("is-open");
  button.setAttribute("aria-expanded", "true");
  panel.hidden = false;
  panel.style.maxHeight = panel.scrollHeight + "px";
}

function togglePanel(button) {
  const isExpanded = button.getAttribute("aria-expanded") === "true";
  if (isExpanded) {
    closePanel(button);
  } else {
    openPanel(button);
  }
}

accordionBtns.forEach((button, index) => {
  button.addEventListener("click", () => {
    togglePanel(button);
  });

  button.addEventListener("keydown", (event) => {
    let targetIndex = index;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        targetIndex = (index + 1) % accordionBtns.length;
        accordionBtns[targetIndex].focus();
        break;

      case "ArrowUp":
        event.preventDefault();
        targetIndex = (index - 1 + accordionBtns.length) % accordionBtns.length;
        accordionBtns[targetIndex].focus();
        break;

      case "Home":
        event.preventDefault();
        accordionBtns[0].focus();
        break;

      case "End":
        event.preventDefault();
        accordionBtns[accordionBtns.length - 1].focus();
        break;

      case "Enter":
      case " ":
        event.preventDefault();
        togglePanel(button);
        break;
    }
  });
});
