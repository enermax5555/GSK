# ГСК - Гипсокартон Бургас

> **Modern, responsive website for a professional drywall and interior solutions company in Burgas, Bulgaria.**

![GSK Logo](./public/assets/Images/Logo/Logo.jpeg)

---

## 🌟 Overview

This is a fast, SEO-optimized, and mobile-friendly React site for GSK, a leading drywall and interior construction company in Burgas. The site showcases services, gallery, contact info, and company details, with beautiful design and subtle animations. Built with Vite, React, MUI, Tailwind CSS, and Framer Motion.

---

## 🚀 Features

- **Professional Services Showcase**: All main drywall/interior services with details and images
- **Animated Gallery**: Real project photos, optimized for speed and SEO
- **Contact & Location**: Click-to-call phone, email, and address
- **SEO & Structured Data**: Bulgarian/Burgas targeting, meta tags, sitemap, robots.txt, manifest, JSON-LD
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Modern UI**: MUI, Tailwind, Framer Motion for smooth, elegant experience
- **PWA Ready**: Manifest and icons for installable experience
- **Security Best Practices**: Security headers and deployment notes
- **No Login/Admin**: Pure client site, ready for public launch

---

## 🏗️ Project Structure

```
react-firebase-admin-app/
├── public/
│   ├── assets/Images/Logo/Logo.jpeg
│   ├── manifest.json
│   ├── robots.txt
│   ├── sitemap.xml
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ContactForm.tsx
│   │   ├── SEO.tsx
│   │   └── ...
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Gallery.tsx
│   │   ├── Services.tsx
│   │   └── ...
│   ├── utils/
│   │   ├── helpers.ts
│   │   ├── schema.ts
│   │   ├── imageOptimization.ts
│   │   ├── securityHeaders.ts
│   │   └── ...
│   ├── styles/tailwind.css
│   ├── Core.tsx
│   └── main.tsx
├── package.json
├── vite.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## 📞 Contact

- **Телефон**: [089 936 8419](tel:0899368419)
- **Имейл**: [info@гипсокартонбургас.com](mailto:info@гипсокартонбургас.com)
- **Адрес**: гр. Бургас, ул. Примерна 123

---

## 🖼️ Screenshots

![Home Page](./public/assets/Images/Logo/LogoWithText.png)

---

## ⚡ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Enermax5555/GSK.git
   cd react-firebase-admin-app
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run locally**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.
4. **Build for production**
   ```bash
   npm run build
   ```
5. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

---

## 🌐 SEO & PWA

- **Meta tags**: Bulgarian, Burgas, drywall, construction, services
- **Sitemap & robots.txt**: All key pages, hreflang, priorities
- **Manifest**: PWA installable, icons
- **Structured Data**: LocalBusiness, Service, FAQ
- **Security Headers**: See `src/utils/securityHeaders.ts` for deployment notes

---

## 🛡️ Security & Privacy

- No user data is collected
- No authentication or admin features in this build
- Security headers recommended for custom domain/Cloudflare/Netlify

---

## 📝 License

MIT License. See LICENSE file.

---

## 💡 Contributing

Pull requests and issues are welcome! For local business SEO, design, or content suggestions, please open an issue.

---

## 🙏 Credits

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Material UI](https://mui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [react-helmet-async](https://github.com/staylor/react-helmet-async)

---

## ⚠️ Note

This build is for client use only. Firebase and admin panel features are disabled/commented out for public deployment. For business inquiries, use the contact info above.