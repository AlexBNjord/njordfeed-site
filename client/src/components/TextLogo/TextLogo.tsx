import { useNavigate } from 'react-router-dom'

import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

// SELF IMPORTS 
import { ReactComponent as MainLogo } from '../../assets/textlogo2.svg'
import { theme } from '../../App';
import { ScrollToId } from '../../Functions/ScrollToId'

interface Iprops {
    fill?: string
    height?: number
    width?: number
    navigateOn?: boolean
    opacity?: number
}
const TextLogo = (props:Iprops) => {
    const { fill, height, width, navigateOn, opacity } = props
    

    const matches = useMediaQuery('(max-width:690px)');

    const autoHeight = height ? matches ? `${height}vmax` : `${height}vmin`  : "100%"
    const autoWidth = width ? matches ? `${width}vmax` : `${width}vmin`  : "100%"
    const autoOpacity = opacity ? opacity : 1
    
    const navigate = useNavigate()

    const LogoStyle = {        
        cursor: navigateOn ? 'pointer' : 'auto',
        '& svg path': {            
            stroke:fill,          
            fill:fill,
            
            transition:  navigateOn ? "fill 0.5s linear" : ""            
            
        },
        '& svg g path': {            
            stroke:fill,            
            fill:"#ffffff00",
            //transition:  navigateOn ? "fill 0.5s linear" : ""            
        },
        
        '& svg circle': {
            fill:fill,
        },        
        '&:hover svg path': {            
            //stroke:  "red !important"//navigateOn ? theme.palette.secondary.light : fill,                       
        },
        '&:hover svg g path': {            
           //fill:  navigateOn ? theme.palette.secondary.light : fill,                       
        },
        height:"inherit",
        opacity: autoOpacity
    }

    


    return (
        <Box className="flex" onClick={()=> navigateOn ? navigate("") : null }  sx={LogoStyle} > 
            <MainLogo width={ autoWidth } height={ autoHeight }  />
        </Box>
    )
}

export default TextLogo