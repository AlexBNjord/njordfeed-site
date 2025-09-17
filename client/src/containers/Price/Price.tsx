import LinkIcon from '@mui/icons-material/Link'
import QrCode2Icon from '@mui/icons-material/QrCode2'
import ScienceIcon from '@mui/icons-material/Science'
import CloudDoneIcon from '@mui/icons-material/CloudDone'
import CloudSyncIcon from '@mui/icons-material/CloudSync'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import ShareIcon from '@mui/icons-material/Share'
import ShieldIcon from '@mui/icons-material/Shield'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'

import { Box, Typography, Button, Chip, Card, CardActions, CardContent, Divider } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { useMediaQuery } from '@mui/material'
import { useTheme, alpha } from '@mui/material/styles'

import { Iinfo } from '../../types/interface'
// import { Logo } from '../../components' // valfritt, används ej här

interface Iprops {
  info: Iinfo
}

/** Ikoner som kan användas i advisorAccess.steps */
const stepIconMap = {
  Link: LinkIcon,
  QrCode2: QrCode2Icon,
  Science: ScienceIcon,
  CloudDone: CloudDoneIcon,
  ReceiptLong: ReceiptLongIcon,
  CloudSync: CloudSyncIcon,
  Share: ShareIcon,
  Shield: ShieldIcon,
  Check: CheckCircleRoundedIcon,
} as const

type AdvisorStep = { icon?: keyof typeof stepIconMap; text: string }

