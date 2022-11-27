import React from "react";
import classes from "./Project.module.css";

const Project = (props) => {
    return (
        // <React.Fragment>
        //     <div className={classes.projectBody}>
        //         <div className={classes.projectIconContainer}>
        //             <svg
        //                 className={classes.projectIcon}
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 xmlnsXlink="http://www.w3.org/1999/xlink"
        //                 viewBox="0 0 297 297"
        //                 xmlSpace="preserve"
        //             >
        //                 <g>
        //                     <path
        //                         d="M144.865,162.638v11.946c0,4.11-2.164,8.014-5.817,9.897c-4.225,2.178-9.266,1.358-12.574-1.948l-7.817-7.819l-7.352,7.352
        // l18.259,18.258c2.034,2.035,3.155,4.74,3.155,7.618v79.593c0,5.226,4.237,9.463,9.463,9.463h15.763
        // c5.226,0,9.463-4.237,9.463-9.463V219.91c0-2.878,1.12-5.583,3.155-7.618l15.133-15.133l-7.352-7.352l-4.691,4.692
        // c-3.307,3.303-8.339,4.122-12.565,1.953c-3.657-1.877-5.826-5.779-5.826-9.889l0-23.925H144.865z"
        //                     />
        //                     <path
        //                         d="M289.432,122.216c0-34.74-26.947-63.303-61.037-65.881C216.498,22.81,184.664,0,148.5,0S80.502,22.81,68.605,56.336
        // c-34.09,2.578-61.037,31.141-61.037,65.881c0,17.725,7.026,34.476,19.469,46.838c-0.501,3.078-0.753,6.191-0.753,9.307
        // c0,32.009,26.041,58.05,58.049,58.05h34.491v-27.176l-19.552-19.551c-2.034-2.033-3.156-4.739-3.156-7.618
        // c0-2.879,1.121-5.585,3.158-7.619l11.765-11.766c4.201-4.199,11.035-4.199,15.236,0l4.695,4.696v-7.861
        // c0-5.94,4.833-10.773,10.773-10.773h16.641c5.94,0,10.773,4.832,10.773,10.773v19.828l1.569-1.57
        // c2.034-2.034,4.74-3.155,7.617-3.155c2.878-0.001,5.584,1.12,7.619,3.155l11.766,11.766c0,0,0,0,0.001,0
        // c4.2,4.201,4.2,11.036,0,15.236l-16.426,16.426v15.209h31.365c32.008,0,58.049-26.041,58.049-58.05
        // c0-3.116-0.252-6.229-0.753-9.307C282.406,156.692,289.432,139.941,289.432,122.216z"
        //                     />
        //                 </g>
        //             </svg>
        //         </div>
        //         <h2 className={classes.projectTitle}>
        //             Visualizing a Phylogenetic Tree
        //         </h2>
        //         <p className={classes.projectLocation}>Rice University</p>
        //         <div className={classes.projectDescription}>
        //             This project was built to help a research group studying
        //             phylogenetics. The goal of the project was to build a
        //             program which could traverse genetic data and build a model
        //             for the corresponding phylogenetic tree. This automates a
        //             process which would usually require drawing the figure by
        //             hand using a tool such as photoshop.
        //         </div>
        //         <div className={classes.toolAndHelpfulLinksContainer}>
        //             <div className={classes.mainToolsContainer}>
        //                 <h3 className={classes.secondaryHeader}>Tools Used</h3>
        //                 <div className={classes.toolContainer}>
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         aria-label="JavaScript"
        //                         viewBox="0 0 512 512"
        //                         className={classes.tool}
        //                     >
        //                         <rect width="512" height="512" fill="#f7df1e" />
        //                         <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z" />
        //                     </svg>
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         aria-label="JavaScript"
        //                         viewBox="0 0 512 512"
        //                         className={classes.tool}
        //                     >
        //                         <rect width="512" height="512" fill="#f7df1e" />
        //                         <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z" />
        //                     </svg>
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         aria-label="JavaScript"
        //                         viewBox="0 0 512 512"
        //                         className={classes.tool}
        //                     >
        //                         <rect width="512" height="512" fill="#f7df1e" />
        //                         <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z" />
        //                     </svg>
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         aria-label="JavaScript"
        //                         viewBox="0 0 512 512"
        //                         className={classes.tool}
        //                     >
        //                         <rect width="512" height="512" fill="#f7df1e" />
        //                         <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z" />
        //                     </svg>
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         aria-label="JavaScript"
        //                         viewBox="0 0 512 512"
        //                         className={classes.tool}
        //                     >
        //                         <rect width="512" height="512" fill="#f7df1e" />
        //                         <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z" />
        //                     </svg>
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         aria-label="JavaScript"
        //                         viewBox="0 0 512 512"
        //                         className={classes.tool}
        //                     >
        //                         <rect width="512" height="512" fill="#f7df1e" />
        //                         <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z" />
        //                     </svg>
        //                 </div>
        //             </div>
        //             <div className={classes.mainLinksContainer}>
        //                 <h3 className={classes.secondaryHeader}>
        //                     Helpful Links
        //                 </h3>
        //                 <div className={classes.helpfulLinkGrid}>
        //                     <div className={classes.helpfulLink}>
        //                         <a
        //                             href="https://github.com/SergioRobledo18/Tree-Visualization"
        //                             target="_blank"
        //                             rel="noreferrer"
        //                         >
        //                             Github Repository{" "}
        //                             <img
        //                                 src={require("../assets/images/linkpng.png")}
        //                                 alt="link"
        //                             />
        //                         </a>
        //                     </div>
        //                     <div className={classes.helpfulLink}>
        //                         <a
        //                             href="https://github.com/SergioRobledo18/Tree-Visualization"
        //                             target="_blank"
        //                             rel="noreferrer"
        //                         >
        //                             Github Repository{" "}
        //                             <img
        //                                 src={require("../assets/images/linkpng.png")}
        //                                 alt="link"
        //                             />
        //                         </a>
        //                     </div>
        //                     <div className={classes.helpfulLink}>
        //                         <a
        //                             href="https://github.com/SergioRobledo18/Tree-Visualization"
        //                             target="_blank"
        //                             rel="noreferrer"
        //                         >
        //                             Github Repository{" "}
        //                             <img
        //                                 src={require("../assets/images/linkpng.png")}
        //                                 alt="link"
        //                             />
        //                         </a>
        //                     </div>
        //                     <div className={classes.helpfulLink}>
        //                         <a
        //                             href="https://github.com/SergioRobledo18/Tree-Visualization"
        //                             target="_blank"
        //                             rel="noreferrer"
        //                         >
        //                             Github Repository{" "}
        //                             <img
        //                                 src={require("../assets/images/linkpng.png")}
        //                                 alt="link"
        //                             />
        //                         </a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </React.Fragment>
        <React.Fragment>
            <div className={classes.projectBody}>
                <div className={classes.projectIconContainer}>
                    <div className={classes.projectIcon}>{props.icon}</div>
                </div>
                <h2 className={classes.projectTitle}>{props.title}</h2>
                <p className={classes.projectLocation}>{props.location}</p>
                <div className={classes.projectDescription}>
                    {props.description}
                </div>
                <div className={classes.toolAndHelpfulLinksContainer}>
                    <div className={classes.mainToolsContainer}>
                        <h3 className={classes.secondaryHeader}>Tools Used</h3>
                        <div className={classes.toolContainer}>
                            {props.tools.map((tool) => (
                                <div className={classes.tool}>{tool}</div>
                            ))}
                        </div>
                    </div>
                    <div className={classes.mainLinksContainer}>
                        <h3 className={classes.secondaryHeader}>
                            Helpful Links
                        </h3>
                        <div className={classes.helpfulLinkGrid}>
                            {props.links.map((link) => (
                                <div className={classes.helpfulLink}>
                                    {link}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className={classes.linkSVG}
                                    >
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                    </svg>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Project;
