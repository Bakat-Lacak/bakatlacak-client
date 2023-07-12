// theme.js
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        transparent: 'transparent',
        black: '#001c30',
        navy: '#176b87',
        teal: '#64ccc5',
        mint: '#dafffb',
        white: '#ffffff'
      },
    fonts: {
        heading: `'raleway', sans-serif`,
        body: `'lato', sans-serif`
    },
},

)

export default theme