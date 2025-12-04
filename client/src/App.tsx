import { useState, useEffect, Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/* mui */
import { responsiveFontSizes, createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

/* Self Imports  */
import { Navbar, Footer } from './components/index'
import {
  ThreeInfo,
  Welcomepage,
  SimplePage1,
  SimplePage2,
  FadeHeader,
  PathPage,
  Product,
  Faq,
  Price,
  LearnMore,
} from './containers/index'
import { Iinfo } from './types/interface'
import ScrollToTop from './hooks/ScrollToTop'
import Samarbete from './containers/Samarbete/Samarbete'
import AboutUs from './containers/AboutUs/AboutUs'
import AktuellaProjekt from './containers/AktuellaProjekt/AktuellaProjekt'

/* ===== Tema (oförändrat) ===== */
export let theme = createTheme({
  palette: {
    primary: {
      main: '#9CB42F',
      dark: '#798B24FF',
      light: '#9CB42F78',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#DDA06C',
      light: '#DDA06C',
      dark: '#b54200b',
      contrastText: '#000000',
    },
    info: {
      main: '#ffffff',
      dark: '#e0e0e0',
    },
    text: {
      primary: '#000000',
    },
  },
  typography: {
    h1: {
      fontFamily: '"Josefin Sans", sans-serif',
      textAlign: 'center',
      fontSize: '2.2rem',
      fontWeight: '600',
      '@media (max-width:600px)': {
        fontSize: '2rem !important',
      },
    },
    h2: {
      fontFamily: '"Josefin Sans", sans-serif',
      textAlign: 'center',
      fontSize: '2rem',
      fontWeight: '600',
    },
    h3: {
      fontFamily: '"Josefin Sans", sans-serif',
      textAlign: 'center',
      fontSize: '1.8rem',
      fontWeight: '600',
    },
    h4: {
      fontFamily: '"Josefin Sans", sans-serif',
      textAlign: 'center',
      fontSize: '1.6rem',
      fontWeight: '600',
    },
    h5: {
      fontFamily: '"Josefin Sans", sans-serif',
      textAlign: 'center',
      fontSize: '1.4rem',
      fontWeight: '600',
    },
    h6: {
      fontFamily: '"Josefin Sans", sans-serif',
      textAlign: 'center',
      fontSize: '1.2rem',
      fontWeight: '300',
    },
    subtitle1: {
      textAlign: 'center',
      fontSize: '1rem',
      fontWeight: '300',
    },
    subtitle2: {
      textAlign: 'center',
      fontSize: '0.8rem',
      fontWeight: '300',
    },
    button: {
      textAlign: 'center',
      fontWeight: '600',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'p',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        sx: {
          fontSize: '1.2vmin',
          '@media (max-width:600px)': {
            fontSize: '1.2vmax',
          },
          fontWeight: '600',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#d7a33c',
            },
          },
        },
      },
      defaultProps: {
        sx: {
          input: { color: 'text.secondary' },
          label: { color: 'text.secondary' },
          fieldset: { borderColor: 'text.secondary' },
        },
      },
    },
    MuiMobileStepper: {
      defaultProps: {
        sx: {
          '& .MuiMobileStepper-progress': {
            color: 'text.secondary !important',
          },
        },
      },
    },
    MuiStepLabel: {
      defaultProps: {
        sx: {
          '& .MuiStepLabel-label.Mui-active': { color: 'secondary.dark' },
          '& .MuiStepLabel-label.Mui-completed': { color: 'secondary.main' },
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        sx: {},
      },
    },
    MuiPagination: {
      defaultProps: {
        sx: {
          '& .MuiButtonBase-root': {
            borderRadius: '50%',
            fontSize: '1vmax',
            width: '2.5vmax',
            minHeight: '2.5vmax',
          },
          '& .MuiSvgIcon-root': {
            width: '2.5vmax',
            height: '2.5vmax',
          },
        },
      },
    },
    MuiBottomNavigation: {
      defaultProps: {
        sx: {
          '& .Mui-selected': { color: 'red' },
        },
      },
    },
  },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1836 },
  },
})
theme = responsiveFontSizes(theme)

/* ===== Nytt: språkhantering ===== */
export type Lang = 'sv' | 'en'

const App = () => {
  const defaultTheme = theme

  // Språk-state (läs från localStorage vid start)
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem('lang') as Lang) || 'sv')

  // Ladda rätt info-fil
  const [info, setInfo] = useState<Iinfo>({} as Iinfo)

  // Sätt <html lang="..."> för tillgänglighet/SEO
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  // Hämta /info/info.{lang}.json
  useEffect(() => {
    const load = async () => {
      const path = `/info/info.${lang}.json`
      try {
        const res = await fetch(path)
        if (!res.ok) throw new Error(String(res.status))
        const data = await res.json()
        setInfo(data)
      } catch {
        // Fallback: prova svenska om engelsk fil saknas
        if (lang !== 'sv') {
          try {
            const res = await fetch('/info/info.sv.json')
            const data = await res.json()
            setInfo(data)
          } catch {
            setInfo({} as Iinfo)
          }
        } else {
          setInfo({} as Iinfo)
        }
      }
    }
    load()
  }, [lang])

  const handleLangChange = (next: Lang) => {
    setLang(next)
    localStorage.setItem('lang', next)
  }

  return (
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        {/* Skicka ner språk + handler till Navbar */}
        <Navbar info={info} lang={lang} onLangChange={handleLangChange} />
        <ScrollToTop />
        <Routes>
          <Route
            path=""
            index
            element={
              <Fragment>
                <Welcomepage info={info} />
                <ThreeInfo info={info} />
                <SimplePage1 info={info} />
                <SimplePage2 info={info} />
                <PathPage info={info} />
                <FadeHeader info={info} />
              </Fragment>
            }
          />
          <Route path="/product" element={<Product info={info} />} />
          <Route path="/faq" element={<Faq info={info} />} />
          <Route path="/price" element={<Price info={info} />} />
          <Route path="/learnmore" element={<LearnMore info={info} />} />
          <Route path="/samarbete" element={<Samarbete info={info} />} />
          <Route path="/about" element={<AboutUs info={info} />} />
          <Route path="/aktuella-projekt" element={<AktuellaProjekt info={info} />} />
        </Routes>
        <Footer info={info} />
      </ThemeProvider>
    </Router>
  )
}

export default App
