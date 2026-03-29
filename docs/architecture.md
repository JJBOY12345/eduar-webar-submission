# Architecture Overview

## Goal

Turn the original single-file WebAR prototype into a maintainable submission package with clear separation between content, interaction logic, AR scene management, and documentation.

## Modules

- `src/main.js`
  - App bootstrap
  - Imports styles
  - Creates shared state
  - Initializes splash, controls, and AR scene modules

- `src/data/modelContent.js`
  - Single source of truth for educational concepts
  - Stores title, subject, grade range, description, stats, and default transform metadata

- `src/state/appState.js`
  - Minimal shared app state
  - Tracks selected concept, rotation, scale, info panel state, splash state, and marker detection state

- `src/ui/splash.js`
  - Handles onboarding flow
  - Starts the AR experience without mutating scene logic directly

- `src/ui/controls.js`
  - Renders topic buttons
  - Wires rotation, scale, reset, and info panel actions
  - Updates student-facing text from shared state

- `src/ar/scene.js`
  - Injects the A-Frame and AR.js scene
  - Registers marker events
  - Switches visible concept entities
  - Applies transform updates from shared state

## Data Flow

1. `main.js` creates shared state with the default concept.
2. UI modules subscribe to state changes and update visible labels, active buttons, and info panel content.
3. The scene module subscribes to the same state and applies model visibility and transform updates.
4. Marker events inside the AR scene update shared state, which then drives the status pill and onboarding info panel behavior.

## Why This Structure Helps Review

- Easier to read than a single HTML file
- Easier to explain during review or viva
- Cleaner path for future migration to Unity or other runtimes
- Keeps content changes independent from UI logic and AR scene logic
