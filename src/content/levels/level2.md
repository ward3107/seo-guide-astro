---
title: "Technical SEO Mastery"
level: 2
subtitle: "From Basics to Advanced: robots.txt, Status Codes, XML Sitemaps & Core Web Vitals"
readingTime: "~45 min read"
topics:
  - "Introduction to Technical SEO"
  - "The Security Guard (robots.txt)"
  - "The Table of Contents (XML Sitemaps)"
  - "The Bot's Language (Status Codes)"
  - "Speed & Performance Basics"
  - "Core Web Vitals Metrics"
  - "LCP, FID, CLS Explained"
  - "Technical Audit Checklist"
quiz:
  - question: "What is the primary purpose of robots.txt?"
    options:
      - "a) To improve site speed"
      - "b) To control which pages search engines can crawl"
      - "c) To create sitemaps"
      - "d) To add meta tags"
    correct: "b"
    explanation: "Robots.txt tells search engine bots which pages they can and cannot access on your site."
  - question: "What does a 301 status code mean?"
    options:
      - "a) Page not found"
      - "b) Server error"
      - "c) Page moved permanently"
      - "d) Everything is OK"
    correct: "c"
    explanation: "301 means 'Moved Permanently' - it tells search engines the page has moved to a new URL and transfers SEO value."
  - question: "What is LCP in Core Web Vitals?"
    options:
      - "a) Largest Contentful Paint - loading performance"
      - "b) First Input Delay - interactivity"
      - "c) Cumulative Layout Shift - visual stability"
      - "d) Link Click Probability"
    correct: "a"
    explanation: "LCP measures how long the main content takes to load. It should be under 2.5 seconds."
  - question: "What is an XML sitemap?"
    options:
      - "a) A list of blocked pages"
      - "b) A list of important pages for search engines"
      - "c) A style sheet"
      - "d) A database file"
    correct: "b"
    explanation: "An XML sitemap lists all your important pages to help search engines discover and crawl them efficiently."
---

## 🔧 What is Technical SEO?

### 🎓 Learn

Technical SEO is about making sure search engines can easily **crawl**, **index**, and **understand** your website. It's the foundation that all your other SEO efforts build upon.

**Think of it this way:**
- Content SEO = What you say
- Technical SEO = How well your house is built

### 🤔 Reflect

