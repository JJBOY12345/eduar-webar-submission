import { conceptMap } from "../data/modelContent.js";

const BASE_URL = import.meta.env.BASE_URL;

const MODEL_TEMPLATES = {
  heart: `
    <a-entity id="model-heart" visible="true" position="0 0.35 0" rotation="0 180 0" scale="0.55 0.55 0.55">
      <a-entity id="model-heart-pivot" position="0 0 0" rotation="0 0 0" scale="1 1 1">
        <a-entity
          id="heart-model-asset"
          gltf-model="#heart-glb"
          position="0 0 0"
          rotation="0 0 0"
          scale="1 1 1"
        ></a-entity>
      </a-entity>
    </a-entity>
  `,
  solar: `
    <a-entity id="model-solar" visible="false" position="0 0.1 0" scale="0.18 0.18 0.18">
      <a-entity id="model-solar-pivot" position="0 0 0" rotation="0 0 0" scale="1 1 1">
        <a-entity animation="property: rotation; to: 0 360 0; loop: true; dur: 30000; easing: linear;">
          <a-sphere position="0 0 0" radius="1.1" color="#ffcc00" emissive="#884400"></a-sphere>
          <a-torus radius="1.9" radius-tubular="0.02" color="#ffffff" opacity="0.2" rotation="90 0 0"></a-torus>
          <a-torus radius="2.7" radius-tubular="0.02" color="#ffffff" opacity="0.2" rotation="90 0 0"></a-torus>
          <a-torus radius="3.5" radius-tubular="0.02" color="#ffffff" opacity="0.2" rotation="90 0 0"></a-torus>
          <a-torus radius="4.4" radius-tubular="0.02" color="#ffffff" opacity="0.2" rotation="90 0 0"></a-torus>
          <a-torus radius="5.8" radius-tubular="0.02" color="#ffffff" opacity="0.2" rotation="90 0 0"></a-torus>
          <a-torus radius="7.2" radius-tubular="0.02" color="#ffffff" opacity="0.2" rotation="90 0 0"></a-torus>
          <a-torus radius="8.5" radius-tubular="0.02" color="#ffffff" opacity="0.2" rotation="90 0 0"></a-torus>
          <a-torus radius="9.8" radius-tubular="0.02" color="#ffffff" opacity="0.2" rotation="90 0 0"></a-torus>
          <a-sphere position="1.9 0.15 0" radius="0.09" color="#aaaaaa"></a-sphere>
          <a-sphere position="2.7 -0.1 0.3" radius="0.16" color="#e8d080"></a-sphere>
          <a-entity position="3.5 0.1 -0.2">
            <a-sphere radius="0.17" color="#2266ee" emissive="#002244"></a-sphere>
            <a-sphere radius="0.06" position="0.05 0.03 0.08" color="#33aa33"></a-sphere>
          </a-entity>
          <a-sphere position="4.4 0.2 0.1" radius="0.13" color="#cc4411"></a-sphere>
          <a-entity position="5.8 -0.1 0.4">
            <a-sphere radius="0.45" color="#cc9944" emissive="#221100"></a-sphere>
          </a-entity>
          <a-entity position="7.2 0.1 -0.3">
            <a-sphere radius="0.35" color="#ddcc88" emissive="#221100"></a-sphere>
            <a-torus radius="0.6" radius-tubular="0.06" rotation="75 0 0" color="#bbaa66" opacity="0.9"></a-torus>
          </a-entity>
          <a-sphere position="8.5 0.15 0.2" radius="0.22" color="#88ddee"></a-sphere>
          <a-sphere position="9.8 -0.15 -0.3" radius="0.21" color="#2244cc"></a-sphere>
        </a-entity>
      </a-entity>
    </a-entity>
  `,
  dna: `
    <a-entity id="model-dna" visible="false" position="0 0.5 0" scale="0.6 0.6 0.6">
      <a-entity id="model-dna-pivot" position="0 0 0" rotation="0 0 0" scale="1 1 1">
        <a-sphere position="-0.25 1.0 0.00" radius="0.12" color="#00c2a8" emissive="#004d40"></a-sphere>
        <a-sphere position="-0.20 0.8 0.10" radius="0.12" color="#00c2a8" emissive="#004d40"></a-sphere>
        <a-sphere position="-0.15 0.6 0.15" radius="0.12" color="#00c2a8" emissive="#004d40"></a-sphere>
        <a-sphere position="-0.10 0.4 0.10" radius="0.12" color="#00c2a8" emissive="#004d40"></a-sphere>
        <a-sphere position="-0.05 0.2 0.00" radius="0.12" color="#00c2a8" emissive="#004d40"></a-sphere>
        <a-sphere position="-0.05 0.0 -0.10" radius="0.12" color="#00c2a8" emissive="#004d40"></a-sphere>
        <a-sphere position="-0.10 -0.2 -0.15" radius="0.12" color="#00c2a8" emissive="#004d40"></a-sphere>
        <a-sphere position="-0.15 -0.4 -0.10" radius="0.12" color="#00c2a8" emissive="#004d40"></a-sphere>
        <a-sphere position="-0.20 -0.6 0.00" radius="0.12" color="#00c2a8" emissive="#004d40"></a-sphere>
        <a-sphere position="-0.25 -0.8 0.10" radius="0.12" color="#00c2a8" emissive="#004d40"></a-sphere>
        <a-sphere position="-0.30 -1.0 0.15" radius="0.12" color="#00c2a8" emissive="#004d40"></a-sphere>
        <a-sphere position="0.25 1.0 0.00" radius="0.12" color="#ff4d1c" emissive="#4d1c00"></a-sphere>
        <a-sphere position="0.20 0.8 -0.10" radius="0.12" color="#ff4d1c" emissive="#4d1c00"></a-sphere>
        <a-sphere position="0.15 0.6 -0.15" radius="0.12" color="#ff4d1c" emissive="#4d1c00"></a-sphere>
        <a-sphere position="0.10 0.4 -0.10" radius="0.12" color="#ff4d1c" emissive="#4d1c00"></a-sphere>
        <a-sphere position="0.05 0.2 0.00" radius="0.12" color="#ff4d1c" emissive="#4d1c00"></a-sphere>
        <a-sphere position="0.05 0.0 0.10" radius="0.12" color="#ff4d1c" emissive="#4d1c00"></a-sphere>
        <a-sphere position="0.10 -0.2 0.15" radius="0.12" color="#ff4d1c" emissive="#4d1c00"></a-sphere>
        <a-sphere position="0.15 -0.4 0.10" radius="0.12" color="#ff4d1c" emissive="#4d1c00"></a-sphere>
        <a-sphere position="0.20 -0.6 0.00" radius="0.12" color="#ff4d1c" emissive="#4d1c00"></a-sphere>
        <a-sphere position="0.25 -0.8 -0.10" radius="0.12" color="#ff4d1c" emissive="#4d1c00"></a-sphere>
        <a-sphere position="0.30 -1.0 -0.15" radius="0.12" color="#ff4d1c" emissive="#4d1c00"></a-sphere>
        <a-cylinder position="0 0.9 0.00" radius="0.03" height="0.50" rotation="0 0 90" color="#ffaa00"></a-cylinder>
        <a-cylinder position="0 0.7 0.05" radius="0.03" height="0.45" rotation="0 15 90" color="#44ff44"></a-cylinder>
        <a-cylinder position="0 0.5 0.08" radius="0.03" height="0.40" rotation="0 30 90" color="#ff44ff"></a-cylinder>
        <a-cylinder position="0 0.3 0.05" radius="0.03" height="0.35" rotation="0 45 90" color="#44aaff"></a-cylinder>
        <a-cylinder position="0 0.1 0.00" radius="0.03" height="0.30" rotation="0 60 90" color="#ffff44"></a-cylinder>
        <a-cylinder position="0 -0.1 -0.05" radius="0.03" height="0.30" rotation="0 75 90" color="#ffaa00"></a-cylinder>
        <a-cylinder position="0 -0.3 -0.08" radius="0.03" height="0.35" rotation="0 90 90" color="#44ff44"></a-cylinder>
        <a-cylinder position="0 -0.5 -0.05" radius="0.03" height="0.40" rotation="0 105 90" color="#ff44ff"></a-cylinder>
        <a-cylinder position="0 -0.7 0.00" radius="0.03" height="0.45" rotation="0 120 90" color="#44aaff"></a-cylinder>
        <a-cylinder position="0 -0.9 0.05" radius="0.03" height="0.50" rotation="0 135 90" color="#ffff44"></a-cylinder>
      </a-entity>
    </a-entity>
  `,
  brain: `
    <a-entity id="model-brain" visible="false" position="0 0.3 0" rotation="0 180 0" scale="0.42 0.42 0.42">
      <a-entity id="model-brain-pivot" position="0 0 0" rotation="0 0 0" scale="1 1 1">
        <a-entity
          id="brain-model-asset"
          gltf-model="#brain-glb"
          position="0 0 0"
          rotation="0 0 0"
          scale="1 1 1"
        ></a-entity>
      </a-entity>
    </a-entity>
  `,
  lungs: `
    <a-entity id="model-lungs" visible="false" position="0 0.26 0" rotation="0 180 0" scale="1.45 1.45 1.45">
      <a-entity id="model-lungs-pivot" position="0 0 0" rotation="0 0 0" scale="1 1 1">
        <a-entity
          id="lungs-model-asset"
          gltf-model="#lungs-glb"
          position="0 0 0"
          rotation="0 0 0"
          scale="1 1 1"
        ></a-entity>
      </a-entity>
    </a-entity>
  `,
  cell: `
    <a-entity id="model-cell" visible="false" position="0 0.12 0" rotation="-90 180 0" scale="0.035 0.035 0.035">
      <a-entity id="model-cell-pivot" position="0 0 0" rotation="0 0 0" scale="1 1 1">
        <a-entity
          id="plant-cell-model-asset"
          gltf-model="#plant-cell-glb"
          position="0 0 0"
          rotation="0 0 0"
          scale="1 1 1"
        ></a-entity>
      </a-entity>
    </a-entity>
  `,
  atom: `
    <a-entity id="model-atom" visible="false" position="0 0.12 0" rotation="0 180 0" scale="0.0038 0.0038 0.0038">
      <a-entity id="model-atom-pivot" position="0 0 0" rotation="0 0 0" scale="1 1 1">
        <a-entity
          id="atom-model-asset"
          gltf-model="#atom-glb"
          position="0 0 0"
          rotation="0 0 0"
          scale="1 1 1"
        ></a-entity>
      </a-entity>
    </a-entity>
  `
};

