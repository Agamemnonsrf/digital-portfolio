import React from "react";
import { caseHardenedSVG } from "../../components/svgs";

export function ProjectCard(props) {
    const boxStyle = {
        minWidth: "400px",
        height: "100%",
        backgroundColor: "#000000",
        backgroundImage: caseHardenedSVG(),
        borderRadius: "20px",
        margin: "0 25px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        padding: "20px"
    };

    const coloredButtonStyle = {
        background: "linear-gradient(91deg, #0BB9E5 0%, #44E50B 100%)",
        border: "none",
        fontSize: "1.1em"
    }

    return (
        <div className="project-card" style={boxStyle}>
            <h4 style={{ fontSize: "1.2em", backgroundColor: "black", width: "100%", textAlign: "center", borderRadius: "10px", padding: "10px", border: "1px solid rgba(255,255,255,0.2)" }}>{props.name}</h4>
            <div className="project-image-container"><img className="project-image-above" src={props.images[1]} width="100%" /><img className="project-image-below" src={props.images[0]} width="100%" /></div>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <button style={coloredButtonStyle}>Read More</button>
                <div style={{ minHeight: "100%", width: "100%", padding: "20px 0 0 0", display: "flex", alignItems: "center", justifyContent: "space-around" }}>{props.codeLink && <a style={{ color: "white" }} href={props.codeLink} target="_blank">Code{'>>'}</a>} {props.deploymentLink && <a style={{ color: "white" }} href={props.deploymentLink} target="_blank">Deployment{'>>'}</a>}</div>
            </div>
        </div>
    );
}
