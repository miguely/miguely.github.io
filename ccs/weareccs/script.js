/* -- The page unload happens too fast for this animation to play. A delay is needed --
window.addEventListener("beforeunload", (event) => {
  const slideBody = document.getElementById("slideBody");

  slideBody.classList.toggle("page-exit");
});
*/

/*
document.addEventListener("click", (e) => {
  const slideBody = document.getElementById("slideBody");
  const link = e.target.closest(".delayed-link");

  if (!link) return;

  // Allow default behavior for Ctrl+Click, Cmd+Click, or Shift+Click (Open in new tab)
  if (e.metaKey || e.ctrlKey || e.shiftKey) return;

  // 1. Stop the page from leaving immediately
  e.preventDefault();
  const destination = link.href;

  // 2. Trigger your animation (e.g., adding a class to the body)
  slideBody.classList.add("page-exit");

  switch() {

  }

  // 3. Set the timer to match your CSS animation duration
  setTimeout(() => {
    window.location.href = destination;
  }, 2000);
});
*/

document.addEventListener("click", (e) => {
  const slideBody = document.getElementById("slideBody");
  const link = e.target.closest(".delayed-link");

  if (!link) return;
  if (e.metaKey || e.ctrlKey || e.shiftKey) return;

  e.preventDefault();
  const destination = link.href;

  // --- START OF LOGIC ---
  let variableValue = "";

  // We use switch(true) to check which condition is met
  switch (true) {
    case destination.includes("index.html"):
      variableValue = "var(--slide-color-home)";
      break;
    case destination.includes("project.html"):
      variableValue = "var(--slide-color-project)";
      break;
    case destination.includes("about.html"):
      variableValue = "var(--slide-color-about)";
      break;
  }

  // Apply the variable to the body (or slideBody)
  document.body.style.setProperty("--slide-color", variableValue);
  // --- END OF LOGIC ---

  slideBody.classList.add("page-exit");

  setTimeout(() => {
    window.location.href = destination;
  }, 2000);
});