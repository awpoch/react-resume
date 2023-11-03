import Image from 'next/image'
import {FC, memo, useState} from 'react';

import homeAssistantImage from "../images/portfolio/HomeAssistant.png";
import backgroundImg from "../images/stars.jpg";

const homeAssistant: FC = memo(() => {
    
    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => { setIsHover(true); };
    const handleMouseLeave = () => { setIsHover(false); };

    return  <div style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                margin: "auto", 
                width: "100%", 
                textAlign: "center",
                zIndex: 1
                }}>
                <Image alt="Image" height={6472} placeholder= "blur" priority src={backgroundImg} width={3641} />
                <div style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    margin: "auto", 
                    width: "75%",
                    maxWidth: "759px",
                    textAlign: "center",
                    color: "white",
                    zIndex: 2
                    }}>
                    <div>&nbsp;</div>
                    <h1 style={{ 
                        fontSize: "3rem" 
                        }}>
                        Home Assistant Smart Home
                    </h1>
                    <div>&nbsp;</div>
                    <div>
                        I Installed and setup Home Assistant, an opensource fully featured smart
                        home operating system. I utilize Wifi, Zwave, and Zigbee to communicate with
                        all my smart home devices.
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <a href="https://www.home-assistant.io/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{
                            color: isHover ? 'blue' : 'DodgerBlue',
                            textDecoration: "underline"
                            }}>
                            Home Assistant Overview
                        </a>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <Image alt="Image" src={homeAssistantImage} />
                    </div>
                </div>
            </div>;
  });
  
  export default homeAssistant;