Would you buy a house with:
- No door (can't get in)?
- Broken rooms (missing pages)?
- No address (can't be found)?

That's what a website without technical SEO looks like to Google.

---

## 🛡️ Topic 1: The Security Guard (robots.txt)

### What is robots.txt?

`robots.txt` is a simple text file that tells search engine **bots** which pages they can and cannot visit.

Think of it as a **"Do Not Enter" sign** for search engines.

### 🎓 Learn

```txt
# Allow all bots
User-agent: *
Allow: /

# Block specific pages
User-agent: *
Disallow: /admin/
Disallow: /private/

# Block specific bot
User-agent: Googlebot
Disallow: /temp/
```

### 💡 Key Concepts

- **User-agent:** Which bot (Googlebot, *, etc.)
- **Disallow:** Pages to block
- **Allow:** Pages to explicitly allow

### ✍️ Practice

Create a robots.txt that:
1. Allows all pages except `/admin/`
2. Blocks `/temp/` from all bots
```txt
User-agent: *
Disallow: /admin/
Disallow: /temp/
```

### 🤔 Reflect

**Question:** Does robots.txt **hide** content from Google?

> **Answer:** NO! It only tells polite bots not to crawl. Malicious bots ignore it. To truly hide content, use password protection.

---

## 📋 Topic 2: The Table of Contents (XML Sitemaps)

### What is an XML Sitemap?

An XML sitemap is a list of your important pages. Think of it as giving Google a **map of your website**.

### 🎓 Learn

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mysite.com/</loc>
    <lastmod>2026-02-28</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://mysite.com/about.html</loc>
    <lastmod>2026-02-15</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 📊 Sitemap Tags Explained

| Tag | Purpose |
|-----|---------|
| `<loc>` | The full URL of the page |
| `<lastmod>` | When you last updated the page |
| `<priority>` | Importance (0.0 to 1.0) |

### 💡 Pro Tip

After creating your sitemap, submit it to **Google Search Console** so Google knows it exists!

---

## 📞 Topic 3: The Bot's Language (HTTP Status Codes)

### What Are Status Codes?

When Googlebot requests a page, your server responds with a **3-digit code**. Think of these like **phone call statuses**.

### 📊 The 4 Most Important Codes

| Code | Name | Meaning | Analogy |
|------|------|---------|---------|
| **200** | ✅ OK | Page loaded successfully | "Hello, I'm here!" |
| **301** | 🔄 Moved Permanently | Page moved to new URL | "I moved! Update your address book." |
| **404** | ❌ Not Found | Page doesn't exist | "Wrong number. Nobody lives here." |
| **500** | 🔌 Server Error | Server crashed/broken | "Phone line is dead. Try later." |

### 🎯 When to Use Each

**200 OK** - Everything working perfectly (95% of pages)

**301 Moved** - You renamed/moved a page. Transfers SEO value to new URL.

**404 Not Found** - Page doesn't exist. Fix broken links or add 301 redirects!

**500 Server Error** - Server crashed. Very bad for SEO!

---

## ⚡ Topic 4: Speed & Performance Basics

### Why Speed Matters

Google wants to send users to **fast websites**. Slow sites = bad user experience = lower rankings.

### 🎯 The 3 Second Rule

- **0-2 seconds:** ✅ Excellent
- **2-4 seconds:** ⚠️ Acceptable
- **4+ seconds:** ❌ Poor (users will leave)

### 🔧 What Affects Speed

1. **Large images** - Compress them!
2. **Unoptimized code** - Minify CSS/JS
3. **Slow server** - Use a good host
4. **Too many requests** - Combine files

---

## 📊 Topic 5: Core Web Vitals Metrics

### What Are Core Web Vitals?

Core Web Vitals are **3 specific metrics** that Google uses to measure user experience.

### 📊 The Three Metrics

#### 1. LCP - Largest Contentful Paint
**What:** How long the main content takes to load
**Target:** Under 2.5 seconds
**Measures:** Loading performance

#### 2. FID - First Input Delay
**What:** How long until the page responds when clicked
**Target:** Under 100 milliseconds
**Measures:** Interactivity

#### 3. CLS - Cumulative Layout Shift
**What:** How much content jumps around while loading
**Target:** Under 0.1
**Measures:** Visual stability

### 💡 Memory Trick

- **L**CP = **L**oading
- **F**ID = **F**ast response
- **C**LS = **C**ontent stability

---

## ✅ Technical Audit Checklist

Use this checklist to audit your site:

### Crawlability
- [ ] robots.txt exists and is correct
- [ ] XML sitemap created
- [ ] Sitemap submitted to Google Search Console
- [ ] No 404 errors on important pages
- [ ] Proper 301 redirects for moved pages

### Speed & Performance
- [ ] Images compressed
- [ ] CSS/JS minified
- [ ] Browser caching enabled
- [ ] CDN configured (if applicable)
- [ ] LCP under 2.5 seconds
- [ ] FID under 100ms
- [ ] CLS under 0.1

### Mobile
- [ ] Mobile-friendly design
- [ ] Touch elements large enough
- [ ] Text readable without zooming
- [ ] No horizontal scrolling

---

## 🎓 Summary

**Technical SEO = Making your site easy for search engines to use**

Key takeaways:
1. **robots.txt** controls what bots can access
2. **XML sitemaps** help bots find your important pages
3. **Status codes** tell bots if pages exist or moved
4. **Core Web Vitals** measure user experience
5. **Speed matters** - aim for under 3 seconds

**Remember:** Content + Technical SEO = SEO Success 🎯
