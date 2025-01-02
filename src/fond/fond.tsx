import { useState, useEffect } from "react";
import "./Fond.css";

const Fond: React.FC = () => {
    const [largeur, setLargeur] = useState<number>(window.innerWidth);
    const [hauteur, setHauteur] = useState<number>(window.innerHeight);
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [clicks, setClicks] = useState<Array<{ x: number; y: number; time: number }>>([]); // Liste des clics et leur temps
    const [pixelAnimationState, setPixelAnimationState] = useState<Map<string, { active: boolean; time: number }>>(new Map()); // Suivi des animations des pixels

    useEffect(() => {
        const handleResize = () => {
            setLargeur(window.innerWidth);
            setHauteur(window.innerHeight);
        };

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseClick = (e: MouseEvent) => {
            const newClick = { x: e.clientX, y: e.clientY };
            setClicks((prevClicks) => [
                ...prevClicks,
                { ...newClick, time: Date.now() }
            ]);

            // Définir la taille de la zone d'impact circulaire
            const radius = 60; // Rayon de la zone d'impact circulaire
            const newPixelAnimationState = new Map(pixelAnimationState);

            // Identifier la zone d'impact circulaire autour du clic
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    const pixelX = col * squareSize + squareSize / 2;
                    const pixelY = row * squareSize + squareSize / 2;

                    // Calculer la distance entre le clic et le pixel
                    const distance = Math.sqrt(Math.pow(newClick.x - pixelX, 2) + Math.pow(newClick.y - pixelY, 2));

                    // Si la distance entre le clic et le pixel est inférieure au rayon, l'animation est activée
                    if (distance < radius) {
                        const key = `${col}-${row}`;
                        newPixelAnimationState.set(key, { active: true, time: Date.now() });
                    }
                }
            }

            setPixelAnimationState(newPixelAnimationState);

            // Désactiver l'animation après 600ms
            setTimeout(() => {
                const updatedState = new Map(pixelAnimationState);
                newPixelAnimationState.forEach((value, key) => {
                    if (value.active) {
                        updatedState.set(key, { active: false, time: Date.now() });
                    }
                });
                setPixelAnimationState(updatedState);
            }, 600); // Durée de l'animation ripple (600ms)
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("click", handleMouseClick);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("click", handleMouseClick);
        };
    }, [pixelAnimationState]);

    const squareSize = 25;
    const cols = Math.floor(largeur / squareSize);
    const rows = Math.floor(hauteur / squareSize);

    // Fonction pour vérifier si un pixel a été cliqué récemment et a une animation
    const wasClicked = (x: number, y: number) => {
        const key = `${x}-${y}`;
        return pixelAnimationState.has(key) && pixelAnimationState.get(key)?.active;
    };

    // Fonction pour calculer l'échelle de suivi de la souris
    const calculateMouseScale = (x: number, y: number) => {
        const centerX = mousePosition.x;
        const centerY = mousePosition.y;
        const distance = Math.sqrt(Math.pow(centerX - (x * squareSize + squareSize / 2), 2) + Math.pow(centerY - (y * squareSize + squareSize / 2), 2));
        const scale = Math.max(1, 1 + (2 - distance / 100) * 1.5); // Augmenter la portée de l'animation de la souris
        return scale;
    };

    return (
        <div className="fond">
            {Array.from({ length: rows }).map((_, rowIndex) => (
                <div className="row" key={rowIndex}>
                    {Array.from({ length: cols }).map((_, colIndex) => {
                        // Vérifier si le pixel a été affecté par un clic
                        const clicked = wasClicked(colIndex, rowIndex);
                        const key = `${colIndex}-${rowIndex}`;

                        // Vérifier si l'animation doit être en cours ou non
                        const pixelAnimation = pixelAnimationState.get(key);

                        // Calculer l'effet de suivi de la souris
                        const mouseScale = calculateMouseScale(colIndex, rowIndex);

                        // Appliquer l'animation du clic ou le suivi de la souris
                        const scale = clicked ? "ripple-animation" : "";

                        return (
                            <div key={`${rowIndex}-${colIndex}`} className="square">
                                <div
                                    className={`pixel ${scale}`}
                                    style={{
                                        transform: `scale(${mouseScale})`, // Appliquer le scale du suivi de la souris
                                    }}
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
