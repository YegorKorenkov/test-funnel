import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    screens: {
      xxs: '380px',
      xs: '500px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1792px'
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'light-text': 'var(--light-text)',
        'dark-text': 'var(--dark-text)',
        'light-blue': 'var(--light-blue)',
        purple: 'var(--purple)',
        destructive: 'hsl(var(--destructive))',
        grey: {
          main: '#E0E0E0'
        }
      },
      backgroundImage: {
        'main-gradient': 'var(--main-gradient)'
      }
    }
  },
  plugins: []
} satisfies Config
