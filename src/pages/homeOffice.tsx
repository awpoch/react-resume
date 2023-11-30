/* eslint-disable react-memo/require-usememo */
import Image from 'next/image'
import {FC, memo, MutableRefObject, useEffect, useRef, useState} from 'react';
import Favicon from "react-favicon";

import Nav from '../components/nav';
import homeOfficeImage from "../images/portfolio/HomeOffice.jpg";
import backgroundImg from "../images/stars.jpg";

const homeOffice: FC = memo(() => {

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
        ["Home Office", "/HomeOffice.png", "homeOffice", "selected"],
        ["Electronics Lab", "/ElectronicsLab.png", "electronicsLab", "not selected"]        
    ];

    return  <div style={{position: "static"}}>  
                <Favicon url='/HomeOffice.png' />
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
                                Home Office
                            </h1>
                            <div style={{
                                marginTop: "20px"}}>
                                I setup a comfortable organized Home Office with a sit/stand desk that 
                                raises and lowers at the push of a button. My pc is hidden away from view in a 
                                vented locker which gives my office a clean aesthetic.
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
                                <li>A quiet comfortable place to work makes it much easier to focus</li>
                                <li>My Electronics Lab is in my Home Office which makes it possible to work on projects in one place</li>
                                <li>Multiple computer and a great home network which make multitasking much easier</li>
                            </ul>
                            <h3 style={{
                                textAlign: "left",
                                fontSize: "1.5em",
                                marginTop: "20px"}}>
                                Heres a Picture:
                            </h3>
                            <div style={{
                                marginTop: "20px"}}>
                                <Image alt="Image" src={homeOfficeImage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>; 
});
  
export default homeOffice;