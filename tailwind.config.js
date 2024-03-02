export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        neutral: "var(--neutral)",
        "neutral-content": "var(--neutralContent)",
        "base-100": "var(--base100)",
      },
    },
  },
  plugins: [],
};
