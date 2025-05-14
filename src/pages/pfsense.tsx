import Head from "next/head";
import Image from "next/image";
import { FC, memo, useEffect, useRef, useState } from "react";

import Nav from "../components/nav";
import backgroundImg from "../images/blueAbstract.jpg";
import pfsenseImage from "../images/portfolio/pfsense.png";

const pfsense: FC = memo(() => {
  const project = "pfSense";

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
        <link href="/pfsense.png" rel="icon" />
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
            maxWidth: "1026px",
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
            pfSense Router and Firewall
          </h1>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            I Installed and setup pfSense, a firewall/router. I set up multiple
            vlans and implemented well thought out firewall rules. I also have
            Wireguard tunnel running so I can securly access my network from
            outside my home.
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
            <li>Using HTTPS/TLS with my own domain poch.one</li>
            <li>{`Using a Wildcard Acme Cert from Let's Encrypt`}</li>
            <li>Easy traffic monitoring using ntopng</li>
          </ul>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <a
              href="https://www.pfsense.org/"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                color: isHover ? "saddlebrown" : "orange",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              pfSense Overview
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
            <Image alt="Image" src={pfsenseImage} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default pfsense;
