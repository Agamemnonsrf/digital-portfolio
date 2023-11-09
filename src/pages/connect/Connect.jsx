import React from 'react'
import { AppContext } from '../../components/context'
import { textureSVG } from '../../components/svgs';

export function Connect() {
    const { colorMode } = React.useContext(AppContext)
    const boxStyle = {
        width: "80vw",
        height: "90%",
        backgroundColor: '#ffffff',
        backgroundImage: textureSVG(1),
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
    };

    return (
        <div className="section-container">
            <section className="page-section-h1"><h2 style={{ color: colorMode === 'light' ? "black" : "white" }}>Get Connected</h2></section>
            <section className="page-section-h3">
                <div className="connect-box" style={boxStyle}>
                    <div style={{ width: "50%" }}>

                    </div>
                    <div style={{ width: "50%" }}></div>
                </div>
            </section>
        </div>
    )
}
