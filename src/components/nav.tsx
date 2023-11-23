import Image from 'next/image'
import {FC, memo, useState} from 'react';

import burgerImage from "../images/menu.svg";

interface Props{
    projectsList: string[][],
    backgroundHeight: number,
    childToParent: (arg0: boolean) => void
}

const Nav: FC<Props> = memo(({projectsList: li, backgroundHeight: backgroundHeight, childToParent}) => {
    const [window, setWindow] = useState(false);

    const openClose = () => {
      if (window === false) {
        setWindow(true);
        childToParent(true);
      } else {
        setWindow(false);
        childToParent(false);
      }
    };

    return (
      <nav key={backgroundHeight} style={{
        height: backgroundHeight,
        transition: "all 0.5s ease",
        width: window === false ? 60 : 250,
        backgroundColor: "white"}}>
        <div style={{
                    display: "flex"}}>
            <div style={{
                    display: window === false ? "none" : "inline-block",
                    padding: "7px",
                    fontSize: "1.4em"}}>
                Projects
            </div>
            <div onClick={() => openClose()} 
                style={{
                    marginLeft: "auto",
                    padding: "10px"}}>
              <Image alt="burger" height={43} src={burgerImage} width={34} />
            </div>
        </div>
        <div style={{
                    }}>
            <ul style={{listStyleType: "none"}}>
              {li.map((item, i) => (
                <div key={i} 
                    style={{
                        display: "flex",
                        marginLeft: "10px",
                        marginTop: "15px",
                        height: "43px"}}>
                    <Image alt={item[1]} height={43} src={item[1]} width={43} />
                    <li
                        style={{
                        display: window === false ? "none" : "inline-block",
                        padding: "0px 0px 0px 12px",
                        position: "relative",
                        top: "2.5px",
                        fontSize: "16px",
                        letterSpacing: "0px",
                        lineHeight: "38px",
                        color: "black",
                        fontFamily: "Lato",
                        fontWeight: 400,
                        paddingLeft: window === false ? 17 : 27,
                        }}>
                        {item[0]}
                    </li>
                </div>
              ))}
            </ul>
        </div>
      </nav>
    );
});

export default Nav;