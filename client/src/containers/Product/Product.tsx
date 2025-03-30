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
const Product = (props:Iprops) => {
    const { info } = props

    const mobile = useMediaQuery('(max-width:690px)');


    return (
        <Box component="section" className="flex__center-c" sx={{position:'relative',minHeight:"50vh",width:"100%",flexWrap:"wrap",backgroundColor:theme?.palette?.primary?.main}}>
            

        
            <Box  maxWidth="xl" width={"80%"} minHeight={mobile ? "30vh" : "50vh" } sx={{justifyContent:'space-around', p: mobile ? "2rem 0" : "5rem", backgroundColor:"",mt:"5rem"}} className="flex_center-c" >
                
                {/* First section */}
                <Box sx={{mb:"5rem"}}>
                    <Typography variant='h2' color='primary.contrastText' sx={{textAlign:'left',mb:"1rem"}}>
                        {info?.Product?.title0}
                    </Typography>

                    <Typography variant='h4' color='primary.contrastText' sx={{textAlign:'left',mb:"1rem"}}>
                        {info?.Product?.subtitle0}
                    </Typography>

                    <List>
                        {info?.Product?.list0.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <FiberManualRecord fontSize="small" color='secondary'/>  {/* Bullet icon */}
                                </ListItemIcon>
                                {/* <ListItemText primary={item} /> */}
                                <Typography variant='subtitle1' color='primary.contrastText'>
                                    {item}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                    <Typography variant='h6' color='primary.contrastText' sx={{textAlign:'left',mb:"1rem"}}>
                        {info?.Product?.info0}
                    </Typography>
                    <Typography variant='subtitle2' color='primary.contrastText' sx={{textAlign:'left',mb:"1rem"}}>
                        {info?.Product?.subinfo0}
                    </Typography>
                </Box>

                {/* Second section */}
                <Box sx={{mb:"5rem"}}>
                    <Typography variant='h2' color='primary.contrastText' sx={{textAlign:'left',mb:"1rem"}}>
                        {info?.Product?.title1}
                    </Typography>

                    <Typography variant='h4' color='primary.contrastText' sx={{textAlign:'left',mb:"1rem"}}>
                        {info?.Product?.subtitle1}
                    </Typography>

                    <List>
                        {info?.Product?.list1.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <FiberManualRecord fontSize="small" color='secondary'/>  {/* Bullet icon */}
                                </ListItemIcon>
                                {/* <ListItemText primary={item} /> */}
                                <Typography variant='subtitle1' color='primary.contrastText'>
                                    {item}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                    <Typography variant='h6' color='primary.contrastText' sx={{textAlign:'left',mb:"1rem"}}>
                        {info?.Product?.info1}
                    </Typography>
                </Box>
                

                {/* Third section */}
                <Box sx={{mb:"5rem"}}>

                    <Typography variant='h2' color='primary.contrastText' sx={{textAlign:'left',mb:"1rem"}}>
                        {info?.Product?.title2}
                    </Typography>
                    <Typography variant='h6' color='primary.contrastText' sx={{textAlign:'left',mb:"1rem"}}>
                        {info?.Product?.info2}
                    </Typography>

                </Box>

                
                {/* Forth section */}
                <Box>

                    <Typography variant='h2' color='primary.contrastText' sx={{textAlign:'left',mb:"1rem"}}>
                        {info?.Product?.title3}
                    </Typography>
                    <Typography variant='h6' color='primary.contrastText' sx={{textAlign:'left',mb:"1rem"}}>
                        {info?.Product?.info3}
                    </Typography>

                </Box>




            </Box>


            

        </Box>
    )
}

export default Product