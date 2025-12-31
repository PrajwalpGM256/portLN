import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * Custom hook for Lenis smooth scrolling
 * Provides buttery smooth momentum scrolling like Offbrand/Lando Norris sites
 */
export function useLenis() {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis with optimized settings for paced scrolling
        const lenis = new Lenis({
            duration: 1.8, // Slower scroll animation for paced feel
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 0.5, // 50% sensitivity - much slower scrolling
            touchMultiplier: 1.2,
        });

        lenisRef.current = lenis;

        // Stop scrolling initially for 3 seconds
        lenis.stop();
        const unlockTimer = setTimeout(() => {
            lenis.start();
        }, 3000);

        // RAF loop
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup
        return () => {
            clearTimeout(unlockTimer);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    return lenisRef;
}
