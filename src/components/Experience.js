import React from "react";
import ExperienceItem from "./ExperienceItem";
import classes from "./Experience.module.css";

const Experience = (props) => {
    const education = [
        {
            key: "UH",
            logo: "UHlogo.png",
            alt: "UH icon",
            title: "University of Houston",
            date: "Aug 2018 - Dec 2021",
            summary:
                "While at the University of Houston, I majored in Computer Science and minored in Mathematics.",
            bulletPoints:
                //`● GPA: 3.63
                //     ● Computer Science GPA: 3.58
                //     ● Math Minor GPA: 3.76
                //     ● Deans List: Fall 2018, Spring 2019, Spring 2021, Fall 2021`,
                [
                    "● GPA: 3.63",
                    "● Computer Science GPA: 3.58 ",
                    "● Deans List: Fall 2018, Spring 2019, Spring 2021, Fall 2021",
                ],
        },
        {
            key: "HCC",
            logo: "hccLogo.png",
            alt: "HCC icon",
            title: " Houston Community College",
            date: "Aug 2014 - May 2018",
            summary: " I earned my Associates Degree before I turned 18.",
            bulletPoints:
                // `● GPA: 3.27
                //     ● Completed along side high school `,
                ["● GPA: 3.27 ", "● Completed along side high school  "],
        },
    ];

    const work = [
        {
            key: "Rice",
            logo: "riceLogo.png",
            alt: "Rice Icon",
            title: "Rice University",
            date: "May 2021 - Aug 2021",
            summary:
                "During my time at Rice University, I worked as a Research Assistant for a Research team studying Cancer Phylogenetics",
            bulletPoints: [
                "● Developed a project which traverses molecular data and produces an annotated figure  ",
                "● Learn about Data Science research at Rice University  ",
                "● Assisted weekly tech talks from Rice University staff and Google engineers on various Data Science topics ",
            ],
        },
        {
            key: "HEB",
            logo: "HEBLogo.png",
            alt: "HEB icon",
            title: "H-E-B",
            date: "Nov 2019 - Sept 2021",
            summary:
                "My time at HEB began as a part time job to get me through college. However, I ended up learning a lot including the importance of customer service. ",
            bulletPoints: [
                "● Demonstrated flexibility by working in a variety of departments when needed  ",
                "● Handled cash, credit and check transactions",
                "● Assisted customers with complaints by listening and providing an adequate solution ",
                "● Provided excellent customer service ",
            ],
        },
    ];

    const volunteer = [
        {
            key: "CodeRed",
            logo: "codered.png",
            alt: "CodeRed Icon",
            title: "CodeRed Hackaton",
            date: "June 2021 - Dec 2021",
            summary: "",
            bulletPoints: [
                "● Designed and develop user-friendly website for upcoming hackaton  ",
                "● Fixed bugs and implement new features to improve functionality on both desktop and mobile website  ",
            ],
        },
        {
            key: "PeerMentor",
            logo: "UHlogo.png",
            alt: "UH icon",
            title: "CS Peer Mentor",
            date: "Jan 2021 - Dec 2021",
            summary: "",
            bulletPoints: [
                "● Held weekly office hours for students struggling with introductory and intermediate computer science courses  ",
                "● Helped students understand computer science algorithms, theories and debug their code  ",
            ],
        },
    ];

    return (
        <React.Fragment>
            <div className={classes.experienceBodySection} id="experience">
                <h2 className={classes.experienceBodyTitle}>Experience</h2>

                <div className={classes.experienceContainer}>
                    <p className={classes.subheading}>Education</p>
                    <div className={classes.experienceListContainer}>
                        {education.map((edu) => (
                            <ExperienceItem
                                key={edu.key}
                                logo={edu.logo}
                                alt={edu.alt}
                                title={edu.title}
                                date={edu.date}
                                summary={edu.summary}
                                bulletPoints={edu.bulletPoints}
                            />
                        ))}
                    </div>
                </div>

                <div className={classes.experienceContainer}>
                    <p className={classes.subheading}>Work</p>
                    <div className={classes.experienceListContainer}>
                        {work.map((wrk) => (
                            <ExperienceItem
                                key={wrk.key}
                                logo={wrk.logo}
                                alt={wrk.alt}
                                title={wrk.title}
                                date={wrk.date}
                                summary={wrk.summary}
                                bulletPoints={wrk.bulletPoints}
                            />
                        ))}
                    </div>
                </div>

                <div className={classes.experienceContainer}>
                    <p className={classes.subheading}>Volunteer Work</p>
                    <div className={classes.experienceListContainer}>
                        {volunteer.map((exp) => (
                            <ExperienceItem
                                key={exp.key}
                                logo={exp.logo}
                                alt={exp.alt}
                                title={exp.title}
                                date={exp.date}
                                summary={exp.summary}
                                bulletPoints={exp.bulletPoints}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Experience;
