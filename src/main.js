import "./styles/base.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/ar-overlay.css";

import { conceptMap, concepts } from "./data/modelContent.js";
import { initScene } from "./ar/scene.js";
import { createAppState } from "./state/appState.js";
import { initControls } from "./ui/controls.js";
import { initSplash } from "./ui/splash.js";

const state = createAppState(concepts[0].id, conceptMap);

initSplash({ state });
initControls({ state, concepts });
initScene({ state, concepts });
