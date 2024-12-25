import React from 'react'
import { AppContext } from './context'

const SunIcon = ({ color }) => (
    <div className={`sun-icon ${color === "light" && "selected"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1.8em" style={{ fill: 'white' }} viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" /></svg>
    </div>)

const MoonIcon = ({ color }) => (
    <div className={`moon-icon ${color === "dark" && "selected"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" height="2em" style={{ fill: 'black' }} viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" /></svg>
    </div>
)

const HomeIcon = ({ isCurrentSection }) => {
    const { colorMode } = React.useContext(AppContext)
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" style={{ fill: colorMode === 'light' ? isCurrentSection ? 'black' : 'white' : isCurrentSection ? 'white' : 'black' }}><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
    )
}
const UserIcon = ({ isCurrentSection }) => {
    const { colorMode } = React.useContext(AppContext)
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{ fill: colorMode === 'light' ? isCurrentSection ? 'black' : 'white' : isCurrentSection ? 'white' : 'black' }}><path d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z" /></svg>
    )
}
const CodeIcon = ({ isCurrentSection }) => {
    const { colorMode } = React.useContext(AppContext)

    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" style={{ fill: colorMode === 'light' ? isCurrentSection ? 'black' : 'white' : isCurrentSection ? 'white' : 'black' }}><path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" /></svg>
    )
}
const EnvelopeIcon = ({ isCurrentSection }) => {
    const { colorMode } = React.useContext(AppContext)
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" style={{ fill: colorMode === 'light' ? isCurrentSection ? 'black' : 'white' : isCurrentSection ? 'white' : 'black' }}><path d="M128 0C110.3 0 96 14.3 96 32V224h96V192c0-35.3 28.7-64 64-64H480V32c0-17.7-14.3-32-32-32H128zM256 160c-17.7 0-32 14.3-32 32v32h96c35.3 0 64 28.7 64 64V416H576c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H256zm240 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM64 256c-17.7 0-32 14.3-32 32v13L187.1 415.9c1.4 1 3.1 1.6 4.9 1.6s3.5-.6 4.9-1.6L352 301V288c0-17.7-14.3-32-32-32H64zm288 84.8L216 441.6c-6.9 5.1-15.3 7.9-24 7.9s-17-2.8-24-7.9L32 340.8V480c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V340.8z" /></svg>
    )
}

const EmailIcon = ({ isCurrentSection }) => {
    const { colorMode } = React.useContext(AppContext)
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" style={{ fill: "white" }} viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" /></svg>
    )
}

const GitHubIcon = ({ isCurrentSection }) => {
    const { colorMode } = React.useContext(AppContext)
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512" style={{ fill: "white" }}><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-2.9 0-5.2-1.6-5.2-3.6c0-2 2.3-3.6 5.2-3.6c2.9 0 5.2 1.6 5.2 3.6zm-32.1-6.7c-.7 1.5-2.6 2.1-4.1 1.4c-1.5-.7-2.1-2.6-1.4-4.1c.7-1.5 2.6-2.1 4.1-1.4c1.5.7 2.1 2.6 1.4 4.1zm44.2-1.1c-2.9 0-5.2 1.6-5.2 3.6c0 2 2.3 3.6 5.2 3.6c2.9 0 5.2-1.6 5.2-3.6c0-2-2.3-3.6-5.2-3.6zm44.2-1.1c-1.5-.7-3.4 0-4.1 1.4c-.7 1.5 0 3.4 1.4 4.1c1.5.7 3.4 0 4.1-1.4c.7-1.5 0-3.4-1.4-4.1zm44.2-1.1c-2.9 0-5.2 1.6-5.2 3.6c0 2 2.3 3.6 5.2 3.6c2.9 0 5.2-1.6 5.2-3.6c0-2-2.3-3.6-5.2-3.6zm44.2-1.1c-1.5-.7-3.4 0-4.1 1.4c-.7 1.5 0 3.4 1.4 4.1c1.5.7 3.4 0 4.1-1.4c.7-1.5 0-3.4-1.4-4.1zm44.2-1.1c-2.9 0-5.2 1.6-5.2 3.6c0 2 2.3 3.6 5.2 3.6c2.9 0 5.2-1.6 5.2-3.6c0-2-2.3-3.6-5.2-3.6zm44.2-1.1c-1.5-.7-3.4 0-4.1 1.4c-.7 1.5 0 3.4 1.4 4.1c1.5.7 3.4 0 4.1-1.4c.7-1.5 0-3.4-1.4-4.1zm44.2-1.1c-2.9 0-5.2 1.6-5.2 3.6c0 2 2.3 3.6 5.2 3.6c2.9 0 5.2-1.6 5.2-3.6c0-2-2.3-3.6-5.2-3.6zm44.2-1.1c-1.5-.7-3.4 0-4.1 1.4c-.7 1.5 0 3.4 1.4 4.1c1.5.7 3.4 0 4.1-1.4c.7-1.5 0-3.4-1.4-4.1zM248 8C111 8 0 119 0 256c0 109.5 70.8 202.5 169.2 235.3c12.4 2.3 16.9-5.4 16.9-12c0-5.9-.2-21.5-.3-42.2c-68.9 15-83.4-33.2-83.4-33.2c-11.3-28.7-27.6-36.3-27.6-36.3c-22.6-15.4 1.7-15.1 1.7-15.1c25 1.8 38.1 25.7 38.1 25.7c22.2 38 58.3 27 72.5 20.6c2.2-16.1 8.7-27 15.8-33.2c-55-6.3-112.8-27.5-112.8-122.5c0-27.1 9.7-49.2 25.6-66.5c-2.6-6.3-11.1-31.7 2.4-66c0 0 21-6.7 68.8 25.4c20-5.6 41.5-8.4 62.9-8.5c21.4 .1 42.9 2.9 62.9 8.5c47.8-32.1 68.8-25.4 68.8-25.4c13.5 34.3 5 59.7 2.4 66c15.9 17.3 25.6 39.4 25.6 66.5c0 95.2-57.9 116.1-113 122.3c8.9 7.7 16.8 23 16.8 46.3c0 33.4-.3 60.3-.3 68.5c0 6.7 4.5 14.4 17 12C425.2 458.5 496 365.5 496 256C496 119 385 8 248 8z" /></svg>
    )
}

