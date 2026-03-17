(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/shop/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShopPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gem$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gem.js [app-client] (ecmascript) <export default as Gem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$crystalContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/crystalContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const wallpapers = [
    {
        id: 'wp1',
        title: 'มังกรทองแห่งโชคลาภ',
        emoji: '🐉',
        desc: 'เสริมดวงการเงิน',
        price: 'ฟรี',
        crystalCost: 0,
        category: 'ดวงการเงิน',
        color: 'from-yellow-600/30 to-amber-900/30'
    },
    {
        id: 'wp2',
        title: 'พระจันทร์เต็มดวง',
        emoji: '🌕',
        desc: 'เสริมพลังจิตใจ',
        price: 'ฟรี',
        crystalCost: 0,
        category: 'พลังจิตใจ',
        color: 'from-blue-600/30 to-indigo-900/30'
    },
    {
        id: 'wp3',
        title: 'คริสตัลอเมทิสต์',
        emoji: '💜',
        desc: 'เสริมก้าวหน้า',
        price: '20 💎',
        crystalCost: 20,
        category: 'ก้าวหน้า',
        color: 'from-purple-600/30 to-violet-900/30'
    },
    {
        id: 'wp4',
        title: 'ดอกบัวทอง',
        emoji: '🪷',
        desc: 'เสริมความรัก',
        price: '20 💎',
        crystalCost: 20,
        category: 'ความรัก',
        color: 'from-pink-600/30 to-rose-900/30'
    },
    {
        id: 'wp5',
        title: 'ดาวเหนือนำทาง',
        emoji: '⭐',
        desc: 'เสริมโชค',
        price: '35 💎',
        crystalCost: 35,
        category: 'โชคลาภ',
        color: 'from-cyan-600/30 to-blue-900/30'
    },
    {
        id: 'wp6',
        title: 'เต่าทองทอง',
        emoji: '🐢',
        desc: 'เสริมความมั่งคั่ง',
        price: '35 💎',
        crystalCost: 35,
        category: 'ความมั่งคั่ง',
        color: 'from-emerald-600/30 to-green-900/30'
    }
];
const crystals = [
    {
        id: 'c1',
        name: 'โรสควอตซ์',
        emoji: '💗',
        element: 'ความรัก',
        desc: 'ดึงดูดความรักและความสัมพันธ์ที่ดี',
        price: '50 💎',
        crystalCost: 50
    },
    {
        id: 'c2',
        name: 'อเมทิสต์',
        emoji: '💜',
        element: 'สงบใจ',
        desc: 'เสริมสมาธิ ลดความเครียด นอนหลับดี',
        price: '50 💎',
        crystalCost: 50
    },
    {
        id: 'c3',
        name: 'ซิทรีน',
        emoji: '💛',
        element: 'ความมั่งคั่ง',
        desc: 'เรียกทรัพย์ เพิ่มพลังงานบวก',
        price: '75 💎',
        crystalCost: 75
    },
    {
        id: 'c4',
        name: 'ลาพิส',
        emoji: '💙',
        element: 'ปัญญา',
        desc: 'เสริมความฉลาด การตัดสินใจ',
        price: '75 💎',
        crystalCost: 75
    },
    {
        id: 'c5',
        name: 'โอบซิเดียน',
        emoji: '🖤',
        element: 'คุ้มครอง',
        desc: 'ป้องกันพลังงานลบ ดูดซับความเป็นลบ',
        price: '100 💎',
        crystalCost: 100
    },
    {
        id: 'c6',
        name: 'ไพลิน',
        emoji: '💎',
        element: 'ความสำเร็จ',
        desc: 'อัญมณีแห่งความสำเร็จและราชาภัย',
        price: '150 💎',
        crystalCost: 150
    }
];
const plans = [
    {
        name: 'ฟรี',
        nameTh: 'มิถุน',
        price: '0',
        period: 'ตลอดไป',
        color: 'border-midnight-600',
        features: [
            'ดูดวงพื้นฐาน',
            'ดึงไพ่ยิปซี (ความหมายสั้น)',
            'ฤกษ์มงคลรายวัน',
            '100 Crystal แรกเข้า',
            '20 Crystal โบนัสรายวัน'
        ],
        noFeatures: [
            'บทวิเคราะห์เชิงลึก',
            'AI Chatbot',
            'รูปภาพแชร์'
        ],
        cta: 'ใช้งานฟรี',
        href: '/astrology'
    },
    {
        name: 'Crystal Basic',
        nameTh: 'คริสตัล',
        price: '149',
        period: '/เดือน',
        color: 'border-gold-500/50',
        popular: true,
        features: [
            'ทุกอย่างในแพ็กฟรี',
            'Crystal 500 ต่อเดือน',
            'บทวิเคราะห์เชิงลึก ทุกหน้า',
            'Crystal AI แบบไม่จำกัด',
            'ดาวน์โหลดวอลเปเปอร์ทุกชิ้น',
            'รูปภาพแชร์ผลทำนายสวยๆ'
        ],
        noFeatures: [],
        cta: 'เริ่ม 7 วันฟรี',
        href: '#'
    },
    {
        name: 'Crystal Premium',
        nameTh: 'พรีเมียม',
        price: '349',
        period: '/เดือน',
        color: 'border-purple-500/50',
        features: [
            'ทุกอย่างใน Crystal Basic',
            'Crystal 2,000 ต่อเดือน',
            'Reading ส่วนตัวกับผู้เชี่ยวชาญ',
            'รายงานดวงรายปีเต็มรูปแบบ',
            'Priority Support 24/7',
            'คำทำนายวัตถุมงคลพรีเมียม'
        ],
        noFeatures: [],
        cta: 'เริ่มต้นพรีเมียม',
        href: '#'
    }
];
function ShopPage() {
    _s();
    const { balance, spendCrystals, canSpend } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$crystalContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCrystal"])();
    const [purchased, setPurchased] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('wallpapers');
    function buyItem(id, cost, name) {
        if (purchased[id]) return;
        if (cost === 0) {
            setPurchased((p)=>({
                    ...p,
                    [id]: true
                }));
            showToast(`ดาวน์โหลด "${name}" สำเร็จ! ✅`);
            return;
        }
        if (!canSpend(cost)) {
            showToast(`Crystal ไม่พอ! ต้องการ ${cost} 💎 คุณมี ${balance} 💎`);
            return;
        }
        spendCrystals(cost);
        setPurchased((p)=>({
                ...p,
                [id]: true
            }));
        showToast(`ซื้อ "${name}" สำเร็จ! ✅`);
    }
    function showToast(msg) {
        setToast(msg);
        setTimeout(()=>setToast(''), 3000);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen pt-28 pb-20 px-4 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-20 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${toast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass-card px-6 py-3 text-gold-300 font-sarabun text-sm border border-gold-400/30",
                    children: toast
                }, void 0, false, {
                    fileName: "[project]/src/app/shop/page.jsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/shop/page.jsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-6xl block mb-4",
                                children: "🛍️"
                            }, void 0, false, {
                                fileName: "[project]/src/app/shop/page.jsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-cinzel font-bold text-white mb-3",
                                children: [
                                    "ร้านค้า ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient-gold",
                                        children: "Crystal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/page.jsx",
                                        lineNumber: 127,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/shop/page.jsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-midnight-300 font-sarabun",
                                children: "วอลเปเปอร์เสริมดวง · หินมงคล · Crystal Subscription"
                            }, void 0, false, {
                                fileName: "[project]/src/app/shop/page.jsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 crystal-badge inline-flex text-base px-4 py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gem$3e$__["Gem"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/page.jsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    "Crystal คงเหลือ: ",
                                    balance
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/shop/page.jsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/shop/page.jsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mystic-divider mb-8"
                    }, void 0, false, {
                        fileName: "[project]/src/app/shop/page.jsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 justify-center mb-10 flex-wrap",
                        children: [
                            'wallpapers',
                            'crystals',
                            'plans'
                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveSection(s),
                                className: `px-5 py-2 rounded-full font-sarabun font-semibold text-sm transition-all ${activeSection === s ? 'btn-gold' : 'glass-button text-midnight-200'}`,
                                children: {
                                    wallpapers: '🖼️ วอลเปเปอร์',
                                    crystals: '💎 หินมงคล',
                                    plans: '👑 แพ็กเกจ'
                                }[s]
                            }, s, false, {
                                fileName: "[project]/src/app/shop/page.jsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/shop/page.jsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    activeSection === 'wallpapers' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: wallpapers.map((wp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `glass-card p-6 glass-card-hover bg-gradient-to-b ${wp.color}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-5xl mb-4 text-center",
                                        children: wp.emoji
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/page.jsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-cinzel font-bold text-white text-sm",
                                                children: wp.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/page.jsx",
                                                lineNumber: 160,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs bg-gold-400/10 text-gold-400 border border-gold-400/20 rounded-full px-2 py-0.5 font-sarabun ml-2",
                                                children: wp.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/page.jsx",
                                                lineNumber: 161,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/shop/page.jsx",
                                        lineNumber: 159,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-midnight-300 text-xs font-sarabun mb-5",
                                        children: wp.desc
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/page.jsx",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gold-400 font-cinzel font-bold",
                                                children: wp.price
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/page.jsx",
                                                lineNumber: 167,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>buyItem(wp.id, wp.crystalCost, wp.title),
                                                disabled: purchased[wp.id],
                                                className: `text-sm font-sarabun px-4 py-2 rounded-full transition-all ${purchased[wp.id] ? 'bg-green-500/20 text-green-400 border border-green-500/30 cursor-not-allowed' : wp.crystalCost === 0 ? 'btn-gold' : 'btn-mystic'}`,
                                                children: purchased[wp.id] ? '✅ ดาวน์โหลดแล้ว' : wp.crystalCost === 0 ? 'ฟรี' : `ซื้อ ${wp.price}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/page.jsx",
                                                lineNumber: 168,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/shop/page.jsx",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, wp.id, true, {
                                fileName: "[project]/src/app/shop/page.jsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/shop/page.jsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this),
                    activeSection === 'crystals' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: crystals.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card p-6 glass-card-hover",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-5xl mb-4 text-center animate-float",
                                        children: c.emoji
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/page.jsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-cinzel font-bold text-white text-lg mb-1",
                                                children: c.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/page.jsx",
                                                lineNumber: 192,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gold-400 border border-gold-400/30 rounded-full px-2 py-0.5 font-sarabun",
                                                children: c.element
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/page.jsx",
                                                lineNumber: 193,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/shop/page.jsx",
                                        lineNumber: 191,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-midnight-300 text-sm font-sarabun text-center mb-5 leading-relaxed",
                                        children: c.desc
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/page.jsx",
                                        lineNumber: 197,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gold-400 font-cinzel font-bold",
                                                children: c.price
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/page.jsx",
                                                lineNumber: 199,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>buyItem(c.id, c.crystalCost, c.name),
                                                disabled: purchased[c.id],
                                                className: `text-sm font-sarabun px-4 py-2 rounded-full transition-all ${purchased[c.id] ? 'bg-green-500/20 text-green-400 border border-green-500/30 cursor-not-allowed' : 'btn-gold'}`,
                                                children: purchased[c.id] ? '✅ ซื้อแล้ว' : 'ซื้อเลย'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/page.jsx",
                                                lineNumber: 200,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/shop/page.jsx",
                                        lineNumber: 198,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, c.id, true, {
                                fileName: "[project]/src/app/shop/page.jsx",
                                lineNumber: 189,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/shop/page.jsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this),
                    activeSection === 'plans' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                        children: plans.map((plan, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `glass-card p-8 border-2 ${plan.color} relative flex flex-col ${plan.popular ? 'ring-2 ring-gold-400/50' : ''}`,
                                children: [
                                    plan.popular && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-midnight-950 text-xs font-cinzel font-bold px-4 py-1 rounded-full shadow-gold-glow",
                                        children: "ยอดนิยม ⭐"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/page.jsx",
                                        lineNumber: 228,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gold-400 font-cinzel text-sm tracking-widest uppercase mb-2",
                                                children: plan.nameTh
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/page.jsx",
                                                lineNumber: 233,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-cinzel font-bold text-white text-2xl mb-1",
                                                children: plan.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/page.jsx",
                                                lineNumber: 234,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-end justify-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-4xl font-cinzel font-black text-gradient-gold",
                                                        style: {
                                                            background: 'linear-gradient(135deg, #ffd84e, #f0a800)',
                                                            WebkitBackgroundClip: 'text',
                                                            WebkitTextFillColor: 'transparent'
                                                        },
                                                        children: [
                                                            "฿",
                                                            plan.price
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/shop/page.jsx",
                                                        lineNumber: 236,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-midnight-400 font-sarabun text-sm pb-1",
                                                        children: plan.period
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/shop/page.jsx",
                                                        lineNumber: 244,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/shop/page.jsx",
                                                lineNumber: 235,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/shop/page.jsx",
                                        lineNumber: 232,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3 mb-8 flex-1",
                                        children: [
                                            plan.features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "w-4 h-4 text-green-400 mt-0.5 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/shop/page.jsx",
                                                            lineNumber: 251,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-midnight-200 font-sarabun",
                                                            children: f
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/shop/page.jsx",
                                                            lineNumber: 252,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, f, true, {
                                                    fileName: "[project]/src/app/shop/page.jsx",
                                                    lineNumber: 250,
                                                    columnNumber: 21
                                                }, this)),
                                            plan.noFeatures?.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center gap-2 opacity-40",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                            className: "w-4 h-4 text-midnight-500 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/shop/page.jsx",
                                                            lineNumber: 257,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-midnight-400 font-sarabun line-through",
                                                            children: f
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/shop/page.jsx",
                                                            lineNumber: 258,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, f, true, {
                                                    fileName: "[project]/src/app/shop/page.jsx",
                                                    lineNumber: 256,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/shop/page.jsx",
                                        lineNumber: 248,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: plan.href,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `w-full py-3 rounded-full font-cinzel font-bold text-sm transition-all ${plan.popular ? 'btn-gold' : 'btn-mystic'}`,
                                            children: plan.cta
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/shop/page.jsx",
                                            lineNumber: 264,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/page.jsx",
                                        lineNumber: 263,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/app/shop/page.jsx",
                                lineNumber: 221,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/shop/page.jsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 glass-card p-8 text-center border border-gold-400/20",
                        style: {
                            background: 'linear-gradient(135deg, rgba(139,53,224,0.1), rgba(240,168,0,0.08))'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-4xl mb-4",
                                children: "💎"
                            }, void 0, false, {
                                fileName: "[project]/src/app/shop/page.jsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-cinzel font-bold text-white mb-3",
                                children: "ซื้อ Crystal เพิ่ม"
                            }, void 0, false, {
                                fileName: "[project]/src/app/shop/page.jsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-midnight-300 font-sarabun mb-8",
                                children: "ใช้ Crystal เพื่อปลดล็อกคำทำนายเชิงลึก ถามแม่หมอ Crystal AI และซื้อสินค้า"
                            }, void 0, false, {
                                fileName: "[project]/src/app/shop/page.jsx",
                                lineNumber: 281,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-4 justify-center",
                                children: [
                                    {
                                        amount: 100,
                                        price: '29',
                                        bonus: ''
                                    },
                                    {
                                        amount: 300,
                                        price: '79',
                                        bonus: '+50 โบนัส!'
                                    },
                                    {
                                        amount: 1000,
                                        price: '199',
                                        bonus: '+200 โบนัส! 🔥'
                                    }
                                ].map((pkg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass-card p-5 text-center glass-card-hover min-w-[140px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl mb-1 font-cinzel font-bold text-gold-400",
                                                children: [
                                                    "💎 ",
                                                    pkg.amount
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/shop/page.jsx",
                                                lineNumber: 289,
                                                columnNumber: 17
                                            }, this),
                                            pkg.bonus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-green-400 font-sarabun mb-2 border border-green-400/30 rounded-full px-2 py-0.5",
                                                children: pkg.bonus
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/page.jsx",
                                                lineNumber: 291,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-midnight-300 text-sm font-sarabun mb-3",
                                                children: [
                                                    "฿",
                                                    pkg.price
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/shop/page.jsx",
                                                lineNumber: 295,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn-gold w-full text-sm py-2",
                                                children: "ซื้อเลย"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/page.jsx",
                                                lineNumber: 296,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, pkg.amount, true, {
                                        fileName: "[project]/src/app/shop/page.jsx",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/shop/page.jsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/shop/page.jsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/shop/page.jsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/shop/page.jsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_s(ShopPage, "93Hd4D2e3INDuuB01VUHnc56sIg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$crystalContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCrystal"]
    ];
});
_c = ShopPage;
var _c;
__turbopack_context__.k.register(_c, "ShopPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Check
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Check", [
    [
        "path",
        {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }
    ]
]);
;
 //# sourceMappingURL=check.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Check",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Lock
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Lock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Lock", [
    [
        "rect",
        {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1"
        }
    ],
    [
        "path",
        {
            d: "M7 11V7a5 5 0 0 1 10 0v4",
            key: "fwvmzm"
        }
    ]
]);
;
 //# sourceMappingURL=lock.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Lock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_e6bae9f7._.js.map