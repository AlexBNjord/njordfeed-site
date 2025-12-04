import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import ListItem from '@mui/material/ListItem'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'

import ClearIcon from '@mui/icons-material/Clear'
import MenuIcon from '@mui/icons-material/Menu'

import { colors } from '../../colors/colors'
import { Iinfo } from '../../types/interface'
import { theme } from '../../App'
import { TextLogo, Logo } from '../../components/index'
import { useDisableBodyScroll } from '../../hooks/useDisableBodyScroll'
import { ScrollToId } from '../../Functions/ScrollToId'

type Lang = 'sv' | 'en'

interface Iprops {
  info: Iinfo
  lang: Lang
  onLangChange?: (lang: Lang) => void
}

const style = {
  nav: {
    width: '100%',
    height: '5rem',
    backgroundColor: '#ffffffff',
    zIndex: 2,
    position: 'fixed' as const,
    transform: 'translateY(0%)',
    transition: 'transform 0.5s ease-in-out',
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
  },
  navigationBox: {
    m: '0 0.5rem',
    cursor: 'pointer',
    position: ' relative' as const,
    display: 'block',
    padding: ' 4px 0',
    fontFamily: ' Lato, sans-serif',
    color: ' #242424',
    textDecoration: 'none',
    transition: ' 0.5s',
    ':after': {
      position: ' absolute' as const,
      content: "''",
      top: '100%',
      left: '0',
      width: '100%',
      height: '3px',
      backgroundColor: ' #3498db',
      transform: 'scaleX(0)',
      transformOrigin: 'right',
      transition: ' transform 0.5s',
    },
    ':hover': {
      color: '#95a5a6',
    },
    ':hover::after': {
      transform: 'scaleX(1)',
      transformOrigin: 'left',
    },
  },
  navigationDropDownBox: {
    height: '100%',
    m: '0 0.5rem',
    padding: ' 4px 0',
    fontFamily: ' Lato, sans-serif',
    color: '#242424',
    ':hover': {
      color: '#f78f60',
    },
    'div #divider1': {
      transition: 'width 0.6s linear',
    },
    ':hover div #divider1': {
      width: '90%',
    },
  },
  boxDropDown: {
    position: 'absolute' as const,
    top: '100%',
    width: 'fit-content',
    opacity: 0,
    pointerEvents: 'none' as const,
    left: 0,
    transition: 'all 0.2s linear',
    borderBottomRightRadius: '2%',
    borderBottomLeftRadius: '2%',
  },
  navigationDropDown: {
    m: '0 0.5rem',
    cursor: 'pointer',
    position: ' relative' as const,
    display: 'block',
    padding: ' 4px 0',
    fontFamily: ' Lato, sans-serif',
    color: ' #242424',
    textDecoration: 'none',
    transition: ' 0.5s',
    ':after': {
      position: ' absolute' as const,
      content: "''",
      top: '100%',
      left: '0',
      width: '100%',
      height: '3px',
      backgroundColor: ' #3498db',
      transform: 'scaleX(0)',
      transformOrigin: 'right',
      transition: ' transform 0.5s',
    },
    ':hover': {
      color: '#95a5a6',
    },
    ':hover::after': {
      transform: 'scaleX(1)',
      transformOrigin: 'left',
    },
    ':hover div': {
      pointerEvents: 'auto',
      opacity: 1,
      backgroundColor: '#ffffffff',
    },
    ':hover button': {
      transform: 'translateX(0)',
    },
  },
}

