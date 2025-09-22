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

interface Iprops {
  info: Iinfo
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

const Navbar = (props: Iprops) => {
  const { info } = props

  const navigate = useNavigate()
  const mobile = useMediaQuery('(max-width:940px)')

  const [navbarPos, setNavbarPos] = useState(0)
  const [scroll, setScroll] = useState(0)
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  useDisableBodyScroll(openDrawer)

  // 🔧 hjälp: se till att route-länkar alltid har ledande '/'
  const toPath = (link = '') => (link.startsWith('/') ? link : `/${link}`)

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

  // ✅ RÄTT logik i mobil: scrolla endast för "filled" (ankare), navigera för "standard" (rutter)
  const MobileNavigate = (link: string, type?: string) => {
    if (type === 'filled') {
      ScrollToId(link)
    } else {
      navigate(toPath(link))
    }
    toggleDrawer(false)
  }

  if (mobile) {
  return (
    <Box
      component="nav"
      sx={{
        ...style.nav,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',       // ⟵ viktiga: ingen wrap
      }}
    >
      {/* LOGO/VARUMÄRKE */}
      <Box
        sx={{
          ml: '1rem',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          flex: '1 1 auto',       // ⟵ får växa krympa
          minWidth: 0,            // ⟵ tillåt textklipp
          overflow: 'hidden',     // ⟵ klipp om för stort
        }}
      >
        {/* Begränsa maxbredd så den inte pressar ut menyknappen */}
        <Box sx={{ maxWidth: '70vw', whiteSpace: 'nowrap' }}>
          <TextLogo fill={theme.palette.primary.main} navigateOn={true} />
        </Box>
      </Box>

      {/* MENYKNAPP */}
      <Button
        color="inherit"
        onClick={() => toggleDrawer(true)}
        sx={{
          ...(openDrawer && { display: 'none' }),
          mr: '1rem',
          flexShrink: 0,          // ⟵ krymper inte (stannar på samma rad)
          alignSelf: 'center',
        }}
      >
        <MenuIcon />
      </Button>

      {/* DRAWER */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
        sx={{ '.MuiPaper-root': { minWidth: '50%' } }}
      >
        <Box className="flex__center-r" sx={{ justifyContent: 'space-around', width: '100%' }}>
          <Box width="33%" />
          <Typography variant="h3" color="primary" width="33%">
            <Logo height={6} width={6} fill={theme.palette.primary.main} navigateOn={true} />
          </Typography>
          <IconButton sx={{ width: '33%' }} onClick={() => toggleDrawer(false)}>
            <ClearIcon />
          </IconButton>
        </Box>

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
 else {
    return (
      <Box component="nav" className="flex__center-r" sx={{ width: '100%', height: '5rem', zIndex: 3, position: 'fixed' }}>
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
          <Box maxWidth="xl" width={'95%'} height={'100%'} sx={{ justifyContent: 'space-between' }} className="flex__center-r">
            <TextLogo fill={theme.palette.primary.main} navigateOn={true} />

            <Box className="flex__center-r" height="100%" sx={{ gap: '0.8rem' }}>
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
}

export default Navbar
