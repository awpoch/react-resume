/* eslint-disable react-memo/require-usememo */
import Image from 'next/image'
import {FC, memo, MutableRefObject, useEffect, useRef, useState} from 'react';
import Favicon from "react-favicon";

import Nav from '../components/nav';
import proxmoxImage from "../images/portfolio/Proxmox.png";
import backgroundImg from "../images/stars.jpg";

const proxmox: FC = memo(() => {
    
    const [navOpen, setNavOpen] = useState(false);
    const childToParent = (childData: boolean | ((prevState: boolean) => boolean)) => { setNavOpen(childData);}
    
    const [bgHeight, setBgHeight] = useState(0);
    const bgHeightRef = useRef() as MutableRefObject<HTMLDivElement>;;
    
    useEffect(() => {
        function render() {
            if(bgHeightRef.current !== null)
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
        ["pfSense", "/pfsense.png", "pfsense", "not selected"],
        ["Proxmox", "/Proxmox.png", "proxmox", "selected"],
        ["Home Security System", "/SecurityCamera.png", "securitySystem", "not selected"],
        ["Home Office", "/HomeOffice.png", "homeOffice", "not selected"],
        ["Electronics Lab", "/ElectronicsLab.png", "electronicsLab", "not selected"]        
    ];

    return  <div style={{position: "static"}}>  
                <Favicon url='/Proxmox.png' />
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
                            maxWidth: "1180px",
                            textAlign: "center",
                            color: "white"}}>
                            <br/>
                            <h1 style={{fontSize: "3rem"}}>
                                Proxmox Virtual Environment
                            </h1>
                            <br/>
                            <div>
                                I setup a home lab using proxmox to run all my home services. 
                                With proxmox I'm able to virutalize my router/firewall with pfsense, 
                                run home assistant for my all my smart home devices and automations, 
                                and run docker in linux for a cloudflare tunnel. Below is a link to 
                                a proxmox overview page and a picture of my setup.
                            </div>
                            <br/>
                            <div>
                                <a href="https://www.proxmox.com/en/proxmox-virtual-environment/overview" onMouseEnter={handleMouseEnter} 
                                    onMouseLeave={handleMouseLeave} style={{
                                    color: isHover ? 'blue' : 'DodgerBlue',
                                    textDecoration: "underline"}}>
                                    Proxmox Virtual Environment Overview
                                </a>
                            </div>
                            <br/>
                            <div>
                                <Image alt="Image" src={proxmoxImage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>;
});
  
export default proxmox;