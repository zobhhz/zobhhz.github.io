import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'coral': '#ff7f50',
        'whitesmoke': '#f5f5f5',
        'smokeyblack': '#0f0a0a'
      },
    },
  },
  plugins: [],
} satisfies Config;
