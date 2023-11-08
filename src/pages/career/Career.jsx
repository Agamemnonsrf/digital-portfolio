import React from "react";
import { AppContext } from "../../components/context";
import { CareerTimeLine } from "./CareerTimeLine";
import { textureSVG } from "../../components/svgs";

export function Career() {


    const defaultInfo = {
        heading: "Hover over a date to see details",
        info: ""
    }

    const { colorMode } = React.useContext(AppContext);
    const [info, setInfo] = React.useState(defaultInfo);
    const textStyle = {
        color: colorMode === "light" ? "black" : "white",
    };
    const textBoxStyle = {

        width: "50vw",
        height: "90%",
        position: "relative",
        backgroundColor: '#ffffff',
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
                        [{ date: "2018", info: "about 018" }, { date: "2020", info: "about 020" }],
                        [{ date: "SEPT 2022", info: "about EPT" }, { date: "JULY 2022", info: "about ULY" }],
                        [{ date: "FEBR 2023", info: "about ULY" }, { date: "JULY 2023", info: "about EBR" }],
                    ]}
                    setInfo={setInfo}
                />
            </section>
            <section className="page-section-h1">
                <div style={textBoxStyle}>
                    <h4 style={{ color: "black", fontSize: "1.5em" }}>{info.heading}</h4>
                    <p style={{ fontSize: "1.2em" }}>
                        {info.info}
                    </p>
                </div>
            </section>
        </div>
    );
}
