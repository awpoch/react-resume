import Image from 'next/image'
import {FC, memo} from 'react';

import electronicsLabImage from "../images/portfolio/ElectronicsLab.jpg";
import backgroundImg from "../images/stars.jpg";

const electronicsLab: FC = memo(() => {
    return  <div>
                <Image alt="Image" placeholder= "blur" priority src={backgroundImg} />
                <div style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    margin: "auto", 
                    width: "75%",
                    maxWidth: "4000px",
                    textAlign: "center",
                    color: "white"}}>
                    <br/>
                    <h1 style={{fontSize: "3rem"}}>
                        Electronics Lab
                    </h1>
                    <br/>
                    <div>
                        I setup an electronic repair lab with a full size toolbox a vented locker to hold
                        my desktop pc.
                    </div>
                    <br/>
                    <div>
                        <Image alt="Image" src={electronicsLabImage} />
                    </div>
                </div>
            </div>;
  });
  
  export default electronicsLab;