import React from "react";

export function ProjectCard({ name }) {
    const boxStyle = {
        minWidth: "250px",
        height: "300px",
        backgroundColor: "black",
        borderRadius: "10px",
        margin: "15px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
    };

    return (
        <div style={boxStyle}>
            <div>{name}</div>
        </div>
    );
}
