module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './index.html', 
    './public/**/*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      display: [
        'Kanit',
        'serif',
      ],
    },
    fontSize: {
      'xs' 	: '0.875rem', 	// 14px
      'sm' 	: '0.875rem', 	// 14px
      'base'	: '1rem', 	// 16px
      'lg'	: '1.25rem', 	// 20px
      'xl'	: '1.75rem', 	// 28px
      '2xl'	: '2.25rem', 	// 36px
      '3xl'	: '3rem', 	// 48px
    },
    fontWeight: {
      normal	: '400',
      semibold	: '500',
      bold	: '600',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
