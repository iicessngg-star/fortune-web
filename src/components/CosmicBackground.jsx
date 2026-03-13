'use client';

import React, { useCallback, useState, useEffect } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const CosmicBackground = () => {
    const [particleCount, setParticleCount] = useState(120);

    useEffect(() => {
        const checkMobile = () => {
            setParticleCount(window.innerWidth < 768 ? 50 : 120);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            className="fixed inset-0 pointer-events-none z-[-20]"
            options={{
                background: { color: { value: "transparent" } },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "repulse" },
                        resize: true,
                    },
                    modes: { repulse: { distance: 100, duration: 0.4 } },
                },
                particles: {
                    color: { value: ["#ffffff", "#f472b6", "#fbbf24"] },
                    links: { enable: false },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: { default: "bounce" },
                        random: true,
                        speed: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.2 : 0.5,
                        straight: false,
                    },
                    number: {
                        density: { enable: true, area: 800 },
                        value: particleCount,
                    },
                    opacity: {
                        value: 0.7,
                        random: true,
                        anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
                    },
                    shape: { type: "circle" },
                    size: {
                        value: { min: 1, max: 3 },
                        random: true,
                        anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default CosmicBackground;