function buildSceneMarkup(concepts) {
  return `
    <a-scene
      id="ar-scene"
      embedded
      arjs="sourceType: webcam; facingMode: environment; trackingMethod: best; debugUIEnabled: false; detectionMode: mono;"
      vr-mode-ui="enabled: false"
      renderer="antialias: true; alpha: true; colorManagement: true; physicallyCorrectLights: true; precision: high;"
    >
      <a-assets timeout="15000">
        <a-asset-item id="heart-glb" src="${BASE_URL}assets/models/heart.glb"></a-asset-item>
        <a-asset-item id="brain-glb" src="${BASE_URL}assets/models/brain.glb"></a-asset-item>
        <a-asset-item id="lungs-glb" src="${BASE_URL}assets/models/lungs.glb"></a-asset-item>
        <a-asset-item id="plant-cell-glb" src="${BASE_URL}assets/models/plant-cell.glb"></a-asset-item>
        <a-asset-item id="atom-glb" src="${BASE_URL}assets/models/atom.glb"></a-asset-item>
      </a-assets>

      <a-light type="ambient" color="#ffffff" intensity="0.7"></a-light>
      <a-light type="directional" color="#ffffff" intensity="1.35" position="1.5 2 1.5"></a-light>
      <a-light type="directional" color="#ffe8de" intensity="0.95" position="-1.25 1.4 1"></a-light>
      <a-light type="directional" color="#dbefff" intensity="0.7" position="0.4 -0.3 1.2"></a-light>

      <a-marker
        preset="hiro"
        id="marker"
        smooth="true"
        smoothCount="12"
        smoothTolerance="0.01"
        smoothThreshold="5"
      >
        <a-entity id="model-container" position="0 0 0">
          ${concepts.map((concept) => MODEL_TEMPLATES[concept.id]).join("")}
        </a-entity>
      </a-marker>

      <a-entity camera></a-entity>
    </a-scene>
  `;
}

