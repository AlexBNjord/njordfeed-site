import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import Typography from '@mui/material/Typography'

import InsightsIcon from '@mui/icons-material/Insights';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import LayersIcon from '@mui/icons-material/Layers';

import { colors } from '../../colors/colors'
import { Logo } from '../../components/index'
import { Iinfo } from '../../types/interface'
import { theme } from '../../App'


interface Iprops {
    info:Iinfo
}
const ThreeInfo = (props:Iprops) => {
    const { info } = props    


    const mobile = useMediaQuery('(max-width:690px)');

    const iconSelect = (key:number) => {
        const tempStyle = {
            height:'5rem',
            width:'5rem',
            mb:'1rem'
        }
        switch (key) {
            case 0:                 
                return(<InsightsIcon color='secondary' sx={tempStyle}/>)
            case 1:
                return(<CloudSyncIcon color='secondary' sx={tempStyle}/>)                
            case 2:
                return(<LayersIcon color='secondary' sx={tempStyle}/>)                        
            default:
                return(<div style={{display:'none'}}></div>)
                
        }
    }
   


    return (
        <Box component="section" className="flex__center-c" sx={{position:'relative',minHeight:"80vh",width:"100%",flexWrap:"wrap",backgroundColor:colors?.bg}}>
            

        
            <Box  maxWidth="xl" width={"80%"}  sx={{justifyContent:'space-around'}} className="flex__center-c" >
                <Box className="flex flex__r-c">
                {info?.ThreeInfo?.boxInfo.map((item, i)=>{
                    return(
                        <Box key={`threeinfo${item?.title}_${i}`} className="flex__center-c" maxWidth={mobile ? '95%':'30%'} sx={{m:'0 1rem 0 1rem',justifyContent:"flex-start"}} >
                            {iconSelect(i)}        
                            <Typography variant='h2' >
                                {item?.title}
                            </Typography>
                            <Typography variant='subtitle1'  >
                                {item?.subtitle}
                            </Typography>

                        </Box>
                    )
                })}
                </Box>
                

                <Box className="flex__center-r" sx={{justifyContent:'center',width:'90%'}}>

                    <Box width={"100%"} sx={{height:'2px',backgroundColor: theme?.palette?.primary?.light ,mr:'1rem'}} />
                    <Logo height={10} fill={theme?.palette?.primary?.light} />
                    <Box width={"100%"} sx={{height:'2px',backgroundColor: theme?.palette?.primary?.light ,ml:'1rem'}} />
                </Box>

                
            </Box>


            

        </Box>
    )
}

export default ThreeInfo