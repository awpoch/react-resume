import Image from 'next/image'
import Link from 'next/link';
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

    return  <nav key={backgroundHeight} style={{
                height: backgroundHeight,
                transition: "all 0.5s ease",
                width: window === false ? 60 : 255,
                backgroundColor: "LightGray"}}>
                <div style={{
                    display: "flex",
                    padding: "10px"}}>
                    <Link href="/">
                    <div style={{
                        display: window === false ? "none" : "flex",
                        height: "20px"}}>
                        <Image alt="Return" height={20} src="/Return.png" width= {20} />
                        <div style={{
                            display: window === false ? "none" : "flex",
                            fontSize: "1.1em",
                            color: "black",
                            whiteSpace: "nowrap",
                            fontWeight: "bold",
                            marginLeft: "10px"}}>
                            Return to Portfolio
                        </div>
                    </div>
                    </Link>
                    <div onClick={() => openClose()} style={{
                        height: "43px",
                        marginLeft: "auto"}}>
                        <Image alt="burger" height={43} src={burgerImage} width={38} />
                    </div>     
                </div>
                <div>
                    <div style={{
                        marginLeft: "15px"}}>
                        <div style={{
                            display: "flex",
                            height: "30px"}}>
                            <Image alt="Projects" height={30} src="/Projects.png" width={30} />
                            <div style={{
                                display: window === false ? "none" : "inline-block",
                                paddingLeft: "10px",
                                position: "relative",
                                color: "black",
                                fontSize: "20px",
                                lineHeight: "38px",
                                fontFamily: "Lato",
                                whiteSpace: "nowrap",
                                fontWeight: "bold"}}>
                                Projects Overview:
                            </div>
                        </div>
                    </div>
                    <ul style={{listStyleType: "none"}}>
                        {li.map((item, i) => (
                            <div key={i}>
                                <a href={item[2]} style={{
                                    pointerEvents: item[3] === "selected" ? "none" : "auto",
                                    textDecoration: item[3] === "selected" ? "none" : "underline",
                                    display: "flex",
                                    marginLeft: "10px",
                                    marginTop: "15px",
                                    height: "43px"}}>
                                    <Image alt={item[1]} height={43} src={item[1]} width={43} />
                                    <li style={{
                                        display: window === false ? "none" : "inline-block",
                                        padding: "0px 0px 0px 10px",
                                        position: "relative",
                                        top: "2.5px",
                                        color: item[3] === "selected" ? "blue" : "black",
                                        fontSize: "16px",
                                        letterSpacing: "0px",
                                        lineHeight: "38px",
                                        fontFamily: "Lato",
                                        fontWeight: 400,
                                        paddingLeft: 15,
                                        whiteSpace: "nowrap"}}>
                                        {item[0]}
                                    </li>
                                </a>
                            </div>
                        ))}
                    </ul>
                </div>
            </nav>;
    });

export default Nav;