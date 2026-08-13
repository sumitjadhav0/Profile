export const projects = [
  {
    id: "ai-trading-analysis",
    number: "01",
    title: "AI Trading Analysis",
    category: "AI / Machine Learning",

    description:
      "AI-powered web application for financial market analysis with machine-learning based Buy, Hold and Sell predictions and real-time market visualization.",

    technologies: [
      "Python",
      "Flask",
      "Pandas",
      "Machine Learning",
      "REST API",
      "Data Visualization",
    ],

    highlights: [
      "Built an AI-powered market analysis application.",
      "Implemented Buy, Hold and Sell prediction logic.",
      "Integrated real-time market data visualization.",
      "Worked on feature engineering and model optimization.",
    ],

    featured: true,
  },

  {
    id: "solar-panel",
    number: "02",
    title: "Solar Panel Cleaning System",
    category: "Embedded Systems",

    description:
      "Arduino-based automated solar panel cleaning system designed to reduce manual maintenance through motor and pump control.",

    technologies: [
      "Arduino Nano",
      "HC-05 Bluetooth",
      "L298N",
      "Submersible Pump",
    ],

    highlights: [
      "Designed an automated cleaning mechanism.",
      "Integrated Arduino Nano with hardware components.",
      "Used Bluetooth communication for control.",
      "Implemented motor and pump control.",
    ],

    featured: false,
  },

  {
    id: "student-management",
    number: "03",
    title: "Student Management System",
    category: "Software Development",

    description:
      "Python-based student management project created to practice programming, structured application logic and data management.",

    technologies: [
      "Python",
      "Programming",
      "Data Management",
    ],

    highlights: [
      "Practiced structured Python development.",
      "Implemented student information management.",
      "Focused on clean application logic.",
    ],

    featured: false,
  },
] as const;