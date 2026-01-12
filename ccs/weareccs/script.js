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

  // The page unload happens too fast for this animation to play. A delay is needed 
  setTimeout(() => {
    window.location.href = destination;
  }, 1000);
});

// Browser Back-Forward Cache (bfcache) will keep the .page-exit class when returning to the page via BACK button. Use pageshow to remove it.
window.addEventListener("pageshow", (event) => {
  const slideBody = document.getElementById("slideBody");
  
  // persisted is true if the page is loaded from the bfcache
  if (event.persisted) {
    slideBody.classList.remove("page-exit");
  }
});
