/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import Link from "next/link";
import { FC, memo, useState } from "react";

import burgerImage from "../images/menu.svg";

interface Props {
  currentProject: string;
  contentHeight: number;
}

const Nav: FC<Props> = memo(
  ({ currentProject: currentProject, contentHeight: contentHeight }) => {
    const projectsList = [
      [
        "React Portfolio",
        "/logo.png",
        "https://github.com/awpoch/react-resume",
        "not selected",
      ],
      [
        "Tank Wars Game",
        "/TankWars.png",
        "https://github.com/awpoch/TankWars",
        "not selected",
      ],
      [
        "Endangered Animals Game",
        "/EndangeredAnimals.png",
        "https://github.com/awpoch/EndangeredAnimalsSlideGame.git",
        "not selected",
      ],
      [
        "Sprite Editor",
        "/SpriteEditor.png",
        "https://github.com/awpoch/Sprite-Editor",
        "not selected",
      ],
      [
        "Python Proxy",
        "/Proxy.png",
        "https://github.com/awpoch/PythonProxy",
        "not selected",
      ],
      ["Home Assistant", "/HomeAssistant.png", "homeAssistant", "not selected"],
      ["pfSense", "/pfsense.png", "pfsense", "not selected"],
      ["Proxmox", "/Proxmox.png", "proxmox", "not selected"],
      [
        "Home Security System",
        "/SecurityCamera.png",
        "securitySystem",
        "not selected",
      ],
      ["Home Office", "/HomeOffice.png", "homeOffice", "not selected"],
      [
        "Electronics Lab",
        "/ElectronicsLab.png",
        "electronicsLab",
        "not selected",
      ],
    ];

    projectsList.map((project) => {
      if (currentProject === project[0]) {
        project[3] = "selected";
      }
    });

    const [window, setWindow] = useState(false);

    // All variables are being used and assigned dynamically!
    const [isHoverReturn, setIsHoverReturn] = useState(false);
    const [isHover0, setIsHover0] = useState(false);
    const [isHover1, setIsHover1] = useState(false);
    const [isHover2, setIsHover2] = useState(false);
    const [isHover3, setIsHover3] = useState(false);
    const [isHover4, setIsHover4] = useState(false);
    const [isHover5, setIsHover5] = useState(false);
    const [isHover6, setIsHover6] = useState(false);
    const [isHover7, setIsHover7] = useState(false);
    const [isHover8, setIsHover8] = useState(false);
    const [isHover9, setIsHover9] = useState(false);
    const [isHover10, setIsHover10] = useState(false);

    const handleMouseEnterReturn = () => {
      setIsHoverReturn(true);
    };
    const handleMouseEnter0 = () => {
      if (projectsList[0][3] == "not selected") setIsHover0(true);
    };
    const handleMouseEnter1 = () => {
      if (projectsList[1][3] == "not selected") setIsHover1(true);
    };
    const handleMouseEnter2 = () => {
      if (projectsList[2][3] == "not selected") setIsHover2(true);
    };
    const handleMouseEnter3 = () => {
      if (projectsList[3][3] == "not selected") setIsHover3(true);
    };
    const handleMouseEnter4 = () => {
      if (projectsList[4][3] == "not selected") setIsHover4(true);
    };
    const handleMouseEnter5 = () => {
      if (projectsList[5][3] == "not selected") setIsHover5(true);
    };
    const handleMouseEnter6 = () => {
      if (projectsList[6][3] == "not selected") setIsHover6(true);
    };
    const handleMouseEnter7 = () => {
      if (projectsList[7][3] == "not selected") setIsHover7(true);
    };
    const handleMouseEnter8 = () => {
      if (projectsList[8][3] == "not selected") setIsHover8(true);
    };
    const handleMouseEnter9 = () => {
      if (projectsList[9][3] == "not selected") setIsHover9(true);
    };
    const handleMouseEnter10 = () => {
      if (projectsList[10][3] == "not selected") setIsHover10(true);
    };

    const handleMouseLeaveReturn = () => {
      setIsHoverReturn(false);
    };
    const handleMouseLeave0 = () => {
      if (projectsList[0][3] == "not selected") setIsHover0(false);
    };
    const handleMouseLeave1 = () => {
      if (projectsList[1][3] == "not selected") setIsHover1(false);
    };
    const handleMouseLeave2 = () => {
      if (projectsList[2][3] == "not selected") setIsHover2(false);
    };
    const handleMouseLeave3 = () => {
      if (projectsList[3][3] == "not selected") setIsHover3(false);
    };
    const handleMouseLeave4 = () => {
      if (projectsList[4][3] == "not selected") setIsHover4(false);
    };
    const handleMouseLeave5 = () => {
      if (projectsList[5][3] == "not selected") setIsHover5(false);
    };
    const handleMouseLeave6 = () => {
      if (projectsList[6][3] == "not selected") setIsHover6(false);
    };
    const handleMouseLeave7 = () => {
      if (projectsList[7][3] == "not selected") setIsHover7(false);
    };
    const handleMouseLeave8 = () => {
      if (projectsList[8][3] == "not selected") setIsHover8(false);
    };
    const handleMouseLeave9 = () => {
      if (projectsList[9][3] == "not selected") setIsHover9(false);
    };
    const handleMouseLeave10 = () => {
      if (projectsList[10][3] == "not selected") setIsHover10(false);
    };

    const openClose = () => {
      if (window === false) {
        setWindow(true);
      } else {
        setWindow(false);
      }
    };

    return (
      <nav
        key={contentHeight}
        style={{
          height: contentHeight,
          minHeight: "100vh",
          transition: "all 0.5s ease",
          width: window === false ? 60 : 275,
          backgroundColor: "aliceblue",
          overflow: "hidden",
          whiteSpace: "nowrap",
          border: "1px solid gray",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "10px",
          }}
        >
          <Link href="/">
            <div
              style={{
                display: window === false ? "none" : "flex",
                height: "20px",
              }}
            >
              <Image alt="Return" height={20} src="/Return.png" width={20} />
              <div
                onMouseEnter={handleMouseEnterReturn}
                onMouseLeave={handleMouseLeaveReturn}
                style={{
                  display: window === false ? "none" : "flex",
                  fontSize: "1.1em",
                  color: isHoverReturn === false ? "blue" : "darkblue",
                  textDecoration: "underline",
                  fontWeight: "bold",
                  marginLeft: "10px",
                }}
              >
                Return to Portfolio
              </div>
            </div>
          </Link>
          <div
            onClick={() => openClose()}
            style={{
              height: "43px",
              width: "38px",
              marginLeft: "auto",
              cursor: "pointer",
            }}
          >
            <Image alt="burger" height={43} src={burgerImage} width={38} />
          </div>
        </div>
        <div
          style={{
            marginLeft: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "30px",
            }}
          >
            <Image alt="Projects" height={30} src="/Projects.png" width={30} />
            <div
              style={{
                display: window === false ? "none" : "inline-block",
                paddingLeft: "10px",
                position: "relative",
                bottom: "5px",
                color: "black",
                fontSize: "20px",
                lineHeight: "38px",
                fontFamily: "Lato",
                fontWeight: "bold",
              }}
            >
              Projects Overview:
            </div>
          </div>
        </div>
        <ul style={{ listStyleType: "none" }}>
          {projectsList.map((item, i) => (
            <div key={i}>
              <a
                href={item[2]}
                style={{
                  pointerEvents: item[3] === "selected" ? "none" : "auto",
                  textDecoration: item[3] === "selected" ? "none" : "underline",
                  display: "flex",
                  marginLeft: "7px",
                  marginTop: "15px",
                  height: "43px",
                }}
              >
                <Image alt={item[1]} height={43} src={item[1]} width={43} />
                <li
                  onMouseEnter={eval("handleMouseEnter" + i.toString())}
                  onMouseLeave={eval("handleMouseLeave" + i.toString())}
                  style={{
                    display: window === false ? "none" : "inline-block",
                    position: "relative",
                    top: "2.5px",
                    color:
                      item[3] === "selected"
                        ? "black"
                        : eval("isHover" + i.toString()) === false
                          ? "blue"
                          : "darkblue",
                    fontSize: "16px",
                    lineHeight: "38px",
                    fontFamily: "Lato",
                    paddingLeft: 20,
                  }}
                >
                  {item[0]}
                </li>
              </a>
            </div>
          ))}
        </ul>
      </nav>
    );
  },
);

export default Nav;
