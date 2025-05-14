import Head from "next/head";
import Image from "next/image";
import { FC, memo, useEffect, useRef, useState } from "react";

import Nav from "../components/nav";
import backgroundImg from "../images/blueAbstract.jpg";
import homeOfficeImage from "../images/portfolio/HomeOffice.jpg";

const homeOffice: FC = memo(() => {
  const project = "Home Office";

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
            Home Office
          </h1>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            I setup a comfortable organized Home Office with a sit/stand desk
            that raises and lowers at the push of a button. My pc is hidden away
            from view in a vented locker which gives my office a clean
            aesthetic.
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
              A quiet comfortable place to work makes it much easier to focus
            </li>
            <li>
              My Electronics Lab is in my Home Office which makes it possible to
              work on projects in one place
            </li>
            <li>
              Multiple computer and a great home network which make multitasking
              much easier
            </li>
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
            <Image alt="Image" src={homeOfficeImage} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default homeOffice;
