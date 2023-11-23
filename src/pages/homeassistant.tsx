/* eslint-disable react-memo/require-usememo */
import Image from 'next/image'
import {FC, memo, MutableRefObject, useEffect, useRef, useState} from 'react';

import Nav from '../components/nav';
import homeAssistantImage from "../images/portfolio/HomeAssistant.png";
import backgroundImg from "../images/stars.jpg";

const homeAssistant: FC= memo(() => {
    
    const [navWidth, setNavWidth] = useState(false);
    const childToParent = (childData: boolean | ((prevState: boolean) => boolean)) => { setNavWidth(childData);}
    
    const [bgHeight, setBgHeight] = useState(0);
    const bgHeightRef = useRef() as MutableRefObject<HTMLDivElement>;;
    
    useEffect(() => {
        function rerender() {
            setBgHeight(bgHeightRef.current.clientHeight);
        }
        rerender();
        window.addEventListener('resize', rerender);
    }, []);

    const projectsList = [
        ["Tank Wars Game", "/HomeAssistantIcon.png"],
        ["Endangered Animal Game", "/HomeAssistantIcon.png"],
        ["Home Security System", "/HomeAssistantIcon.png"],
        ["Sprite Editor", "/HomeAssistantIcon.png"],
        ["React Resume", "/HomeAssistantIcon.png"],
        ["Python Proxy", "/HomeAssistantIcon.png"],
        ["Home Assistant", "/HomeAssistantIcon.png"],
        ["pfSense", "/HomeAssistantIcon.png"],
        ["Proxmox", "/HomeAssistantIcon.png"],
        ["Home Office", "/HomeAssistantIcon.png"],
        ["Electronics Lab", "/HomeAssistantIcon.png"]        
        ];
    
    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => { setIsHover(true); };
    const handleMouseLeave = () => { setIsHover(false); };

    return <div style={{position: "static"}}>  
                <div style={{
                    position: "absolute",
                    overflow: "hidden"}}>
                    <Nav backgroundHeight={bgHeight} childToParent={childToParent} projectsList={projectsList} />
                </div>
                <div ref={bgHeightRef} style={{
                    position: "absolute",
                    left: navWidth === false ? 60 : 250,
                    transition: "all 0.5s ease"}}>
                    <div style={{
                        position: "relative"}}>
                        <Image alt="Image" placeholder= "blur" priority src={backgroundImg} />  
                    </div>
                    <div style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        right: "0px"}}>
                        <div style={{
                            margin: "auto", 
                            width: "75%",
                            maxWidth: "759px",
                            textAlign: "center",
                            color: "white"}}>
                            <br/>
                            <h1 style={{fontSize: "3rem"}}>
                                Home Assistant Smart Home
                            </h1>
                            <br/>
                            <div>
                                I Installed and setup Home Assistant, an opensource fully featured smart
                                home operating system. I utilize Wifi, Zwave, and Zigbee to communicate with
                                all my smart home devices.
                            </div>
                            <br/>
                            <div>
                                <a href="https://www.home-assistant.io/" onMouseEnter={handleMouseEnter} 
                                   onMouseLeave={handleMouseLeave} style={{
                                    color: isHover ? 'blue' : 'DodgerBlue',
                                    textDecoration: "underline"}}>
                                    Home Assistant Overview
                                </a>
                            </div>
                            <br/>
                            <div>
                                <Image alt="Image" src={homeAssistantImage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>;
  });
  
  export default homeAssistant;