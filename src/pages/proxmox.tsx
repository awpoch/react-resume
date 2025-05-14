//import Favicon from "react-favicon";
import Head from "next/head";
import Image from "next/image";
import { FC, memo, useEffect, useRef, useState } from "react";

import Nav from "../components/nav";
import backgroundImg from "../images/blueAbstract.jpg";
import proxmoxImage from "../images/portfolio/Proxmox.png";

const proxmox: FC = memo(() => {
  const project = "Proxmox";

  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function render() {
      if (contentRef.current) setContentHeight(contentRef.current.clientHeight);
    }
    document.body.style.background = "gray";
    render();
    window.addEventListener("resize", render);
  }, []);

  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div style={{ position: "static" }}>
      <Head>
        <link href="/Proxmox.png" rel="icon" />
      </Head>
      <div
        style={{
          position: "absolute",
          top: "0px",
          zIndex: "1",
        }}
      >
        <Nav contentHeight={contentHeight} currentProject={project} />
      </div>
      <div
        style={{
          position: "fixed",
          top: "0px",
          left: "60px",
          right: "0px",
          height: "auto",
          width: "100vw",
        }}
      >
        <Image alt="Image" placeholder="blur" priority src={backgroundImg} />
        <Image alt="Image" placeholder="blur" priority src={backgroundImg} />
        <Image alt="Image" placeholder="blur" priority src={backgroundImg} />
      </div>
      <div
        ref={contentRef}
        style={{
          position: "absolute",
          top: "0px",
          left: "60px",
          right: "0px",
        }}
      >
        <div
          style={{
            margin: "auto",
            width: "75%",
            maxWidth: "1180px",
            textAlign: "center",
            color: "white",
          }}
        >
          <h1
            style={{
              fontSize: "3em",
              marginTop: "20px",
            }}
          >
            Proxmox Virtual Environment
          </h1>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            {`I setup a home lab using proxmox to run all my home services. With
                          proxmox I'm able to virutalize my router/firewall with pfsense, run
                          home assistant for my all my smart home devices and automations, run
                          Windows and Blue Iris for my Security System, and run Docker in
                          Linux for to create a Cloudflare tunnel. Below is a link to a
                          proxmox overview page and a picture of my setup.`}
          </div>
          <h2
            style={{
              textAlign: "left",
              fontSize: "1.5em",
              marginTop: "20px",
            }}
          >
            More Information:
          </h2>
          <ul
            style={{
              listStyle: "disc",
              textAlign: "left",
              listStylePosition: "inside",
              marginTop: "20px",
            }}
          >
            <li>
              I can access all my services from one place, no need for hardware
              access
            </li>
            <li>
              I able to create clusers of computers to add additional system
              resources
            </li>
            <li>
              Use of virtual network switches and vlans allows me to keep my
              network segmented
            </li>
          </ul>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <a
              href="https://www.proxmox.com/en/proxmox-virtual-environment/overview"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                color: isHover ? "saddlebrown" : "orange",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              Proxmox Virtual Environment Overview
            </a>
          </div>
          <h3
            style={{
              textAlign: "left",
              fontSize: "1.5em",
              marginTop: "20px",
            }}
          >
            Heres a Picture:
          </h3>
          <div
            style={{
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <Image alt="Image" src={proxmoxImage} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default proxmox;
