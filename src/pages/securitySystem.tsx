//import Favicon from "react-favicon";
import Head from "next/head";
import Image from "next/image";
import { FC, memo, useEffect, useRef, useState } from "react";

import Nav from "../components/nav";
import backgroundImg from "../images/blueAbstract.jpg";
import securitySystemImage from "../images/portfolio/SecuritySystem.png";

const securitySystem: FC = memo(() => {
  const project = "Home Security System";

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
        <link href="/SecurityCamera.png" rel="icon" />
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
            maxWidth: "1280px",
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
            Home Security System
          </h1>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            I setup a home security system using Blue Iris. I am using a 24/7
            continuous recording, non-subscritption solution. All my cameras are
            on their own subnet and have no access to the internet for optimal
            security. I can access the cameras remotely using a secure Wirguard
            VPN tunnel. This all works great remotly because I have Google
            Fiber, which has a Gigabit up and down link. Blue Iris is the best
            Security System software out there but it only runs on Windows. I
            would prefer that it ran on Linux, because Windows is a resource
            hog.
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
            <li>AI motion detection makes alerts easy to configure</li>
            <li>
              Great mobile apps that make viewing footage remotly quick and easy
            </li>
            <li>Can easily store footage locally or in the cloud</li>
          </ul>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <a
              href="https://blueirissoftware.com/"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                color: isHover ? "saddlebrown" : "orange",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              Blue Iris Overview
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
            <Image alt="Image" src={securitySystemImage} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default securitySystem;
