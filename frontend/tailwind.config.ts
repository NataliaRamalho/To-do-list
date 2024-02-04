import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   extend:{
    colors:{
      'thema-blue-600': '#005A9C',
      'thema-red-600': '#BB0000'
    }
   }
  },
  plugins: [],
};
export default config;
