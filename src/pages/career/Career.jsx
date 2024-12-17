import React from "react";
import { AppContext } from "../../components/context";
import { CareerTimeLine } from "./CareerTimeLine";
import { textureSVG } from "../../components/svgs";
import { Markup } from "interweave";

export function Career() {
    const defaultInfo = {
        heading: "Hover over a date to see details",
        info: "",
    };

    const { colorMode } = React.useContext(AppContext);
    const [info, setInfo] = React.useState(defaultInfo);

    const isLight = colorMode === "light";

    const textStyle = {
        color: isLight ? "black" : "white",
    };
    const textBoxStyle = {
        backgroundImage: textureSVG(0.3),
        boxShadow: isLight && "0px 4px 4px rgba(0, 0, 0, 0.5)",
    };

    return (
        <div className="section-container">
            <section className="page-section-h05">
                <h2 style={textStyle}>Career</h2>
            </section>
            <section className="page-section-h3">
                <CareerTimeLine
                    points={[
                        [
                            {
                                date: "2018",
                                info: "In my second year of high school, I had my first encounter with programming in the form of basic <b>Python scripts</b> and other foundational Computer Science concepts. This served as a stepping stone for me to comprehend the fundamentals of both <b>functional and object-oriented coding</b>.",
                            },
                            {
                                date: "2020",
                                info: "This year I joined the International Hellenic University's <a href='https://www.iee.ihu.gr/en/' target='_blank'>Department of Information and Electronic Engineering</a> in Thessaloniki, Greece. Alongside my studies, I began learning and crafting web projects within the <b>JavaScript</b> ecosystem, mostly with <b>React</b> and <b>React Native</b>.",
                            },
                        ],
                        [
                            {
                                date: ["SEPT 2022", "JULY 2022"],
                                info: "During this two-month period, I had the opportunity to serve as a <b>Junior React Native and WordPress Developer Intern</b> at <a href='https://bigdrop.gr/' target='_black'>BigDrop Digital Marketing Agency</a> in Thessaloniki. I collaborated closely with a Backend Developer to create <b>Headless E-commerce applications</b> for mobile platforms and <b>WordPress plugins</b>.",
                                length: "200",
                            },
                        ],
                        [
                            {
                                date: ["FEBR 2023", "JULY 2023"],
                                info: "I held a role as a <b>Contractor Frontend Developer</b> at <a href='https://www.linkedin.com/company/brahms-dev/' target='_blank'>Brahms Dev Software Development Agency</a>, where I was tasked with creating websites for clients. I utilized a combination of <b>HTML & CSS, JavaScript/JQuery, and PHP</b> to deliver these projects. Additionally, I took on the responsibilities of <b>SEO & UX optimization</b> and ensuring <b>Responsive Design</b>.",
                                length: "300",
                            },
                        ],
                        [
                            {
                                date: ["PRESENT", "DEC 2023"],
                                info: "I am currently employed as a <strong>Business Analyst/Mobile App Developer</strong> at the <a href='https://www2.deloitte.com/gr/en/pages/about-deloitte/topics/DACC.html' target='_blank'>Deloitte Alexander Competence Center</a> in Thessaloniki. As part of a mobile development team, I am contributing to the modernization of a mobile application for an international energy provider. We are rebuilding the legacy app, originally developed with the <strong>Ionic Angular</strong> framework, using <strong>React Native</strong>.",
                                length: "420",
                            }
                        ]
                    ]}
                    setInfo={setInfo}
                />
            </section>
            <section className="page-section-h1">
                <div style={textBoxStyle} className="text-box">
                    <h4 style={{ color: "black", fontSize: "1.5em" }}>
                        {info.heading}
                    </h4>
                    <p style={{ fontSize: "1.2em" }}>
                        <Markup content={info.info} />
                    </p>
                </div>
            </section>
        </div>
    );
}
