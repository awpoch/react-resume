/* eslint-disable react-memo/require-memo */
/* eslint-disable @typescript-eslint/no-unused-vars */
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

    // All variables are being used and assigned  dynamically!
    const [isHoverReturn, setIsHoverReturn] = useState(false);
    const [_isHover0, setIsHover0] = useState(false);
    const [_isHover1, setIsHover1] = useState(false);
    const [_isHover2, setIsHover2] = useState(false);
    const [_isHover3, setIsHover3] = useState(false);
    const [_isHover4, setIsHover4] = useState(false);
    const [_isHover5, setIsHover5] = useState(false);
    const [_isHover6, setIsHover6] = useState(false);
    const [_isHover7, setIsHover7] = useState(false);
    const [_isHover8, setIsHover8] = useState(false);
    const [_isHover9, setIsHover9] = useState(false);
    const [_isHover10, setIsHover10] = useState(false);

    const handleMouseEnterReturn = () => { setIsHoverReturn(true); };
    const _handleMouseEnter0 = () => { if(li[0][3] == "not selected") setIsHover0(true); };
    const _handleMouseEnter1 = () => { if(li[1][3] == "not selected") setIsHover1(true); };
    const _handleMouseEnter2 = () => { if(li[2][3] == "not selected") setIsHover2(true); };
    const _handleMouseEnter3 = () => { if(li[3][3] == "not selected") setIsHover3(true); };
    const _handleMouseEnter4 = () => { if(li[4][3] == "not selected") setIsHover4(true); };
    const _handleMouseEnter5 = () => { if(li[5][3] == "not selected") setIsHover5(true); };
    const _handleMouseEnter6 = () => { if(li[6][3] == "not selected") setIsHover6(true); };
    const _handleMouseEnter7 = () => { if(li[7][3] == "not selected") setIsHover7(true); };
    const _handleMouseEnter8 = () => { if(li[8][3] == "not selected") setIsHover8(true); };
    const _handleMouseEnter9 = () => { if(li[9][3] == "not selected") setIsHover9(true); };
    const _handleMouseEnter10 = () => { if(li[10][3] == "not selected") setIsHover10(true); };

    const handleMouseLeaveReturn = () => { setIsHoverReturn(false); };
    const _handleMouseLeave0 = () => { if(li[0][3] == "not selected") setIsHover0(false); };
    const _handleMouseLeave1 = () => { if(li[1][3] == "not selected") setIsHover1(false); };
    const _handleMouseLeave2 = () => { if(li[2][3] == "not selected") setIsHover2(false); };
    const _handleMouseLeave3 = () => { if(li[3][3] == "not selected") setIsHover3(false); };
    const _handleMouseLeave4 = () => { if(li[4][3] == "not selected") setIsHover4(false); };
    const _handleMouseLeave5 = () => { if(li[5][3] == "not selected") setIsHover5(false); };
    const _handleMouseLeave6 = () => { if(li[6][3] == "not selected") setIsHover6(false); };
    const _handleMouseLeave7 = () => { if(li[7][3] == "not selected") setIsHover7(false); };
    const _handleMouseLeave8 = () => { if(li[8][3] == "not selected") setIsHover8(false); };
    const _handleMouseLeave9 = () => { if(li[9][3] == "not selected") setIsHover9(false); };
    const _handleMouseLeave10 = () => { if(li[10][3] == "not selected") setIsHover10(false); };

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
                minHeight: "740px",
                transition: "all 0.5s ease",
                width: window === false ? 60 : 275,
                backgroundColor: "LightGray"}}>
                <div style={{
                    display: "flex",
                    padding: "10px"}}>
                    <Link href="/">
                        <div style={{
                            display: window === false ? "none" : "flex",
                            height: "20px"}}>
                            <Image alt="Return" height={20} src="/Return.png" width= {20} />
                            <div onMouseEnter={handleMouseEnterReturn} onMouseLeave={handleMouseLeaveReturn}
                                style={{
                                display: window === false ? "none" : "flex",
                                fontSize: "1.1em",
                                color: isHoverReturn === false ? "blue" : "darkblue",
                                textDecoration: "underline",
                                whiteSpace: "nowrap",
                                fontWeight: "bold",
                                marginLeft: "10px"}}>
                                Return to Portfolio
                            </div>
                        </div>
                    </Link>
                    <div onClick={() => openClose()} style={{
                        height: "43px",
                        width: "38px",
                        marginLeft: "auto"}}>
                        <Image alt="burger" height={43} src={burgerImage} width={38} />
                    </div>     
                </div>
                <div>
                    <div style={{
                        marginLeft: "15px"}}>
                        <div style={{
                            display: "flex",
                            height: "30px",
                            width: "30px"}}>
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
                                    <li onMouseEnter={eval("_handleMouseEnter" + i.toString())} onMouseLeave={eval("_handleMouseLeave" + i.toString())}style={{
                                        display: window === false ? "none" : "inline-block",
                                        padding: "0px 0px 0px 10px",
                                        position: "relative",
                                        top: "2.5px",
                                        color: item[3] === "selected" ? "black" : eval("_isHover" + i.toString()) === false ? "blue" : "darkblue",
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