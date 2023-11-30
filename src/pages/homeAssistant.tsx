/* eslint-disable react-memo/require-usememo */
import Image from 'next/image';
import {FC, memo, MutableRefObject, useEffect, useRef, useState} from 'react';
import Favicon from "react-favicon";

import Nav from '../components/nav';
import homeAssistantImage from "../images/portfolio/HomeAssistant.png";
import backgroundImg from "../images/stars.jpg";

const homeAssistant: FC= memo(() => {

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

    const projectsList = [
        ["React Resume", "/logo.png", "https://github.com/awpoch/react-resume", "not selected"],
        ["Tank Wars Game", "/TankWars.png", "https://github.com/awpoch/TankWars", "not selected"],
        ["Endangered Animals Game", "/EndangeredAnimals.png", "https://github.com/awpoch/EndangeredAnimalsSlideGame.git", "not selected"],
        ["Sprite Editor", "/SpriteEditor.png", "https://github.com/awpoch/Sprite-Editor", "not selected"],
        ["Python Proxy", "/Proxy.png", "https://github.com/awpoch/PythonProxy", "not selected"],
        ["Home Assistant", "/HomeAssistant.png", "homeAssistant", "selected"],
        ["pfSense", "/pfsense.png", "pfsense", "not selected"],
        ["Proxmox", "/Proxmox.png", "proxmox", "not selected"],
        ["Home Security System", "/SecurityCamera.png", "securitySystem", "not selected"],
        ["Home Office", "/HomeOffice.png", "homeOffice", "not selected"],
        ["Electronics Lab", "/ElectronicsLab.png", "electronicsLab", "not selected"]        
    ];
    
    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => { setIsHover(true); };
    const handleMouseLeave = () => { setIsHover(false); };

    return  <div style={{position: "static"}}>  
                <Favicon url='/HomeAssistant.png' />
                <div style={{
                    position: "absolute",
                    overflow: "hidden"}}>
                    <Nav backgroundHeight={bgHeight} childToParent={childToParent} projectsList={projectsList} />
                </div>
                <div ref={bgHeightRef} style={{
                    position: "absolute",
                    left: navOpen === false ? 60 : 275,
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
                            <h1 style={{
                                fontSize: "3em",
                                marginTop: "20px"}}>
                                Home Assistant Smart Home
                            </h1>
                            <div style={{
                                marginTop: "20px"}}>
                                I Installed and setup Home Assistant, an opensource fully featured smart
                                home operating system. I utilize Wifi, Zwave, and Zigbee to communicate with
                                all my smart home devices. I can securly control my many smart home devices 
                                easily from any internet enabled device using a cloudflare tunnel or my 
                                wireguard VPN.
                            </div>
                            <h2 style={{
                                textAlign: "left",
                                fontSize: "1.5em",
                                marginTop: "20px"}}>
                                More Information:
                            </h2>
                            <ul style={{
                                listStyle: "disc",
                                textAlign: "left",
                                listStylePosition: "inside",
                                marginTop: "20px"}}>
                                <li>Has great community support</li>
                                <li>Has more functionality than competing smart home platforms since it's opensource</li>
                                <li>Easy to integrate new devices and services</li>
                            </ul>
                            <div style={{
                                marginTop: "20px"}}>
                                <a href="https://www.home-assistant.io/" onMouseEnter={handleMouseEnter} 
                                    onMouseLeave={handleMouseLeave} style={{
                                    color: isHover ? 'blue' : 'DodgerBlue',
                                    textDecoration: "underline"}}>
                                    Home Assistant Overview
                                </a>
                            </div>
                            <h3 style={{
                                textAlign: "left",
                                fontSize: "1.5em",
                                marginTop: "20px"}}>
                                Heres a Picture:
                            </h3>
                            <div style={{
                                marginTop: "20px"}}>
                                <Image alt="Image" src={homeAssistantImage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>;
});
  
export default homeAssistant;
