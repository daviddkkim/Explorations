import Head from 'next/head'
import styled, { keyframes } from 'styled-components';
import breakpoints from 'util/breakpoints';
import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import { CodeIcon } from '@iconicicons/react';
import * as Switch from '@radix-ui/react-switch';
import AnimatedThing from '@/components/animation';

const Appear = keyframes`
0% { opacity: 0 }
100% { opacity: 1}
`

const HeroText = styled.h1`
margin:0;
display: flex;
align-items:center;
background: linear-gradient(98.96deg, #EDEDEF 0%, #7E7D86 65.94%, #EDEDEF 98.51%);
background-clip: text;
-webkit-background-clip: text;
color: transparent;
font-size: 5rem;
line-height: 5rem;
font-weight: 500;
opacity:0;
line-height: 130%;
margin-bottom: 12px;
animation: ${Appear} .5s ease-out forwards;
animation-delay: 500ms;


${breakpoints.tablet} {
  font-size: 2.5rem;
  line-height: 2.75rem;
}

${breakpoints.mobile} {
  font-size: 2rem;
  line-height: 2.25rem;
}
`

const HeroAnimation = keyframes`
0% { opacity: 1; background: #000000; }
20% { opacity: 1; background: radial-gradient(transparent, #2E2E3250); }
100% { opacity: 1; background: #161616;}
}
`

const HeroImage = styled.div`
position: absolute;
left:0;
right:0;
top:0;
bottom:0;
width:100%;
height: 100%;
animation: ${HeroAnimation} 1.75s ease-in forwards;
`


const HeroSubText = styled.h2`
font-size: 1.75rem;
line-height: 2.25rem;
color: #9CA3AF;
font-weight: 400;
max-width: 860px;
text-align: center;
opacity:0;
margin-bottom: 64px;

animation: ${Appear} 1s ease-out forwards;
animation-delay: 1.25s;

${breakpoints.tablet} {
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 32px;

}

${breakpoints.mobile} {
  font-size: 1.25rem;
  line-height: 1.75rem;

  margin-bottom: 24px;

}
`

const StyledSection = styled.section`
  position:relative;
  max-width: 100vw;
  background: #161616;
   overflow: hidden;
  padding-top: 13.015vh;
  padding-bottom: 10.471vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items:center;
  box-sizing: border-box;

  ${breakpoints.desktop} {
    padding-top: 141px;
    padding-bottom: 150px;
    min-height: unset;

    &:after {
      bottom: 80px;
    }
  }

  ${breakpoints.tablet} {
    padding-top: 93px;
    padding-bottom: 80px;
    overflow: visible;
    height: 700px
  }

`

const TinyLogoBox = styled.div`
padding: 8px;
border: 1px solid #ededef;
border-radius: 12px;
background: linear-gradient(transparent, #232326);
backdrop-filter: blur(5px);
 margin-left: auto;
 margin-right: auto;
 display:flex;
  justify-content: center;
 align-items: center;

 ${breakpoints.tablet} {
  height:52px;
  width:52px;
}
 
`

const IconBox = styled.div`
display: flex;
max-width: 32px;
background: #232326;
width: 100%;
height: 32px;
justify-content:center;
margin-right: 12px;
align-items:center;
border: 1px solid rgba(46, 46, 50, 0.7);
border-radius: 10px;
svg {
    color: #EDEDEF;
}
`

const HeroSection = styled.div`
position: relative;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;

width: 100%;
height: 100%;
border-radius: 32px;
padding: 80px;
${breakpoints.tablet} {
    padding: 40px;

  }
`

const SubSection = styled.section`
min-height: 100vh;
padding: 62px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
color: #ededef;
`

