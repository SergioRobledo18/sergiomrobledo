import React from "react";
import classes from "./Skills.module.css";
import Caraousel from "./Caraousel";

const Skills = (props) => {
    return (
        <React.Fragment>
            <div className={classes.skillsSection} id="skills">
                <h2 className={classes.skillsTitle}> Skills </h2>
                <div className={classes.skillsBody}>
                    <p className={classes.skillsDescription}>
                        These are the skills that I have experience working
                        with. However I love learning and working on new things.
                        With that said,
                        <span>
                            {" "}
                            I have no problem working with something new{" "}
                        </span>
                        and am more than willing to learn as much as possible to
                        become a professional in any prospective skill.
                    </p>
                </div>
                <Caraousel />
            </div>
        </React.Fragment>
    );
};

export default Skills;
