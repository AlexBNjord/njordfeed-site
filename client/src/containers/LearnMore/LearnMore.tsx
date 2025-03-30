import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'

import FiberManualRecord from '@mui/icons-material/FiberManualRecord';

import { Iinfo } from '../../types/interface'
import { theme } from '../../App'




interface Iprops {
    info:Iinfo
}
const LearnMore = (props:Iprops) => {
    const { info } = props
    
    const mobile = useMediaQuery('(max-width:690px)'); 


    return (
        <Box component="section" className="flex__center-c" sx={{position:'relative',minHeight:"100vh",width:"100%",flexWrap:"wrap",backgroundColor:theme?.palette?.primary?.main}}>
            

        
            <Box  maxWidth="xl" width={"80%"} minHeight={mobile ? "30vh" : "50vh" } sx={{justifyContent:'space-around', p: mobile ? "2rem 0" : "5rem", backgroundColor:"",mt:"5rem"}} className="flex_center-c" >
                
                {/* First section */}
                <Box sx={{mb:"5rem"}}>
                    <Typography variant='h2' color='primary.contrastText' sx={{textAlign:'left',mb:"1rem"}}>
                        {info?.LearnMore?.title0}
                    </Typography>
                    

                    <List>
                        {info?.LearnMore?.list0.map((item, index) => (
                            <Box key={index}>
                                <ListItem >
                                    <ListItemIcon>
                                        <FiberManualRecord fontSize="small" color='secondary'/>  {/* Bullet icon */}
                                    </ListItemIcon>                                    
                                    <Typography variant='h6' color='primary.contrastText' textAlign={"left"}>
                                        {item?.q}
                                    </Typography>
                                    
                                </ListItem>                                
                            </Box>
                        ))}
                    </List>                    
                </Box>

     



            </Box>


            

        </Box>
    )
}

export default LearnMore