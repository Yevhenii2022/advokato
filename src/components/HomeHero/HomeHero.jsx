import { SectionStyled, Container, HomeTextElement, TitleText, TextSubtitle } from "./HomeHero.styled";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from 'gsap/Flip';
import { useTranslation } from "react-i18next";

import bg_buildings from "../../images/sean-pollock-PhYq704ffdA-unsplash 1.png";
import sky from "../../images/sky_bg1.jpg";

export const HomeHero = () => {
  const [t, i18n] = useTranslation('global');

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(Flip); 
  let titleImageAnime = gsap.timeline();
  useEffect(()=>{
  titleImageAnime.to(
    ".sky",{
      scale:1,
      x:"-1vw",
      duration: 8
    })
    .from(
      ".buildings",{
        scale:1,
        y:0,
        opacity:1,
        duration:7
      }
    );
    ScrollTrigger.create({
      animation: titleImageAnime,
      trigger:".imgWrapper",
      start:"top 0%",
      end:"bottom -90%",
      scrub:1,
    })
},[titleImageAnime])

const ref = useRef();
useLayoutEffect(() => {
  const state = Flip.getState(ref.current),
state1 = Flip.getState(".item1"),
state2 = Flip.getState(".item2");
Flip.to(state, {duration: 12,transform:"scale(0)",transformOrigin: 'top left',opacity:0});
Flip.to(state1,{duration: 7,transform:"translateX(-520px)",opacity:0,delay:2})
Flip.to(state2,{duration: 7,transform:"translateX(520px)",opacity:0,delay:2})
},
[])
// const [isOpen, setIsOpen] = useState(false);

  return (
    <SectionStyled className='imgWrapper'>
      <Container>
        <img className="sky" src={sky} alt="sky" />
        <img className="buildings" src={bg_buildings} alt="scyscrapers" />
        <HomeTextElement>
      <TitleText ref={ref}><span>{t('titleText1')},&nbsp;</span><span>{t('titleText2')},</span><span>{t('titleText3')}</span></TitleText>
      <TextSubtitle>
      <div className='item2'>{t('subTitleText2')}</div>
      <div className='item1'>{t('subTitleText1')}</div>
      </TextSubtitle>
      </HomeTextElement>
      </Container>
    </SectionStyled>
  );
};
