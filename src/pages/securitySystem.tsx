import Image from 'next/image'
import {FC, memo, useState} from 'react';

import securitySystemImage from "../images/portfolio/SecuritySystem.png";
import backgroundImg from "../images/stars.jpg";

const securitySystem: FC = memo(() => {
    
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
                    maxWidth: "759px",
                    textAlign: "center",
                    color: "white"}}>
                    <br/>
                    <h1 style={{fontSize: "3rem"}}>
                        Home Security System
                    </h1>
                    <br/>
                    <div>
                        I setup a home security system using Blue Iris.
                    </div>
                    <br/>
                    <div>
                        <a href="https://blueirissoftware.com/" onMouseEnter={handleMouseEnter} 
                           onMouseLeave={handleMouseLeave} style={{
                            color: isHover ? 'blue' : 'DodgerBlue',
                            textDecoration: "underline"}}>
                            Blue Iris Overview
                        </a>
                    </div>
                    <br/>
                    <div>
                        <Image alt="Image" src={securitySystemImage} />
                    </div>
                </div>
            </div>;
  });
  
  export default securitySystem;