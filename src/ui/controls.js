import { conceptMap } from "../data/modelContent.js";

function renderStats(statsContainer, stats) {
  statsContainer.replaceChildren();

  stats.forEach((stat) => {
    const card = document.createElement("article");
    card.className = "stat-card";

    const value = document.createElement("strong");
    value.textContent = stat.value;

    const label = document.createElement("span");
    label.textContent = stat.label;

    card.append(value, label);
    statsContainer.appendChild(card);
  });
}

function buildTopicButton(concept, state) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "topic-btn";
  button.dataset.model = concept.id;
  button.setAttribute("role", "tab");
  button.textContent = concept.buttonLabel;
  button.addEventListener("click", () => {
    state.setCurrentModel(concept.id);
  });
  return button;
}

export function initControls({ state, concepts }) {
  const selector = document.getElementById("topic-selector");
  const infoPanel = document.getElementById("info-panel");
  const infoTitle = document.getElementById("info-title");
  const infoSubtitle = document.getElementById("info-subtitle");
  const infoDescription = document.getElementById("info-description");
  const infoStats = document.getElementById("info-stats");
  const markerStatus = document.getElementById("marker-status");
  const activeConcept = document.getElementById("active-concept");
  const scanGuide = document.getElementById("scan-guide");
  const topHud = document.querySelector(".top-hud");

  selector.replaceChildren(...concepts.map((concept) => buildTopicButton(concept, state)));

  document.querySelector('[data-action="rotate-x-up"]').addEventListener("click", () => {
    state.adjustRotation("x", 15);
  });
  document.querySelector('[data-action="rotate-x-down"]').addEventListener("click", () => {
    state.adjustRotation("x", -15);
  });
  document.querySelector('[data-action="rotate-y-left"]').addEventListener("click", () => {
    state.adjustRotation("y", -15);
  });
  document.querySelector('[data-action="rotate-y-right"]').addEventListener("click", () => {
    state.adjustRotation("y", 15);
  });
  document.querySelector('[data-action="rotate-z-left"]').addEventListener("click", () => {
    state.adjustRotation("z", -15);
  });
  document.querySelector('[data-action="rotate-z-right"]').addEventListener("click", () => {
    state.adjustRotation("z", 15);
  });
  document.querySelector('[data-action="scale-up"]').addEventListener("click", () => {
    state.adjustScale(0.2);
  });
  document.querySelector('[data-action="scale-down"]').addEventListener("click", () => {
    state.adjustScale(-0.2);
  });

  document.getElementById("reset-btn").addEventListener("click", () => {
    state.resetTransform();
  });

  document.getElementById("info-btn").addEventListener("click", () => {
    state.toggleInfo();
  });

  document.getElementById("info-close").addEventListener("click", () => {
    state.setInfoOpen(false);
  });

  state.subscribe((appState) => {
    const concept = conceptMap[appState.currentModelId];

    selector.querySelectorAll(".topic-btn").forEach((button) => {
      const isActive = button.dataset.model === appState.currentModelId;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    infoTitle.textContent = concept.title;
    infoSubtitle.textContent = `${concept.subject} | ${concept.gradeRange}`;
    infoDescription.textContent = concept.description;
    renderStats(infoStats, concept.stats);
    activeConcept.textContent = concept.title;

    infoPanel.classList.toggle("is-open", appState.infoOpen);
    scanGuide.classList.toggle("is-hidden", appState.markerVisible);
    topHud.classList.toggle("is-hidden-while-tracking", appState.markerVisible);

    markerStatus.textContent = appState.markerVisible
      ? "Marker detected"
      : "Searching for marker";
    markerStatus.classList.toggle("status-pill-live", appState.markerVisible);
  });
}
