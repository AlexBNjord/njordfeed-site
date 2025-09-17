import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery';

import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


import { Iinfo } from '../../types/interface'
import { theme } from '../../App'
import { Divider, Typography } from '@mui/material';
import { TextLogo } from '..';

interface Iprops {
    info:Iinfo
}
const Footer = (props:Iprops) => {
    const { info } = props
    const mobile = useMediaQuery("(max-width: 690px)")
    

    const iconSelect = (key:number) => {
        const tempStyle = {            
            fontSize:"1.5rem",mr:"0.5rem",color:"primary.contrastText"
        }
        switch (key) {
            //case 0:                 
            //    return(<PlaceIcon color='primary' sx={tempStyle}/>)
            case 1:
                return(<EmailIcon color='primary' sx={tempStyle}/>)                
            //case 2: telefonnummer
                return(<LocalPhoneIcon color='primary' sx={tempStyle}/>)                        
            default:
                return(<div style={{display:'none'}}></div>)
                
        }
    }

    return (        
        <Box id="footer" className="flex__center-c"   sx={{width:"100%",minHeight:"20rem",backgroundColor: theme?.palette?.primary?.main,p:"2rem 0"}}>
            <Box maxWidth="xl" className="flex__center-c" width={"100%"}>        

                <Box className="flex flex__r-c" justifyContent={'space-around'} alignItems={mobile? 'center':'flex-start'} sx={{width:'100%'}}>
                    <TextLogo fill="#ffffff"/>

                    <Box className="flex__center-c" sx={{maxWidth:mobile ? "95%" : "50%", width: mobile ? "100%" : "auto" ,alignItems:"flex-start", justifyContent:"flex-start" ,mt: mobile ? "2rem" : 0}}>
                        {info?.Footer?.list?.map( (item,i) => {
                            return(
                                <Box key={`footer${item?.title}_${i}`} className="flex__center-c" /* width={"33%"} */ m={"1rem 0"}>
                                    <Typography variant='h6' className="flex__center-r" color="primary.contrastText">
                                        {iconSelect(i)} 
                                        {item?.title}
                                    </Typography>                    
                                </Box>
                                
                            )
                        })}

                    </Box>

                </Box>


                <Divider flexItem sx={{m:"2rem 0"}}/>



                <Box className="flex__center-r" sx={{width:'80%',mb:'2rem'}}>
                    <FacebookIcon sx={{color:'primary.contrastText',fontSize:"3rem",m:'0.5rem'}}/>
                    <InstagramIcon sx={{color:'primary.contrastText',fontSize:"3rem",m:'0.5rem'}}/>
                    <XIcon sx={{color:'primary.contrastText',fontSize:"3rem",m:'0.5rem'}}/>
                    <LinkedInIcon sx={{color:'primary.contrastText',fontSize:"3rem",m:'0.5rem'}}/>
                </Box>


                
                <IconButton sx={{':hover':{backgroundColor:"#ffffff00"}}} href={ info?.CompanyInfo?.Address_Link_Cloudarity || "" } target="_blank" rel="noopener" className="flex__center-r" >
                    <Typography variant='subtitle2' color="primary.contrastText" className="flex__center-r" sx={{mr:"1rem"}}>
                        {info?.Footer?.madeBy}                    
                    </Typography>                                
                </IconButton>
                
        

            </Box>
        </Box>
    )
}

export default Footer