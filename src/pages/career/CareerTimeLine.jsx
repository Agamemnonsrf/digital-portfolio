import React from "react";

export function CareerTimeLine({ points }) {
    const fitWidthPx = 500;
    const containerStyle = {
        display: "flex",
        width: fitWidthPx + "px",
        maxWidth: fitWidthPx + "px",
        flexDirection: "column",
    };

    const ifOneAddOne = (number) => {
        return number === 1 ? 2 : number;
    };

    const ifOneReturnZero = (number) => {
        return number === 1 ? 0 : 1;
    };

    return (
        <div style={containerStyle}>
            {points.map((pointLine, pointsIndex) => {
                return (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                        key={pointsIndex}
                    >
                        {" "}
                        {pointLine.map((point, pointLineIndex) => {
                            return (
                                <div
                                    style={{ margin: "25px 0" }}
                                    key={point.date}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            position: "relative",
                                        }}
                                    >
                                        {pointLineIndex === 0 &&
                                            pointsIndex !== points.length - 1 &&
                                            pointsIndex % 2 === 1 && (
                                                <HorseShoeLine orientation="left" />
                                            )}
                                        <DatePoint date={point.date} />

                                        {/* straight svg horizontal line */}
                                        {pointLineIndex !==
                                            ifOneAddOne(pointLine.length) -
                                                1 && (
                                            <StraightLine
                                                length={
                                                    fitWidthPx /
                                                        (ifOneAddOne(
                                                            pointLine.length
                                                        ) -
                                                            1) -
                                                    40 *
                                                        ifOneReturnZero(
                                                            pointLine.length
                                                        )
                                                }
                                            />
                                        )}
                                        {/* svg line that does a horseshoe shape */}
                                        {pointLineIndex ===
                                            pointLine.length - 1 &&
                                            pointsIndex !== points.length - 1 &&
                                            pointsIndex % 2 !== 1 && (
                                                <HorseShoeLine orientation="right" />
                                            )}

                                        {pointLineIndex ===
                                            pointLine.length - 1 &&
                                            pointsIndex ===
                                                points.length - 1 && (
                                                <>
                                                    <svg height="2" width="70">
                                                        <line
                                                            x1="0"
                                                            y1="0"
                                                            x2="70"
                                                            y2="0"
                                                            style={{
                                                                stroke: "white",
                                                                strokeWidth:
                                                                    "5px",
                                                            }}
                                                        />
                                                    </svg>
                                                    <DatePoint date="Today" />
                                                </>
                                            )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

const StraightLine = ({ length }) => {
    return (
        <svg height="2" width={length}>
            <line
                x1="0"
                y1="0"
                x2={length}
                y2="0"
                style={{
                    stroke: "white",
                    strokeWidth: "5px",
                }}
            />
        </svg>
    );
};

const HorseShoeLine = ({ orientation }) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="83"
                height="86"
                viewBox="0 0 83 86"
                fill="none"
                style={{
                    transform: `translateY(46.78%) ${
                        orientation === "left"
                            ? "translateX(-100%)"
                            : "translateX(100%)"
                    } rotate(${orientation === "left" ? "180" : "0"}deg)`,
                    position: "absolute",
                    left: orientation === "left" ? "0" : "unset",
                    right: orientation === "right" ? "0" : "unset",
                    origin: "right",
                }}
            >
                <path
                    d="M0 3H40C62.0914 3 80 20.9086 80 43V43C80 65.0914 62.0914 83 40 83H0"
                    stroke="white"
                    strokeWidth="2.1"
                />
            </svg>
        </>
    );
};

const DatePoint = ({ date }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transform: "translateY(0%)",
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    borderRadius: "15px",
                    padding: "4px",
                    margin: "5px",
                    position: "absolute",
                    bottom: "100%",
                    width: "max-content",
                }}
            >
                <h5>{date}</h5>
            </div>
            <svg height="30" width="30">
                <circle
                    cx="15"
                    cy="15"
                    r="13"
                    stroke="white"
                    strokeWidth="3"
                    fill="transparent"
                />
            </svg>
        </div>
    );
};
