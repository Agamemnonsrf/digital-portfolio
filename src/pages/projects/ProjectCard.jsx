import React from "react";

export function ProjectCard({ name }) {
    const boxStyle = {
        minWidth: "350px",
        height: "100%",
        backgroundColor: "black",
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
        <div style={boxStyle}>
            <h4 style={{ fontSize: "1.2em" }}>{name}</h4>
            <div>image</div>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <button style={coloredButtonStyle}>Read More</button>
                <div style={{ width: "100%", padding: "20px 0 0 0", display: "flex", alignItems: "center", justifyContent: "space-around" }}><a style={{ color: "white" }}>Code{'>>'}</a> <a style={{ color: "white" }}>Deployment{'>>'}</a></div>
            </div>
        </div>
    );
}
