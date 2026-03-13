(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/CosmicBackground.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tsparticles$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-tsparticles/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tsparticles$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tsparticles/browser/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const CosmicBackground = ()=>{
    _s();
    const [particleCount, setParticleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(120);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CosmicBackground.useEffect": ()=>{
            const checkMobile = {
                "CosmicBackground.useEffect.checkMobile": ()=>{
                    setParticleCount(window.innerWidth < 768 ? 50 : 120);
                }
            }["CosmicBackground.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return ({
                "CosmicBackground.useEffect": ()=>window.removeEventListener('resize', checkMobile)
            })["CosmicBackground.useEffect"];
        }
    }["CosmicBackground.useEffect"], []);
    const particlesInit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CosmicBackground.useCallback[particlesInit]": async (engine)=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tsparticles$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadFull"])(engine);
        }
    }["CosmicBackground.useCallback[particlesInit]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tsparticles$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        id: "tsparticles",
        init: particlesInit,
        className: "fixed inset-0 pointer-events-none z-[-20]",
        options: {
            background: {
                color: {
                    value: "transparent"
                }
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse"
                    },
                    resize: true
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: [
                        "#ffffff",
                        "#f472b6",
                        "#fbbf24"
                    ]
                },
                links: {
                    enable: false
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce"
                    },
                    random: true,
                    speed: ("TURBOPACK compile-time value", "object") !== 'undefined' && window.innerWidth < 768 ? 0.2 : 0.5,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    value: particleCount
                },
                opacity: {
                    value: 0.7,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                shape: {
                    type: "circle"
                },
                size: {
                    value: {
                        min: 1,
                        max: 3
                    },
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                }
            },
            detectRetina: true
        }
    }, void 0, false, {
        fileName: "[project]/src/components/CosmicBackground.jsx",
        lineNumber: 25,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CosmicBackground, "ZvH6JiXqyzWzR5jVcIaBomwrH/s=");