const HeroButton = styled.button`
unset: all;
padding: 12px 24px;
font-size: 18px;
font-weight: 500;
color: #ededef;
justify-content: center;
display: flex;
background: linear-gradient( #1c1c1f, #28282c);
border: 1px solid #2e2e3250;
text-shadow: 0px 0px 0px rgba(0,0,0,0.05);
border-radius: 6px;
box-shadow: inset 0px 0px 0px 1px rgba(0,0,0,0.05), 0px 0px 1px rgba(0, 0, 0, 0.12), 0px 1px 0px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.06), 0px 3px 3px rgba(0, 0, 0, 0.04), 0px 4px 4px rgba(0, 0, 0, 0.03);
z-index:10;

opacity:0;
animation: ${Appear} .25s ease-out forwards;
animation-delay: 1.75s;

 &:hover {
  background: #232326;
  cursor: pointer;

 }

 &:focus-visible, &:focus {
  outline:none;
  box-shadow: 0px 0px 0px 2px #9F63F5, 0px 0px 0px 4px #E2CFFC;
 }

 &::after {
    content: "→";
    padding-left: 12px;
 }

margin-bottom: 32px;

${breakpoints.tablet} {
  padding: 8px 12px;
  font-size: 14px;
}
`

const SectionGrid = styled.div`
display: grid;
position: relative;
height: 100%;
width: 100%;
grid-template-areas: 
"first line1"
"line2 second"
"third third";
row-gap: 32px;
column-gap: 32px;
max-width: 1280px;
margin-bottom: 200px;

grid-template-columns: 1fr 1fr;
grid-template-rows: auto;


 ${breakpoints.tablet} {
    grid-template-areas: 
    "first first"
    "second second"
    "third third";
}
`

const SectionTileCard = styled.div`
display: flex;
padding: 24px;
align-items: center;
border-radius: 20px;
border: 1px solid rgba(46, 46, 50, 0.35);
background: linear-gradient(232.19deg, rgba(36, 38, 62, 0.2) 0.6%, rgba(133, 138, 184, 0) 39.15%), linear-gradient(129.63deg, #161618 0%, #1C1C1F 46.31%);
z-index:2;
backdrop-filter: blur(10px);
position: relative;
box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px rgba(0, 0, 0, 0.08), 0px 1px 2px -1px rgba(0, 0, 0, 0.06), 0px 3px 6px -3px rgba(0, 0, 0, 0.05), 0px 2px 4px -2px rgba(0, 0, 0, 0.04);


${breakpoints.tablet} {
    margin:0;
   width: 100% !important;
   margin:0 !important;
}
`


const SectionTileTitle = styled.h3`
color: #EDEDEF;
margin: 0;
margin-bottom: 24px;
font-size: 1.25rem;
line-height: 2rem;
font-weight: 600;

${breakpoints.tablet} {
  margin-bottom: 8px;
  font-size: 1rem;
line-height: 1.5rem;
}
`

const SectionTileParagraph = styled.p`

  margin:0;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #a09fa6;
  margin-bottom:24px;
  ${breakpoints.tablet} {
    font-size: .875rem;
  line-height: 1.25rem;
  }
`


const DisappearingGridTile = styled.div`

${breakpoints.tablet} {
   display:none;
  }
`


const StyledSwitch = styled(Switch.Root)`
display:flex;
justify-content: start;
align-items: center;
width: 40px;
height: 24px;
background-color: #504f57;
border-radius: 9999px;
border: 1px solid #161616;
position: relative;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
&[data-state="checked"] {
    background-color: #7c39e6;
}

`
const StyledThumb = styled(Switch.Thumb)`
display: block;
position: absolute;
left:0;
width: 20px;
height: 20px;
background-color: white;
border-radius: 9999px;
transition: transform 100ms;
will-change: transform;

&[data-state="checked"] {
    transform: translateX(18px);
}
`

const Label = styled.label`
display: flex;
gap: 8px;
font-size: 1rem;
align-items:center;
color: #EDEDEF;

`

