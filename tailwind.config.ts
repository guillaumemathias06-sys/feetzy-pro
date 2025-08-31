import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: { colors: { primary:"#0077B6", accent:"#FF7B54", ink:"#0F172A" }, borderRadius:{ "2xl":"1rem" } }
  }, plugins:[]
};
export default config;
