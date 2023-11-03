import React from "react";

export function CareerTimeLine({ points }) {
    const containerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    return (
        <div style={containerStyle}>
            {points.map((point, index) => {
                return (
                    <div>
                        {" "}
                        {point.date}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {/* svg circle, bigger */}
                            <svg height="40" width="40">
                                <circle
                                    cx="20"
                                    cy="20"
                                    r="18"
                                    stroke="white"
                                    stroke-width="3"
                                    fill="transparent"
                                />
                            </svg>
                            {/* straight svg horizontal line */}
                            {index !== points.length - 1 && (
                                <svg height="2" width="100">
                                    <line
                                        x1="0"
                                        y1="0"
                                        x2="100"
                                        y2="0"
                                        style={{
                                            stroke: "white",
                                            strokeWidth: "5px",
                                        }}
                                    />
                                    {index}
                                </svg>
                            )}
                            {/* svg line that does a horseshoe shape */}
                            {index === points.length - 1 && (
                                <>
                                    <svg height="3" width="30">
                                        <path
                                            d="M0 1H30"
                                            stroke="white"
                                            stroke-width="3"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="83"
                                        height="66"
                                        viewBox="0 0 83 66"
                                        fill="none"
                                        style={{
                                            transform: "translateY(46%)",
                                        }}
                                    >
                                        <path
                                            d="M0 3H50C66.5685 3 80 16.4315 80 33V33C80 49.5685 66.5685 63 50 63H0"
                                            stroke="white"
                                            stroke-width="2.5"
                                        />
                                    </svg>
                                </>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
