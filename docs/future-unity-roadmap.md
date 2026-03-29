# Future Unity Roadmap

This document describes how the current WebAR prototype could evolve into a native Unity submission later without pretending that work is already complete.

## Possible Migration Path

- Use Unity with AR Foundation as the shared abstraction layer
- Target ARCore for Android and ARKit for iOS
- Replace primitive concept geometry with optimized 3D assets or prefabs
- Move topic metadata into ScriptableObjects or JSON-driven content
- Replace browser overlay UI with Unity UI Toolkit or Canvas-based UI
- Map current transform controls to gesture-based interaction or XR interaction patterns

## Suggested Unity Module Mapping

- `modelContent.js` -> concept data assets in Unity
- `appState.js` -> central scene manager or AR session controller
- `controls.js` -> mobile interaction layer and topic selection UI
- `scene.js` -> AR placement, marker tracking, or tracked image setup

## Native Additions Worth Doing Later

- Markerless surface placement
- Touch gestures for rotate and scale
- Animated labels and callouts
- Better lighting and shader polish
- Downloadable lesson packs
- Session analytics

## Important Note

This roadmap is included only to show forward-thinking product direction. The current repository remains a WebAR educational prototype.
