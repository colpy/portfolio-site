export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {

    backgroundImage: {
  "gradient-mesh": "radial-gradient(at 20% 20%, #3b82f6 0px, transparent 50%), radial-gradient(at 80% 0%, #a855f7 0px, transparent 50%), radial-gradient(at 0% 80%, #06b6d4 0px, transparent 50%), radial-gradient(at 80% 80%, #ec4899 0px, transparent 50%)",
  noise: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
},
keyframes: {
  gradientMove: { "0%,100%": { backgroundPosition: "0% 50%" }, "50%": { backgroundPosition: "100% 50%" } },
  marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
},
animation: {
  "gradient-move": "gradientMove 10s ease infinite",
  marquee: "marquee 20s linear infinite",
},
keyframes: {
  kenburns: { "0%": { transform: "scale(1)" }, "100%": { transform: "scale(1.15)" } },
},
animation: {
  kenburns: "kenburns 6s ease-out forwards",
},

    },
  },
  plugins: [],
};