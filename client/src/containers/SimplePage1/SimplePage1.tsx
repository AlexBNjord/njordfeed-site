import { useRef, useState } from 'react'

import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import Typography from '@mui/material/Typography'


import { HandleLoadingImages } from '../../Functions/HandleLoadingImages'
import { Iinfo } from '../../types/interface'
import { theme } from '../../App'



interface Iprops {
    info:Iinfo
}
const SimplePage1 = (props:Iprops) => {
    const { info } = props

    const image_ref = useRef(0)

    
    const [ loading, setLoading ] = useState(true)


    const mobile = useMediaQuery('(max-width:690px)');


   


    return (
        <Box component="section" className="flex__center-c" sx={{position:'relative',minHeight:"50vh",width:"100%",flexWrap:"wrap",backgroundColor:theme?.palette?.primary?.main}}>
            

        
            <Box  maxWidth="xl" width={"80%"} minHeight={mobile ? "30vh" : "50vh" } sx={{justifyContent:'space-around', p: mobile ? "2rem 0" : "0"}} className="flex flex__r-c" >

                <Box className="flex__center-c" >

                    <Typography variant='h5' color='primary.contrastText' sx={{textAlign:'left',mb:"1rem"}}>
                        {info?.SimplePage1?.title}
                    </Typography>
                    <Typography variant='h5' color='primary.contrastText' sx={{textAlign:'left'}}>
                        {info?.SimplePage1?.info}
                    </Typography>                    
                </Box>
                    

                <Box className="flex__center-c" >
                    <img src={info?.Welcomepage?.Image} style={{width:"20rem",height:"20rem",objectFit:'cover',borderRadius:'2rem',boxShadow:"0px 10px 15px -3px rgba(0,0,0,0.1)"}} alt='' onLoad={()=>HandleLoadingImages(1, image_ref, setLoading)}/>
                </Box>


                
            </Box>


            

        </Box>
    )
}

export default SimplePage1