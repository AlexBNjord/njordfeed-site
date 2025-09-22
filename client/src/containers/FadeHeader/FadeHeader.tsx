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
  info: Iinfo
}
gsap.registerPlugin(ScrollTrigger);

const FadeHeader = (props: Iprops) => {
  const { info } = props

  const fadeheader: any = useRef()
  const fadeheader_img: any = useRef()

  // GSAP
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      // DESKTOP – behåll nuvarande logik/pinning
      mm.add('(min-width: 691px)', () => {
        gsap.set('.fadeheader__bgimg-img', { filter: 'brightness(1)' });
        gsap.set('.fadeheader__info', { zIndex: 2, color: 'white' });

        gsap.to('.fadeheader__bgimg', {
          scrollTrigger: {
            trigger: fadeheader.current!,
            start: 'top top',
            end: 'bottom bottom',
            pin: fadeheader_img.current!,
            toggleActions: 'play none none reverse',
          },
        });

        gsap.to('.fadeheader__bgimg-img', {
          filter: 'brightness(0.2)',
          scrollTrigger: {
            trigger: fadeheader.current!,
            start: 'top top',
            end: 'bottom bottom',
            onLeave: () => gsap.to('.fadeheader__bgimg-img', { filter: 'brightness(0.8)' }),
            onEnterBack: () => gsap.to('.fadeheader__bgimg-img', { filter: 'brightness(0.2)' }),
            toggleActions: 'play none none reverse',
          },
        });

        gsap.to('#fadeimg', {
          autoAlpha: 0,
          scrollTrigger: {
            trigger: fadeheader.current!,
            start: 'center center',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // MOBIL – trigga på textblocket så faden startar när texten syns
      mm.add('(max-width: 690px)', () => {
        gsap.set('.fadeheader__bgimg-img', { filter: 'brightness(0.9)' });
        gsap.set('.fadeheader__info', { zIndex: 2, color: 'white' });

        // Fada överläggsbilden (#fadeimg) när TEXTEN kommer in i viewport
        gsap.to('#fadeimg', {
          autoAlpha: 0,
          scrollTrigger: {
            trigger: '.fadeheader__info', // 👈 ny trigger
            start: 'top 85%',             // börja strax innan texten syns
            end: 'top 45%',               // klart tidigt
            scrub: true,
          },
        });

        // Mörka ned bakgrunden över samma korta spann
        gsap.to('.fadeheader__bgimg-img', {
          filter: 'brightness(0.3)',
          scrollTrigger: {
            trigger: '.fadeheader__info', // 👈 ny trigger
            start: 'top 85%',
            end: 'top 45%',
            scrub: true,
          },
        });
      });
    }, fadeheader);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <div className='fadeheader flex-c' ref={fadeheader} id='fadeheader'>
      <div className='fadeheader__bgimg flex__center-c' ref={fadeheader_img}>
        <img className='fadeheader__bgimg-img' src={info?.FadeHeader?.image1} alt='fadeheader1' />
        <img className='fadeheader__bgimg-img' id='fadeimg' src={info?.FadeHeader?.image2} alt='fadeheader2' />
      </div>

      <Box className='fadeheader__info flex-c' sx={{ m: '0 1rem' }}>
        <Box maxWidth="xl" width="90%">
          <Typography variant='h2' color='primary.contrastText' sx={{ textAlign: 'left', mb: '2rem' }}>
            {info?.FadeHeader?.title0}
          </Typography>
          {info?.FadeHeader?.list.map((item, index) => (
            <Typography
              variant='h5'
              color='primary.contrastText'
              sx={{ textAlign: 'left', mb: '2rem' }}
              key={`fadeheader_${item?.st}_${index}`}
            >
              <strong style={{ color: theme?.palette?.secondary?.main }}>{item?.st}</strong>
              {item?.t}
            </Typography>
          ))}
        </Box>

        <Box maxWidth="xl" width="90%" className="flex__center-c">
          <Typography variant='h5' color='primary.contrastText' sx={{ mb: '2rem' }}>
            {info?.FadeHeader?.text2}
          </Typography>
          <Button variant="contained" onClick={() => ScrollToId(info?.FadeHeader?.link2)}>
            {info?.FadeHeader?.button2}
          </Button>
        </Box>
      </Box>
    </div>
  )
}

export default FadeHeader
