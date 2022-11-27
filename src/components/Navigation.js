import React from "react";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
    return (
        <React.Fragment>
            {/* 
            <div className={classes.navbodycontainter}>
                <div className={classes.navbarbody}>
                    <div className={classes.navbarlogo}>
                        <h2>SR</h2>
                    </div>
                    <div className={classes.navbarIcons}>
                        <a href="#experience">Experience</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <button
                            className={classes.lightModeButton}
                            onClick={props.onClick}
                        >
                            {!props.dark ? (
                                <svg
                                    id={classes.moonIcon}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-moon"
                                >
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            ) : (
                                <svg
                                    id={classes.sunIcon}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-sun"
                                >
                                    <circle cx="12" cy="12" r="5"></circle>
                                    <line x1="12" y1="1" x2="12" y2="3"></line>
                                    <line
                                        x1="12"
                                        y1="21"
                                        x2="12"
                                        y2="23"
                                    ></line>
                                    <line
                                        x1="4.22"
                                        y1="4.22"
                                        x2="5.64"
                                        y2="5.64"
                                    ></line>
                                    <line
                                        x1="18.36"
                                        y1="18.36"
                                        x2="19.78"
                                        y2="19.78"
                                    ></line>
                                    <line x1="1" y1="12" x2="3" y2="12"></line>
                                    <line
                                        x1="21"
                                        y1="12"
                                        x2="23"
                                        y2="12"
                                    ></line>
                                    <line
                                        x1="4.22"
                                        y1="19.78"
                                        x2="5.64"
                                        y2="18.36"
                                    ></line>
                                    <line
                                        x1="18.36"
                                        y1="5.64"
                                        x2="19.78"
                                        y2="4.22"
                                    ></line>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            */}

            <div className={classes.navbodycontainter}>
                <div className={classes.navbarbody}>
                    <div className={classes.navbarlogo}>
                        <h2>SR</h2>
                    </div>
                    <div className={classes.navbarIcons}>
                        <div className={classes.navbarLinks}>
                            <a href="#experience">Experience</a>
                            <a href="#skills">Skills</a>
                            <a href="#projects">Projects</a>
                        </div>
                        <button
                            className={classes.lightModeButton}
                            onClick={props.onClick}
                        >
                            {!props.dark ? (
                                <svg
                                    id={classes.moonIcon}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            ) : (
                                <svg
                                    id={classes.sunIcon}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="5"></circle>
                                    <line x1="12" y1="1" x2="12" y2="3"></line>
                                    <line
                                        x1="12"
                                        y1="21"
                                        x2="12"
                                        y2="23"
                                    ></line>
                                    <line
                                        x1="4.22"
                                        y1="4.22"
                                        x2="5.64"
                                        y2="5.64"
                                    ></line>
                                    <line
                                        x1="18.36"
                                        y1="18.36"
                                        x2="19.78"
                                        y2="19.78"
                                    ></line>
                                    <line x1="1" y1="12" x2="3" y2="12"></line>
                                    <line
                                        x1="21"
                                        y1="12"
                                        x2="23"
                                        y2="12"
                                    ></line>
                                    <line
                                        x1="4.22"
                                        y1="19.78"
                                        x2="5.64"
                                        y2="18.36"
                                    ></line>
                                    <line
                                        x1="18.36"
                                        y1="5.64"
                                        x2="19.78"
                                        y2="4.22"
                                    ></line>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div className={classes.bottomnavigationbody}>
                <a href="#hero" className={classes.navlabel}>
                    <svg
                        className={classes.navlogo}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    About Me
                </a>

                <a href="#experience" className={classes.navlabel}>
                    <svg
                        className={classes.navlogo}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    Experience
                </a>
                <a href="#skills" className={classes.navlabel}>
                    <svg
                        className={classes.navlogo}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                    </svg>
                    Skills
                </a>
                <a href="#projects" className={classes.navlabel}>
                    <svg
                        className={classes.navlogo}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                    Projects
                </a>
            </div>
        </React.Fragment>
    );
};

export default Navigation;