_c = CosmicBackground;
const __TURBOPACK__default__export__ = CosmicBackground;
var _c;
__turbopack_context__.k.register(_c, "CosmicBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MagicCursor.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const MagicCursor = ()=>{
    _s();
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: -100,
        y: -100
    });
    const [trails, setTrails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isDesktop, setIsDesktop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MagicCursor.useEffect": ()=>{
            // Check if the device has a fine pointer (usually a mouse/desktop)
            const mediaQuery = window.matchMedia('(pointer: fine)');
            setIsDesktop(mediaQuery.matches);
            if (!mediaQuery.matches) return;
            const handleMouseMove = {
                "MagicCursor.useEffect.handleMouseMove": (e)=>{
                    setPosition({
                        x: e.clientX,
                        y: e.clientY
                    });
                    // Add a new sparkle to the trail
                    const newSparkle = {
                        id: Date.now(),
                        x: e.clientX,
                        y: e.clientY,
                        size: Math.random() * 6 + 2,
                        color: [
                            '#fbbf24',
                            '#f472b6',
                            '#c084fc',
                            '#ffffff'
                        ][Math.floor(Math.random() * 4)]
                    };
                    setTrails({
                        "MagicCursor.useEffect.handleMouseMove": (prev)=>[
                                ...prev,
                                newSparkle
                            ]
                    }["MagicCursor.useEffect.handleMouseMove"]);
                    // Remove the sparkle after short animation
                    setTimeout({
                        "MagicCursor.useEffect.handleMouseMove": ()=>{
                            setTrails({
                                "MagicCursor.useEffect.handleMouseMove": (prev)=>prev.filter({
                                        "MagicCursor.useEffect.handleMouseMove": (t)=>t.id !== newSparkle.id
                                    }["MagicCursor.useEffect.handleMouseMove"])
                            }["MagicCursor.useEffect.handleMouseMove"]);
                        }
                    }["MagicCursor.useEffect.handleMouseMove"], 500);
                }
            }["MagicCursor.useEffect.handleMouseMove"];
            window.addEventListener('mousemove', handleMouseMove);
            return ({
                "MagicCursor.useEffect": ()=>window.removeEventListener('mousemove', handleMouseMove)
            })["MagicCursor.useEffect"];
        }
    }["MagicCursor.useEffect"], []);
    if (!isDesktop) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed pointer-events-none z-[9999] rounded-full mix-blend-screen transition-transform duration-75 ease-out",
                style: {
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: '20px',
                    height: '20px',
                    transform: 'translate(-50%, -50%)',
                    background: 'radial-gradient(circle, rgba(236,72,153,0.8) 0%, rgba(236,72,153,0) 70%)',
                    boxShadow: '0 0 15px rgba(251, 191, 36, 0.5)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/MagicCursor.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            trails.map((sparkle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed pointer-events-none z-[9998] rounded-full animate-ping",
                    style: {
                        left: `${sparkle.x}px`,
                        top: `${sparkle.y}px`,
                        width: `${sparkle.size}px`,
                        height: `${sparkle.size}px`,
                        background: sparkle.color,
                        transform: 'translate(-50%, -50%)',
                        opacity: 0.8
                    }
                }, sparkle.id, false, {
                    fileName: "[project]/src/components/MagicCursor.jsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true);
};
_s(MagicCursor, "5scqP3ODlrOG5+00zWh6xZGssvw=");
_c = MagicCursor;
const __TURBOPACK__default__export__ = MagicCursor;
var _c;
__turbopack_context__.k.register(_c, "MagicCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LanguageSwitcher.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const LanguageSwitcher = ()=>{
    _s();
    const { i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const toggleLanguage = ()=>{
        const newLang = i18n.language === 'th' ? 'en' : 'th';
        i18n.changeLanguage(newLang);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleLanguage,
        className: "flex items-center justify-center space-x-1.5 px-4 py-1 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded-full transition-all text-xs font-sarabun tracking-wide text-gray-300",
        title: "Switch Language",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: i18n.language === 'th' ? 'text-white' : 'opacity-60',
                children: "TH"
            }, void 0, false, {
                fileName: "[project]/src/components/LanguageSwitcher.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "opacity-40 font-light",
                children: "|"
            }, void 0, false, {
                fileName: "[project]/src/components/LanguageSwitcher.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: i18n.language === 'en' ? 'text-white' : 'opacity-60',
                children: "EN"
            }, void 0, false, {
                fileName: "[project]/src/components/LanguageSwitcher.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LanguageSwitcher.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LanguageSwitcher, "iD7vDB/EPQWin5ATG71yacngHuk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = LanguageSwitcher;
const __TURBOPACK__default__export__ = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSwitcher$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageSwitcher.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Navbar() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const getNavClass = (path)=>{
        const isActive = pathname === path;
        return isActive ? "bg-white/[0.12] px-5 py-1.5 rounded-full text-[#eaddcf] font-sarabun font-light tracking-wide transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] border border-white/5" : "px-4 py-1.5 text-gray-400 hover:text-[#eaddcf] font-sarabun font-light tracking-wide transition-all";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "sticky top-0 z-50 w-full mb-8 pt-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto w-full px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#1e192c]/60 backdrop-blur-xl border border-white/5 rounded-full flex justify-between items-center px-6 py-2 pb-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-1 md:space-x-4 text-[13px] font-sarabun mt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: getNavClass('/'),
                                children: t('home')
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/#birth-form",
                                className: "px-4 py-1.5 text-gray-400 hover:text-white font-sarabun font-light tracking-wide transition-all",
                                children: t('fortune')
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/shop",
                                className: `${getNavClass('/shop')} flex items-center gap-1.5 border-l border-white/10 pl-6`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg",
                                        children: "💎"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    t('shop')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.jsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSwitcher$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/Navbar.jsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.jsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(Navbar, "uWuIruepw5zPmgi7oUByQqFNwqE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/locales/en/translation.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"hero_title":"Mystic Crystal Oracle","hero_subtitle":"Discover your destiny, elemental energy, and lucky crystals","open_fortune":"✨ Reveal My Fortune","birth_form_title":"🔮 Destiny Reveal Ritual","day":"Day","month":"Month","year":"Year (B.E.)","birth_time":"Birth Time","submit_fortune":"REVEAL MY FORTUNE","fortune_loading":"Accessing Cosmic Energy...","name":"Your Name","name_placeholder":"Enter your name or nickname","tarot_title":"🎴 Tarot Card of the Day","tarot_desc":"Draw a card to receive daily guidance and energy","draw_card":"Draw a Card","draw_card_again":"Draw Again","crystal_recommendation":"Your Lucky Crystals","buy_now":"Buy Now","shop":"Shop","home":"Home","fortune":"Fortune","crystal":"Crystals","your_fortune_title":"Your Fortune Reading","ai_analysis":"AI Reading","element_balance":"⚖️ Element Balance","review_fortune_again":"✨ Review Fortune Again","enhance_fortune_cta":"💎 Enhance Your Fortune with Crystals","enhance_fortune_desc":"Discover authentic crystals selected to attract positive energy, protect, and enhance your personal element.","view_suitable_crystal":"Find My Crystal","popular":"Popular","recommended":"Recommended","best_energy":"Best Energy","crystal_shop_title":"Crystal Shop","crystal_shop_desc":"Shop authentic lucky stones to enhance your destiny and bring positive energy into your life","price":"Price","baht":"THB","lucky_energy_title":"Lucky Energy","lucky_color":"Lucky Color","lucky_number":"Lucky Number","lucky_day":"Lucky Day","element_title":"Your Element","element_wood":"Wood Element","element_fire":"Fire Element","element_earth":"Earth Element","element_metal":"Metal Element","element_water":"Water Element","bazi_title":"Chinese Zodiac","year_of":"Year of the","zodiac_rat":"Rat","zodiac_ox":"Ox","zodiac_tiger":"Tiger","zodiac_rabbit":"Rabbit","zodiac_dragon":"Dragon","zodiac_snake":"Snake","zodiac_horse":"Horse","zodiac_goat":"Goat","zodiac_monkey":"Monkey","zodiac_rooster":"Rooster","zodiac_dog":"Dog","zodiac_pig":"Pig","bazi_desc":"Your Chinese Zodiac sign based on birth year ({{year}} CE)","planet_title":"Birth Planet","star_prefix":"","planet_sun":"Sun","planet_moon":"Moon","planet_mars":"Mars","planet_mercury":"Mercury","planet_jupiter":"Jupiter","planet_venus":"Venus","planet_saturn":"Saturn","planet_meaning_sun":"Confident, leadership, stands out","planet_meaning_moon":"Gentle, charming, visionary","planet_meaning_mars":"Brave, active, competitive","planet_meaning_mercury":"Smart, good negotiator, adaptable","planet_meaning_jupiter":"Logical, loves justice, seeks knowledge","planet_meaning_venus":"Loves beauty, romantic, artistic","planet_meaning_saturn":"Serious, patient, highly responsible","element_chart_desc":"*Supporting your weakest element helps protect life energy and attracts positive forces*","birth_chart_title":"🌌 Birth Chart Wheel","birth_chart_desc":"*Planetary positions in your Birth Chart influence your charm, energy, and life rhythms*","testimonials_title":"✨ Reviews from Crystal Believers ✨","ai_reading_template":"You were born in the Year of the {{zodiac}} with the {{element}}. Your birth planet is the {{planet}}. The energy of the {{planet}} reflects a {{planetMeaning}} personality that stands out.","lucky_colors_wood":"Green, Light Brown","lucky_numbers_wood":"3, 4, 8","lucky_days_wood":"Wednesday, Thursday","lucky_colors_fire":"Red, Pink, Orange","lucky_numbers_fire":"2, 7, 9","lucky_days_fire":"Tuesday, Sunday","lucky_colors_earth":"Yellow, Brown, Cream","lucky_numbers_earth":"5, 0, 8","lucky_days_earth":"Saturday, Wednesday Night","lucky_colors_metal":"White, Ivory, Gold","lucky_numbers_metal":"1, 4, 9","lucky_days_metal":"Friday, Monday","lucky_colors_water":"Black, Blue, Light Blue","lucky_numbers_water":"1, 6, 7","lucky_days_water":"Wednesday, Saturday","crystal_benefit_carnelian":"Increases courage and confidence","crystal_benefit_sunstone":"Brings happiness and success","crystal_benefit_amethyst":"Removes stress and increases wisdom","crystal_benefit_aquamarine":"Brings calmness and good communication","crystal_benefit_green_aventurine":"Attracts luck and opportunities","crystal_benefit_jade":"Brings wealth and good health","crystal_benefit_tiger_eye":"Provides protection and attracts wealth","crystal_benefit_smoky_quartz":"Dissolves negative energy and increases stability","crystal_benefit_citrine":"Brings wealth and wisdom","crystal_benefit_pyrite":"Attracts money and removes negative energy","tarot_fool_name":"The Fool","tarot_fool_meaning":"New beginnings, freedom, exciting adventures","tarot_magician_name":"The Magician","tarot_magician_meaning":"Talent, ability, the power to manifest things","tarot_high_priestess_name":"The High Priestess","tarot_high_priestess_meaning":"Intuition, mystery, deep feelings and wisdom","tarot_empress_name":"The Empress","tarot_empress_meaning":"Abundance, love, motherhood, growth","tarot_emperor_name":"The Emperor","tarot_emperor_meaning":"Power, stability, leadership, and governance","tarot_star_name":"The Star","tarot_star_meaning":"Hope, inspiration, healing, and new opportunities","tarot_sun_name":"The Sun","tarot_sun_meaning":"Success, cheerfulness, positive energy and happiness","tarot_moon_name":"The Moon","tarot_moon_meaning":"Dreams, illusions, hidden things and changes","tarot_wheel_of_fortune_name":"Wheel of Fortune","tarot_wheel_of_fortune_meaning":"Destiny, chance, upcoming turning points in life","testimonial_1_name":"Praewa S.","testimonial_1_review":"After using the Amethyst stone, my focus has improved. Work is noticeably smoother.","testimonial_2_name":"Nontawat K.","testimonial_2_review":"The reading was very accurate! The Citrine is beautiful, I feel more confident talking to clients.","testimonial_3_name":"Mint W.","testimonial_3_review":"Beautiful website, detailed analysis. Bought Rose Quartz and feel completely surrounded by positive energy!","day_1":"Monday","day_2":"Tuesday","day_3":"Wednesday","day_4":"Thursday","day_5":"Friday","day_6":"Saturday","day_0":"Sunday","sun_sign_insights":"Sun Sign Insights: {{sign}}","sun_sign_aries":"Aries","sun_sign_taurus":"Taurus","sun_sign_gemini":"Gemini","sun_sign_cancer":"Cancer","sun_sign_leo":"Leo","sun_sign_virgo":"Virgo","sun_sign_libra":"Libra","sun_sign_scorpio":"Scorpio","sun_sign_sagittarius":"Sagittarius","sun_sign_capricorn":"Capricorn","sun_sign_aquarius":"Aquarius","sun_sign_pisces":"Pisces","sun_sign_traits_aries":"Courageous, Energetic, Impulsive","sun_sign_traits_taurus":"Reliable, Patient, Stubborn","sun_sign_traits_gemini":"Adaptable, Outgoing, Indecisive","sun_sign_traits_cancer":"Compassionate, Intuitive, Sensitive","sun_sign_traits_leo":"Confident, Generous, Arrogant","sun_sign_traits_virgo":"Analytical, Practical, Perfectionist","sun_sign_traits_libra":"Diplomatic, Fair, Indecisive","sun_sign_traits_scorpio":"Passionate, Resourceful, Secretive","sun_sign_traits_sagittarius":"Optimistic, Adventurous, Restless","sun_sign_traits_capricorn":"Disciplined, Responsible, Pessimistic","sun_sign_traits_aquarius":"Independent, Original, Aloof","sun_sign_traits_pisces":"Empathetic, Artistic, Overly Trusting","life_areas_today":"Life Areas Today","life_area_career":"Career","life_area_love":"Love","life_area_wellness":"Wellness","life_area_finance":"Finance","daily_fortune_tarot":"Daily Fortune & Tarot","todays_message":"Today's Message","todays_transit_aspect":"Today's Transit & Aspect Map","aspects":"Aspects","current_positions":"Current Positions","natal_chart":"Your Natal Chart","view_full_chart":"VIEW FULL CHART"});}),
"[project]/src/locales/th/translation.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"hero_title\":\"Mystic Crystal Oracle\",\"hero_subtitle\":\"ค้นพบพลังแห่งดวงชะตา ธาตุประจำตัว และหินมงคลของคุณ\",\"open_fortune\":\"✨ เปิดดวงของฉัน\",\"birth_form_title\":\"วิเคราะห์ดวงชะตาของคุณ\",\"day\":\"วัน\",\"month\":\"เดือน\",\"year\":\"ปี (พ.ศ.)\",\"birth_time\":\"เวลาเกิด\",\"submit_fortune\":\"🔮 ดูดวงเลย\",\"fortune_loading\":\"กำลังประมวลผลพลังงานแห่งจักรวาล...\",\"name\":\"ชื่อ-นามสกุล\",\"name_placeholder\":\"ระบุชื่อหรือนามแฝงของคุณ\",\"tarot_title\":\"🎴 ไพ่ทาโรต์ประจำวัน\",\"tarot_desc\":\"เปิดไพ่เพื่อรับคำแนะนำและพลังงานประจำวันของคุณ\",\"draw_card\":\"สุ่มไพ่วันนี้\",\"draw_card_again\":\"สุ่มไพ่ใหม่อีกครั้ง\",\"crystal_recommendation\":\"หินมงคลของคุณ\",\"buy_now\":\"สั่งซื้อเลย\",\"shop\":\"Shop\",\"home\":\"Home\",\"fortune\":\"ดูดวง\",\"crystal\":\"หินมงคล\",\"your_fortune_title\":\"คำทำนายดวงชะตาของคุณ\",\"ai_analysis\":\"AI วิเคราะห์ดวง\",\"element_balance\":\"⚖️ ความสมดุลแห่งธาตุ (Element Balance)\",\"review_fortune_again\":\"✨ ทบทวนโชคชะตาอีกครั้ง\",\"enhance_fortune_cta\":\"💎 เสริมพลังดวงของคุณด้วยหินมงคล\",\"enhance_fortune_desc\":\"ค้นพบเกรดหินมงคลแท้ที่คัดสรรมาเพื่อดึงดูดพลังงานบวก ปกป้องคุ้มครอง และเสริมสิริมงคลตามธาตุประจำตัวของคุณ\",\"view_suitable_crystal\":\"ดูหินที่เหมาะกับฉัน\",\"popular\":\"Popular\",\"recommended\":\"Recommended\",\"best_energy\":\"Best Energy\",\"crystal_shop_title\":\"Crystal Shop\",\"crystal_shop_desc\":\"เลือกซื้อหินมงคลแท้ เสริมดวงชะตาและเพิ่มพลังบวกให้กับชีวิตคุณ\",\"price\":\"ราคา\",\"baht\":\"บาท\",\"lucky_energy_title\":\"พลังแห่งความโชคดี\",\"lucky_color\":\"สีมงคล\",\"lucky_number\":\"เลขมงคล\",\"lucky_day\":\"วันมงคล\",\"element_title\":\"ธาตุประจำตัว\",\"element_wood\":\"ธาตุไม้\",\"element_fire\":\"ธาตุไฟ\",\"element_earth\":\"ธาตุดิน\",\"element_metal\":\"ธาตุทอง\",\"element_water\":\"ธาตุน้ำ\",\"bazi_title\":\"นักษัตรประจำปีเกิด\",\"year_of\":\"ปี\",\"zodiac_rat\":\"ชวด\",\"zodiac_ox\":\"ฉลู\",\"zodiac_tiger\":\"ขาล\",\"zodiac_rabbit\":\"เถาะ\",\"zodiac_dragon\":\"มะโรง\",\"zodiac_snake\":\"มะเส็ง\",\"zodiac_horse\":\"มะเมีย\",\"zodiac_goat\":\"มะแม\",\"zodiac_monkey\":\"วอก\",\"zodiac_rooster\":\"ระกา\",\"zodiac_dog\":\"จอ\",\"zodiac_pig\":\"กุน\",\"bazi_desc\":\"นักษัตรประจำปีเกิดตามปฏิทินจีน (ค.ศ. {{year}})\",\"planet_title\":\"ดาวประจำวันเกิด\",\"star_prefix\":\"ดาว\",\"planet_sun\":\"อาทิตย์\",\"planet_moon\":\"จันทร์\",\"planet_mars\":\"อังคาร\",\"planet_mercury\":\"พุธ\",\"planet_jupiter\":\"พฤหัสบดี\",\"planet_venus\":\"ศุกร์\",\"planet_saturn\":\"เสาร์\",\"planet_meaning_sun\":\"มั่นใจ เป็นผู้นำ มีความโดดเด่น\",\"planet_meaning_moon\":\"อ่อนโยน มีเสน่ห์ ช่างฝัน\",\"planet_meaning_mars\":\"กล้าหาญ แอคทีฟ ชอบแข่งขัน\",\"planet_meaning_mercury\":\"ฉลาด เจรจาเก่ง ปรับตัวไว\",\"planet_meaning_jupiter\":\"มีเหตุผล รักความยุติธรรม ใฝ่รู้\",\"planet_meaning_venus\":\"รักสวยรักงาม โรแมนติก ศิลปิน\",\"planet_meaning_saturn\":\"จริงจัง อดทน มีความรับผิดชอบสูง\",\"element_chart_desc\":\"*การเสริมธาตุที่อ่อนแอที่สุดจะช่วยปกป้องพลังชีวิตและดึงดูดพลังงานบวกเข้ามา*\",\"birth_chart_title\":\"🌌 Birth Chart Wheel\",\"birth_chart_desc\":\"*ตำแหน่งดวงดาวที่ปรากฏใน Birth Chart จะส่งผลต่อเสน่ห์ พลังงาน และจังหวะชีวิตของคุณ*\",\"testimonials_title\":\"✨ รีวิวจากผู้ศรัทธาพลังหินมงคล ✨\",\"ai_reading_template\":\"คุณเกิดปี{{zodiac}} {{element}} มีดาว{{planet}}เป็นดาวประจำวันเกิด พลังแห่งดาว{{planet}}สะท้อนบุคลิกที่{{planetMeaning}} โดดเด่นเป็นพิเศษ\",\"lucky_colors_wood\":\"เขียว อ่อน น้ำตาล\",\"lucky_numbers_wood\":\"3, 4, 8\",\"lucky_days_wood\":\"พุธ พฤหัสบดี\",\"lucky_colors_fire\":\"แดง ชมพู ส้ม\",\"lucky_numbers_fire\":\"2, 7, 9\",\"lucky_days_fire\":\"อังคาร อาทิตย์\",\"lucky_colors_earth\":\"เหลือง น้ำตาล ครีม\",\"lucky_numbers_earth\":\"5, 0, 8\",\"lucky_days_earth\":\"เสาร์ พุธกลางคืน\",\"lucky_colors_metal\":\"ขาว ขาวนวล ทอง\",\"lucky_numbers_metal\":\"1, 4, 9\",\"lucky_days_metal\":\"ศุกร์ จันทร์\",\"lucky_colors_water\":\"ดำ น้ำเงิน ฟ้า\",\"lucky_numbers_water\":\"1, 6, 7\",\"lucky_days_water\":\"พุธ เสาร์\",\"crystal_benefit_carnelian\":\"เพิ่มความกล้าหาญและความมั่นใจ\",\"crystal_benefit_sunstone\":\"นำพาความสุขและความสำเร็จ\",\"crystal_benefit_amethyst\":\"ขจัดความเครียดและเพิ่มปัญญา\",\"crystal_benefit_aquamarine\":\"นำความสงบและการสื่อสารที่ดี\",\"crystal_benefit_green_aventurine\":\"ดึงดูดโชคลาภและโอกาส\",\"crystal_benefit_jade\":\"นำพาความมั่งคั่งและสุขภาพดี\",\"crystal_benefit_tiger_eye\":\"ปกป้องคุ้มครองและดึงดูดความมั่งคั่ง\",\"crystal_benefit_smoky_quartz\":\"สลายพลังลบและเพิ่มความมั่นคง\",\"crystal_benefit_citrine\":\"นำพาความมั่งคั่งและปัญญา\",\"crystal_benefit_pyrite\":\"ดึงดูดเงินทองและขจัดพลังลบ\",\"tarot_fool_name\":\"The Fool\",\"tarot_fool_meaning\":\"การเริ่มต้นสิ้งใหม่ ความมีอิสระ การผจญภัยที่น่าตื่นเต้น\",\"tarot_magician_name\":\"The Magician\",\"tarot_magician_meaning\":\"การมีพรสวรรค์ ความสามารถ พลังแห่งการเนรมิตสิ่งต่างๆ\",\"tarot_high_priestess_name\":\"The High Priestess\",\"tarot_high_priestess_meaning\":\"สัญชาตญาณ ความลึกลับ ความรู้สึกเบื้องลึกและปัญญา\",\"tarot_empress_name\":\"The Empress\",\"tarot_empress_meaning\":\"ความอุดมสมบูรณ์ ความรัก ความเป็นแม่ ความเจริญงอกงาม\",\"tarot_emperor_name\":\"The Emperor\",\"tarot_emperor_meaning\":\"อำนาจ ความมั่นคง ความเป็นผู้นำ และการปกครอง\",\"tarot_star_name\":\"The Star\",\"tarot_star_meaning\":\"ความหวัง แรงบันดาลใจ การเยียวยา และโอกาสใหม่ๆ\",\"tarot_sun_name\":\"The Sun\",\"tarot_sun_meaning\":\"ความสำเร็จ ความร่าเริง พลังงานด้านบวกและความสุข\",\"tarot_moon_name\":\"The Moon\",\"tarot_moon_meaning\":\"ความฝัน ภาพลวงตา สิ่งที่ซ่อนเร้นและการเปลี่ยนแปลง\",\"tarot_wheel_of_fortune_name\":\"Wheel of Fortune\",\"tarot_wheel_of_fortune_meaning\":\"โชคชะตา โอกาส จุดเปลี่ยนของชีวิตที่กำลังมาถึง\",\"testimonial_1_name\":\"คุณแพรวา ส.\",\"testimonial_1_review\":\"หลังจากใช้หิน Amethyst รู้สึกสมาธิดีขึ้นมาก การงานราบรื่นขึ้นอย่างเห็นได้ชัด\",\"testimonial_2_name\":\"คุณนนท์ธวัช ก.\",\"testimonial_2_review\":\"คำทำนายแม่นยำมากครับ หิน Citrine สวยมาก ใส่แล้วรู้สึกมั่นใจในการคุยงานลูกค้ายิ่งขึ้น\",\"testimonial_3_name\":\"คุณมิ้นท์ ว.\",\"testimonial_3_review\":\"เว็บสวยมาก วิเคราะห์ดวงละเอียด ซื้อ Rose Quartz มาใส่แล้วรู้สึกพลังงานบวกรอบตัวดีขึ้น!\",\"day_1\":\"จันทร์\",\"day_2\":\"อังคาร\",\"day_3\":\"พุธ\",\"day_4\":\"พฤหัสบดี\",\"day_5\":\"ศุกร์\",\"day_6\":\"เสาร์\",\"day_0\":\"อาทิตย์\",\"sun_sign_insights\":\"ข้อมูลเชิงลึกราศี: {{sign}}\",\"sun_sign_aries\":\"ราศีเมษ\",\"sun_sign_taurus\":\"ราศีพฤษภ\",\"sun_sign_gemini\":\"ราศีเมถุน\",\"sun_sign_cancer\":\"ราศีกรกฎ\",\"sun_sign_leo\":\"ราศีสิงห์\",\"sun_sign_virgo\":\"ราศีกันย์\",\"sun_sign_libra\":\"ราศีตุลย์\",\"sun_sign_scorpio\":\"ราศีพิจิก\",\"sun_sign_sagittarius\":\"ราศีธนู\",\"sun_sign_capricorn\":\"ราศีมังกร\",\"sun_sign_aquarius\":\"ราศีกุมภ์\",\"sun_sign_pisces\":\"ราศีมีน\",\"sun_sign_traits_aries\":\"กล้าหาญ, กระตือรือร้น, หุนหันพลันแล่น\",\"sun_sign_traits_taurus\":\"พึ่งพาได้, อดทน, ดื้อรั้น\",\"sun_sign_traits_gemini\":\"ปรับตัวเก่ง, เข้าสังคม, ลังเล\",\"sun_sign_traits_cancer\":\"เห็นอกเห็นใจ, มีสัญชาตญาณ, อ่อนไหว\",\"sun_sign_traits_leo\":\"มั่นใจ, ใจกว้าง, หยิ่งทะนง\",\"sun_sign_traits_virgo\":\"ช่างวิเคราะห์, ทำได้จริง, เจ้าระเบียบ\",\"sun_sign_traits_libra\":\"มีวาทศิลป์, ยุติธรรม, ลังเล\",\"sun_sign_traits_scorpio\":\"มีความหลงใหล, มีไหวพริบ, ลึกลับ\",\"sun_sign_traits_sagittarius\":\"มองโลกในแง่ดี, ชอบผจญภัย, ไม่หยุดนิ่ง\",\"sun_sign_traits_capricorn\":\"มีวินัย, มีความรับผิดชอบ, มองโลกในแง่ร้าย\",\"sun_sign_traits_aquarius\":\"รักอิสระ, มีความคิดริเริ่ม, ห่างเหิน\",\"sun_sign_traits_pisces\":\"เห็นอกเห็นใจผู้อื่น, มีศิลปะ, ไว้ใจคนง่าย\",\"life_areas_today\":\"ภาพรวมชีวิตวันนี้\",\"life_area_career\":\"การงาน\",\"life_area_love\":\"ความรัก\",\"life_area_wellness\":\"สุขภาพ\",\"life_area_finance\":\"การเงิน\",\"daily_fortune_tarot\":\"ดวงประจำวันและไพ่ทาโรต์\",\"todays_message\":\"ข้อความแห่งวัน\",\"todays_transit_aspect\":\"แผนที่ดวงดาวและมุมสัมพันธ์\",\"aspects\":\"มุมสัมพันธ์\",\"current_positions\":\"ตำแหน่งปัจจุบัน\",\"natal_chart\":\"แผนผังดวงกำเนิดของคุณ\",\"view_full_chart\":\"ดูแผนผังแบบเต็ม\"}"));}),
"[project]/src/i18n.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/i18next/dist/esm/i18next.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/initReactI18next.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$translation$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/en/translation.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$th$2f$translation$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/th/translation.json (json)");
;
;
;
;
// Get default language from local storage, or fallback to Thai ('th')
// Prevent SSR crashes by checking typeof window
const savedLanguage = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('appLanguage') || 'th' : "TURBOPACK unreachable";
const resources = {
    en: {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$translation$2e$json__$28$json$29$__["default"]
    },
    th: {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$th$2f$translation$2e$json__$28$json$29$__["default"]
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initReactI18next"]) // passes i18n down to react-i18next
.init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'th',
    interpolation: {
        escapeValue: false
    }
});
// Save to local storage whenever language changes
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].on('languageChanged', (lng)=>{
    localStorage.setItem('appLanguage', lng);
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/Providers.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n.js [app-client] (ecmascript)");
'use client';
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_945a8fc9._.js.map