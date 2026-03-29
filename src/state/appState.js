function getModelDefaults(modelContent, modelId) {
  const defaults = modelContent[modelId]?.defaultTransform ?? {};

  return {
    rotation: {
      x: defaults.rotation?.x ?? 0,
      y: defaults.rotation?.y ?? 0,
      z: defaults.rotation?.z ?? 0
    },
    scale: defaults.scale ?? 1
  };
}

export function createAppState(initialModelId, modelContent) {
  const listeners = new Set();
  const initialDefaults = getModelDefaults(modelContent, initialModelId);

  const state = {
    currentModelId: initialModelId,
    rotation: { ...initialDefaults.rotation },
    scale: initialDefaults.scale,
    infoOpen: false,
    experienceStarted: false,
    markerVisible: false,
    markerSeenBefore: false
  };

  const snapshot = () => ({
    ...state,
    rotation: { ...state.rotation }
  });

  const emit = () => {
    const current = snapshot();
    listeners.forEach((listener) => listener(current));
  };

  return {
    getState() {
      return snapshot();
    },
    subscribe(listener) {
      listeners.add(listener);
      listener(snapshot());
      return () => listeners.delete(listener);
    },
    setCurrentModel(modelId) {
      const defaults = getModelDefaults(modelContent, modelId);
      state.currentModelId = modelId;
      state.rotation = { ...defaults.rotation };
      state.scale = defaults.scale;
      emit();
    },
    adjustRotation(axis, amount) {
      state.rotation[axis] = (state.rotation[axis] + amount + 360) % 360;
      emit();
    },
    adjustScale(amount) {
      state.scale = Math.max(0.3, Math.min(3, Number((state.scale + amount).toFixed(2))));
      emit();
    },
    resetTransform() {
      const defaults = getModelDefaults(modelContent, state.currentModelId);
      state.rotation = { ...defaults.rotation };
      state.scale = defaults.scale;
      emit();
    },
    setInfoOpen(value) {
      state.infoOpen = value;
      emit();
    },
    toggleInfo() {
      state.infoOpen = !state.infoOpen;
      emit();
    },
    setExperienceStarted(value) {
      state.experienceStarted = value;
      emit();
    },
    setMarkerVisible(value) {
      state.markerVisible = value;
      emit();
    },
    markMarkerSeen() {
      state.markerSeenBefore = true;
      emit();
    }
  };
}
