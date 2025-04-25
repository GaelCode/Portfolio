import { useState, useEffect } from "react";
import "./Fond.css";

const Fond: React.FC = () => {
    const [largeur, setLargeur] = useState<number>(window.innerWidth);
    const [hauteur, setHauteur] = useState<number>(window.innerHeight);
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [pixelAnimationState, setPixelAnimationState] = useState<Map<string, { active: boolean; time: number }>>(new Map());
    const [isMouseFollowEnabled, setIsMouseFollowEnabled] = useState<boolean>(window.innerWidth >= 1280); // state to enable/disable mouse follow

    useEffect(() => {
        const handleResize = () => {
            setLargeur(window.innerWidth);
            setHauteur(window.innerHeight);
            // Disable mouse follow animation if window width is below 1280px
            setIsMouseFollowEnabled(window.innerWidth >= 1200);
        };

        let animationFrameId: number;
        const updateMousePosition = (e: MouseEvent) => {
            if (!isMouseFollowEnabled) return; // Don't update mouse position if not enabled

            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(() => {
                setMousePosition({ x: e.clientX, y: e.clientY });
            });
        };

        const handleMouseClick = (e: MouseEvent) => {
            const newClick = { x: e.clientX, y: e.clientY };

            let radius = 96;
            const newPixelAnimationState = new Map(pixelAnimationState);
            if (window.innerWidth < 1200 && window.innerWidth > 700) {
                radius = 50;
            } else if (window.innerWidth < 700 && window.innerWidth > 500) {
                radius = 50;
            } else if (window.innerWidth < 500) {
                radius = 40;
            }

            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    const pixelX = col * squareSize + squareSize / 2;
                    const pixelY = row * squareSize + squareSize / 2;
                    const distance = Math.sqrt(Math.pow(newClick.x - pixelX, 2) + Math.pow(newClick.y - pixelY, 2));
                    if (distance < radius) {
                        const key = `${col}-${row}`;
                        newPixelAnimationState.set(key, { active: true, time: Date.now() });
                    }
                }
            }

            setPixelAnimationState(newPixelAnimationState);

            setTimeout(() => {
                const updatedState = new Map(pixelAnimationState);
                newPixelAnimationState.forEach((value, key) => {
                    if (value.active) {
                        updatedState.set(key, { active: false, time: Date.now() });
                    }
                });
                setPixelAnimationState(updatedState);
            }, 600);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("click", handleMouseClick);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("click", handleMouseClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, [pixelAnimationState, isMouseFollowEnabled]); // Re-run when isMouseFollowEnabled changes

    let cols = 30;
    if (window.innerWidth < 1200 && window.innerWidth > 700) {
        cols = 20;
    } else if (window.innerWidth < 700) {
        cols = 15;
    }
    const squareSize = largeur / cols;
    const rows = Math.ceil(hauteur / squareSize);

    const wasClicked = (x: number, y: number) => {
        const key = `${x}-${y}`;
        return pixelAnimationState.has(key) && pixelAnimationState.get(key)?.active;
    };

    const calculateMouseScale = (x: number, y: number) => {
        if (!isMouseFollowEnabled) return 1; // No scaling if mouse follow is disabled

        const centerX = mousePosition.x;
        const centerY = mousePosition.y;
        let distance = Math.sqrt(Math.pow(centerX - (x * squareSize + squareSize / 2), 2) + Math.pow(centerY - (y * squareSize + squareSize / 2), 2));
        
        return Math.max(1, 1 + (1.5 - distance / 250) * 2);
    };

    return (
        <div className="fond">
            {Array.from({ length: rows }).map((_, rowIndex) => (
                <div className="row" key={rowIndex}>
                    {Array.from({ length: cols }).map((_, colIndex) => {
                        const clicked = wasClicked(colIndex, rowIndex);
                        const key = `${colIndex}-${rowIndex}`;
                        const mouseScale = calculateMouseScale(colIndex, rowIndex);
                        const scale = clicked ? "ripple-animation" : "";

                        return (
                            <div key={key} className="square" style={{ width: squareSize, height: squareSize }}>
                                <div
                                    className={`pixel ${scale}`}
                                    style={{ transform: `scale(${mouseScale})` }}
                                ></div>
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default Fond;