const AboutPage = () => {

    const [latency, setLatency] = React.useState(false);

    return (
        <main>
            <StyledSection>
                <HeroImage>
                </HeroImage>
                <HeroSection>
                    <div style={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", marginBottom: "32px" }}>
                        <HeroText>
                            Supercharge your
                        </HeroText>
                        <HeroText style={{
                            background: "none",
                            color: '#3fcf8e',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text'
                        }}>
                            <TinyLogoBox style={{ marginRight: "16px", transform: "rotate(-10deg) translate(5%,5%)" }}>
                                <Image src="/supabase-logo-icon.svg" width={40} height={40} alt={"supabase logo"} />
                            </TinyLogoBox>
                            Supabase project
                        </HeroText>
                    </div>
                    <HeroSubText> ReadySet is a  <span style={{ color: "#ededef" }}>self-updating </span>and <span style={{ color: "#ededef" }}>SQL-native</span> cache engine that will give you <span style={{ color: "#ededef" }}>sub-millisecond queries </ span> in a few clicks.</HeroSubText>
                    <HeroButton> Join waitlist</HeroButton>
                </HeroSection>
            </StyledSection>
            <SubSection style={{
                background: '#161616',
                height: "100%"
            }}>
                <SectionGrid>
                    <div style={{
                        gridArea: "first"
                    }}>
                        <SectionTileCard style={{
                            display: "block"
                        }} >
                            <div style={{ display: 'flex', }}>
                                <IconBox>
                                    <svg
                                        fill="none"
                                        height={24}
                                        width={24}
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M10.75 13.25H6.75L13.25 4.75V10.75H17.25L10.75 19.25V13.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </IconBox>
                                <SectionTileTitle>
                                    Lightning-fast queries
                                </SectionTileTitle>
                            </div>
                            <SectionTileParagraph>
                                Once cached, expect sub-millisecond latencies from even your toughest lookups.
                            </SectionTileParagraph>
                            <svg
                                width="100%"
                                viewBox="0 0 624 200"
                                fill="none"
                            >

                                <path
                                    d="M1,50 h 624"
                                    stroke="url(#path)"
                                    vectorEffect="non-scaling-stroke"
                                ></path>
                                <path
                                    d="M1,125 h 624"
                                    stroke="url(#path)"
                                    vectorEffect="non-scaling-stroke"
                                ></path>
                                <line
                                    x1="0"
                                    y1="0"
                                    x2="80"
                                    y2="0"
                                    stroke="url(#blue)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    transform="translate(-80,0)"
                                    vectorEffect="non-scaling-stroke"
                                >
                                    <animateMotion
                                        dur={latency ? "50ms" : "2.5s"}
                                        repeatCount="indefinite"
                                        path="M1,50 h 624"
                                        rotate="auto"
                                        begin="2"
                                    ></animateMotion>
                                </line>
                                <line
                                    x1="0"
                                    y1="0"
                                    x2="80"
                                    y2="0"
                                    stroke="url(#blue)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    transform="translate(-80,0)"
                                    vectorEffect="non-scaling-stroke"
                                >
                                    <animateMotion
                                        dur={latency ? "100ms" : "2s"}
                                        repeatCount="indefinite"
                                        path="M1,125 h 624"
                                        rotate="auto"
                                        begin="3"
                                        keyPoints="1;0"
                                        keyTimes="0;1"
                                        calcMode={"linear"}
                                    ></animateMotion>
                                </line>
                                <defs>
                                    <linearGradient
                                        id="blue"
                                        x1="0"
                                        y1="0"
                                        x2="80"
                                        y2="0"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="transparent" offset="0"></stop>
                                        <stop stopColor="#4F46E5" offset="1"></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id="path"
                                        x1="0"
                                        y1="0"
                                        x2="100%"
                                        y2="0"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#37415120 " offset="0%"></stop>
                                        <stop stopColor="#374151" offset="30%"></stop>
                                        <stop stopColor="#374151" offset="70%"></stop>
                                        <stop stopColor="#37415120" offset="100%"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <Label htmlFor='switch'>
                                <StyledSwitch id="switch" onCheckedChange={(checked) => { setLatency(checked) }}>
                                    <StyledThumb></StyledThumb>
                                </StyledSwitch>
                                Supercharge with ReadySet
                            </Label>
                        </SectionTileCard>
                    </div>
                    <DisappearingGridTile style={{
                        gridArea: "line1"
                    }}>
                        <svg
                            width="100%"
                            viewBox="0 0 624 400"
                            fill="none"
                        >

                            <path
                                d="M1,200 C321,200 321,400 321,400"
                                stroke="url(#line)"
                                vectorEffect="non-scaling-stroke"
                            ></path>

                            <defs>

                                <linearGradient
                                    id="line"
                                    x1="0"
                                    y1="0"
                                    x2="100"
                                    y2="0"
                                    gradientUnits="userSpaceOnUse"

                                >
                                    <stop stopColor="#7e7d8670" offset="0%"></stop>
                                    <stop stopColor="#7e7d8670" offset="30%"></stop>
                                    <stop stopColor="#7e7d8670" offset="70%"></stop>
                                    <stop stopColor="#34343a" offset="100%"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </DisappearingGridTile>
                    <div style={{
                        gridArea: "second"
                    }}>
                        <SectionTileCard style={{
                            display: "block"
                        }}>
                            <div style={{ display: 'flex', }}>
                                <IconBox>
                                    <svg
                                        fill="none"
                                        height={24}
                                        width={24}
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 11.25v-3.5m0 0h3.5m-3.5 0 8.5 8.5m0 0v-3.5m0 3.5h-3.5m-8-7v-4.5h4.5m10 10v4.5h-4.5" />

                                    </svg>
                                </IconBox>
                                <SectionTileTitle>

                                    Scale to higher traffic
                                </SectionTileTitle>
                            </div>
                            <SectionTileParagraph>
                                Readyset takes the load off your database, helping you scale to higher traffic without needing to upgrade your underlying database.
                            </SectionTileParagraph>
                            <AnimatedThing />
                        </SectionTileCard>
                    </div>
                    <DisappearingGridTile style={{
                        gridArea: "line2",
                        position: "relative"
                    }}>
                        <svg
                            width="100%"
                            viewBox="0 0 624 724"
                            fill="none"
                            style={{ position: 'absolute' }}
                        >

                            <path
                                d="M624,200 C318,318 624,476 624,724"
                                stroke="url(#line)"
                                vectorEffect="non-scaling-stroke"
                            ></path>

                            <defs>

                                <linearGradient
                                    id="line"
                                    x1="0"
                                    y1="0"
                                    x2="100"
                                    y2="0"
                                    gradientUnits="userSpaceOnUse"

                                >
                                    <stop stopColor="#7e7d86" offset="0%"></stop>
                                    <stop stopColor="#7e7d86" offset="30%"></stop>
                                    <stop stopColor="#7e7d86" offset="70%"></stop>
                                    <stop stopColor="#7e7d86" offset="100%"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </DisappearingGridTile>
                    <div style={{
                        gridArea: "third",
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <SectionTileCard style={{
                            display: "block",
                            width: '100%',
                            maxWidth: '800px',
                            marginTop: '120px',

                        }}>
                            <div style={{ display: 'flex', }}>
                                <IconBox>
                                    <CodeIcon />
                                </IconBox>
                                <SectionTileTitle>
                                    No application logic changes needed
                                </SectionTileTitle>
                            </div>
                            <SectionTileParagraph>
                                Swap out your existing database connection string with ReadySet's connection string and let ReadySet handle the rest.
                            </SectionTileParagraph>

                        </SectionTileCard>
                    </div>
                </SectionGrid>
            </SubSection>
        </main>
    );
};

export default AboutPage;
