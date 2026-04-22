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
        'coral': {
          50: '#fff4ed',
          100: '#ffe5d4',
          200: '#ffc7a8',
          300: '#ffa071',
          400: '#ff7f50',
          500: '#fe4711',
          600: '#ef2d07',
          700: '#c61c08',
          800: '#9d190f',
          900: '#7e1810',
          950: '#440806',
        },
        'whitesmoke': '#f5f5f5',
        'smokeyblack': '#0f0a0a'
      },
    },
  },
  plugins: [],
} satisfies Config;
