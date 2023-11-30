/* eslint-disable react-memo/require-usememo */
import Image from 'next/image'
import {FC, memo, MutableRefObject, useEffect, useRef, useState} from 'react';
import Favicon from "react-favicon";

import Nav from '../components/nav';
import pfsenseImage from "../images/portfolio/pfsense.png";
import backgroundImg from "../images/stars.jpg";

const pfsense: FC = memo(() => {
    
    const [navOpen, setNavOpen] = useState(false);
    const childToParent = (childData: boolean | ((prevState: boolean) => boolean)) => { setNavOpen(childData);}
    
    const [bgHeight, setBgHeight] = useState(0);
    const bgHeightRef = useRef() as MutableRefObject<HTMLDivElement>;;
    
    useEffect(() => {
        function render() {
            setBgHeight(bgHeightRef.current.clientHeight);
        }
        render();
        window.addEventListener('resize', render);
    }, []);

    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => { setIsHover(true); };
    const handleMouseLeave = () => { setIsHover(false); };

    const projectsList = [
        ["React Resume", "/logo.png", "https://github.com/awpoch/react-resume", "not selected"],
        ["Tank Wars Game", "/TankWars.png", "https://github.com/awpoch/TankWars", "not selected"],
        ["Endangered Animals Game", "/EndangeredAnimals.png", "https://github.com/awpoch/EndangeredAnimalsSlideGame.git", "not selected"],
        ["Sprite Editor", "/SpriteEditor.png", "https://github.com/awpoch/Sprite-Editor", "not selected"],
        ["Python Proxy", "/Proxy.png", "https://github.com/awpoch/PythonProxy", "not selected"],
        ["Home Assistant", "/HomeAssistant.png", "homeAssistant", "not selected"],
        ["pfSense", "/pfsense.png", "pfsense", "selected"],
        ["Proxmox", "/Proxmox.png", "proxmox", "not selected"],
        ["Home Security System", "/SecurityCamera.png", "securitySystem", "not selected"],
        ["Home Office", "/HomeOffice.png", "homeOffice", "not selected"],
        ["Electronics Lab", "/ElectronicsLab.png", "electronicsLab", "not selected"]        
    ];

    return  <div style={{position: "static"}}>  
                <Favicon url='/pfsense.png' />
                <div style={{
                    position: "absolute",
                    overflow: "hidden"}}>
                    <Nav backgroundHeight={bgHeight} childToParent={childToParent} projectsList={projectsList} />
                </div>
                <div ref={bgHeightRef} style={{
                    position: "absolute",
                    left: navOpen === false ? 60 : 255,
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
                            maxWidth: "1026px",
                            textAlign: "center",
                            color: "white"}}>
                            <br/>
                            <h1 style={{fontSize: "3rem"}}>
                                pfSense Router and Firewall
                            </h1>
                            <br/>
                            <div>
                                I Installed and setup pfSense, a firewall/router. I set up multiple LANs and 
                                well thought out firewall rules. I also have Wireguard running so I can securly access
                                my network from outside my home.
                            </div>
                            <br/>
                            <div>
                                <a href="https://www.pfsense.org/" onMouseEnter={handleMouseEnter} 
                                    onMouseLeave={handleMouseLeave} style={{
                                    color: isHover ? 'blue' : 'DodgerBlue',
                                    textDecoration: "underline"}}>
                                    pfSense Overview
                                </a>
                            </div>
                            <br/>
                            <div>
                                <Image alt="Image" src={pfsenseImage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>;
});
  
export default pfsense;