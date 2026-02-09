import { Box, Typography, Button, useMediaQuery } from '@mui/material'
import { useTheme, alpha } from '@mui/material/styles'
import { Iinfo } from '../../types/interface'
import Link from '@mui/material/Link'



interface Iprops {
  info: Iinfo
}

const AktuellaProjekt = ({ info }: Iprops) => {
  const theme = useTheme()
  const mobile = useMediaQuery('(max-width:768px)')
  const projekt = info?.AktuellaProjekt

  return (
    <Box
      id="aktuella-projekt"
      component="section"
      sx={{
    minHeight: '80vh',
    width: '100%',
    padding: mobile ? '2rem 1rem' : '4rem 2rem',
    // MÖRKARE preset (vit → mer grön, tidigare)
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
        flexDirection: 'column',
        alignItems: 'center',
        mx: 'auto',
        gap: '3rem',
        pt: '6rem',
      }}
    >
      <Box maxWidth="lg" width="100%" textAlign={mobile ? 'left' : 'center'}>
        <Typography variant="h1" gutterBottom>
          {projekt?.title}
        </Typography>
        <Typography variant="subtitle1">{projekt?.intro}</Typography>
      </Box>

      {projekt?.projects?.map((proj, i) => (
        <Box
          key={`projekt-${i}`}
          sx={{
            display: 'flex',
            flexDirection: mobile ? 'column' : 'row',
            gap: '2rem',
            maxWidth: '1200px',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            // 👉 korten är VITA
            backgroundColor: theme.palette.background.paper,
            borderRadius: '1rem',
            padding: mobile ? '1.5rem' : '2rem',
            boxShadow: 3,
          }}
        >
          {proj.image && (
            <Box
              component="img"
              src={proj.image}
              alt={proj.title}
              sx={{
                width: mobile ? '100%' : '40%',
                maxHeight: '300px',
                height: 'auto',
                borderRadius: '0.5rem',
                objectFit: 'cover',
              }}
            />
          )}

          <Box sx={{ flex: 1 }}>
  <Typography variant="h3" sx={{ textAlign: 'left', mb: 1 }}>
    {proj.title}
  </Typography>

  <Typography variant="subtitle1" sx={{ textAlign: 'left', mb: 2, whiteSpace: 'pre-line' }}>
    {/* Fallback: om du inte hunnit lägga in nya fält i JSON ännu */}
    {proj.descriptionBefore ??  ''}

    {/* Klickbar Agroväst-länk (om den finns) */}
    {proj.link1?.href && proj.link1?.text ? (
      <Link
        href={proj.link1.href}
        target="_blank"
        rel="noopener noreferrer"
        underline="always"
        sx={{ color: 'secondary.main', fontWeight: 600 }}
      >
        {proj.link1.text}
      </Link>
    ) : null}

    {/* Eftertext */}
    {proj.descriptionAfter ?? ''}
  </Typography>

  {/* Den vanliga "Läs mer"-knappen (separat från Agroväst-länken) */}
  {proj.link && (
    <Button
      variant="contained"
      color="primary"
      href={proj.link}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ width: mobile ? '100%' : 'auto' }}
    >
      {proj.linklabel || 'Läs mer'}
    </Button>
  )}
</Box>

        </Box>
      ))}
    </Box>
  )
}

export default AktuellaProjekt
