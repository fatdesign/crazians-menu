/**
 * ============================================
 * DIGITAL MENU - CENTRAL SETTINGS
 * ============================================
 * Edit this file to customize the restaurant's branding,
 * design, and API settings.
 */

const SETTINGS = {
    // 1. BRANDING
    restaurantName: "C R A Z I A N ' s",
    tagline: "Simply Authentic Asian Food",
    metaDescription: "Scharf, süß & sauer. Authentische asiatische Küche in Hallein. Entdecken Sie unsere Speisekarte digital.",
    footerText: "2026 C R A Z I A N ' s Hallein",

    // 2. DESIGN TOKENS (Colors & Fonts)
    theme: {
        bgPrimary: "#fff6b4",    // Pale Yellow
        bgHeader: "#b3ffe8",     // Mint
        accentPink: "#a60a9b",   // Pink
        accentTeal: "#029d93",   // Teal
        textPrimary: "#020202",
        textSecondary: "#4a4a4a",
        fontHeading: "'Grandstander', sans-serif",
        fontBody: "'Open Sans', sans-serif"
    },

    // 3. API & STORAGE
    proxyUrl: "https://crazian-menu-proxy.f-klavun.workers.dev", // Your Cloudflare Worker URL
    storageKey: "crazians_lang", // Unique key for localStorage

    // 4. FEATURES
    languages: ["de", "en", "tr", "es"], // Available languages
    defaultLang: "de"
};
