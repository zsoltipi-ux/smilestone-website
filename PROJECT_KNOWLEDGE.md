# SmileStone Website

## Project Summary
A marketing and informational website for SmileStone ERP, a software solution designed specifically for dental laboratories (fogtechnikai labor szoftver). The site highlights features like order management, MDR compliance, and dentist-lab communication, targeting both lab managers and dentists.

## Tech Stack
- **Frontend:** HTML5, Tailwind CSS (via CDN)
- **Styling:** Custom CSS (`css/style.css`) combined with Tailwind utility classes
- **Interactivity:** Vanilla JavaScript (`js/main.js`)
- **Typography:** Google Fonts (Inter)

## Architecture
- Multi-page static site (`index.html`, `about.html`, `contact.html`, `features.html`, `dentist.html`, `dentist-order.html`).
- Uses Tailwind CSS via CDN for rapid UI development without a build step.
- Assets are organized into `css/`, `js/`, and `img/` directories.

## Current State
- The website is fully functional with multiple pages describing the product features, pricing, and contact information.
- It includes a dedicated section/flow for dentists (`dentist.html`, `dentist-order.html`).
- Mobile-responsive navigation and layout are implemented.

## Key Decisions
- **Styling Framework:** Chosen Tailwind CSS (CDN) for quick styling while maintaining a custom stylesheet for specific overrides or base styles.
- **Target Audience Segmentation:** Clear separation in navigation and content for the primary users (dental labs) and secondary users (dentists, who get free access).
- **No Build Step:** Kept as a simple static site without Node.js dependencies for easy hosting and maintenance.

## Next Steps
- Set up a build process (e.g., PostCSS/Tailwind CLI) if custom Tailwind configuration or smaller CSS file sizes are needed for production.
- Integrate contact forms with a backend service or email API.
- Add analytics and tracking codes (e.g., Google Analytics, Meta Pixel) for marketing campaigns.

## Prompts That Worked
- "Create a multi-page marketing website for a dental lab ERP software using HTML and Tailwind CSS."
- "Design a responsive navigation bar with a mobile hamburger menu and a special highlighted link for dentists."

## Context for New Session
This is a static multi-page site using Tailwind CSS via CDN. When adding new pages or sections, reuse the existing header/footer structures and Tailwind utility classes. Any custom CSS should go into `css/style.css`, and simple interactive elements (like mobile menus) are handled in `js/main.js`.
