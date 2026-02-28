---
title: "SEO & GEO Basics"
level: 1
subtitle: "The 5 Essential HTML Tools for Making Websites Search-Friendly"
readingTime: "~30 min read"
topics:
  - "What is SEO & GEO?"
  - "The Library Analogy"
  - "The 5 Essential Tools"
  - "Tool #1: The Title Tag"
  - "Tool #2: The H1 Heading"
  - "Tool #3: Links (Anchor Tags)"
  - "Tool #4: Alt Attributes"
  - "Tool #5: Schema Markup"
  - "Search Intent: The 'Why'"
  - "How to View Source Code"
  - "Practice Checklist"
quiz:
  - question: "What is the primary purpose of the title tag?"
    options:
      - "a) Describe images"
      - "b) Display in browser tab and search results"
      - "c) Create links"
      - "d) Style the page"
    correct: "b"
    explanation: "The title tag appears in the browser tab and is the main blue link in Google search results. It's crucial for SEO."
  - question: "How many H1 headings should a page have?"
    options:
      - "a) Zero"
      - "b) One"
      - "c) Multiple"
      - "d) As many as you want"
    correct: "b"
    explanation: "Each page should have exactly one H1 heading that describes the main topic of the page."
  - question: "What does the alt attribute do?"
    options:
      - "a) Makes images load faster"
      - "b) Describes images for accessibility and SEO"
      - "c) Creates image captions"
      - "d) Nothing important"
    correct: "b"
    explanation: "Alt text helps blind users (screen readers), tells Google what images show, and helps rank in Google Images."
  - question: "What is schema markup?"
    options:
      - "a) A styling framework"
      - "b) Structured data that helps search engines understand content"
      - "c) A database system"
      - "d) A type of link"
    correct: "b"
    explanation: "Schema is structured data (JSON-LD) that gives search engines detailed information about your content."
---

## 🧠 What is SEO & GEO?

### 🎓 Learn

**SEO** = Search Engine Optimization - making your website appear in Google, Bing, etc.

**GEO** = Generative Engine Optimization - making your content useful for AI like ChatGPT.

### 🤔 Reflect

When you search for something, where do you click first? The top 3 results? That's SEO at work.

When you ask ChatGPT a question, how does it know what to say? That's GEO.

### 💡 Key Insight

SEO and GEO are cousins. They both want **clear, accurate, helpful information**.

---

## 📚 The Library Analogy

### 🎓 Learn

Think of Google as a giant library. Your website is a book in that library.

- **The Title Tag** = The book's title on the spine
- **The H1 Heading** = The chapter title on the first page
- **Links** = References to other books
- **Alt Text** = Descriptions of pictures for blind readers
- **Schema** = The catalog card with book details

### 🤔 Reflect

Would you find a book with no title? No author? No description? That's what a website without SEO looks like to Google.

---

## 🛠️ The 5 Essential HTML Tools

These 5 HTML elements are the foundation of SEO. Master these, and you're ahead of 90% of websites.

1. **Title Tag** - The most important SEO element
2. **H1 Heading** - Your main page headline
3. **Links** - Connect your content
4. **Alt Attributes** - Describe your images
5. **Schema Markup** - Help search engines understand

---

## 🏷️ Tool #1: The Title Tag

### 🎓 Learn

The `<title>` tag appears in the browser tab and is the main blue link in search results.

```html
<title>Waseem | English Teacher & SEO Coder</title>
```

**Best Practices:**
- Keep it under 60 characters
- Put important keywords first
- Make it readable for humans
- Include your brand name at the end

### ✍️ Practice

Write a title tag for:
1. A coffee shop in Haifa
2. A JavaScript tutorial for beginners
3. A recipe for chocolate chip cookies

---

## 📌 Tool #2: The H1 Heading

### 🎓 Learn

The `<h1>` is your main page heading. Think of it as the chapter title of your page.

```html
<h1>SEO Basics: The Complete Guide</h1>
```

**Rules:**
- Use only ONE H1 per page
- Make it descriptive and compelling
- Include your main keyword naturally
- Match what the page is actually about

### 🤔 Reflect

What's the difference between a Title Tag and an H1?

> **Answer:** Title is for search results (external), H1 is for page visitors (internal).

---

## 🔗 Tool #3: Links (Anchor Tags)

### 🎓 Learn

Links help search engines discover pages and understand what's important.

```html
<a href="about.html">About Me</a>
```

**Types of Links:**
- **Internal links:** Connect your pages together
- **External links:** Link to other trusted sites
- **Anchor text:** The clickable words (make them descriptive!)

### 💡 Pro Tip

- ✅ Good anchor: "Learn SEO basics"
- ❌ Bad anchor: "Click here"

---

## 🖼️ Tool #4: Alt Attributes

### 🎓 Learn

The `alt` attribute describes images for search engines and accessibility.

```html
<img src="waseem.jpg" alt="Waseem teaching English in a Haifa classroom">
```

**Why it matters:**
- Helps blind users (screen readers read it aloud)
- Tells Google what the image shows
- Helps rank in Google Images

---

## 📊 Tool #5: Schema Markup

### 🎓 Learn

Schema is code that tells search engines exactly what your content means.

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Waseem",
  "jobTitle": "English Teacher"
}
</script>
```

**Why it's powerful:**
- Creates rich snippets (star ratings, prices, etc.)
- Helps AI understand your content
- Stands out in search results

---

## 🎯 Search Intent: The "Why"

### 🎓 Learn

Search intent is WHY someone searches. Match their intent, rank higher.

**The 4 Types:**
1. **Informational:** "How to bake bread"
2. **Navigational:** "Facebook login"
3. **Transactional:** "Buy iPhone 15"
4. **Commercial:** "Best laptop 2024"

---

## ✅ Practice Checklist

- [ ] Title tag under 60 characters
- [ ] One H1 heading per page
- [ ] All images have alt text
- [ ] Internal links between pages
- [ ] Schema markup added
- [ ] Content matches search intent

---

## 💼 Why Companies Hire Coders for SEO

Many people think SEO = "writing blog posts." That's only 20% of the story.

**The other 80% requires coding:**
- Fixing technical issues (broken links, slow pages)
- Implementing schema markup
- Optimizing site structure
- Monitoring analytics and fixing problems
- Keeping up with algorithm updates

### 💡 Your Advantage

As someone who can CODE and understands SEO, you're in the top 5% of job candidates.
