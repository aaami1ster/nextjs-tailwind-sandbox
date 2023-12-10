import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'mw576': '576px', // sm
        // => @media (min-width: 576px) { ... }

        'mw992': '992px', // lg
        // => @media (min-width: 992px) { ... }


        'mw1200': '1200px', // xl
        // => @media (min-width: 1200px) { ... }

        'mw1400': '1400px', // 2xl
        // => @media (min-width: 1400px) { ... }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#71639e',
        'primary-hover': '#605486',
        'secondary': 'rgba(255, 255, 255, 0.9)',
        'black-rgba': 'rgba(0, 0, 0, 0.08)',
      }
    }
  },
  plugins: [],
}
export default config
