/* -- The page unload happens too fast for this animation to play. A delay is needed --
window.addEventListener("beforeunload", (event) => {
  const slideBody = document.getElementById("slideBody");

  slideBody.classList.toggle("page-exit");
});
*/

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

  // 3. Set the timer to match your CSS animation duration
  setTimeout(() => {
    window.location.href = destination;
  }, 2000);
});
