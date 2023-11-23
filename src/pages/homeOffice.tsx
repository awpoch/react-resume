import Image from 'next/image'
import {FC, memo} from 'react';

import homeOfficeImage from "../images/portfolio/HomeOffice.jpg";
import backgroundImg from "../images/stars.jpg";

const homeOffice: FC = memo(() => {
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
                        Comfortable Organized Home Office
                    </h1>
                    <br/>
                    <div>
                        I setup a home home office with a sit/stand desk, a workstation/toolbox that 
                        organizes all my electronics, including my pc in a vented locker.
                    </div>
                    <br/>
                    <div>
                        <Image alt="Image" src={homeOfficeImage} />
                    </div>
                </div>
            </div>;
  });
  
  export default homeOffice;