import React from "react";
import classes from "./Hero.module.css";

const Hero = (props) => {
    return (
        <React.Fragment>
            <div className={classes.heroContainer} id="hero">
                <div className={classes.hero}>
                    <div className={classes.heroText}>
                        <h1>Hello World!</h1>
                        <h1>Im Sergio Robledo!</h1>
                        <p>
                            Im a <span>Software Developer</span> and a
                            <span> Data Analyst</span>
                        </p>
                        <p className={classes.bioParagraph}>
                            I graduated from the
                            <span style={{ color: "#e10012" }}>
                                {" "}
                                University of Houston{" "}
                            </span>
                            with a Bachelors degree in computer science. On my
                            free time you can find me reading, taking an online
                            course on a new technology or playing baseball.
                            Furthermore, I love building web apps, solving
                            problems, and learning. Currently, Im growing and
                            learning as a full time employee for Yokogawa
                            Corporation of America as a{" "}
                            <span>Programming Analyst. </span>
                            <br />
                            <span className={classes.callToAction}>
                                Lets connect.
                            </span>
                        </p>
                        <div className={classes.heroLinks}>
                            <a
                                id={classes.resumeLink}
                                href={require("../assets/resume.pdf")}
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                                </svg>
                            </a>
                            <a
                                id={classes.linkedinLink}
                                href="https://www.linkedin.com/in/sergiomrobledo/"
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect
                                        x="2"
                                        y="9"
                                        width="4"
                                        height="12"
                                    ></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                            <a
                                id={classes.githubLink}
                                href="https://github.com/SergioRobledo18"
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className={classes.heroImage}>
                        <img
                            className={classes.imageContainer}
                            src={require("../assets/sergiorobledo.png")}
                            alt="Icon of me"
                        ></img>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Hero;
