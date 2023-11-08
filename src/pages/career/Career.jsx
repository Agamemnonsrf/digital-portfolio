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
    const textStyle = {
        color: colorMode === "light" ? "black" : "white",
    };
    const textBoxStyle = {
        width: "50vw",
        height: "90%",
        position: "relative",
        backgroundColor: "#ffffff",
        backgroundImage: textureSVG(0.3),
        boxShadow: colorMode === "light" && "0px 4px 4px rgba(0, 0, 0, 1)",
        padding: "30px",
        borderRadius: "30px",
    };

    return (
        <div className="section-container">
            <section className="page-section-h1">
                <h2 style={textStyle}>Career</h2>
            </section>
            <section className="page-section-h2">
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
                                length: "420",
                            },
                        ],
                    ]}
                    setInfo={setInfo}
                />
            </section>
            <section className="page-section-h1">
                <div style={textBoxStyle}>
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
