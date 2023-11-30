/* eslint-disable react-memo/require-usememo */
import Image from 'next/image'
import {FC, memo, MutableRefObject, useEffect, useRef, useState} from 'react';
import Favicon from "react-favicon";

import Nav from '../components/nav';
import securitySystemImage from "../images/portfolio/SecuritySystem.png";
import backgroundImg from "../images/stars.jpg";

const securitySystem: FC = memo(() => {
    
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
        ["Proxmox", "/Proxmox.png", "proxmox", "not selected"],
        ["Home Security System", "/SecurityCamera.png", "securitySystem", "selected"],
        ["Home Office", "/HomeOffice.png", "homeOffice", "not selected"],
        ["Electronics Lab", "/ElectronicsLab.png", "electronicsLab", "not selected"]        
    ];

    return  <div style={{position: "static"}}>  
                <Favicon url='/SecurityCamera.png' />
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
                            maxWidth: "1280px",
                            textAlign: "center",
                            color: "white"}}>
                            <h1 style={{
                                fontSize: "3em",
                                marginTop: "20px"}}>
                                Home Security System
                            </h1>
                            <div style={{
                                marginTop: "20px"}}>
                                I setup a home security system using Blue Iris. I am using a 24/7 continuous
                                recording, non-subscritption solution. All my cameras are on their own 
                                subnet and have no access to the internet for optimal security. I can access
                                the cameras remotely using a secure Wirguard VPN tunnel. This all works great
                                remotly because I have Google Fiber, which has a Gigabit up and down link. 
                                Blue Iris is the best Security System software out there but it only runs on Windows.
                                I would prefer that it ran on Linux, because Windows is a resource hog.
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
                                <li>AI motion detection makes alerts easy to configure</li>
                                <li>Great mobile apps that make viewing footage remotly quick and easy</li>
                                <li>Can easily store footage locally or in the cloud</li>
                            </ul>
                            <div style={{
                                marginTop: "20px"}}>
                                <a href="https://blueirissoftware.com/" onMouseEnter={handleMouseEnter} 
                                    onMouseLeave={handleMouseLeave} style={{
                                    color: isHover ? 'blue' : 'DodgerBlue',
                                    textDecoration: "underline"}}>
                                    Blue Iris Overview
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
                                <Image alt="Image" src={securitySystemImage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>;
});
  
export default securitySystem;