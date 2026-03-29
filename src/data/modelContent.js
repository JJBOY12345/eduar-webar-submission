export const concepts = [
  {
    id: "heart",
    buttonLabel: "Heart",
    title: "Human Heart",
    subject: "Biology",
    gradeRange: "Grades 9-12",
    description:
      "The heart contains four chambers that move blood through the body. Oxygen-poor blood returns to the right side, while oxygen-rich blood leaves through the left side.",
    stats: [
      { value: "4", label: "chambers" },
      { value: "100K", label: "beats per day" },
      { value: "5L", label: "blood per minute" }
    ],
    importedModel: {
      assetId: "heart-glb",
      entityId: "heart-model-asset",
      recenterMode: "center-base"
    },
    defaultTransform: {
      rotation: { x: 0, y: 0, z: 0 },
      scale: 1
    }
  },
  {
    id: "solar",
    buttonLabel: "Solar System",
    title: "Solar System",
    subject: "Astronomy",
    gradeRange: "Grades 5-10",
    description:
      "The solar system includes eight planets orbiting the Sun. The inner planets are rocky, while the outer planets are gas and ice giants with very different sizes and distances.",
    stats: [
      { value: "8", label: "planets" },
      { value: "4.6B", label: "years old" },
      { value: "11x", label: "Jupiter vs Earth" }
    ],
    defaultTransform: {
      rotation: { x: 0, y: 0, z: 0 },
      scale: 1
    }
  },
  {
    id: "dna",
    buttonLabel: "DNA",
    title: "DNA Double Helix",
    subject: "Genetics",
    gradeRange: "Grades 10-12",
    description:
      "DNA stores genetic instructions in a double helix structure. Matching base pairs connect the two strands and help cells copy and read information correctly.",
    stats: [
      { value: "3B", label: "base pairs" },
      { value: "2nm", label: "width" },
      { value: "A-T / C-G", label: "pairing rules" }
    ],
    defaultTransform: {
      rotation: { x: 0, y: 0, z: 0 },
      scale: 1
    }
  },
  {
    id: "brain",
    buttonLabel: "Brain",
    title: "Human Brain",
    subject: "Neuroscience",
    gradeRange: "Grades 8-12",
    description:
      "The brain coordinates movement, sensation, thought, and memory. Different areas manage different jobs, while the brainstem controls critical life functions.",
    stats: [
      { value: "86B", label: "neurons" },
      { value: "2%", label: "body mass" },
      { value: "20%", label: "oxygen use" }
    ],
    importedModel: {
      assetId: "brain-glb",
      entityId: "brain-model-asset",
      recenterMode: "center-base"
    },
    defaultTransform: {
      rotation: { x: 0, y: 0, z: 0 },
      scale: 1
    }
  },
  {
    id: "lungs",
    buttonLabel: "Lungs",
    title: "Respiratory System",
    subject: "Biology",
    gradeRange: "Grades 7-10",
    description:
      "Air travels from the trachea into the bronchi and then to tiny air sacs called alveoli. Oxygen enters the blood while carbon dioxide leaves the body.",
    stats: [
      { value: "6L", label: "lung capacity" },
      { value: "12-20", label: "breaths per minute" },
      { value: "300M", label: "alveoli" }
    ],
    importedModel: {
      assetId: "lungs-glb",
      entityId: "lungs-model-asset",
      recenterMode: "center-center"
    },
    defaultTransform: {
      rotation: { x: 0, y: 0, z: 0 },
      scale: 1
    }
  },
  {
    id: "cell",
    buttonLabel: "Plant Cell",
    title: "Plant Cell",
    subject: "Biology",
    gradeRange: "Grades 7-10",
    description:
      "Plant cells contain a rigid cell wall, chloroplasts for photosynthesis, a nucleus, and a large vacuole that helps store water and maintain structure.",
    stats: [
      { value: "10-100um", label: "typical size" },
      { value: "Cell wall", label: "rigid support" },
      { value: "Chloroplast", label: "photosynthesis" }
    ],
    importedModel: {
      assetId: "plant-cell-glb",
      entityId: "plant-cell-model-asset",
      recenterMode: "center-center"
    },
    defaultTransform: {
      rotation: { x: 15, y: -45, z: 180 },
      scale: 0.3
    }
  },
  {
    id: "atom",
    buttonLabel: "Atom",
    title: "Atom Model",
    subject: "Chemistry",
    gradeRange: "Grades 8-12",
    description:
      "Atoms contain a central nucleus with protons and neutrons, surrounded by electrons in energy levels. This simplified model helps learners see invisible structure in 3D.",
    stats: [
      { value: "Proton", label: "positive charge" },
      { value: "Neutron", label: "neutral charge" },
      { value: "Electron", label: "negative charge" }
    ],
    importedModel: {
      assetId: "atom-glb",
      entityId: "atom-model-asset",
      recenterMode: "center-center"
    },
    defaultTransform: {
      rotation: { x: 0, y: 0, z: 0 },
      scale: 1
    }
  }
];

export const conceptMap = Object.fromEntries(
  concepts.map((concept) => [concept.id, concept])
);
