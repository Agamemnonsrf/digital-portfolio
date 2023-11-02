
import React, { useState, useContext } from 'react'
import { AppContext } from './context'
import { SunIcon, MoonIcon } from './icons'

export function Colormode() {
    const { colorMode, setColorMode } = useContext(AppContext)

    const sunStyle = {
        backgroundColor: colorMode === 'light' ? 'black' : 'unset',
        cursor: 'auto',

    }

    const moonStyle = {
        backgroundColor: colorMode === 'dark' ? 'white' : 'unset',
        cursor: 'auto',

    }

    return (
        <div className="colormode">
            <button id="sunbox" style={sunStyle} onClick={() => {
                setColorMode('light')
            }}>
                <SunIcon color={colorMode} />
            </button>
            <button id="moonbox" style={moonStyle} onClick={() => {
                setColorMode('dark')
            }}>
                <MoonIcon color={colorMode} />
            </button>
        </div>
    )
}


