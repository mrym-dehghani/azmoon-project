import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/app.css";
import "./style.css";

function Layout(props) {
    const style = {
        nav: {
            display: "flex",
            alignItems: " center",
            fontSize: "1.6rem",
            fontFamily: "IRANSans",
            width: "100%",
            height: "5.5rem",
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
            borderRadius: "1.6rem",
            marginTop: "1.5rem",
            overflow: "hidden",
        },
        ul: {
            display: "flex",
            alignItems: " center",
            listStyle: "none",
            fontSize: "1.6rem",
            gap: "5rem",
            marginBottom: "0",
            paddingRight: "1rem",
            width: "91%",
            borderLeft: " 2px solid lightgray",
        },
        divBtn: {
            height: "100%",
            width: "9%",
            display: "flex",
            justifyContent: "end",
        },
        btnNav: {
            textAlign: "end",
            width: "82%",
            height: "100%",
            border: "none",
            color: "#FFFFFF",
            backgroundColor: "#FB8137",
            borderRadius: "1.6rem 5rem 0rem 1.6rem",
            paddingLeft: "2rem",
        },
    };

    const [hoverKarbar, setHoverKarbar] = useState(false);
    const [hoverAzmoon, setHoverAzmoon] = useState(false);
    const [hoverHoze, setHoverHoze] = useState(false);

    const onHoverKarbar = () => {
        setHoverKarbar(true);
    };
    const onLeaveKarbar = () => {
        setHoverKarbar(false);
    };
    const subMenuKarbar = () => {
        return (
            <Dropdown.Menu show className="drop">
                <Dropdown.Item className="text-end fs-14 " eventKey="2">
                    <Link className="nav-link" to="/">
                        کاربر جدید
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item className="text-end fs-14" eventKey="3">
                    <Link className="nav-link" to="/usersList">
                        کاربران
                    </Link>
                </Dropdown.Item>
            </Dropdown.Menu>
        );
    };

    //handle hover hoze
    const onHoverHoze = () => {
        setHoverHoze(true);
    };
    const onLeaveHoze = () => {
        setHoverHoze(false);
    };
    const subMenuHoze = () => {
        return (
            <Dropdown.Menu show className="drop">
                <Dropdown.Item className="text-end fs-14 " eventKey="2">
                    <Link className="nav-link" to="/newHoze">
                        حوزه فرعی جدید
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item className="text-end fs-14" eventKey="3">
                    <Link className="nav-link" to="/listHoze">
                        لیست حوزه های فرعی
                    </Link>
                </Dropdown.Item>
            </Dropdown.Menu>
        );
    };

    return (
        <div className={props.className} style={props.style}>
            <header>
                <nav style={style.nav}>
                    <div style={style.logo} className="d-flex align-items-center">
                        <h2 className="mb-0 px-5">لوگو</h2>
                    </div>
                    <ul style={style.ul}>

                        <li 
                            role="button"
                        >
                            <div className="d-flex align-items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" fillOpacity=".8" className="bi bi-grid" viewBox="0 0 16 16"> 
                                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/> 
                                </svg>
                                داشبورد
                            </div>
                        </li>

                        <li
                            onMouseEnter={onHoverKarbar}
                            onMouseLeave={onLeaveKarbar}
                            role="button"
                        >
                            <div className="d-flex align-items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" fillOpacity=".8" className="bi bi-people" viewBox="0 0 16 16"> 
                                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                                </svg>
                                کاربران
                            </div>
                            {hoverKarbar ? subMenuKarbar() : ""}
                        </li>

                        <li
                            // onMouseEnter={onHover}
                            // onMouseLeave={onLeave}
                            role="button"
                        >
                            <div className="d-flex align-items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" fillOpacity=".8" className="bi bi-journal-check" viewBox="0 0 16 16"> 
                                    <path fillRule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/> <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/> <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                                </svg>
                                آزمون ها
                            </div>
                            {/* {hover ? "sub" : ""} */}
                        </li>

                        <li 
                            onMouseEnter={onHoverHoze}
                            onMouseLeave={onLeaveHoze}
                            role="button"
                        >
                            <div className="d-flex align-items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" fillOpacity=".8" className="bi bi-pin-map" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
                                    <path fillRule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
                                </svg>
                                حوزه ها 
                            </div>
                            
                            {hoverHoze ? subMenuHoze() : ""}
                        </li>
                    </ul>

                    <div style={style.divBtn}>
                        <button style={style.btnNav}>خروج</button>
                    </div>
                </nav>
            </header>
            <main>{props.children}</main>
            <footer></footer>
        </div>
    );
}

export default Layout;
