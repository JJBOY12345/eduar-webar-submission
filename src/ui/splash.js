export function initSplash({ state }) {
  const splash = document.getElementById("splash");
  const startButton = document.getElementById("start-ar");

  startButton.addEventListener("click", () => {
    state.setExperienceStarted(true);
  });

  state.subscribe((appState) => {
    splash.classList.toggle("is-hidden", appState.experienceStarted);
  });
}
