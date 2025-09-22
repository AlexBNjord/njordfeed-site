import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import Typography from '@mui/material/Typography'

import { Iinfo } from '../../types/interface'
import { theme } from '../../App'

interface Iprops {
  info: Iinfo
}

const SimplePage2 = (props: Iprops) => {
  const { info } = props
  const mobile = useMediaQuery('(max-width:690px)')

  return (
    <Box
      id="simplepath2"
      component="section"
      className="flex__center-c"
      sx={{
        position: 'relative',
        minHeight: '40vh',
        width: '100%',
        flexWrap: 'wrap',
        backgroundColor: theme.palette.primary.light,
        pb: '10rem',
      }}
    >
      <Box
        maxWidth="xl"
        width="80%"
        sx={{
          mx: 'auto',                    // centrerar hela raden globalt
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: { xs: 2, md: 4 },         // använd gap i stället för space-around
          flexWrap: { xs: 'wrap', md: 'nowrap' }, // ingen wrap på desktop
          m: mobile ? '1rem' : '5rem',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {/* Vänster kolumn: rubrik */}
        <Box
          className="flex__center-c"
          sx={{
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: { xs: '100%', md: '48%' },  // viktigt: width/flex-basis, inte maxWidth
            flex: { xs: '1 1 100%', md: '0 0 48%' },
          }}
        >
          <Typography variant="h2" color="primary.contrastText" sx={{ textAlign: 'left' }}>
            {info?.SimplePage2?.title}
          </Typography>
        </Box>

        {/* Höger kolumn: brödtext */}
        <Box
          className="flex__center-c"
          sx={{
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: { xs: '100%', md: '48%' },  // samma här
            flex: { xs: '1 1 100%', md: '0 0 48%' },
          }}
        >
          <Typography variant="subtitle1" color="primary.contrastText" sx={{ textAlign: 'left' }}>
            {info?.SimplePage2?.subtitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default SimplePage2