function enhanceImportedModel(entityId, scene, recenterMode = "center-base") {
  const modelEntity = document.getElementById(entityId);
  if (!modelEntity) {
    return;
  }

  modelEntity.addEventListener("model-loaded", () => {
    const maxAnisotropy = scene.renderer?.capabilities?.getMaxAnisotropy?.() ?? 1;
    const object3D = modelEntity.getObject3D("mesh");

    if (!object3D) {
      return;
    }

    const bounds = new THREE.Box3().setFromObject(object3D);
    const center = bounds.getCenter(new THREE.Vector3());

    if (recenterMode === "center-base") {
      object3D.position.set(-center.x, -bounds.min.y, -center.z);
    } else {
      object3D.position.set(-center.x, -center.y, -center.z);
    }

    object3D.traverse((node) => {
      if (!node.isMesh || !node.material) {
        return;
      }

      const materials = Array.isArray(node.material) ? node.material : [node.material];
      materials.forEach((material) => {
        if ("roughness" in material) {
          material.roughness = Math.max(material.roughness ?? 0.9, 0.75);
        }

        if ("metalness" in material) {
          material.metalness = Math.min(material.metalness ?? 0.1, 0.08);
        }

        if (material.map) {
          material.map.anisotropy = maxAnisotropy;
        }

        material.needsUpdate = true;
      });
    });
  });
}

