import { useState, useEffect, Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


/* mui */
import { responsiveFontSizes, createTheme, ThemeProvider } from '@mui/material/styles';

//* REDUX */

/* Self Imports  */
import { Navbar, Footer } from './components/index'
import { ThreeInfo, Welcomepage, SimplePage1, SimplePage2, FadeHeader, PathPage, Product, Faq, Price, LearnMore } from './containers/index'
import { Iinfo } from './types/interface'
import ScrollToTop from './hooks/ScrollToTop'
import Samarbete from './containers/Samarbete/Samarbete'
import AboutUs from './containers/AboutUs/AboutUs'
import AktuellaProjekt from './containers/AktuellaProjekt/AktuellaProjekt';
import CssBaseline from '@mui/material/CssBaseline';







export let theme = createTheme({    
    palette: {
        primary: {
            main: '#9CB42F',                       
            dark: '#798B24FF' ,
            light: "#9CB42F78",
            contrastText:"#ffffff"
        
            
        },
        secondary: {
            main: '#DDA06C',
            light:"#DDA06C",
            dark:"#b54200b",
            contrastText:"#000000"
            
        },
        info: {
            main: "#ffffff",
            dark:"#e0e0e0",
        },
        text: {
            primary: "#000000",
            //secondary:
            
        },
        
        
    },
    typography: {    
        h1: {            
            //color: 'text.secondary',
            fontFamily: '"Josefin Sans", sans-serif',            
            textAlign: 'center',
            fontSize:"2.2rem",
            fontWeight:"600",
            "@media (max-width:600px)": {
                fontSize:"2rem !important",
            }, 
            
        },
        h2: {            
            //color: 'text.secondary',
            fontFamily: '"Josefin Sans", sans-serif',
            textAlign: 'center',
            fontSize:"2rem",
            fontWeight:"600",
            
        },
        h3: {            
            //color: 'text.secondary',
            fontFamily: '"Josefin Sans", sans-serif',
            textAlign: 'center',
            fontSize:"1.8rem",
            fontWeight:"600",
            
        },
        h4: {            
            //color: 'text.secondary',
            fontFamily: '"Josefin Sans", sans-serif',
            textAlign: 'center',
            fontSize:"1.6rem",
            fontWeight:"600",
            
        },
        h5: {            
            //color: 'text.secondary',
            fontFamily: '"Josefin Sans", sans-serif',
            textAlign: 'center',
            fontSize:"1.4rem",
            fontWeight:"600",
            
        },
        h6: {            
            //color: 'text.secondary',
            fontFamily: '"Josefin Sans", sans-serif',
            textAlign: 'center',
            fontSize:"1.2rem",
            fontWeight:"300",
            
        },
        subtitle1: {
            //color:"text.secondary",
            textAlign: 'center',
            fontSize:"1rem",
            fontWeight:"300",
            
        },
        subtitle2: {         
           // color:"text.secondary",   
            textAlign: 'center',
            fontSize:"0.8rem",
            fontWeight:"300",
        },      
        button: {            
            textAlign: 'center',
            ////fontSize:"1vmax",
            fontWeight:"600" 
        },
     
    },
    components: {
        MuiTypography: {
          defaultProps: {
            variantMapping: {
              h1: 'h1',
              h2: 'h2',
              h3: 'h3',
              h4: 'h4',
              h5: 'h5',
              h6: 'h6',              
              subtitle1: 'p',
              subtitle2: 'h2',
              body1: 'span',
              body2: 'span',
            },
          },
        },
        MuiButton: {
            defaultProps: {          
                //color:"secondary",   
                sx:{
                    fontSize:"1.2vmin",  
                    "@media (max-width:600px)": {
                        fontSize:"1.2vmax",
                    }, 
                    fontWeight:"600"
                }                                                             
            },
           
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                  '& .MuiOutlinedInput-root': {
                    
                    '&:hover fieldset': {
                        borderColor: '#d7a33c',
                    },
                   
                  },
                },
              },
            defaultProps: {          
                //color:"info",     
                sx:{
                
                    input: {
                        color:"text.secondary",   
                                              
                    },                          
                    label:{
                        color:"text.secondary",                             
                    },
                    fieldset: {
                        borderColor:"text.secondary",
                      
                    } 
                }        
            },
        },
        MuiMobileStepper:{
            defaultProps: {          
                color:"text.secondary !important",                   
                sx:{
                    '& .MuiMobileStepper-progress':{
                        color:"text.secondary !important",
                    }
                }
            }
        },
        MuiStepLabel:{
            defaultProps: {                                        
                sx:{                    
                    '& .MuiStepLabel-label.Mui-active':{
                        color:"secondary.dark",
                    },
                    '& .MuiStepLabel-label.Mui-completed':{
                        color:"secondary.main",
                    },
                    
                }
            }
        },
      
        MuiRadio:{
            defaultProps: {          
                //color:"info",                    
                sx:{
                    '& .MuiRadio-root':{
                       // color:"#ffffff"
                    },                    
                    '& .Mui-checked':{
                        //color:"text.secondary"
                    }/* ,
                    '& .Mui-colorPrimary':{
                        color:"#ffffff"
                    },
                    '& .Mui-colorSecondary':{
                        color:"#ffffff"
                    } */
                
                }
            }
        },
        MuiPagination:{
            defaultProps: {                          
                sx:{
                   
                    '& .MuiButtonBase-root': {
                        borderRadius:"50%",
                        fontSize:"1vmax",
                        width:"2.5vmax",
                        minHeight:"2.5vmax",
                    },
                    '& .MuiSvgIcon-root': {                                                
                        width:"2.5vmax",
                        height:"2.5vmax",
                    },
                }
            }
        },
        MuiBottomNavigation:{
            defaultProps: {                          
                sx:{
                   
                    '& .Mui-selected': {
                        color:"red"                    
                    },
                }
            }
        }
    },
    breakpoints:{
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1836,
        }
    }
});
theme = responsiveFontSizes(theme);

const App = () => {
    const defaultTheme = theme;

    //* Get Info */
    const [info, setInfo] = useState<Iinfo>({} as Iinfo)
    
    
    useEffect(() => {
        try {
            fetch('/info/info.json')
            .then(res => res.json())
            .then((res) => {                       
                setInfo(res)
            })
            .catch( error => {            
                setInfo({} as Iinfo)    
            })                         
        } catch (error) {            
            setInfo({} as Iinfo)
        }
        
        
        return () => {}
    }, [])
            

    return (
        <Router >
            <ThemeProvider theme={defaultTheme}>
                    <CssBaseline />
                    <Navbar info={info}  />
                    <ScrollToTop />
                    <Routes >                            
                        <Route  path="" index element={
                            <Fragment>                                
                                <Welcomepage info={info}/>
                                <ThreeInfo info={info}/>
                                <SimplePage1 info={info}/>
                                <SimplePage2 info={info}/>
                                <PathPage info={info}/>
                                <FadeHeader info={info}/>                                
                            </Fragment>
                        } />
                        <Route path="/product" element={ <Product info={info} /> } />
                        <Route path="/faq" element={ <Faq info={info} /> } />
                        <Route path="/price" element={ <Price info={info} /> } />
                        <Route path="/learnmore" element={ <LearnMore info={info} /> } />                                                
                        <Route path="/samarbete" element={<Samarbete info={info} />} />
                        <Route path="/about" element={<AboutUs info={info} />} />
                        <Route path="/aktuella-projekt" element={<AktuellaProjekt info={info} />} />



                    </Routes>                                                                          
                    <Footer info={info}  />
            </ThemeProvider>
        </Router>
    )
}

export default App