const LinkedInIcon = ({ isCurrentSection }) => {
    const { colorMode } = React.useContext(AppContext)
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{ fill: "white" }}><path d="M100.3 448H7V149.1h93.3V448zm-46.6-341.3c-31.2 0-56.5-25.3-56.5-56.5S22.5 0 53.7 0s56.5 25.3 56.5 56.5s-25.3 56.5-56.5 56.5zM447.9 448h-93.3V302.4c0-34.7-12.4-58.4-43.4-58.4c-23.7 0-37.8 15.9-44 31.3c-2.3 5.6-2.9 13.4-2.9 21.3V448h-93.3s1.2-239.4 0-264.9h93.3v37.5c12.4-19.2 34.5-46.5 84-46.5c61.3 0 107.3 40 107.3 126.1V448z" /></svg>
    )
}

const PhoneNumberIcon = ({ isCurrentSection }) => {
    const { colorMode } = React.useContext(AppContext)
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" style={{ fill: "white" }} viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
    )
}

const ScrollIcon = ({ isCurrentSection }) => {
    const { colorMode } = React.useContext(AppContext)
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" style={{ fill: "white" }} viewBox="0 0 384 512"><path d="M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z" /></svg>
    )
}

const XIcon = ({ isHovering }) => {
    const { colorMode } = React.useContext(AppContext)
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            style={{
                fill: colorMode === 'light'
                    ? isHovering
                        ? 'white'
                        : 'black'
                    : isHovering
                        ? 'black'
                        : 'white'
            }} height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
    )
}

const getIcon = (iconName, isCurrentSection, isHovering = false) => {
    const { colorMode } = React.useContext(AppContext)

    switch (iconName) {
        case 'sun':
            return <SunIcon />
        case 'moon':
            return <MoonIcon />
        case 'home':
            return <HomeIcon isCurrentSection={isCurrentSection} colorMode={colorMode} />
        case 'user':
            return <UserIcon isCurrentSection={isCurrentSection} colorMode={colorMode} />
        case 'code':
            return <CodeIcon isCurrentSection={isCurrentSection} colorMode={colorMode} />
        case 'envelope':
            return <EnvelopeIcon isCurrentSection={isCurrentSection} colorMode={colorMode} />
        case 'email':
            return <EmailIcon isCurrentSection={isCurrentSection} colorMode={colorMode} />
        case 'github':
            return <GitHubIcon isCurrentSection={isCurrentSection} colorMode={colorMode} />
        case 'linkedin':
            return <LinkedInIcon isCurrentSection={isCurrentSection} colorMode={colorMode} />
        case 'phone':
            return <PhoneNumberIcon isCurrentSection={isCurrentSection} colorMode={colorMode} />
        case 'scroll':
            return <ScrollIcon isCurrentSection={isCurrentSection} colorMode={colorMode} />
        case 'close':
            return <XIcon isHovering={isHovering} />
        default:
            return null
    }

}

export { getIcon, SunIcon, MoonIcon, HomeIcon, UserIcon, CodeIcon, EnvelopeIcon }