import Image from 'next/image'
import {FC, memo, useState} from 'react';

import proxmoxImage from "../images/portfolio/proxmox.png";
import backgroundImg from "../images/stars.jpg";

const proxmox: FC = memo(() => {
    
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
                    maxWidth: "1180px",
                    textAlign: "center",
                    color: "white",
                    zIndex: 2
                    }}>
                    <div>&nbsp;</div>
                    <h1 style={{ 
                        fontSize: "3rem" 
                        }}>
                        Proxmox Virtual Environment
                    </h1>
                    <div>&nbsp;</div>
                    <div>
                        I setup a home lab using proxmox to run all my home services. 
                        With proxmox I'm able to virutalize my router/firewall with pfsense, 
                        run home assistant for my all my smart home devices and automations, 
                        and run docker in linux for a cloudflare tunnel. Below is a link to 
                        a proxmox overview page and a picture of my setup.
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <a href="https://www.proxmox.com/en/proxmox-virtual-environment/overview" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{
                            color: isHover ? 'blue' : 'DodgerBlue',
                            textDecoration: "underline"
                            }}>
                            Proxmox Virtual Environment Overview
                        </a>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <Image alt="Image" src={proxmoxImage} />
                    </div>
                </div>
            </div>;
  });
  
  export default proxmox;