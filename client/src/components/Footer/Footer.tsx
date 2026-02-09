import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Divider, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import { Iinfo } from '../../types/interface'
import { theme } from '../../App'
import { TextLogo } from '..'

interface Iprops {
  info: Iinfo
}

const Footer = ({ info }: Iprops) => {
  const mobile = useMediaQuery('(max-width: 690px)')

  /** ================= SIZE CONTROL =================
   * Ändra dessa värden för att styra storleken i footern:
   */
  const BRAND_HEIGHT = { xs: 48, md: 56 }            // loggans höjd
  const EU_LOGO_HEIGHT = { xs: 100, md: 150 }  // justera efter smak

  const CONTACT_FONT = { xs: '0.95rem', md: '1.2rem' } // kontakt-text
  const SOCIAL_SIZE = { xs: 24, md: 28 }             // sociala ikonernas storlek
  /** ================================================ */

  // Enkel ikonväljare (mail/telefon)
  const iconForIndex = (i: number) => {
    const base = { fontSize: CONTACT_FONT, mr: 1, color: 'primary.contrastText' as const }
    if (i === 1) return <EmailIcon sx={base} />
  //  if (i === 2) return <LocalPhoneIcon sx={base} />
    return null
  }

  // Hjälper till att göra mejlen klickbar om strängen innehåller "@"
  const renderContactItem = (title: string, i: number) => {
    const isEmail = title?.includes('@')
  //  const isTel = /^\+?[0-9()\s-]{6,}$/.test(title || '')
    const content = (
      <Typography
        variant="body1"
        sx={{ fontSize: CONTACT_FONT, color: 'primary.contrastText', display: 'flex', alignItems: 'center' }}
      >
        {iconForIndex(i)}
        {title}
      </Typography>
    )
    if (isEmail) return <a href={`mailto:${title}`} style={{ textDecoration: 'none' }}>{content}</a>
  //  if (isTel) return <a href={`tel:${title.replace(/\s/g, '')}`} style={{ textDecoration: 'none' }}>{content}</a>
    return content
  }

  return (
    <Box
      id="footer"
      className="flex__center-c"
      sx={{
        width: '100%',
        minHeight: '18rem',
        backgroundColor: theme.palette.primary.main,
        py: 4,
        px: 2,
      }}
    >
      <Box
        sx={{
          width: 'min(100%, 1200px)',
          mx: 'auto',                 // centrerar innehållet horisontellt
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        {/* Översta raden: Brand + kontaktlista */}
        <Box
          className="flex__center-r"
          sx={{
            justifyContent: 'space-between',
            alignItems: mobile ? 'center' : 'flex-start',
            gap: 3,
            flexWrap: 'wrap',
          }}
        >
          {/* LOGGA + NAMN */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
            {/* [STYR LOGGANS STORLEK HÄR] */}
            <Box sx={{ height: BRAND_HEIGHT, '& svg': { height: '100%', width: 'auto' } }}>
              <TextLogo fill="#ffffff" />
            </Box>
          {/* EU-logga */}
  {info?.Footer?.euLogo?.src && (
    <Box
      component={info.Footer.euLogo.href ? 'a' : 'div'}
      href={info.Footer.euLogo.href}
      target={info.Footer.euLogo.href ? '_blank' : undefined}
      rel={info.Footer.euLogo.href ? 'noopener noreferrer' : undefined}
      sx={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
      }}
    >
      <Box
        component="img"
        src={info.Footer.euLogo.src}
        alt={info.Footer.euLogo.alt || 'EU-logo'}
        sx={{
          height: EU_LOGO_HEIGHT,
          width: 'auto',
          objectFit: 'contain',
        }}
      />
    </Box>
  )} 
            
            <Typography
              variant="subtitle1"
              sx={{ color: 'primary.contrastText', fontSize: { xs: '1rem', md: '1.05rem' }, fontWeight: 600 }}
            >
            {/* In med vårt namn här om vi vill/ändrar logga i framtiden */}
            </Typography>
          </Box>

          {/* KONTAKT */}
          <Box
            sx={{
              maxWidth: mobile ? '100%' : '60%',
              width: '100%',
              display: 'grid',
              rowGap: 1,
            }}
          >
            {(info?.Footer?.list || []).map((item, i) => (
              <Box key={`footer_${i}`} sx={{ display: 'flex', alignItems: 'center' }}>
                {renderContactItem(item?.title || '', i)}
              </Box>
            ))}
          </Box>
{/* Social + copyright */}
        <Box
          className="flex__center-r"
          sx={{ justifyContent: 'space-between', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* [STYR SOCIALA IKONERS STORLEK HÄR] */}
            <IconButton
              aria-label="LinkedIn"
              href="https://www.linkedin.com/company/njordfeed-ab"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'primary.contrastText', alignItems: 'center'}}
            >
              <LinkedInIcon sx={{ fontSize: SOCIAL_SIZE }} />
            </IconButton>
            {/* Lägg till fler vid behov: Facebook/Instagram/X */}
            {/* <IconButton sx={{ color: 'primary.contrastText' }}><FacebookIcon sx={{ fontSize: SOCIAL_SIZE }} /></IconButton> */}
          </Box>

          
        </Box>


        </Box>

        <Divider sx={{ borderColor: 'primary.contrastText', opacity: 0.25 }} />

        
      </Box>
    </Box>
  )
}

export default Footer
