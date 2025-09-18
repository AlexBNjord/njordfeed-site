import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import Typography from '@mui/material/Typography'

import { Iinfo } from '../../types/interface'
import { theme } from '../../App'

interface Iprops {
    info:Iinfo
}
const SimplePage2 = (props:Iprops) => {
    const { info } = props

    const mobile = useMediaQuery('(max-width:690px)');

    
   


    return (
        <Box id="simplepath2" component="section" className="flex__center-c" sx={{position:'relative',minHeight:"40vh",width:"100%",flexWrap:"wrap",backgroundColor:theme?.palette?.primary?.light,pb:"10rem"}}>
            

        
            <Box  maxWidth="xl" width={"80%"}  sx={{justifyContent:'space-around', m:mobile ? '1rem':"5rem"}} className="flex flex__r-c" >

                <Box className="flex__center-c" justifyContent={'flex-start'} maxWidth={mobile ? '100%':'48%'}>
                    <Typography variant='h2' color='primary.contrastText' sx={{textAlign:'left'}}>
                        {info?.SimplePage2?.title}
                    </Typography>
                </Box>
                    

                <Box className="flex__center-c" justifyContent={'flex-start'} maxWidth={mobile ? '100%':'48%'}>
                    <Typography variant='subtitle1' color='primary.contrastText' sx={{textAlign:'left'}}>
                        {info?.SimplePage2?.subtitle}
                    </Typography>                                        
                </Box>


                
            </Box>


            

        </Box>
    )
}

export default SimplePage2