export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {

     keyframes: {
  fadeIn: { "0%": { opacity: 0, transform: "translateY(20px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
  blob: { "0%, 100%": { transform: "translate(0,0) scale(1)" }, "50%": { transform: "translate(40px,-30px) scale(1.1)" } },
},

      animation: {
  "fade-in": "fadeIn 1s ease-out forwards",
  "fade-in-delay": "fadeIn 1s ease-out 0.3s forwards",
  blob: "blob 12s ease-in-out infinite",
  "blob-slow": "blob 18s ease-in-out infinite",
  "blob-delay": "blob 15s ease-in-out infinite 2s",
},
    },
  },
  plugins: [],
};