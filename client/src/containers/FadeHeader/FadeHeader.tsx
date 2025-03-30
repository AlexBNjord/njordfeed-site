import { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// SELF IMPORTS
import { Iinfo } from '../../types/interface';
import { theme } from '../../App';
import { ScrollToId } from '../../Functions/ScrollToId'

interface Iprops {
    info:Iinfo
}
gsap.registerPlugin(ScrollTrigger);
const FadeHeader = (props:Iprops) => {
    const { info } = props

    const fadeheader:any = useRef()
    const fadeheader_img:any = useRef()
    



    //* GSAP */

    /* Pin background img  */
    useLayoutEffect(() => {
        const ctx = gsap.context(()=>{

        gsap.set('.fadeheader__bgimg-img',{
            filter:" brightness(1)"
        
        })
        gsap.set('.fadeheader__info',{
            zIndex:"2",
            color: "white",
            
        })

            
        gsap.to('.fadeheader__bgimg',{                      
            scrollTrigger: {         
            trigger: fadeheader.current,       
            start: "top top", 
            end: "bottom bottom",
            /*  markers: true, */
            pin: fadeheader_img.current,
            toggleActions: "play none none reverse",          
            }
        })
        gsap.to('.fadeheader__bgimg-img',{                      
        
            filter: "brightness(0.2)",
            scrollTrigger: {         
            trigger: fadeheader.current,       
            start: "top top",     
            end: "bottom bottom",
            /*   markers: true, */
            onLeave: ()=> {gsap.to('.fadeheader__bgimg-img',{filter:"brightness(0.8)"})},          				  
                    onEnterBack: ()=> {gsap.to('.fadeheader__bgimg-img',{filter:"brightness(0.2)"})},          				  
                    /* onLeaveBack: ()=> {gsap.to('.navbtn8 p',{color:"#ffffff"});gsap.to('.navbtn8 .react-icon-navbar',{color:"#ffffff"})}, */
            toggleActions: "play none none reverse",          
            }
        })
        gsap.to('#fadeimg',{                      
            alpha:0,
            scrollTrigger: {         
            trigger: fadeheader.current,       
            start: "center center",         
            toggleActions: "play none none reverse",          
            }
        })


        
        




        },fadeheader)
    
        return () => {
        ctx.revert()
        };
    }, [])
    
        
    return (    
        <div className='fadeheader flex-c 'ref={fadeheader} id='fadeheader'>

        <div className='fadeheader__bgimg flex__center-c' ref={fadeheader_img}>
            <img className='fadeheader__bgimg-img' src={info?.FadeHeader?.image1} alt={`fadeheader1`} />
            <img className='fadeheader__bgimg-img' id="fadeimg" src={info?.FadeHeader?.image2} alt={`fadeheader2`} />
        </div>

        <Box className='fadeheader__info flex-c' sx={{m:"0 1rem"}}>
            <Box maxWidth="xl" width={"90%"} >    
                {info?.FadeHeader?.list.map( (item,index) => {
                    return(
                        <Typography variant='h5' color='primary.contrastText' sx={{textAlign:'left',mb:"2rem"}} key={`fadeheader_${item?.st}_${index}`}>
                            <strong style={{color:theme?.palette?.secondary?.main}}>{item?.st}</strong>
                            {item?.t}
                        </Typography>
                    )
                })}            
                                               
            </Box>
            <Box maxWidth="xl" width={"90%"} className="flex__center-c">    
                <Typography variant='h5' color='primary.contrastText' sx={{mb:"2rem"}}>                
                    {info?.FadeHeader?.text2}
                </Typography>
                <Button variant="contained" onClick={()=> ScrollToId(info?.FadeHeader?.link2)}>
                    {info?.FadeHeader?.button2}
                </Button>
                
            </Box>
            
        </Box>
    

        </div>
    )
    }

export default FadeHeader