import Head from "next/head";
import Image from "next/image";
import { FC, memo, useEffect, useRef, useState } from "react";

import Nav from "../components/nav";
import backgroundImg from "../images/blueAbstract.jpg";
import homeAssistantImage from "../images/portfolio/HomeAssistant.png";

const homeAssistant: FC = memo(() => {
  const project = "Home Assistant";

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
        <link href="/HomeAssistant.png" rel="icon" />
      </Head>
      <Head>
        <link href="/HomeOffice.png" rel="icon" />
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
            maxWidth: "759px",
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
            Home Assistant Smart Home
          </h1>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            I Installed and setup Home Assistant, an opensource fully featured
            smart home operating system. I utilize Wifi, Zwave, and Zigbee to
            communicate with all my smart home devices. I can securly control my
            many smart home devices easily from any internet enabled device
            using a cloudflare tunnel or my wireguard VPN.
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
            <li>Has great community support</li>
            <li>
              {`Has more functionality than competing smart home platforms since
              it's opensource`}
            </li>
            <li>Easy to integrate new devices and services</li>
          </ul>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <a
              href="https://www.home-assistant.io/"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                color: isHover ? "saddlebrown" : "orange",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              Home Assistant Overview
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
            <Image alt="Image" src={homeAssistantImage} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default homeAssistant;
