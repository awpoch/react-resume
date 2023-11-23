import Image from 'next/image'
import {FC, memo, useState} from 'react';

import pfsenseImage from "../images/portfolio/pfsense.png";
import backgroundImg from "../images/stars.jpg";

const pfsense: FC = memo(() => {
    
    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => { setIsHover(true); };
    const handleMouseLeave = () => { setIsHover(false); };

    return  <div>
                <Image alt="Image" placeholder= "blur" priority src={backgroundImg} />
                <div style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
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
                        <a href="https://www.netgate.com/pfsense-plus-software" onMouseEnter={handleMouseEnter} 
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
            </div>;
  });
  
  export default pfsense;