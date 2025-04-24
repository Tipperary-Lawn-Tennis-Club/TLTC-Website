# Tipperary Lawn Tennis Club Website

A modern, responsive website for the Tipperary Lawn Tennis Club built with Astro, TailwindCSS, and DaisyUI.

## 🎾 Features

- Responsive design that works on mobile, tablet, and desktop
- News articles section with dynamic content from markdown files
- Photo gallery with image optimization
- Club policies section
- Committee member profiles
- Contact form with Netlify integration
- Admin interface using DecapCMS (formerly Netlify CMS)

## 🧞 Tech Stack

- [Astro](https://astro.build/) - The web framework for content-focused websites
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [DaisyUI](https://daisyui.com/) - Component library for Tailwind CSS
- [React](https://reactjs.org/) - Used for interactive components
- [DecapCMS](https://decapcms.org/) - Headless CMS for content management
- [TypeScript](https://www.typescriptlang.org/) - Type safety for JavaScript

## 📂 Project Structure

```
/
├── public/
│   ├── admin/             # DecapCMS admin interface
│   │   ├── config.yml     # CMS configuration
│   │   └── index.html     # Admin entry point
│   └── favicon.svg        # Site favicon
├── src/
│   ├── assets/            # Static assets (images, etc.)
│   ├── components/        # Reusable UI components
│   ├── content/           # Content collections (news, policies, etc.)
│   │   ├── committee/     # Committee member profiles
│   │   ├── news/          # News articles
│   │   ├── photos/        # Photo gallery entries
│   │   ├── policies/      # Club policies
│   │   └── config.ts      # Content collection definitions
│   ├── layouts/           # Layout components
│   ├── pages/             # Page components and routes
│   ├── styles/            # Global styles
│   └── types/             # TypeScript type definitions
└── package.json           # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Tipperary-Lawn-Tennis-Club/TLTC-Website.git
   cd TLTC-Website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit `http://localhost:4321`

### Building for Production

```bash
npm run build
# or
yarn build
```

The built site will be in the `dist/` directory.

## 📝 Content Management

Content is managed through DecapCMS which is accessible at `/admin` when the site is deployed. Content is stored as markdown files in the corresponding folders under `src/content/`.

### Adding New Content

1. Navigate to `/admin` on the deployed site
2. Login using your credentials
3. Select the content type you want to add (News, Policies, Committee Member, Photos)
4. Create your content using the rich text editor
5. Save and publish

## 🔄 Continuous Deployment

This site is set up for continuous deployment through Netlify:

1. When changes are pushed to the `main` branch, Netlify automatically rebuilds the site
2. The site is automatically deployed to the production URL

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributors

- [Connor Mattless](https://github.com/cmattless)