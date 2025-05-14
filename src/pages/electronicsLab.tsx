import Head from "next/head";
import Image from "next/image";
import { FC, memo, useEffect, useRef, useState } from "react";

import Nav from "../components/nav";
import backgroundImg from "../images/blueAbstract.jpg";
import electronicsLabImage from "../images/portfolio/ElectronicsLab.jpg";

const electronicsLab: FC = memo(() => {
  const project = "Electronics Lab";

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

  return (
    <div style={{ position: "static" }}>
      <Head>
        <link href="/ElectronicsLab.png" rel="icon" />
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
            maxWidth: "4000px",
            textAlign: "center",
            color: "white",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              marginTop: "20px",
            }}
          >
            Electronics Lab
          </h1>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            {`I setup an electronic repair lab with a full size toolbox a vented
                          locker to hold my desktop pc. I have lots of tools and electrical
                          components to fix just about anything. I like to design custom pcbs
                          for various projects I have going on and solder on all the
                          components myself. One of my favorite things to make are my custom
                          led lights that ramp the brightness and color output so it's easy to
                          just set it and forget it.`}
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
            <li>Large toolbox makes is easy to stay organized</li>
            <li>
              Being able to lock up important valuables makes it easy to keep
              kids and visitors out
            </li>
            <li>This setup makes for a great learning environment</li>
          </ul>
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
            <Image alt="Image" src={electronicsLabImage} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default electronicsLab;
