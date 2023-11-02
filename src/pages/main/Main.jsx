import React from 'react'
import { AppContext } from '../../components/context'

export function Main() {
    const { colorMode } = React.useContext(AppContext);

    const mainStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        height: '100%',
        zIndex: '1',

    }

    const textStyle = {
        color: colorMode === 'light' ? 'black' : 'white',
    }

    return (
        <div style={mainStyle}>
            <section className='page-main-section-h2'>
                <h1 style={{ textAlign: "right", lineHeight: "1.5", fontSize: "100px", ...textStyle }}>AGAMEMNON<br />SERAFEIM</h1>
            </section>
            <section className='page-main-section-h1' style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", background: "linear-gradient(90deg, #0BB9E5 0%, #44E50B 100%)", width: "97vw", textAlign: "right", paddingRight: "100px" }}>
                <h2>Aspiring Web Developer</h2>
            </section>
            <section style={textStyle} className='page-main-section-h1'>
                <h2>Welcome to my digital portfolio!</h2>
            </section>

        </div>
    )
}
