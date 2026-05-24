import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0e0a",
        panel: "#101510",
        ink: "#e8efe2",
        muted: "#8aa085",
        accent: "#7dd35f",
        accent2: "#c9a96e",
        border: "#1f2a1d"
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Inter", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;
