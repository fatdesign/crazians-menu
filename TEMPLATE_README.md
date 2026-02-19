# 📋 Digital Menu Template - Setup Guide

This template is designed to be quickly branded for new restaurants. You only need to touch **one file** for the branding!

## 🚀 Quick Setup (New Restaurant)

1.  **Duplicate the Folder**: Copy the entire project folder.
2.  **Edit `settings.js`**:
    - Change the `restaurantName`, `tagline`, and `metaDescription`.
    - Update `theme` colors (use hex codes).
    - Update `proxyUrl` with the new Cloudflare Worker URL.
3.  **Cloudflare Worker**:
    - Create a new Worker for the new restaurant.
    - Set the environment variables (`GITHUB_TOKEN`, `GITHUB_REPO`, etc.) in the Cloudflare Dashboard.
4.  **Admin Login**:
    - The password is defined in your Cloudflare Worker context.
    - Use the password you set in Cloudflare to log in to the `/admin` page.

## 📂 File Structure for White-Labeling
- `settings.js`: **The main control center.** Branding, colors, fonts, and API.
- `menu.json`: The initial menu data.
- `/admin`: The management interface (automatically brands itself from `settings.js`).
- `/cloudflare-worker`: The proxy code for GitHub integration.

## 🎨 Changing Design
All major colors and fonts are controlled via `settings.js`.
- `bgPrimary`: Page background.
- `bgHeader`: Header & Navigation background.
- `accentPink`: Primary buttons and highlights.
- `accentTeal`: Secondary accents and links.

---
*Created for scaling. Happy Marketing!* 🚀
