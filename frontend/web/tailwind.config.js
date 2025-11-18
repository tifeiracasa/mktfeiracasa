/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        geist: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeSlideIn: {
          'from': {
            opacity: '0',
            filter: 'blur(4px)',
            transform: 'translateY(8px)'
          },
          'to': {
            opacity: '1',
            filter: 'blur(0px)',
            transform: 'translateY(0px)'
          }
        },
        slideRightIn: {
          'from': {
            opacity: '0',
            filter: 'blur(4px)',
            transform: 'translateX(-8px)'
          },
          'to': {
            opacity: '1',
            filter: 'blur(0px)',
            transform: 'translateX(0px)'
          }
        },
        testimonialIn: {
          'from': {
            opacity: '0',
            filter: 'blur(4px)',
            transform: 'translateY(8px) scale(0.95)'
          },
          'to': {
            opacity: '1',
            filter: 'blur(0px)',
            transform: 'translateY(0px) scale(1)'
          }
        }
      },
      animation: {
        'element': 'fadeSlideIn 0.6s ease-out forwards',
        'slide-right': 'slideRightIn 0.8s ease-out forwards',
        'testimonial': 'testimonialIn 0.7s ease-out forwards'
      }
    },
  },
  plugins: [],
}