import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import TailwindForms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "Pretendard Variable",
        "Pretendard",
        "Pretendard Fallback",
        ...defaultTheme.fontFamily.sans,
      ],
    },
  },
  plugins: [TailwindForms({ strategy: "base" })],
};
export default config;
