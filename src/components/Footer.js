import React from "react";
import classes from "./Footer.module.css";

const Footer = (props) => {
    return (
        <div className={classes.footerBody}>
            <div className={classes.footerGrid}>
                <div className={classes.backToTopButton}>
                    <a href={"#hero"}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={classes.backToTopIcon}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="16 12 12 8 8 12"></polyline>
                            <line x1="12" y1="16" x2="12" y2="8"></line>
                        </svg>
                    </a>
                </div>
                <p className={classes.finalMessage}> Made with ♥</p>
            </div>
        </div>
    );
};

export default Footer;
