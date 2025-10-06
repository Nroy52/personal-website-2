/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        background:"hsl(var(--bg-dark))",
        foreground:"hsl(var(--text))",
        gold:"hsl(var(--gold))",
        "gold-dark":"hsl(var(--gold-dark))",
        stroke:"hsl(var(--stroke))",
      },
      keyframes:{
        "fade-in":{ "0%":{opacity:"0",transform:"translateY(6px)"},
                    "100%":{opacity:"1",transform:"translateY(0)"} }
      },
      animation:{ "fade-in":"fade-in 600ms ease-out both" },
    },
  },
  plugins: [],
};
