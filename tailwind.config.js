/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#18181b",
				secondary: "#27272a",
				accent: "#427eff",
				neutral: "#9ec3ff",
				bg: "#f4f4f5",
			},
		},
	},
	plugins: [],
};
