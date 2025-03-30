import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';


import { Iinfo } from '../../types/interface'
import { theme } from '../../App'






interface Iprops {
    info:Iinfo
}
const Price = (props:Iprops) => {
    const { info } = props

    const tiers = [
        {
          title: 'Gratis',
          price: '0',
          description: [
            '10 users included',
            '2 GB of storage',
            'Help center access',
            'Email support',
          ],
          buttonText: '',
          buttonVariant: 'outlined',
          buttonColor: 'primary',
        },
        {
          title: 'Årsprenumeration',
          subheader: 'Rekomenderat',
          price: '15',
          description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
            'Dedicated team',
            'Best deals',
          ],
          buttonText: 'Kontakta oss',
          buttonVariant: 'contained',
          buttonColor: 'secondary',
        },
        {
          title: 'Månadsprenumeration,',
          price: '30',
          description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
          ],
          buttonText: '',
          buttonVariant: 'outlined',
          buttonColor: 'primary',
        },
    ];

    const rows = [
        {
            name:"1",
            numAnalys: 1,
            price: 100
        },
        {
            name:"2",
            numAnalys: 5,
            price: 500
        },
        {
            name:"3",
            numAnalys: 10,
            price: 1000
        },
        {
            name:"4",
            numAnalys: 50,
            price: 5000
        }
    ]
      
    
    const mobile = useMediaQuery('(max-width:690px)');
       
    return (
        <Box component="section" className="flex__center-c" sx={{position:'relative',minHeight:"50vh",width:"100%",flexWrap:"wrap",backgroundColor:theme?.palette?.primary?.main}}>
            
            <Box  maxWidth="xl" width={"80%"} minHeight={mobile ? "30vh" : "50vh" } sx={{ p: mobile ? "2rem 0" : "5rem"}} className="flex__center-c" >
                

                <Container
                    id="pricing"
                    sx={{
                        mt:"5rem",
                        pt: { xs: 4, sm: 12 },
                        pb: { xs: 8, sm: 16 },
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: { xs: 3, sm: 6 },
                    }}
                    >
                    <Box
                        sx={{
                        width: { sm: '100%', md: '60%' },
                        textAlign: { sm: 'left', md: 'center' },
                        }}
                    >
                        <Typography
                            component="h2"
                            variant="h4"
                            gutterBottom
                            sx={{ color: 'primary.contrastText' }}
                        >
                            {info?.Price?.title0}
                        </Typography>
                
                    </Box>
                    <Grid
                        container
                        spacing={3}
                        sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}
                    >
                        {tiers.map((tier) => (
                        <Grid
                            size={{ xs: 12, sm: tier.title === 'Årsprenumeration' ? 12 : 6, md: 4 }}
                            key={tier.title}
                        >
                            <Card
                            sx={[
                                {
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 4,
                                },
                                tier.title === 'Årsprenumeration' &&
                                ((theme) => ({
                                    border: 'none',
                                    background:
                                    'radial-gradient(circle at 50% 0%, hsl(220, 20%, 35%), hsl(220, 30%, 6%))',
                                    boxShadow: `0 8px 12px hsla(220, 20%, 42%, 0.2)`,
                                    ...theme.applyStyles('dark', {
                                    background:
                                        'radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))',
                                    boxShadow: `0 8px 12px hsla(0, 0%, 0%, 0.8)`,
                                    }),
                                })),
                            ]}
                            >
                            <CardContent>
                                <Box
                                sx={[
                                    {
                                    mb: 1,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexWrap:"wrap",
                                    gap: 2,
                                    },
                                    tier.title === 'Årsprenumeration'
                                    ? { color: 'grey.100' }
                                    : { color: '' },
                                ]}
                                >
                                <Typography component="h3" variant="h6">
                                    {tier.title}
                                </Typography>
                                {tier.title === 'Årsprenumeration' && (
                                    <Chip icon={<AutoAwesomeIcon sx={{fill:theme?.palette?.secondary?.main}} />} label={tier.subheader} sx={{color:"white"}} />
                                )}
                                </Box>
                                <Box
                                sx={[
                                    {
                                    display: 'flex',
                                    alignItems: 'baseline',
                                    },
                                    tier.title === 'Årsprenumeration'
                                    ? { color: 'grey.50' }
                                    : { color: null },
                                ]}
                                >
                                <Typography component="h3" variant="h2">
                                    {tier.price} kr
                                </Typography>
                                <Typography component="h3" variant="h6">
                                    &nbsp; per månad
                                </Typography>
                                </Box>
                                <Divider sx={{ my: 2, opacity: 0.8, borderColor: 'divider' }} />
                                {tier.description.map((line) => (
                                <Box
                                    key={line}
                                    sx={{ py: 1, display: 'flex', gap: 1.5, alignItems: 'center' }}
                                >
                                    <CheckCircleRoundedIcon
                                    sx={[
                                        {
                                        width: 20,
                                        },
                                        tier.title === 'Årsprenumeration'
                                        ? { color: 'primary.light' }
                                        : { color: 'primary.main' },
                                    ]}
                                    />
                                    <Typography
                                    variant="subtitle2"
                                    component={'span'}
                                    sx={[
                                        tier.title === 'Årsprenumeration'
                                        ? { color: 'grey.50' }
                                        : { color: null },
                                    ]}
                                    >
                                    {line}
                                    </Typography>
                                </Box>
                                ))}
                            </CardContent>
                            <CardActions>
                                {tier?.buttonText &&
                                <Button
                                    fullWidth
                                    variant={tier.buttonVariant as 'outlined' | 'contained'}
                                    color={tier.buttonColor as 'primary' | 'secondary'}
                                    sx={{}}
                                    >
                                    <Typography variant='h5' color='primary.contrastText'>{tier.buttonText}</Typography>
                                </Button>
                                }
                            </CardActions>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                </Container>                                

                <Typography variant="h5" sx={{ color: 'primary.contrastText' }}>
                        {info?.Price?.info0}
                </Typography>



                <TableContainer component={Paper} sx={{  maxWidth: mobile ? "90%":"50%" }} >
                    <Table  aria-label="simple table">
                        <TableHead>
                        <TableRow>                            
                            <TableCell >Antal analyser</TableCell>
                            <TableCell align="right">Pris (SEK)</TableCell>                        
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.numAnalys}
                            </TableCell>                            
                            <TableCell align="right">{row.price}</TableCell>                        
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>


            </Box>
        </Box>
    )
}

export default Price