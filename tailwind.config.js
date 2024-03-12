/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      aria: {
        asc: 'sort="ascending"',
        desc: 'sort="descending"',
      },
    },
  },
  plugins: [],
};
