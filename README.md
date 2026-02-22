# Fillet Chalet

A mobile wood-fired sauna website built with Next.js.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd fillet-chalet
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
fillet-chalet/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx         # About page
│   │   ├── book/
│   │   │   └── page.tsx         # Book a Session page
│   │   ├── contact/
│   │   │   └── page.tsx         # Contact page
│   │   ├── prepare/
│   │   │   └── page.tsx         # What to Bring page
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Home page
│   └── components/
│       ├── Header.tsx           # Navigation header
│       └── Footer.tsx           # Site footer
├── public/                      # Static assets
├── tailwind.config.ts           # Tailwind configuration
├── package.json
└── README.md
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/book` | Book a Session - pricing and Cal.com booking |
| `/prepare` | What to Bring - packing list |
| `/about` | About the sauna and the sauna cycle |
| `/contact` | Contact form |

## Cal.com Integration

The `/book` page includes a placeholder for Cal.com calendar booking. To set up:

### 1. Create Cal.com Account

1. Sign up at [cal.com](https://cal.com)
2. Create event types for each session format:
   - Public Session (75 min, $25/person)
   - Private Rental (2 hours, $250)
   - Overnight Rental (custom)

### 2. Install Cal.com Embed

```bash
npm install @calcom/embed-react
```

### 3. Add Embed to Book Page

Update `src/app/book/page.tsx`:

```tsx
"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function BookPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#f94565" } },
      });
    })();
  }, []);

  return (
    // ... existing JSX ...

    {/* Replace the placeholder div with: */}
    <Cal
      calLink="your-username/session-type"
      style={{ width: "100%", height: "600px", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
```

### 4. Configure Payment with Stripe

1. Go to Cal.com Settings > Apps > Stripe
2. Connect your Stripe account
3. For each event type, enable "Require payment"
4. Set the price for each session type

### 5. Event Type Configuration

For each event type in Cal.com:

**Public Session:**
- Duration: 75 minutes
- Price: $25 (per attendee)
- Allow multiple attendees

**Private Rental:**
- Duration: 2 hours
- Price: $250 (flat rate)

**Overnight Rental:**
- Custom form to collect details
- Manual pricing/invoicing

## Color Palette

The site uses a rainbow trout-inspired color palette:

- **Silver:** Gray base tones
- **Slate:** Cool blue-grays
- **Coral:** Pink/coral accents (primary action color)
- **Olive:** Muted greens
- **Ember:** Orange highlights

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Deployment

Deploy on Vercel:

```bash
npm run build
```

Or deploy via Vercel CLI or GitHub integration.

## License

Private - All rights reserved.
