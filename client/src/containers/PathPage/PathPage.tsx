import { useRef, useState } from 'react'

import Box from '@mui/material/Box'

import { ReactComponent as MainLogo } from '../../assets/product_path3.svg'
import { Iinfo } from '../../types/interface'
import { theme } from '../../App'

import { HandleLoadingImages } from '../../Functions/HandleLoadingImages'




const imageStyle ={
    text:{color:"#ffffffff",maxWidth:"95%", mb:'1.5rem', textAlign:"left" },
    img: { 
        transition:"transform 1.5s ease-in-out",
        objectFit:"cover" as any,
        height:"120%",
        width:"100%",
        position:"absolute" as any,
        zIndex:-1 
    }
}
interface Iprops {
    info:Iinfo
}
const PathPage = (props:Iprops) => {
    const { info } = props 

    const image_ref = useRef(0)
    
    
    const [ loading, setLoading ] = useState(true)


    return (
        <Box id="pathpage" component="section" className="flex__center-c" sx={{position:'relative',minHeight:"110vh",width:"100%",flexWrap:"wrap",backgroundColor:theme?.palette?.primary?.light}}>

            <img src={info?.PathPage?.image1} style={imageStyle.img} alt='' onLoad={()=>HandleLoadingImages(1, image_ref, setLoading)}   />

        
            <Box  maxWidth="xl" width={"80%"}  sx={{justifyContent:'space-around',mt:"5rem"}} className="flex" >

            <Box className="flex__center-c" maxWidth={"90%"} sx={{
                '& svg':{
                    maxWidth:"100%",
                    maxHeight:'100vh'
                }
            }}>  
                <MainLogo />
            </Box>


                
            </Box>


            

        </Box>
    )
}

export default PathPage