const Price = ({ info }: Iprops) => {
  const theme = useTheme()
  const mobile = useMediaQuery('(max-width:690px)')

  const tiers = [
    {
      title: 'Gratis',
      price: '0',
      description: ['1 användare', 'Analyser sparas i 30 dagar', 'Hjälpcenter', 'Email-support'],
      buttonText: '',
      buttonVariant: 'outlined',
      buttonColor: 'primary',
    },
    {
      title: 'Premium',
      subheader: 'Rekommenderat',
      price: '200',
      description: [
        'Oändligt med användare',
        'Alla analyser sparas i molnet',
        'Grafer över tid',
        'Export till Excel',
        'Hjälpcenter',
        'Prioriterad telefon- och email-support',
        'On-site-support',
        'Mer avancerade rapporter',
      ],
      buttonText: 'Kontakta oss',
      buttonVariant: 'contained',
      buttonColor: 'secondary',
    },
    {
      title: 'Bas',
      price: '150',
      description: [
        '5 användare',
        'Alla analyser sparas i molnet',
        'Grafer över tid',
        'Export till Excel',
        'Hjälpcenter',
        'Telefon- och email-support',
      ],
      buttonText: '',
      buttonVariant: 'outlined',
      buttonColor: 'primary',
    },
  ]

  const isRecommended = (t: { title: string }) => t.title === 'Premium'

  // ✅ Hämta och typa stegen korrekt (innan return)
  const steps: AdvisorStep[] = info?.Price?.advisorAccess?.steps ?? []

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '70vh',
        width: '100%',
        pt: { xs: '6rem', md: '6.5rem' },
        pb: { xs: 4, md: 6 },
        px: 2,
        background: `
          linear-gradient(
            180deg,
            #FFFFFF 0%,
            #FFFFFF 22%,
            #9CB42F14 45%,
            #9CB42F29 65%,
            #9CB42F4D 85%,
            #9CB42F78 100%
          )
        `,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, md: 5 },
      }}
    >
      {/* Planer */}
      <Box sx={{ width: 'min(100%, 1200px)' }}>
        <Grid container spacing={3} sx={{ alignItems: 'stretch', justifyContent: 'center' }}>
          {tiers.map((tier) => (
            <Grid
              key={tier.title}
              size={{ xs: 12, sm: isRecommended(tier) ? 12 : 6, md: 4 }}
              sx={{
                display: 'flex',
                ...(isRecommended(tier) && {
                  transform: { md: 'scale(1.03)' },
                  zIndex: { md: 1 },
                }),
              }}
            >
              <Card
                sx={[
                  {
                    position: 'relative',
                    flex: 1,
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: 2,
                    bgcolor: 'background.paper',
                    borderRadius: '16px',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.14)}`,
                    boxShadow: '0 10px 24px rgba(0,0,0,.06)',
                    transition:
                      'transform .18s ease, box-shadow .18s ease, border-color .18s ease, background-color .18s ease',
                    '&:hover': {
                      transform: 'translateY(-2px) scale(1.02)',
                      boxShadow: '0 16px 36px rgba(0,0,0,.12)',
                      borderColor: alpha(theme.palette.primary.main, 0.28),
                    },
                  },
                  isRecommended(tier) && {
                    border: 'none',
                    color: '#fff',
                    background:
                      'radial-gradient(circle at 50% 0%, hsl(220, 20%, 35%), hsl(220, 30%, 6%))',
                    boxShadow: `0 18px 40px ${alpha('#000', 0.45)}`,
                    '&:hover': {
                      transform: 'translateY(-2px) scale(1.06)',
                      boxShadow: `0 22px 50px ${alpha('#000', 0.55)}`,
                    },
                    '::after': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      pointerEvents: 'none',
                      background:
                        'linear-gradient(120deg, rgba(255,255,255,.18) 0%, rgba(255,255,255,.06) 35%, rgba(255,255,255,0) 60%)',
                      mixBlendMode: 'screen',
                      borderRadius: '16px',
                    },
                  },
                ]}
              >
                <CardContent>
                  <Box
                    sx={{
                      mb: 1,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: 2,
                      ...(isRecommended(tier) && { color: 'grey.100' }),
                    }}
                  >
                    <Typography component="h3" variant="h6">
                      {tier.title}
                    </Typography>
                    {isRecommended(tier) && (
                      <Chip
                        icon={<AutoAwesomeIcon sx={{ fill: theme.palette.secondary.main }} />}
                        label={tier.subheader}
                        sx={{
                          color: '#fff',
                          bgcolor: alpha(theme.palette.secondary.main, 0.15),
                          border: `1px solid ${alpha('#fff', 0.25)}`,
                          backdropFilter: 'saturate(160%) blur(2px)',
                        }}
                      />
                    )}
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: 1,
                      ...(isRecommended(tier) ? { color: 'grey.50' } : {}),
                    }}
                  >
                    <Typography component="span" variant="h2">
                      {tier.price} kr
                    </Typography>
                    <Typography component="span" variant="h6" sx={{ opacity: 0.9 }}>
                      per lakterande ko och år
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 2, opacity: isRecommended(tier) ? 0.3 : 1 }} />

                  <Box sx={{ display: 'grid', gap: 1 }}>
                    {tier.description.map((line) => (
                      <Box key={line} sx={{ display: 'flex', gap: 1.25, alignItems: 'center' }}>
                        <CheckCircleRoundedIcon
                          sx={{
                            width: 20,
                            color: isRecommended(tier)
                              ? theme.palette.primary.light
                              : theme.palette.primary.main,
                          }}
                        />
                        <Typography
                          variant="subtitle2"
                          component="span"
                          sx={{ color: isRecommended(tier) ? 'grey.50' : 'text.primary' }}
                        >
                          {line}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>

                {!!tier.buttonText && (
                  <CardActions sx={{ pt: 0 }}>
                    <Button
                      fullWidth
                      variant={tier.buttonVariant as 'outlined' | 'contained'}
                      color={tier.buttonColor as 'primary' | 'secondary'}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* --- Använd appen utan eget instrument --- */}
      {!!info?.Price?.advisorAccess && (
        <Box sx={{ width: 'min(100%, 1200px)', mt: { xs: 4, md: 6 } }}>
          <Card
            sx={{
              p: { xs: 2.5, md: 3.5 },
              borderRadius: '16px',
              bgcolor: 'background.paper',
              border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
              boxShadow: '0 8px 18px rgba(0,0,0,.08)',
              transition: 'transform .18s ease, box-shadow .18s ease, border-color .18s ease',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 14px 28px rgba(0,0,0,.14)',
                borderColor: alpha(theme.palette.primary.main, 0.28),
              },
            }}
          >
            <CardContent sx={{ p: 0 }}>
              <Typography variant="h3" sx={{ textAlign: 'center', mb: 1 }}>
                {info.Price.advisorAccess.title}
              </Typography>

              <Typography variant="subtitle1" sx={{ textAlign: 'center', mb: 3 }}>
                {info.Price.advisorAccess.intro}
              </Typography>

              <Grid container spacing={2.5} justifyContent="center" sx={{ mb: 2 }}>
                {steps.map((s: AdvisorStep, i: number) => {
                  const Icon = s.icon ? stepIconMap[s.icon] ?? CheckCircleRoundedIcon : CheckCircleRoundedIcon
                  return (
                    <Grid key={`advisor-step-${i}`} size={{ xs: 12, sm: 6, md: 4 }}>
                      <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                        <Icon sx={{ color: 'primary.main', mt: '2px' }} />
                        <Typography variant="subtitle1">{s.text}</Typography>
                      </Box>
                    </Grid>
                  )
                })}
              </Grid>

              {!!info.Price.advisorAccess.ctaText && (
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Button variant="contained" color="primary" href={info.Price.advisorAccess.ctaLink || '#'}>
                    {info.Price.advisorAccess.ctaText}
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>
        </Box>
      )}

      {/* Titel + intro */}
      <Box sx={{ width: 'min(100%, 1100px)', textAlign: 'center' }}>
        <Typography component="h1" variant="h2" sx={{ mb: 1 }}>
          {info?.Price?.title0}
        </Typography>
        {!!info?.Price?.info0 && (
          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
            {info?.Price?.info0}
          </Typography>
        )}
      </Box>

      {/* Prisbild (valfri) */}
      {!!info?.Price?.image && (
        <Box
          component="img"
          src={info.Price.image}
          alt="Prisbild"
          sx={{
            width: 'min(100%, 1100px)',
            height: 'auto',
            borderRadius: '12px',
            boxShadow: 3,
            mt: { xs: 2, md: 3 },
          }}
        />
      )}
    </Box>
  )
}

export default Price
