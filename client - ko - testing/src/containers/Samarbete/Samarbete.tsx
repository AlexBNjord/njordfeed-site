import React from 'react'

import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { alpha, useTheme } from '@mui/material/styles'

import { Iinfo } from '../../types/interface'

interface Iprops {
  info: Iinfo
}

const Samarbete = ({ info }: Iprops) => {
  const theme = useTheme()
  const mobile = useMediaQuery('(max-width:690px)')

  const partners = info?.Samarbete?.partners ?? []
  const farms = info?.Samarbete?.farmers ?? []
  const title = info?.Samarbete?.title0 ?? 'Våra samarbetspartners'
  const desc = info?.Samarbete?.description ?? ''

  const Card = ({ children }: { children: React.ReactNode }) => (
    <Box
      sx={{
        bgcolor: 'background.paper',
        border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
        borderRadius: '16px',
        boxShadow: '0 10px 24px rgba(0,0,0,.06)',
        p: { xs: 2, md: 3 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform .2s ease, box-shadow .2s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 12px 28px rgba(0,0,0,.10)',
        },
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
        sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 5 }, mt: '5rem' }}
      >
        {/* Titel */}
        <Typography variant="h2" sx={{ textAlign: 'center', color: 'text.primary' }}>
          {title}
        </Typography>

        {/* Partnerloggor som kort */}
        {!!partners.length && (
          <Grid container spacing={3} justifyContent="center" alignItems="center">
            {partners.map((p, i) => (
              <Grid item key={`partner_${i}`}>
                <Card>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={p.name}>
                    <Box
                      component="img"
                      src={p.logoUrl}
                      alt={p.name}
                      sx={{
                        height: { xs: 64, sm: 96, md: 120, lg: 140 },
                        width: 'auto',
                        objectFit: 'contain',
                        filter: 'grayscale(20%)',
                        transition: 'transform .2s ease, filter .2s ease',
                        '&:hover': { transform: 'scale(1.04)', filter: 'grayscale(0%)' },
                      }}
                    />
                  </a>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Beskrivning */}
        {!!desc && (
          <Typography variant="h6" sx={{ textAlign: 'center', color: 'text.primary', mt: 1 }}>
            {desc}
          </Typography>
        )}

        {/* Testgårdar */}
        {!!farms.length && (
          <>
            <Typography variant="h3" sx={{ textAlign: 'center', color: 'text.primary', mt: 2 }}>
              Våra testgårdar
            </Typography>

            <Grid container spacing={3} justifyContent="center" alignItems="flex-start">
              {farms.map((f, i) => (
                <Grid item key={`farm_${i}`}>
                  <Card>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                      }}
                    >
                      <a href={f.link} target="_blank" rel="noopener noreferrer" aria-label={f.farm}>
                        <Box
                          component="img"
                          src={f.logoUrl}
                          alt={f.farm}
                          sx={{
                            height: { xs: 80, sm: 110, md: 130, lg: 150 },
                            width: 'auto',
                            mb: 1,
                            objectFit: 'contain',
                            transition: 'transform .2s ease',
                            '&:hover': { transform: 'scale(1.04)' },
                          }}
                        />
                      </a>
                      <Typography variant="h6" color="text.primary">
                        {f.farm}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {f.location}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Box>
    </Box>
  )
}

export default Samarbete
