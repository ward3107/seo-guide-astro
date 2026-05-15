# 🌐 SEO & GEO Course

> A free, modern course on SEO and **GEO** (Generative Engine Optimization) — including hands-on labs, real-world case studies, and a fully-sourced reference page. Built with [Astro](https://astro.build).

**Live site:** https://ward3107.github.io/seo-guide-astro/

## ✨ Highlights

- 📖 **4 progressive levels** (~14,000 words) covering SEO basics → technical SEO (with INP, the 2024 Core Web Vital) → advanced GEO (AI Overviews, llms.txt, operationalized E-E-A-T) → authority & channels (modern link-building, per-platform social SEO)
- 🧪 **5 hands-on Labs** (fully client-side, zero tracking):
  - Title Tag SERP Preview with pixel-width truncation
  - Schema JSON-LD Validator (16 types, Google rich-result eligibility checks)
  - robots.txt Simulator (implements Google's parser)
  - Meta Tag Generator (OG + Twitter Card + canonical) with live previews
  - Heading Structure Analyzer (DOMParser-based, multi-H1 detection, skipped levels)
- 📚 **Sources page** — every factual claim cites a primary source (Google Search Central, web.dev, schema.org, peer-reviewed papers)
- 📑 **Case Studies** — 5 teardowns of real public pages (Nike, Adidas, NYT, Healthline, this site)
- 📥 **Resources** — 6 printable cheat sheets (on-page, technical, GEO, local, outreach templates, JSON-LD library)
- 🎓 **Verifiable certificates** — SHA-256-based, shareable verification URL, no server required
- ⌨️ **Power-user UX** — keyboard shortcuts (`?`/`J`/`K`/`gg`/`G`/`D`), resume bookmark, heading permalinks, "Last updated" badges, dark mode

## 🔄 Recently updated (May 2026)

- **Core Web Vitals updated to INP** (replaced FID on March 12, 2024) across all content, quizzes, flashcards, and the final test.
- **Added AI Overviews / SGE module** (Level 3): six traits AI rewards, a worked citation-shaped paragraph example, an LLM retrieval-mechanism table for Google/Perplexity/ChatGPT/Claude.
- **Added llms.txt module** with a complete working example.
- **Operationalized E-E-A-T**: 14-step playbook split by letter with a 5-minute audit.
- **Expanded Level 4 link-building** from generic advice to seven concrete techniques (Skyscraper, broken-link, HARO/Connectively, unlinked-mention reclamation, expert roundups, digital PR, guest posting) with Google Spam Policy references.
- **Per-platform social SEO** for LinkedIn, Instagram, X, TikTok, YouTube (each with platform-specific algorithm notes).

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
seo-guide-astro/
├── src/
│   ├── components/             # Reusable Astro components
│   │   ├── LevelCard.astro
│   │   ├── Quiz.astro
│   │   ├── FinalTest.astro
│   │   └── SidebarTOC.astro    # TOC with scroll spy
│   ├── content/levels/         # Markdown reference content
│   ├── layouts/Layout.astro    # Base layout (nav, footer, theme, keyboard shortcuts)
│   ├── pages/
│   │   ├── index.astro         # Home
│   │   ├── level1-4.astro      # The 4 main course levels
│   │   ├── quick-quiz.astro
│   │   ├── practice-mode.astro
│   │   ├── timed-challenge.astro
│   │   ├── final-test.astro
│   │   ├── flashcards.astro
│   │   ├── glossary.astro
│   │   ├── progress.astro
│   │   ├── certificate.astro   # Cert generator (issues verifiable URLs)
│   │   ├── verify.astro        # Verifies any cert URL client-side
│   │   ├── sources.astro       # Primary-source bibliography
│   │   ├── case-studies.astro  # Real-world page teardowns
│   │   ├── resources.astro     # Printable cheat sheets
│   │   └── labs/               # 5 hands-on tools
│   │       ├── index.astro
│   │       ├── title-tag-tester.astro
│   │       ├── schema-validator.astro
│   │       ├── robots-txt-simulator.astro
│   │       ├── meta-tag-generator.astro
│   │       └── heading-analyzer.astro
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
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
