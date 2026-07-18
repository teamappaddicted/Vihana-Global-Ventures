# Vihana Global Ventures - Professional Trading Website

A modern, premium 3D website for Vihana Global Ventures, an international import-export trading and consulting firm. Built with Next.js, React, Three.js, and advanced animations.

## 🌍 Features

### Core Features
- **3D Animated Hero Section** - Interactive 3D cargo ship with ocean parallax effects
- **Animated Global Globe** - 3D rotating globe with trade route visualization  
- **Responsive Design** - Fully responsive across desktop, tablet, and mobile devices
- **Modern UI** - Glassmorphism effects, smooth animations, and gradient designs
- **Fast Performance** - Optimized with Next.js and Tailwind CSS

### Pages Included
1. **Homepage** - Hero section, services preview, stats, testimonials, marquee banner
2. **About Us** - Company story, mission/vision, timeline, certifications
3. **Services** - Import/Export Trading, Consulting, specialized services
4. **Industries** - Agriculture, Textiles, Chemicals, Machinery, FMCG, Industrial Goods
5. **Founder's Message** - Leadership philosophy and vision
6. **Trusted Partners** - Logos, testimonials, case studies
7. **Global Presence** - Interactive world map, regional offices, trade corridors
8. **Blog/Insights** - Trade updates and market trends
9. **FAQ** - Common trade and documentation questions
10. **Contact Us** - Form, maps, WhatsApp integration, social links
11. **Legal Pages** - Privacy Policy, Terms & Conditions, Disclaimer

## 🛠️ Tech Stack

- **Framework**: Next.js 16+ with App Router & TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js
- **Animations**: Framer Motion, GSAP
- **Icons**: React Icons, Lucide React

## 🚀 Quick Start

```bash
# Run development server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Homepage
│   ├── globals.css                   # Global styles
│   └── (pages)/                      # Pages directory
│       ├── about/page.tsx
│       ├── services/page.tsx
│       ├── industries/page.tsx
│       ├── founder/page.tsx
│       ├── partners/page.tsx
│       ├── global-presence/page.tsx
│       ├── blog/page.tsx
│       ├── faq/page.tsx
│       ├── contact/page.tsx
│       ├── privacy-policy/page.tsx
│       ├── terms-conditions/page.tsx
│       └── disclaimer/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── CargoShip3D.tsx
│   ├── AnimatedGlobe3D.tsx
│   ├── ServicesGrid.tsx
│   ├── StatsSection.tsx
│   ├── TestimonialsSection.tsx
│   └── MarqueeBanner.tsx
└── lib/                              # Utilities
```

## 🎨 Design Features

- **Navy Blue & Cyan** color scheme
- **Glassmorphism** effects with backdrop blur
- **Smooth animations** and transitions
- **Parallax scrolling** effects
- **Interactive hover** states
- **Responsive grid** layouts

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Docker
```bash
docker build -t vihana .
docker run -p 3000:3000 vihana
```

## 🔧 Customization

### Update Company Info
- Edit `src/components/Header.tsx` for logo
- Edit `src/components/Footer.tsx` for contact info
- Update `src/app/layout.tsx` for meta tags

### Add Real Content
- Replace placeholder text with actual content
- Add company logos to `public/images/`
- Update testimonials and case studies
- Configure WhatsApp number in Contact page

### Connect Contact Form to Google Sheets + Email
1. Create a Google Apps Script web app that accepts POST requests.
2. In the script, write the submitted fields to a Google Sheet and send an email to info@vihanaglobalventures.com.
3. Deploy the script and copy the web app URL.
4. Add it to your environment as `GOOGLE_APPS_SCRIPT_URL` in `.env.local`.
5. Restart the Next.js dev server after updating the environment variable.

### 3D Graphics
- Modify `CargoShip3D.tsx` for ship customization
- Edit `AnimatedGlobe3D.tsx` for globe styling
- Adjust animation speeds and colors

## 📱 Responsive Design

- **Mobile**: Optimized for touch, < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: Full experience > 1024px

## 📞 Contact

**Vihana Global Ventures**
- Email: info@vihanaglobalventures.com
- Phone: +91 9904461301

## 📝 License

Proprietary © 2024 Vihana Global Ventures. All rights reserved.

---

**Version**: 1.0.0 | **Last Updated**: January 2024
