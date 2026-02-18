import { useState, useEffect } from "react";
import "../css/Loader.css";

function Loader({ onFinish }) {
    const [progress, setProgress] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 25);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            const timeout = setTimeout(() => {
                setFadeOut(true);
                const removeTimeout = setTimeout(() => {
                    if (onFinish) onFinish();
                }, 600);
                return () => clearTimeout(removeTimeout);
            }, 400);
            return () => clearTimeout(timeout);
        }
    }, [progress, onFinish]);

    return (
        <div className={`loader-overlay ${fadeOut ? "loader-fade-out" : ""}`}>
            <div className="loader-content">
                <div className="loader-logo">
                    <img src="./section-8-logo.svg" width="120" alt="Golden Hive" />
                </div>
                <div className="loader-text">Golden Hive Honey</div>
                <div className="loader-bar-wrapper">
                    <div className="loader-bar">
                        <div
                            className="loader-bar-fill"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="loader-percentage">{progress}%</div>
                </div>
            </div>
        </div>
    );
}

export default Loader;