export function initScene({ state, concepts }) {
  const sceneRoot = document.getElementById("scene-root");
  sceneRoot.innerHTML = buildSceneMarkup(concepts);

  const scene = document.getElementById("ar-scene");
  const marker = document.getElementById("marker");

  const enhanceImportedModels = () => {
    concepts.forEach((concept) => {
      const importedModel = conceptMap[concept.id]?.importedModel;
      if (importedModel?.entityId) {
        enhanceImportedModel(
          importedModel.entityId,
          scene,
          importedModel.recenterMode ?? "center-base"
        );
      }
    });
  };

  if (scene.hasLoaded) {
    enhanceImportedModels();
  } else {
    scene.addEventListener("loaded", enhanceImportedModels, { once: true });
  }

  state.subscribe((appState) => {
    concepts.forEach((concept) => {
      const wrapper = document.getElementById(`model-${concept.id}`);
      const pivot = document.getElementById(`model-${concept.id}-pivot`);
      const isActive = concept.id === appState.currentModelId;

      if (wrapper) {
        wrapper.setAttribute("visible", String(isActive));
      }

      if (pivot) {
        if (isActive) {
          pivot.setAttribute(
            "rotation",
            `${appState.rotation.x} ${appState.rotation.y} ${appState.rotation.z}`
          );
          pivot.setAttribute(
            "scale",
            `${appState.scale} ${appState.scale} ${appState.scale}`
          );
        } else {
          pivot.setAttribute("rotation", "0 0 0");
          pivot.setAttribute("scale", "1 1 1");
        }
      }
    });
  });

  marker.addEventListener("markerFound", () => {
    const appState = state.getState();
    state.setMarkerVisible(true);

    if (!appState.markerSeenBefore) {
      state.markMarkerSeen();
      window.setTimeout(() => {
        state.setInfoOpen(true);
      }, 700);
    }
  });

  marker.addEventListener("markerLost", () => {
    state.setMarkerVisible(false);
  });

  window.addEventListener("resize", () => {
    scene.emit("resize");
  });
}
