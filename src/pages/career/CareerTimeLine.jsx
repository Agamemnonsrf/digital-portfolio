import React from "react";

export function CareerTimeLine({ points, setInfo }) {
    const fitWidthPx = 700;
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

    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

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
                            if (Array.isArray(point.date)) {
                                const length = random(100, fitWidthPx);
                                return (
                                    //make it so that the dates in the array are displayed close to one another but there is also a line in between them, also the circle and the line should be blue or something to signify that this is a date range instead of a single date
                                    <div
                                        style={{ margin: `25px 0` }}
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
                                                pointsIndex !==
                                                points.length - 1 &&
                                                pointsIndex % 2 === 1 && (
                                                    <HorseShoeLine orientation="left" />
                                                )}
                                            <StraightLine
                                                length={
                                                    fitWidthPx / 2 -
                                                    40 *
                                                    ifOneReturnZero(
                                                        pointLine.length
                                                    ) -
                                                    point.length / 2
                                                }
                                            />
                                            <DateRange point={point} setInfo={setInfo} length={point.length} />
                                            <StraightLine
                                                length={
                                                    fitWidthPx / 2 -
                                                    40 *
                                                    ifOneReturnZero(
                                                        pointLine.length
                                                    ) -
                                                    point.length / 2
                                                }
                                            />
                                            {pointLineIndex ===
                                                pointLine.length - 1 &&
                                                pointsIndex !==
                                                points.length - 1 &&
                                                pointsIndex % 2 !== 1 && (
                                                    <HorseShoeLine orientation="right" />
                                                )}
                                            {pointLineIndex ===
                                                pointLine.length - 1 &&
                                                pointsIndex ===
                                                points.length - 1 && (
                                                    <>
                                                        <svg
                                                            height="2"
                                                            width="70"
                                                        >
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
                                                        <DatePoint date="Today" info={"Currently, I remain vigilant in my studies to ensure my successful graduation, while simultaneously working on my own passion-projects to enhance my skills and keep myself up to date with the newest technology standards."} setInfo={setInfo} />
                                                    </>
                                                )}
                                        </div>
                                    </div>
                                );
                            } else
                                return (
                                    <div
                                        style={{ margin: `25px 0` }}
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
                                                pointsIndex !==
                                                points.length - 1 &&
                                                pointsIndex % 2 === 1 && (
                                                    <HorseShoeLine orientation="left" />
                                                )}
                                            <DatePoint
                                                date={point.date}
                                                info={point.info}
                                                setInfo={setInfo}
                                            />

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
                                                pointsIndex !==
                                                points.length - 1 &&
                                                pointsIndex % 2 !== 1 && (
                                                    <HorseShoeLine orientation="right" />
                                                )}

                                            {pointLineIndex ===
                                                pointLine.length - 1 &&
                                                pointsIndex ===
                                                points.length - 1 && (
                                                    <>
                                                        <svg
                                                            height="2"
                                                            width="70"
                                                        >
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
                                                        <DatePoint date="Today" info={"Currently, I remain vigilant in my studies to ensure my successful graduation, while simultaneously working on my own passion-projects to enhance my skills and keep myself up to date with the newest technology standards."} setInfo={setInfo} />
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

const StraightLine = ({ length, color = "white" }) => {
    return (
        <svg height="2" width={length}>
            <line
                x1="0"
                y1="0"
                x2={length}
                y2="0"
                style={{
                    stroke: color,
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
                    transform: `translateY(46.78%) ${orientation === "left"
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

const DateRange = ({ point, setInfo, length = 200 }) => {
    const [hovering, setHovering] = React.useState(false);
    return (
        <>
            <DatePoint
                date={point.date[0]}
                info={point.info}
                color={"#0BB9E5"}
                fontColor={"white"}
                isPartOfRange={true}
                hoveringRange={hovering}
            />
            <StraightLine length={length} color="#0BB9E5" />
            <DatePoint
                date={point.date[1]}
                info={point.info}
                color={"#0BB9E5"}
                fontColor={"white"}
                isPartOfRange={true}
                hoveringRange={hovering}
            />
            <div
                onMouseEnter={() => {
                    setHovering(true);
                    setInfo({ heading: `${point.date[0]} - ${point.date[1]}`, info: point.info });
                }}
                onMouseLeave={() => {
                    setHovering(false);

                }}
                style={{
                    width: `${parseInt(length) + 160}px`,
                    height: "60px",
                    position: "absolute",
                    top: "-100%",
                    right: "50%",
                    transform: "translateX(50%)",
                }}
            />
        </>
    );
};

const DatePoint = ({ date, info, setInfo, color = "white", fontColor = "black", isPartOfRange = false, hoveringRange }) => {
    const [hovering, setHovering] = React.useState(false);

    const hoverFinal = isPartOfRange ? hoveringRange : hovering;
    return (
        <div style={{ position: "relative" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        backgroundColor: color,
                        borderRadius: "15px",
                        padding: "4px 7px",
                        margin: "5px",
                        position: "absolute",
                        bottom: "100%",
                        width: "max-content",
                    }}
                >
                    <h5 style={{ color: fontColor }}>{date}</h5>
                </div>
                <svg height="30" width="30">
                    <circle
                        style={{ transition: "fill 0.2s ease-in-out" }}
                        cx="15"
                        cy="15"
                        r="13"
                        stroke={color}
                        strokeWidth="3"
                        fill={hoverFinal ? color : "transparent"}
                    />
                </svg>
            </div>
            {!isPartOfRange && <div
                onMouseEnter={() => {
                    setHovering(true);
                    setInfo({ heading: date, info: info });
                }}
                onMouseLeave={() => {
                    setHovering(false);

                }}
                style={{
                    width: "100px",
                    height: "100px",
                    position: "absolute",
                    top: "-200%",
                    left: "-100%",
                }}
            />}
        </div>
    );
};
