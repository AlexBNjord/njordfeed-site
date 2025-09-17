import React, { useMemo } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import useMediaQuery from '@mui/material/useMediaQuery'
import { alpha, useTheme } from '@mui/material/styles'

import { Iinfo } from '../../types/interface'

interface Iprops {
  info: Iinfo
}

const AboutUs = ({ info }: Iprops) => {
  const theme = useTheme()
  const mobile = useMediaQuery('(max-width:690px)')

  // Dela text på tomrad → stycken
  const paragraphs = useMemo(
    () =>
      (info?.AboutUs?.text || '')
        .split(/\n{2,}/)
        .map((s) => s.trim())
        .filter(Boolean),
    [info]
  )

  const members = info?.AboutUs?.members || []

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '60vh',
        width: '100%',
        py: { xs: 6, md: 10 },
        px: 2,
        // Vit → primary.light gradient (ko-sajt)
        background: (t) => `
          linear-gradient(
            180deg,
            ${t.palette.common.white} 0%,
            ${t.palette.common.white} 10%,
            ${t.palette.primary.main}29 28%,  /* ~16% */
            ${t.palette.primary.main}40 50%,  /* ~25% */
            ${t.palette.primary.light} 85%
          )
        `,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <Box
        sx={{
          width: 'min(100%, 980px)',
          bgcolor: 'background.paper',
          color: 'text.primary',
          border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
          borderRadius: '24px',
          p: { xs: 3, md: 5 },
          boxShadow: '0 10px 24px rgba(0,0,0,.06)',
          mt: '5rem',
        }}
      >
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 2 }}>
          {info?.AboutUs?.title0}
        </Typography>

        <Box sx={{ '& p': { mb: 2, lineHeight: 1.7, textAlign: 'left' } }}>
          {paragraphs.length ? (
            paragraphs.map((p, i) => (
              <Typography key={i} variant="subtitle1" component="p">
                {p}
              </Typography>
            ))
          ) : (
            <Typography variant="subtitle1" sx={{ whiteSpace: 'pre-line' }}>
              {info?.AboutUs?.text}
            </Typography>
          )}
        </Box>

        {/* Team-porträtt (renderas bara om data finns) */}
        {members.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h3" sx={{ textAlign: 'center', mb: 3 }}>
              Teamet bakom NjordFeed
            </Typography>

            <Grid container spacing={3} justifyContent="center">
              {members.map((m, idx) => (
                <Grid item xs={12} sm={6} md={6} key={`member_${idx}`} sx={{ display: 'flex' }}>
                  <Box
                    sx={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      p: 3,
                      borderRadius: '16px',
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.18)}`,
                      bgcolor: 'background.paper',
                      boxShadow: '0 8px 18px rgba(0,0,0,.08)',
                      transition: 'transform .18s ease, box-shadow .18s ease, border-color .18s ease',
                      '&:hover': {
                        transform: 'translateY(-3px)', // “gupp”
                        boxShadow: '0 14px 28px rgba(0,0,0,.14)',
                        borderColor: alpha(theme.palette.primary.main, 0.32),
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={m.photo}
                      alt={m.name}
                      loading="lazy"
                      sx={{
                        width: 296,
                        height: 296,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        mb: 2,
                        border: `4px solid ${alpha(theme.palette.primary.main, 0.22)}`,
                        boxShadow: '0 6px 16px rgba(0,0,0,.12)',
                      }}
                      />

                    <Typography variant="h5" sx={{ mb: 0.5 }}>
                      {m.name}
                    </Typography>
                    {m.role && (
                      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                        {m.role}
                      </Typography>
                    )}
                    {m.bio && (
                      <Typography variant="body2" color="text.primary" sx={{ maxWidth: 520 }}>
                        {m.bio}
                      </Typography>
                    )}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default AboutUs
