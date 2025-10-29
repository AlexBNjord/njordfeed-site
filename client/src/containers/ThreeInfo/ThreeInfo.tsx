import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import Typography from '@mui/material/Typography'
import InsightsIcon from '@mui/icons-material/Insights'
import LayersIcon from '@mui/icons-material/Layers'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import { alpha, useTheme } from '@mui/material/styles'

import { Logo } from '../../components/index'
import { Iinfo } from '../../types/interface'

interface Iprops {
  info: Iinfo
}

// Blanda valfri färg med vitt (weight = andel av färgen, t.ex. 0.16 = 16 %)
const mixWithWhite = (hex: string, weight = 0.16) => {
  const clean = hex.replace('#', '')
  const r = parseInt(clean.slice(0, 2), 16)
  const g = parseInt(clean.slice(2, 4), 16)
  const b = parseInt(clean.slice(4, 6), 16)
  const w = 255
  const m = (c: number) => Math.round(w * (1 - weight) + c * weight)
  const toHex = (n: number) => n.toString(16).padStart(2, '0').toUpperCase()
  return `#${toHex(m(r))}${toHex(m(g))}${toHex(m(b))}`
}

const ThreeInfo = ({ info }: Iprops) => {
  const theme = useTheme()
  const mobile = useMediaQuery('(max-width:690px)')

  // Lite mer grön än tidigare (~16% → ungefär #EFF3DE för #9CB42F)
  const starterGreenSolid = mixWithWhite(theme.palette.primary.main, 0.16)

  const iconSelect = (i: number) => {
    const sx = { height: '5rem', width: '5rem', mb: '1rem', color: 'primary.dark' as const }
    switch (i) {
      case 0: return <InsightsIcon sx={sx} />
      case 1: return <AgricultureIcon sx={sx} />
      case 2: return <LayersIcon sx={sx} />
      default: return <Box sx={{ display: 'none' }} />
    }
  }

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '60vh',
        width: '100%',
        pt: { xs: '40px', md: '100px' },   
        pb: { xs: 0.5, md: '2px' },   
        px: 2,
        backgroundColor: starterGreenSolid,   // ✅ solid, ingen transparens
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box maxWidth="xl" width="80%" sx={{ display: 'flex', flexDirection: 'column', mx: 'auto', gap: 3 }}>
        <Typography variant="h1" sx={{ textAlign: 'center', mb: 1, color: 'text.primary' }}>
          {info?.ThreeInfo?.title}
        </Typography>

        {/* Kort – 3 bredvid (1 på mobil) */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: 2, md: 3 },
            alignItems: 'stretch',
          }}
        >
          {(info?.ThreeInfo?.boxInfo || []).map((item, i) => (
            <Box
              key={`threeinfo_${item?.title}_${i}`}
              className="flex__center-c"
              sx={{
                bgcolor: 'background.paper',
                borderRadius: '16px',
                border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
                boxShadow: '0 10px 24px rgba(0,0,0,.06)',
                p: { xs: '1.5rem', md: '2rem' },
                textAlign: 'center',
                transition: 'transform .18s ease, box-shadow .18s ease',
                willChange: 'transform',
                '&:hover': {
                  transform: 'translateY(-2px) scale(1.02)', // gupp
                  boxShadow: '0 16px 36px rgba(0,0,0,.12)',
                },
              }}
            >
              {iconSelect(i)}
              <Typography variant="h3" sx={{ mb: 1, color: 'text.primary' }}>
                {item?.title}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'text.primary' }}>
                {item?.subtitle}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Delare med logga – centrerad */}
        <Box
            sx={{
                width: 'min(100%, 900px)',
                mx: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                mt: 4,
            }}
            >
                <Box sx={{ flex: 1, height: '2px', backgroundColor: alpha(theme.palette.primary.main, 0.35) }} />
                <Logo height={5} fill={alpha(theme.palette.primary.main, 0.7)} />
                <Box sx={{ flex: 1, height: '2px', backgroundColor: alpha(theme.palette.primary.main, 0.35) }} />
            </Box>
      </Box>
    </Box>
  )
}

export default ThreeInfo
