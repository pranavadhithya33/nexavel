# Nexavel — Digital Agency Website

A stunning, Spider-Man themed digital agency website built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion. Optimized for Vercel's free tier.

## Features

- **Hero Suit Reveal Effect**: Move your cursor over Spider-Man's suit to reveal Peter Parker underneath (Tobey Maguire). On mobile, the reveal follows your touch or auto-animates.
- **6 Core Services**: Web Development, Digital Marketing, SEO, Brand Identity, Social Media Management, Video & Motion Graphics — all with real names, no spider puns.
- **Scroll Animations**: Elements fade in as you scroll using Intersection Observer.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile.
- **Dark Theme**: Deep dark aesthetic with red and blue accents.
- **SEO Ready**: Meta tags, Open Graph, semantic HTML.
- **Contact Form**: Working form with submission state.
- **Static Export**: Ready for Vercel free tier deployment.

## Project Structure

```
nexavel-website/
├── app/
│   ├── components/
│   │   ├── Logo.tsx          # SVG logo with spider web icon
│   │   └── Navbar.tsx        # Fixed navigation with mobile hamburger
│   ├── sections/
│   │   ├── Hero.tsx          # Hero with cursor reveal effect
│   │   ├── Services.tsx      # 6 service cards
│   │   ├── About.tsx         # Origin story with stats
│   │   ├── Portfolio.tsx     # 4 case study cards
│   │   ├── Testimonials.tsx  # 3 client testimonials
│   │   ├── Contact.tsx       # Contact form
│   │   └── Footer.tsx        # Footer with links
│   ├── globals.css           # Global styles & utilities
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page composing all sections
├── public/
│   └── images/               # All images go here
├── next.config.js            # Static export config
├── tailwind.config.js        # Tailwind with custom colors
├── tsconfig.json
└── package.json
```

## Image Requirements

You need to add these images to `public/images/`:

### Required Images (replace with your own):

| File | Description | Dimensions |
|------|-------------|------------|
| `spiderman-suit.jpg` | Spider-Man in suit (top layer of reveal) | 600x800px, portrait |
| `peter-parker.jpg` | Tobey Maguire as Peter Parker (bottom layer) | 600x800px, portrait |
| `team.jpg` | Team/office photo for About section | 600x500px |
| `portfolio-1.jpg` | Project screenshot 1 | 600x400px |
| `portfolio-2.jpg` | Project screenshot 2 | 600x400px |
| `portfolio-3.jpg` | Project screenshot 3 | 600x400px |
| `portfolio-4.jpg` | Project screenshot 4 | 600x400px |
| `client-1.jpg` | Client avatar 1 | 100x100px |
| `client-2.jpg` | Client avatar 2 | 100x100px |
| `client-3.jpg` | Client avatar 3 | 100x100px |

### Image Tips:
- Use WebP format for smaller file sizes (Vercel free tier: 100GB bandwidth)
- Compress images using TinyPNG or Squoosh before adding
- For the hero reveal: both images should be the same size and aligned similarly
- The Spider-Man suit image should show the suit clearly (chest up)
- The Peter Parker image should show Tobey Maguire's face clearly

## Quick Start

### 1. Install Dependencies

```bash
cd nexavel-website
npm install
```

### 2. Add Your Images

Copy your images into `public/images/` following the table above.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### 4. Build for Production

```bash
npm run build
```

This creates a static export in the `out/` folder.

### 5. Deploy to Vercel (Free Tier)

**Option A: Vercel CLI**
```bash
npm i -g vercel
vercel --prod
```

**Option B: GitHub + Vercel**
1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel will auto-detect Next.js and deploy
4. Every push to `main` branch auto-deploys

**Vercel Free Tier Limits:**
- 100GB bandwidth/month
- 100GB storage
- 10s serverless function timeout
- Static export = no serverless functions used
- Custom domain supported

## How the Cursor Reveal Effect Works

### Desktop:
1. Two images are stacked: Peter Parker (bottom) and Spider-Man suit (top)
2. The top image uses a CSS `mask-image` with a radial gradient
3. The gradient center follows your mouse cursor via JavaScript
4. Where the gradient is transparent, you see Peter Parker underneath
5. Smooth lerp animation makes the reveal feel fluid

### Mobile:
1. Touch tracking: drag your finger to reveal different areas
2. Auto-reveal fallback: if no touch, the mask animates in a circular pattern
3. The reveal radius is slightly larger on mobile for easier interaction

### Technical Details:
- Uses `requestAnimationFrame` for 60fps smooth tracking
- CSS custom properties (`--mouse-x`, `--mouse-y`) update the mask position
- `touch-action: none` prevents page scroll while interacting
- Intersection Observer handles scroll reveal animations

## Customization

### Colors
Edit `tailwind.config.js`:
```js
colors: {
  spider: {
    red: '#E23636',    // Change this
    blue: '#2B3784',   // Change this
    dark: '#0a0a0f',
    gray: '#1a1a24',
  },
}
```

### Content
Edit the data arrays in each section file:
- `Services.tsx` — services array
- `Portfolio.tsx` — projects array
- `Testimonials.tsx` — testimonials array
- `About.tsx` — stats array

### Metadata
Edit `app/layout.tsx` for SEO meta tags, Open Graph, etc.

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 15 | React framework with static export |
| React 19 | UI library |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Entrance animations |
| Lucide React | Icons |

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## Performance

- Static HTML export (no server needed)
- Optimized images (WebP recommended)
- Lazy loading via Intersection Observer
- Minimal JavaScript bundle
- No external fonts (uses system fonts)

## License

This project is created for Nexavel Digital Agency. All rights reserved.

---

**Built with precision. Deployed with confidence. Powered by heroes.**
