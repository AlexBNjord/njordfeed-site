import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import FiberManualRecord from '@mui/icons-material/FiberManualRecord'
import { alpha, useTheme } from '@mui/material/styles'

import { Iinfo } from '../../types/interface'

interface Iprops {
  info: Iinfo
}

const LearnMore = ({ info }: Iprops) => {
  const theme = useTheme()
  const mobile = useMediaQuery('(max-width:690px)')
  const items = info?.LearnMore?.list0 ?? []

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        py: { xs: 6, md: 10 },
        px: 2,
        // Vit -> primary.light gradient
        background: (t) => `
          linear-gradient(
            180deg,
            ${t.palette.common.white} 0%,
        ${t.palette.common.white} 10%,
        ${alpha(t.palette.primary.main, 0.16)} 28%,  /* ~#...29 */
        ${alpha(t.palette.primary.main, 0.25)} 50%,  /* ~#...40 */
        ${t.palette.primary.light} 85%
          )
        `,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        maxWidth="xl"
        width="80%"
        minHeight={mobile ? '30vh' : '50vh'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: mobile ? 2.5 : 3.5,
          mx: 'auto',
          mt: '5rem',
        }}
      >
        {/* Titel */}
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 1, color: 'text.primary' }}>
          {info?.LearnMore?.title0}
        </Typography>

        {/* Kortlista */}
        <List disablePadding sx={{ display: 'flex', flexDirection: 'column', gap: mobile ? 2 : 2.5 }}>
          {items.map((item, index) => (
            <Box
              key={`lm_${index}`}
              sx={{
                bgcolor: 'background.paper', // vitt kort
                border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
                borderRadius: '16px',
                boxShadow: '0 10px 24px rgba(0,0,0,.06)',
                p: mobile ? '1.5rem' : '2rem',
              }}
            >
              <ListItem disableGutters sx={{ alignItems: 'flex-start', gap: 1, pb: item?.a ? 1 : 0 }}>
                <ListItemIcon sx={{ minWidth: 28, pt: '4px' }}>
                  <FiberManualRecord fontSize="small" sx={{ color: 'primary.main' }} />
                </ListItemIcon>
                <Typography variant="h6" sx={{ textAlign: 'left', color: 'text.primary' }}>
                  {item?.q}
                </Typography>
              </ListItem>

              {!!item?.a && (
                <Typography
                  variant="subtitle1"
                  sx={{ textAlign: 'left', color: 'text.primary', ml: '28px' }}
                >
                  {item?.a}
                </Typography>
              )}
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  )
}

export default LearnMore
