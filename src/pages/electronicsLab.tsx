/* eslint-disable react-memo/require-usememo */
import Image from 'next/image'
import {FC, memo, MutableRefObject, useEffect, useRef, useState} from 'react';
import Favicon from "react-favicon";

import Nav from '../components/nav';
import electronicsLabImage from "../images/portfolio/ElectronicsLab.jpg";
import backgroundImg from "../images/stars.jpg";

const electronicsLab: FC = memo(() => {

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
        ["Home Assistant", "/HomeAssistant.png", "homeAssistant", "not selected"],
        ["pfSense", "/pfsense.png", "pfsense", "not selected"],
        ["Proxmox", "/Proxmox.png", "proxmox", "not selected"],
        ["Home Security System", "/SecurityCamera.png", "securitySystem", "not selected"],
        ["Home Office", "/HomeOffice.png", "homeOffice", "not selected"],
        ["Electronics Lab", "/ElectronicsLab.png", "electronicsLab", "selected"]        
    ];

    return  <div style={{position: "static"}}>  
                <Favicon url='/ElectronicsLab.png' />
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
                            maxWidth: "4000px",
                            textAlign: "center",
                            color: "white"}}>
                            <h1 style={{
                                fontSize: "3rem",
                                marginTop: "20px"}}>
                                Electronics Lab
                            </h1>
                            <div style={{
                                marginTop: "20px"}}>
                                I setup an electronic repair lab with a full size toolbox a vented locker to hold
                                my desktop pc. I have lots of tools and electrical components to fix just about anything.
                                I like to design custom pcbs for various projects I have going on and solder on all the 
                                components myself. One of my favorite things to make are my custom led lights that ramp
                                the brightness and color output so it's easy to just set it and forget it. 
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
                                <li>Toolbox makes is easy to stay organized</li>
                                <li>Being able to lock up important valuables makes it easy to keep kids and visitors out</li>
                                <li>This setup makes for a great learning environment</li>
                            </ul>
                            <h3 style={{
                                textAlign: "left",
                                fontSize: "1.5em",
                                marginTop: "20px"}}>
                                Heres a Picture:
                            </h3>
                            <div style={{
                                marginTop: "20px"}}>
                                <Image alt="Image" src={electronicsLabImage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>;
});
  
export default electronicsLab;