const Navbar = ({ info, lang, onLangChange }: Iprops) => {
  const navigate = useNavigate()
  const mobile = useMediaQuery('(max-width:940px)')

  const [navbarPos, setNavbarPos] = useState(0)
  const [scroll, setScroll] = useState(0)
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  useDisableBodyScroll(openDrawer)

  // se till att route-länkar alltid har ledande '/'
  const toPath = (link = '') => (link.startsWith('/') ? link : `/${link}`)

  const handleLangClick = (l: Lang) => {
    if (l !== lang) onLangChange?.(l)
  }

  useEffect(() => {
    const onScroll = (e: any) => {
      const pos = e.target.defaultView.pageYOffset
      if (scroll < pos) {
        // down
        setNavbarPos(-150)
        style['nav']['transform'] = 'translateY(-100%)'
      } else {
        // up
        setNavbarPos(0)
        style['nav']['transform'] = 'translateY(0)'
      }
      setScroll(pos)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [scroll])

  const toggleDrawer = (open: boolean) => setOpenDrawer(open)

  // mobil: scrolla endast för "filled" (ankare), navigera för "standard" (rutter)
  const MobileNavigate = (link: string, type?: string) => {
    if (type === 'filled') {
      ScrollToId(link)
    } else {
      navigate(toPath(link))
    }
    toggleDrawer(false)
  }

  /* ===== MOBIL-VY ===== */
  if (mobile) {
    return (
      <Box
        component="nav"
        sx={{
          ...style.nav,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
        }}
      >
        {/* LOGO / BRAND */}
        <Box
          sx={{
            ml: '0.75rem',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            flex: '1 1 auto',
            minWidth: 0,
            overflow: 'hidden',
          }}
        >
          <Box sx={{ maxWidth: '55vw', whiteSpace: 'nowrap' }}>
            <TextLogo fill={theme.palette.primary.main} navigateOn={true} />
          </Box>
        </Box>

        {/* SPRÅKKNAPPAR (mobil, i navbaren) */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            mr: 0.5,
          }}
        >
          {/* justera storlek här om du vill */}
          <Button
            size="small"
            variant={lang === 'sv' ? 'contained' : 'text'}
            color="primary"
            onClick={() => handleLangClick('sv')}
            sx={{ minWidth: 'auto', px: 1, py: 0.25, fontSize: '0.7rem' }}
          >
            SV
          </Button>
          <Button
            size="small"
            variant={lang === 'en' ? 'contained' : 'text'}
            color="primary"
            onClick={() => handleLangClick('en')}
            sx={{ minWidth: 'auto', px: 1, py: 0.25, fontSize: '0.7rem' }}
          >
            EN
          </Button>
        </Box>

        {/* MENYKNAPP */}
        <Button
          color="inherit"
          onClick={() => toggleDrawer(true)}
          sx={{
            ...(openDrawer && { display: 'none' }),
            mr: '0.5rem',
            flexShrink: 0,
            alignSelf: 'center',
          }}
        >
          <MenuIcon />
        </Button>

        {/* DRAWER / SIDOMENY */}
        <Drawer
          anchor="right"
          open={openDrawer}
          onClose={() => toggleDrawer(false)}
          sx={{ '.MuiPaper-root': { minWidth: '60%' } }}
        >
          {/* Drawer-header med logga + stängknapp */}
          <Box className="flex__center-r" sx={{ justifyContent: 'space-around', width: '100%', mt: 1 }}>
            <Box width="25%" />
            <Typography variant="h3" color="primary" width="50%" sx={{ textAlign: 'center' }}>
              <Logo height={6} width={6} fill={theme.palette.primary.main} navigateOn={true} />
            </Typography>
            <IconButton sx={{ width: '25%' }} onClick={() => toggleDrawer(false)}>
              <ClearIcon />
            </IconButton>
          </Box>

          {/* Språkknappar även inne i menyn */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 1,
              my: 2,
            }}
          >
            <Button
              size="small"
              variant={lang === 'sv' ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleLangClick('sv')}
              sx={{ minWidth: 'auto', px: 1.5, py: 0.5, fontSize: '0.75rem' }}
            >
              Svenska
            </Button>
            <Button
              size="small"
              variant={lang === 'en' ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleLangClick('en')}
              sx={{ minWidth: 'auto', px: 1.5, py: 0.5, fontSize: '0.75rem' }}
            >
              English
            </Button>
          </Box>

          {/* Nav-länkar */}
          <Box>
            {(info?.Navbar?.Navigation || [])?.map((item, i) => (
              <ListItem
                key={`navbarlistitem${item?.title}${i}`}
                disablePadding
                sx={{
                  '& :hover': { color: 'secondary.main' },
                  borderRight: `5px solid ${theme.palette.primary.main}`,
                }}
              >
                <ListItemButton onClick={() => MobileNavigate(item?.link, item?.type)}>
                  <ListItemText primary={item?.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </Box>
        </Drawer>
      </Box>
    )
  }

  /* ===== DESKTOP-VY ===== */
  return (
    <Box
      component="nav"
      className="flex__center-r"
      sx={{ width: '100%', height: '5rem', zIndex: 3, position: 'fixed' }}
    >
      <Box
        maxWidth="xl"
        className="flex__center-r"
        sx={{
          width: '95%',
          backgroundColor: colors?.bgWhiteTrans,
          transform: `translateY(${navbarPos}%)`,
          transition: 'transform 0.5s ease-in-out',
          border: '1px solid #68686877',
          borderRadius: '1rem',
          mt: '0.5rem',
          p: '0.2rem',
        }}
      >
        <Box
          maxWidth="xl"
          width="95%"
          height="100%"
          sx={{ justifyContent: 'space-between' }}
          className="flex__center-r"
        >
          <TextLogo fill={theme.palette.primary.main} navigateOn={true} />

          <Box className="flex__center-r" height="100%" sx={{ gap: '0.8rem' }}>
            {/* Språkväxling desktop – ändra styling här om du vill */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mr: 1 }}>
              <Button
                size="small"
                variant={lang === 'sv' ? 'contained' : 'text'}
                color="primary"
                onClick={() => handleLangClick('sv')}
                sx={{ minWidth: 'auto', px: 1, py: 0.25, fontSize: '0.75rem' }}
              >
                SV
              </Button>
              <Button
                size="small"
                variant={lang === 'en' ? 'contained' : 'text'}
                color="primary"
                onClick={() => handleLangClick('en')}
                sx={{ minWidth: 'auto', px: 1, py: 0.25, fontSize: '0.75rem' }}
              >
                EN
              </Button>
            </Box>

            {(info?.Navbar?.Navigation || [])?.map((item, i) => {
              if (item?.type === 'standard') {
                return (
                  <Box
                    key={`navbarlistitemdesktop${item?.title}${i}`}
                    sx={{
                      m: '0 0.5rem',
                      cursor: 'pointer',
                      position: ' relative',
                      display: 'block',
                      padding: ' 4px 0',
                      textDecoration: 'none',
                    }}
                    onClick={() => navigate(toPath(item?.link))}
                  >
                    <Typography variant="h6" className="hover-text">
                      {item?.title}
                    </Typography>
                  </Box>
                )
              } else if (item?.type === 'filled') {
                return (
                  <Button
                    variant="contained"
                    key={`navbarlistitemdesktop${item?.title}${i}`}
                    sx={{ borderRadius: '1rem' }}
                    onClick={() => ScrollToId(item?.link)}
                  >
                    <Typography variant="subtitle1">{item?.title}</Typography>
                  </Button>
                )
              }
              return null
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
