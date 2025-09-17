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

const Faq = ({ info }: Iprops) => {
  const theme = useTheme()
  const mobile = useMediaQuery('(max-width:690px)')

  const faqs = info?.Faq?.list0 ?? []

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '60vh',
        width: '100%',
        py: { xs: 6, md: 10 },
        px: 2,
        // Vit -> grön "primary.light" gradient
        background: (t) => `
          linear-gradient(
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
        sx={{
          width: 'min(100%, 980px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        {/* Titel */}
        <Typography variant="h2" sx={{ textAlign: 'center', pt: 2, mb: 1, color: 'text.primary' }}>
          {info?.Faq?.title0}
        </Typography>

        {/* FAQ-lista som kort */}
        <List disablePadding sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {faqs.map((item, index) => (
            <Box
              key={`faq_${index}`}
              sx={{
                bgcolor: 'background.paper',           // vita kort
                border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
                borderRadius: '16px',
                boxShadow: '0 10px 24px rgba(0,0,0,.06)',
                p: { xs: 2, md: 3 },
              }}
            >
              <ListItem
                disableGutters
                sx={{
                  alignItems: 'flex-start',
                  gap: 1,
                  pb: 1,
                }}
              >
                <ListItemIcon sx={{ minWidth: 28, pt: '4px' }}>
                  <FiberManualRecord fontSize="small" sx={{ color: 'primary.main' }} />
                </ListItemIcon>

                <Typography variant="h5" sx={{ textAlign: 'left', color: 'text.primary' }}>
                  {item?.q}
                </Typography>
              </ListItem>

              {item?.a && (
                <Typography
                  variant="subtitle1"
                  sx={{ textAlign: 'left', color: 'text.primary', ml: { xs: '28px', md: '28px' } }}
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

export default Faq
