import React from "react";
import classes from "./ExperienceItem.module.css";

const ExperienceItem = (props) => {
    return (
        // <div className={classes.individualExperience}>
        //     <div className={classes.individualExperienceHeading}>
        //         <div className={classes.individualExperienceLogo}>
        //             <img
        //                 src={require("../assets/images/UHlogo.png")}
        //                 alt="UH Icon"
        //             ></img>
        //         </div>
        //         <div className={classes.individualExperienceTitleandDate}>
        //             <h3 className={classes.individualExperienceTitle}>
        //                 University of Houston
        //             </h3>
        //             <p className={classes.individualExperienceDate}>
        //                 Aug 2018 - Dec 2021
        //             </p>
        //         </div>
        //     </div>

        //     <div className={classes.experienceBody}>
        //         {/* <div className={classes.experienceBodyLogo}>
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 viewBox="0 0 24 24"
        //                 fill="none"
        //                 stroke="currentColor"
        //                 stroke-width="1"
        //                 stroke-linecap="round"
        //                 stroke-linejoin="round"
        //             >
        //                 <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        //                 <path d="M6 12v5c3 3 9 3 12 0v-5" />
        //             </svg>
        //         </div> */}
        //         <p
        //             style={{
        //                 color: "var(--standOutColor)",
        //             }}
        //         >
        //             While at the University of Houston, I majored in Computer
        //             Science and minored in Mathematics.
        //         </p>
        //         <p>
        //             ● GPA: 3.63 <br />
        //             ● Computer Science GPA: 3.58 <br />
        //             ● Math Minor GPA: 3.76 <br />● Deans List: Fall 2018, Spring
        //             2019, Spring 2021, Fall 2021
        //         </p>
        //     </div>
        // </div>
        <div className={classes.individualExperience}>
            <div className={classes.individualExperienceHeading}>
                <div className={classes.individualExperienceLogo}>
                    <img
                        src={require(`../assets/images/${props.logo}`)}
                        alt={props.alt}
                    ></img>
                </div>
                <div className={classes.individualExperienceTitleandDate}>
                    <h3 className={classes.individualExperienceTitle}>
                        {props.title}
                    </h3>
                    <p className={classes.individualExperienceDate}>
                        {props.date}
                    </p>
                </div>
            </div>

            <div className={classes.experienceBody}>
                <p
                    style={{
                        color: "var(--standOutColor)",
                    }}
                >
                    {props.summary}
                </p>
                {props.bulletPoints.map((bullet) => (
                    <p className={classes.bulletPoints}>{bullet}</p>
                ))}
            </div>
        </div>
    );
};

export default ExperienceItem;
