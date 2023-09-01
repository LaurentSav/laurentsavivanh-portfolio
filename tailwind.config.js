/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
		themes: [
      "light", 
      {
        night:{
          ...require("daisyui/src/theming/themes")["[data-theme=night]"],
          "base-content": "white"
        }
      
      
      }],
    darkTheme: "night"
	}
}

