import React from "react";
import { caseHardenedSVG } from "../../components/svgs";
import { TechPill } from "./TechPill";

export function ProjectCard(props) {
    const boxStyle = {
        backgroundImage: caseHardenedSVG('%2344e50b', 0.34),
        backgroundPosition: props.backgroundPosition || "center",
    };

    const coloredButtonStyle = {
        background: "linear-gradient(91deg, #0BB9E5 0%, #44E50B 100%)",
        border: "none",
        fontSize: "1.1em"
    }

    const { name,
        deploymentLink,
        codeLink,
        images,
        tech,
    } = props

    return (
        <div className="project-card" style={boxStyle}>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <h4 style={{ fontSize: "1.2em", backgroundColor: "black", width: "100%", textAlign: "center", borderRadius: "10px", padding: "10px", border: "1px solid rgba(255,255,255,0.2)" }}>{name}</h4>
                <div className="technology-pill-container">
                    {tech.map(pill => {
                        return <TechPill key={pill} name={pill}></TechPill>
                    })}
                </div>
            </div>
            {Array.isArray(images) ? (
                name === "RN Calendar" ? (
                    <div className="project-image-container">
                        <img className="project-image-above" src={images[1]} />
                        <img className="project-image-below" src={images[0]} />
                    </div>
                ) : (
                    <div className="project-image-container">
                        <img className="project-image-above" src={images[1]} width="100%" />
                        <img className="project-image-below" src={images[0]} width="100%" />
                    </div>
                )
            ) : (
                <div className="project-image-single">
                    <img src={images} width="100%" />
                </div>
            )}

            <div style={{ margin: 30, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <button style={coloredButtonStyle} onClick={() => {
                    props.setShowModal(true);
                    props.setModalInfo(props);
                }}>Read More</button>
                <div style={{
                    minHeight: "100%",
                    width: "100%",
                    padding: "20px 0 0 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 20,
                    textAlign: "center",
                }}>
                    {codeLink &&
                        <a
                            style={{ color: "white" }}
                            href={codeLink}
                            target="_blank">
                            <span className="project-link-span">
                                <span>Code</span>
                                <span>{'>>'}</span>
                            </span>
                        </a>
                    }
                    {deploymentLink &&
                        <a
                            style={{ color: "white" }}
                            href={deploymentLink}
                            target="_blank">
                            <span className="project-link-span">
                                <span>Deployment</span>
                                <span>{'>>'}</span>
                            </span>
                        </a>}
                </div>
            </div>
        </div>
    );
}
