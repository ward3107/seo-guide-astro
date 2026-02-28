# 🌐 SEO & GEO Guide - Astro Version

> A modern, scalable SEO and GEO learning platform built with [Astro](https://astro.build).

## ✨ What's New - The Astro Migration

This project has been migrated from 5 separate HTML files to a modern Astro project with:

- 📦 **Component-based architecture** - Reusable components (LevelCard, Quiz, SidebarTOC)
- 📝 **Markdown content** - Easy to edit content in Markdown format
- 🎨 **Scoped CSS** - No style conflicts between components
- ⚡ **Zero JS by default** - Excellent SEO and performance
- 🔧 **TypeScript support** - Type-safe development
- 🚀 **GitHub Actions** - Automatic deployment on push
- 📱 **Responsive design** - Mobile-first approach

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Git installed

### Installation & Development

```bash
# Navigate to the Astro project
cd astro-seo-guide

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:4321
```

### Build for Production

```bash
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
astro-seo-guide/
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions for auto-deployment
├── public/                     # Static assets (favicon, etc.)
├── src/
│   ├── components/             # Reusable Astro components
│   │   ├── LevelCard.astro    # Level card component
│   │   ├── Quiz.astro         # Quiz component with auto-grading
│   │   └── SidebarTOC.astro   # Table of contents with scroll spy
│   ├── content/
│   │   └── levels/            # Markdown content for each level
│   │       ├── level1.md
│   │       ├── level2.md
│   │       ├── level3.md
│   │       └── level4.md
│   ├── layouts/
│   │   └── Layout.astro       # Base layout (nav, footer, styles)
│   ├── pages/                 # Route pages
│   │   ├── index.astro        # Home page
│   │   ├── level1.astro       # Level 1 page
│   │   ├── level2.astro       # Level 2 page
│   │   ├── level3.astro       # Level 3 page
│   │   └── level4.astro       # Level 4 page
│   └── content.config.ts      # Content collection config
├── astro.config.mjs           # Astro configuration
├── package.json               # Dependencies
└── tsconfig.json              # TypeScript config
```

## 📝 Adding Content

### Option 1: Edit Markdown Files (Recommended)

Edit files in `src/content/levels/`:

```markdown
---
title: "Your Title"
level: 1
subtitle: "Your subtitle"
readingTime: "~30 min read"
topics:
  - "Topic 1"
  - "Topic 2"
quiz:
  - question: "Your question?"
    options: ["a) Option 1", "b) Option 2"]
    correct: "b"
    explanation: "Why this is correct"
---

# Your Content Here

Write in **Markdown** format!
```

### Option 2: Edit Astro Pages

Edit files in `src/pages/` - they are Astro components with full HTML/JS/CSS support.

## 🎨 Working with Components

### Using the Quiz Component

```astro
---
import Quiz from '../components/Quiz.astro';
---

<Quiz
  id="quiz1"
  title="Test Your Knowledge"
  questions={quizData}
  passingScore={75}
/>
```

### Using the Sidebar TOC Component

```astro
---
import SidebarTOC from '../components/SidebarTOC.astro';

const sections = [
  { id: 'intro', title: 'Introduction', icon: '🧠' },
  { id: 'tools', title: 'The 5 Tools', icon: '🛠️' }
];
---

<SidebarTOC sections={sections} />
```

### Using the LevelCard Component

```astro
---
import LevelCard from '../components/LevelCard.astro';
---

<LevelCard
  level={1}
  title="SEO Basics"
  description="Learn the fundamentals"
  icon="📘"
  href="/level1"
  topics={['Topic 1', 'Topic 2']}
  topicCount="13 Topics"
  active={true}
/>
```

## 🌐 Deployment

### Automatic Deployment (GitHub Actions)

The project is set up for automatic deployment via GitHub Actions:

1. Push to `main` branch → Auto-deploys to GitHub Pages
2. Changes are live in 1-2 minutes
3. No manual intervention needed

### Manual Deployment

```bash
# Build the site
npm run build

# The dist/ folder contains your site
# Upload contents of dist/ to your GitHub repository
```

## 📊 Before vs After Astro Migration

| Aspect | Before (HTML) | After (Astro) |
|--------|--------------|---------------|
| Files | 5 HTML files | Components + Pages + Content |
| Navigation | Copied 5 times | Defined once in Layout |
| CSS | Duplicated | Scoped per component |
| Components | None | LevelCard, Quiz, SidebarTOC |
| Content Editing | HTML files | Markdown files |
| Deployment | Manual upload | GitHub Actions |
| Build Step | None | Simple `npm run build` |
| Total Lines | ~10,000 | ~2,400 (76% reduction!) |

## 🔧 Configuration

### Site URL

Edit `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/your-repo-name',
});
```

### Add New Pages

1. Create `src/pages/new-page.astro`
2. It becomes `/new-page` automatically
3. Use the Layout component for consistent styling

### Create New Components

1. Create `src/components/MyComponent.astro`
2. Import and use in any page

## 📚 Content Collections

Levels are managed through Astro Content Collections:

```typescript
// src/content.config.ts
const levelCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    level: z.number(),
    topics: z.array(z.string()),
    quiz: z.array(z.object({...}))
  }),
});
```

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process on port 4321
npx kill-port 4321

# Or use a different port
npm run dev -- --port 3000
```

### Build errors
```bash
# Clear cache and rebuild
rm -rf node_modules .astro dist
npm install
npm run build
```

### Type errors
```bash
# Run type checker
npx astro check
```

## 🎓 Resources

- [Astro Documentation](https://docs.astro.build)
- [Astro GitHub](https://github.com/withastro/astro)
- [MDX Documentation](https://mdxjs.com)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🚀 Next Steps

1. ✅ Run `npm install` to install dependencies
2. ✅ Run `npm run dev` to start development
3. ✅ Open `http://localhost:4321` in your browser
4. 📝 Edit content in `src/content/levels/`
5. 🚀 Push to GitHub to auto-deploy

## 📄 License

© 2026 Waseem. All rights reserved.
