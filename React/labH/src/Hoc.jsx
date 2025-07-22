import "./Hoc.css";
import { useState, useEffect } from 'react';

const withMousePosition = (WrappedComponent) => {
    return (props) => {
        const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
        useEffect(() => {
            const handleMousePositionCange = (e) => {
                setMousePosition({x: e.clientX, y: e.clientY});
            }
            window.addEventListener("mousemove", handleMousePositionCange);

            return () => {
                window.removeEventListener("mousemove", handleMousePositionCange);
            }
        }, []);

        return <WrappedComponent {...props} mousePosition={mousePosition} />
    }
}

const PanelMouseLogger = ({ mousePosition}) => {
    if (!mousePosition) { return null; }
    return (
        <div className="BasicTracker">
            <p>Mouse position</p>
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
        </div>
    );
};

const PointMouseLogger = ({ mousePosition}) => {
    if (!mousePosition) { return null; }
    return (
        <p>
            ({mousePosition.x}, {mousePosition.y})
        </p>
    );
};

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

export default function App() {
    return (
       <div className="App">
        <header className="Header">Little Lemon Restaurant 🍕</header>
        <PanelMouseTracker />
        <PointMouseTracker />
       </div>
    );
}