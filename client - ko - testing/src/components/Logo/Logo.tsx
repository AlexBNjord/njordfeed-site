import { useNavigate } from 'react-router-dom'

import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

// SELF IMPORTS 
import { ReactComponent as MainLogo } from '../../assets/logo2.svg'
import { theme } from '../../App';

interface Iprops {
    fill?: string
    height?: number
    width?: number
    navigateOn?: boolean
    opacity?: number
}
const Logo = (props:Iprops) => {
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
            transition:  navigateOn ? "fill 0.5s linear" : ""            
        },
        '& svg g path': {            
            //stroke:fill,          
            strokeWidth:"0.5",
            fill:fill,
            //transition:  navigateOn ? "fill 0.5s linear" : ""            
        },
        
        '& svg circle': {
            fill:fill,
        },        
        '&:hover svg path': {            
            stroke:  navigateOn ? theme.palette.secondary.light : fill,                       
        },
        '&:hover svg g path': {            
            fill:  navigateOn ? theme.palette.secondary.light : fill,                       
        },
        height:"inherit",
        opacity: autoOpacity
    }

    


    return (
        <Box className="flex__center-c" onClick={()=> navigateOn ? navigate("/") : null }  sx={LogoStyle} > 
            <MainLogo width={ autoWidth } height={ autoHeight }  />
        </Box>
    )
}

export default Logo