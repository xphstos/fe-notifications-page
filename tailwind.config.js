import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,svelte}'],
  theme: {
    colors: {
      red: 'hsl(1, 90%, 64%)',
      white: 'hsl(0, 0%, 100%)',
      blue: 'hsl(219, 85%, 26%)',
      neutral: {
        100: 'hsl(210, 60%, 98%)',
        200: 'hsl(211, 68%, 94%)',
        300: 'hsl(205, 33%, 90%)',
        400: 'hsl(219, 14%, 63%)',
        500: 'hsl(219, 12%, 42%)',
        600: 'hsl(224, 21%, 14%)'
      }
    },
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif']
      }
    }
  },
  plugins: [
    plugin(({ addVariant }) =>
      addVariant('aria-current', [
        '&:where([aria-current="page"])',
        '&:where([aria-current="step"])',
        '&:where([aria-current="location"])',
        '&:where([aria-current="date"])',
        '&:where([aria-current="time"])',
        '&:where([aria-current="true"])'
      ])
    ),
    plugin(({ addVariant }) => {
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('hocus-visible', ['&:hover', '&:focus-visible']);
    }),
    plugin(({ matchVariant }) => {
      matchVariant('nth-range', (value) => {
        const range = value.split('/');
        return `&>:where(:nth-child(n+${range[0]}):nth-child(-n+${range[1]}))`;
      });
    }),
    plugin(({ matchVariant }) => {
      matchVariant(
        'nth',
        (value) => {
          return `& :where(:nth-child(${value}))`;
        },
        {
          values: {
            odd: 'odd',
            even: 'even'
          }
        }
      );
    })
  ]
};
