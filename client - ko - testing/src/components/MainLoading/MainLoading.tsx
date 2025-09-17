import { useEffect, useState, useRef } from 'react'

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';

import Container   from '@mui/material/Container';


import { Iinfo } from '../../types/interface';
import { Logo } from '../../components/index'
import { theme } from '../../App'


interface Iprops {
    info?: Iinfo | undefined,
    loading: boolean
    
}

const MainLoading = (props:Iprops) => {
    const { loading } = props;

    const loading_ref = useRef(null)

    const [stateLoading, setStateLoading] = useState(loading)
    useEffect(() => {
        setStateLoading(loading)
        
        return () => {
            
        }
    }, [loading])



    
    
    return (
        <Container ref={loading_ref}>    
            <Backdrop
                sx={{ backgroundColor: "#2a2a2a", color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 , display:"flex", flexDirection:"column", width: "100vw"}}
                open={stateLoading}                
            >
                <Box className="opacity_animation">
                    <Logo height={25} width={25} fill={ theme.palette.primary.main } navigateOn={false} />
                </Box>
                
            </Backdrop>
        </Container>
    );
}

export default MainLoading