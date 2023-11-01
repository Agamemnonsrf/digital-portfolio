import React from 'react';
import { useContext } from 'react';
import { AppContext } from './context';

const decideSectionNumber = (section) => {
    if (typeof section !== 'string') {
        switch (section) {
            case 0:
                return 'Main';
            case 1:
                return 'Career';
            case 2:
                return 'Projects';
            default:
                return 'Connect';
        }
    } else {
        switch (section) {
            case 'Main':
                return 0;
            case 'Career':
                return 1;
            case 'Projects':
                return 2;
            case 'Connect':
                return 3;
        }
    }
}

const SidenavButton = ({ text, children }) => {
    const [hovered, setHovered] = React.useState(false);
    const { section, setSection } = useContext(AppContext);

    const handleHover = () => {
        setHovered(true);
    };

    const handleLeave = () => {
        setHovered(false);
    };


    const isCurrentSection = decideSectionNumber(section) === text;


    const buttonStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '25%',
        width: !isCurrentSection && hovered ? '7vw' : '100%',
        transition: 'width 0.3s ease',
        backgroundColor: isCurrentSection ? 'black' : '#fff',
        cursor: isCurrentSection ? 'auto' : 'pointer',
    };
    return (
        <div
            style={buttonStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            onClick={() => setSection(decideSectionNumber(text))}
        >
            <span style={{ fontSize: '30px', color: 'black' }}>{!isCurrentSection && hovered ? text : children}</span>
        </div>
    );
};

const Sidenav = () => {
    const { section, setSection } = useContext(AppContext);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: "3vw", zIndex: "1" }}>
            <SidenavButton text="Main" >
                <HomeIcon isCurrentSection={section === 0} />
            </SidenavButton>

            <SidenavButton text="Career" >
                <UserIcon isCurrentSection={section === 1} />
            </SidenavButton>

            <SidenavButton text="Projects" >
                <CodeIcon isCurrentSection={section === 2} />
            </SidenavButton>

            <SidenavButton text="Connect" >
                <EnvelopeIcon isCurrentSection={section === 3} />
            </SidenavButton>

        </div>
    );
};

const HomeIcon = ({ isCurrentSection }) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 576 512" style={{ fill: isCurrentSection ? "white" : "black" }}><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
    )
}
const UserIcon = ({ isCurrentSection }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 448 512" style={{ fill: isCurrentSection ? "white" : "black" }}><path d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z" /></svg>
    )
}
const CodeIcon = ({ isCurrentSection }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 640 512" style={{ fill: isCurrentSection ? "white" : "black" }}><path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" /></svg>
    )
}
const EnvelopeIcon = ({ isCurrentSection }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 640 512" style={{ fill: isCurrentSection ? "white" : "black" }}><path d="M128 0C110.3 0 96 14.3 96 32V224h96V192c0-35.3 28.7-64 64-64H480V32c0-17.7-14.3-32-32-32H128zM256 160c-17.7 0-32 14.3-32 32v32h96c35.3 0 64 28.7 64 64V416H576c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H256zm240 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM64 256c-17.7 0-32 14.3-32 32v13L187.1 415.9c1.4 1 3.1 1.6 4.9 1.6s3.5-.6 4.9-1.6L352 301V288c0-17.7-14.3-32-32-32H64zm288 84.8L216 441.6c-6.9 5.1-15.3 7.9-24 7.9s-17-2.8-24-7.9L32 340.8V480c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V340.8z" /></svg>
    )
}

export default Sidenav;
