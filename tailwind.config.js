export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent-color)",
        neutral: "var(--neutral-color)",
        "neutral-content": "var(--neutralContent-color)",
        "base-100": "#ffffff",
      },
    },
  },
  plugins: [],
};
