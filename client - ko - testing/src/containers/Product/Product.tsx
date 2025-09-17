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

const Product = ({ info }: Iprops) => {
  const theme = useTheme()
  const mobile = useMediaQuery('(max-width:690px)')

  const Card: React.FC<{ children: React.ReactNode; sx?: any }> = ({ children, sx }) => (
    <Box
      sx={{
        bgcolor: 'background.paper',
        borderRadius: '16px',
        border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
        boxShadow: '0 10px 24px rgba(0,0,0,.06)',
        p: mobile ? '1.5rem' : '2rem',
        ...sx,
      }}
    >
      {children}
    </Box>
  )

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '50vh',
        width: '100%',
        py: { xs: 6, md: 10 },
        px: 2,
        // Vit -> primary.light
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
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: mobile ? 3 : 4, // avstånd mellan korten
          mt: '5rem',
        }}
      >
        {/* Card 1 */}
        <Card>
          <Typography
            variant="h2"
            sx={{ textAlign: 'left', pt: 2, mb: '1rem', color: 'text.primary' }} // centered + pt:2
          >
            {info?.Product?.title0}
          </Typography>

          <Typography variant="h4" sx={{ textAlign: 'left', mb: '1rem', color: 'text.primary' }}>
            {info?.Product?.subtitle0}
          </Typography>

          <List>
            {(info?.Product?.list0 || []).map((item, index) => (
              <ListItem key={`p0_${index}`} sx={{ alignItems: 'flex-start' }}>
                <ListItemIcon sx={{ minWidth: 28, pt: '4px' }}>
                  <FiberManualRecord fontSize="small" sx={{ color: 'primary.main' }} />
                </ListItemIcon>
                <Typography variant="subtitle1" sx={{ color: 'text.primary' }}>
                  {item}
                </Typography>
              </ListItem>
            ))}
          </List>

          {info?.Product?.info0 && (
            <Typography variant="h6" sx={{ textAlign: 'left', mb: '0.5rem', color: 'text.primary' }}>
              {info?.Product?.info0}
            </Typography>
          )}
          {info?.Product?.subinfo0 && (
            <Typography variant="subtitle2" sx={{ textAlign: 'left', color: 'text.primary' }}>
              {info?.Product?.subinfo0}
            </Typography>
          )}
        </Card>

        {/* Card 2 */}
        <Card>
          <Typography variant="h2" sx={{ textAlign: 'left', mb: '1rem', color: 'text.primary' }}>
            {info?.Product?.title1}
          </Typography>

          <Typography variant="h4" sx={{ textAlign: 'left', mb: '1rem', color: 'text.primary' }}>
            {info?.Product?.subtitle1}
          </Typography>

          <List>
            {(info?.Product?.list1 || []).map((item, index) => (
              <ListItem key={`p1_${index}`} sx={{ alignItems: 'flex-start' }}>
                <ListItemIcon sx={{ minWidth: 28, pt: '4px' }}>
                  <FiberManualRecord fontSize="small" sx={{ color: 'primary.main' }} />
                </ListItemIcon>
                <Typography variant="subtitle1" sx={{ color: 'text.primary' }}>
                  {item}
                </Typography>
              </ListItem>
            ))}
          </List>

          {info?.Product?.info1 && (
            <Typography variant="h6" sx={{ textAlign: 'left', color: 'text.primary' }}>
              {info?.Product?.info1}
            </Typography>
          )}
        </Card>

        {/* Card 3 */}
        <Card>
          <Typography variant="h2" sx={{ textAlign: 'left', mb: '1rem', color: 'text.primary' }}>
            {info?.Product?.title2}
          </Typography>
          {info?.Product?.info2 && (
            <Typography variant="h6" sx={{ textAlign: 'left', color: 'text.primary' }}>
              {info?.Product?.info2}
            </Typography>
          )}
        </Card>

        {/* Card 4 */}
        <Card>
          <Typography variant="h2" sx={{ textAlign: 'left', mb: '1rem', color: 'text.primary' }}>
            {info?.Product?.title3}
          </Typography>
          {info?.Product?.info3 && (
            <Typography variant="h6" sx={{ textAlign: 'left', color: 'text.primary' }}>
              {info?.Product?.info3}
            </Typography>
          )}
        </Card>
      </Box>
    </Box>
  )
}

export default Product
