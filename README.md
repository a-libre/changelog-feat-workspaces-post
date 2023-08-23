# Changelog

A Next.js blog starter project built with MDX and Chakra UI. Fully-customizable and open source, so don't hesitate to add new features and report bugs!
Forked from [June](https://github.com/juneHQ/changelog/)

## Features

- A stylish changelog
- Celebrate your team's achievements - with team credits on each post
- Easy-to-use admin panel

## Routes

- `/pages/:pageNumber` - displays paginated articles
- `/` - redirects to `/pages/0`
- `/changelogs/:id` - displays one article

## File structure

```bash

bin             # Scripts
components      # Reusable components
├─ core
├─ mdx-layout.tsx
└─ ...
lib              # Types, theme, utilities, services
pages
├─ changelogs    # MDX articles
├─ page
│  └─ [page].tsx # Paginated articles
├─ _app.tsx
└─ _middleware.ts
...
```

## Writing articles

To write a new blog post, create a new `.mdx` file in the `/pages/changelogs` directory.

### Anatomy of an MDX article

MDX is a superset of markdown that lets you write JSX directly in your markdown files. It is a powerful way to add dynamic interactivity, and embed components within your content, helping you to bring your pages to life.

![mdx-preview](/mdx-preview.png)

Learn more 👉 [Next.js: Using MDX](https://nextjs.org/docs/advanced-features/using-mdx), [Using MDX](https://mdxjs.com/docs/using-mdx/)

## Branding customization

Most of the branding elements can be found in `<Navbar>` and `<Footer>` components. To customize these components, update the code in these directories:

- [`components/core/navbar/index.tsx`](https://github.com/Create-Inc/changelog/tree/master/components/core/navbar)
- [`components/core/footer/index.tsx`](https://github.com/Create-Inc/changelog/tree/master/components/core/footer)
