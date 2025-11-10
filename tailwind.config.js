/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'col-span-1', 'col-span-2', 'col-span-3', 'col-span-4', 'col-span-5', 'col-span-6',
    'col-span-7', 'col-span-8', 'col-span-9', 'col-span-10', 'col-span-11', 'col-span-12',
    'sm:col-span-1', 'sm:col-span-2', 'sm:col-span-3', 'sm:col-span-4', 'sm:col-span-5', 'sm:col-span-6',
    'sm:col-span-7', 'sm:col-span-8', 'sm:col-span-9', 'sm:col-span-10', 'sm:col-span-11', 'sm:col-span-12',
    'md:col-span-1', 'md:col-span-2', 'md:col-span-3', 'md:col-span-4', 'md:col-span-5', 'md:col-span-6',
    'md:col-span-7', 'md:col-span-8', 'md:col-span-9', 'md:col-span-10', 'md:col-span-11', 'md:col-span-12',
    'hidden', 'sm:hidden', 'md:hidden',
  ],
  theme: {
    screens: {
      xs: '0px',
      sm: '768px',
      md: '1366px',
    },
    extend: {
      spacing: {
        'gutter-mobile': '16px',
        'gutter-tablet': '24px',
        'gutter-desktop': '24px',
        'margin-mobile': '16px',
        'margin-tablet': '24px',
        'margin-desktop': '24px',
      },
      maxWidth: {
        'content': '1200px',
      },
      gridTemplateColumns: {
        'mobile': 'repeat(6, minmax(0, 1fr))',
        'tablet': 'repeat(12, minmax(0, 1fr))',
        'desktop': 'repeat(12, minmax(0, 1fr))',
      },
      gap: {
        'gutter-mobile': '16px',
        'gutter-tablet': '24px',
        'gutter-desktop': '24px',
      },
    },
  },
  plugins: [],
}

