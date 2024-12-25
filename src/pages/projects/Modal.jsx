import React from "react";
import { GradientBackground } from "../../App";
import { caseHardenedSVG } from "../../components/svgs";
import { getIcon } from "../../components/icons";
import { TechPill } from "./TechPill";

const Modal = ({ isOpen, onClose, project, isLightMode }) => {
    if (!isOpen || !project) return null;
    const [isHoveringClose, setIsHoveringClose] = React.useState(false);
    const { name, description, tech, images, codeLink, deploymentLink } = project;

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: isLightMode ? "#000" : "#fff",
                zIndex: 1000,
                padding: "16px",
                boxSizing: "border-box",
            }}
        >

            {/* Modal Content */}
            <div
                className="modal"
                style={{
                    position: "relative",
                    maxWidth: "70vw", // Increase max width
                    maxHeight: "90vh", // Increase max height
                    background: isLightMode ? `${caseHardenedSVG('%2344e50b', 0.5)}, rgb(237, 237, 237)` : `${caseHardenedSVG('%2344e50b', 0.35)}, rgba(0, 0, 0, 1)`,
                    padding: "16px",
                    overflow: "auto", // Enable scrolling
                    boxSizing: "border-box",
                    borderRadius: "8px",
                    scrollbarWidth: "thin", // For Firefox
                    scrollbarColor: isLightMode ? "#000 #ccc" : "#fff #333", // For Firefox
                    border: isLightMode ? "" : "thin solid rgba(255,255,255,0.5)"
                }}
            >
                {/* Custom scrollbar for Webkit browsers */}
                <style>
                    {`
                        ::-webkit-scrollbar {
                            width: 12px;
                            height: 8px;
                        }
                        ::-webkit-scrollbar-track {
                            background: ${isLightMode ? "#ccc" : "#333"};
                        }
                        ::-webkit-scrollbar-thumb {
                            background-color: ${isLightMode ? "#000" : "#fff"};
                            border-radius: 10px;
                            border: 2px solid ${isLightMode ? "#ccc" : "#333"};
                        }
                        ::-webkit-scrollbar-thumb:hover {
                            background-color: ${isLightMode ? "#555" : "#aaa"};
                        }
                    `}
                </style>
                {/* Close Button */}
                <div
                    onMouseEnter={(e) => setIsHoveringClose(true)}
                    onMouseLeave={(e) => setIsHoveringClose(false)}
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        cursor: "pointer",
                        fontSize: "24px",
                        zIndex: 2,
                        width: 35,
                        height: 35,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        transition: "background-color 0.2s",
                        backgroundColor: isLightMode
                            ? isHoveringClose
                                ? "black"
                                : "transparent"
                            : isHoveringClose
                                ? "white"
                                : "transparent",
                    }}
                    onClick={onClose}
                >

                    {getIcon("close", null, isHoveringClose)}

                </div>

                {/* Project Name */}
                <h2
                    style={{
                        marginBottom: "8px",
                        fontWeight: "bold",
                        fontSize: "20px",
                    }}
                >
                    {name}
                </h2>

                {/* Project Images */}
                { //if it isn't an array
                    !Array.isArray(images) && (
                        <div style={{ marginBottom: "12px", display: "flex", justifyContent: "center" }}>
                            <img
                                src={images}
                                alt={`${name} screenshot`}
                                style={{
                                    width: name === "RN Calendar" ? "300px" : "100%",
                                    borderRadius: "4px",
                                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                }}
                            />
                        </div>
                    )
                }
                {Array.isArray(images) && (
                    <div style={{ marginBottom: "12px", display: "flex", justifyContent: "center" }}>
                        <img
                            src={images[0]}
                            alt={`${name} screenshot`}
                            style={{
                                width: name === "RN Calendar" ? "300px" : "100%",
                                borderRadius: "4px",
                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            }}
                        />
                    </div>
                )}

                {/* Technologies Used */}
                <div style={{ marginBottom: "12px" }}>
                    <strong>Technologies:</strong>
                    <div style={{ display: "flex", flexWrap: "wrap", marginTop: "6px" }}>
                        {tech.map((techItem, index) => (
                            <TechPill followTheme>
                                {techItem}
                            </TechPill>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "12px" }}>
                    {deploymentLink && (
                        <a
                            href={deploymentLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: isLightMode ? "#007acc" : "#33b5e5",
                                textDecoration: "none",
                                fontWeight: "bold",
                            }}
                        >
                            Live Demo
                        </a>
                    )}
                    {codeLink && (
                        <a
                            href={codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: isLightMode ? "#007acc" : "#33b5e5",
                                textDecoration: "none",
                                fontWeight: "bold",
                            }}
                        >
                            Source Code
                        </a>
                    )}
                </div>

                {/* Description */}
                <div>
                    {description}
                </div>

            </div>
        </div>
    );
};

export default Modal;