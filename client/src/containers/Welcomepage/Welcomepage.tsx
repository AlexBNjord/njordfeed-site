import { useRef, useState } from 'react'

import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'


import { HandleLoadingImages } from '../../Functions/HandleLoadingImages'
import { MainLoading } from '../../components/index'
import { Iinfo } from '../../types/interface'
import { ScrollToId } from '../../Functions/ScrollToId'



const imageStyle ={
    text:{color:"#ffffffff",maxWidth:"95%", mb:'1.5rem', textAlign:"left" },
    img: { 
        transition:"transform 1.5s ease-in-out",
        objectFit:"cover" as any,
        height:"100%",
        width:"100%",
        position:"absolute" as any,
        zIndex:-1 
    },
    box:{}
}
interface Iprops {
    info:Iinfo
}
const Welcomepage = (props:Iprops) => {
    const { info } = props

    const image_ref = useRef(0)
    
    
    const [ loading, setLoading ] = useState(false)


    const mobile = useMediaQuery('(max-width:690px)');       

    return (
        <Box id="welcomepage" component="section" className="flex__center-c" sx={{position:'relative',height:"80vh",width:"100%",flexWrap:"wrap"}}>
            
            {/* <img src={info?.Welcomepage?.Image} style={imageStyle.img} alt='' onLoad={()=>HandleLoadingImages(1, image_ref, setLoading)}/> */}
            <video autoPlay muted loop id="video" onLoad={()=>HandleLoadingImages(1, image_ref, setLoading)} style={{filter:"brightness(40%)",zIndex:-1}}>
                <source src={"./images/welcomepage1.mp4"} type="video/mp4" />                
            </video>

      
            <Box  maxWidth="xl" width={"80%"} height={mobile ? "30vh" : "50vh" } sx={{zIndex:1}} className="flex__start-c" >
                <Typography variant='h2'  sx={imageStyle?.text}>
                    {info?.Welcomepage?.Title0}
                </Typography>
                <Typography variant='subtitle1'  sx={imageStyle?.text}>
                    {info?.Welcomepage?.SubTitle}
                </Typography>
                <Button variant='contained' onClick={()=>ScrollToId("footer")}>
                    {info?.Welcomepage?.Button}
                </Button>
                
            </Box>


            {/* LOADING SCREEN */}
            {loading && 
                <MainLoading loading={loading} info={info}  />
            }

        </Box>
    )
}

export default Welcomepage