import Image from 'next/image'
import React, {FC, memo, useState} from 'react';

import reactResumeImage from "../images/portfolio/ReactResume.png";
import backgroundImg from "../images/stars.jpg";

const reactResume: FC = memo(() => {

    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => { setIsHover(true); };
    const handleMouseLeave = () => { setIsHover(false); };
    

    return  <div>
                <Image alt="Image" placeholder="blur" priority src={backgroundImg} />
                <div style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    margin: "auto", 
                    width: "75%",
                    maxWidth: "1276px",
                    textAlign: "center",
                    color: "white"}}>
                    <br/>
                    <h1 style={{fontSize: "3rem"}}>
                        React Resume Portfolio
                    </h1>
                    <br/>
                    <div>
                        <a href="" onMouseEnter={handleMouseEnter} 
                           onMouseLeave={handleMouseLeave} style={{
                            color: isHover ? 'blue' : 'DodgerBlue',
                            textDecoration: "underline"}}>
                            React Resume Github Page
                        </a>
                    </div>
                    <br/>
                    <div>
                        I created a portfolio resume with react and hosted it with Amazon Web Services.
                    </div>
                    <br/>
                    <div>
                        <Image alt="Image" src={reactResumeImage} />
                    </div>
                </div>
            </div>;
  });
  
  export default reactResume;