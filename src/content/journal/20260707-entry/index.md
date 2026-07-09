---
title: 'Refactored Project Card Layout'
seoTitle: 'Refactored Project Card Layout'
slug: '20260707'
description: 'Simplified the card component and improved responsive behavior..'
pubDate: '2026-07-07'
updatedDate: '2026-07-07'
tags: ['journal']
---

- Spent some time cleaning up the project card component today. The original layout relied on a few unnecessary wrapper elements, which made spacing harder to reason about. Replaced them with a simpler flex-based structure and moved repeated utility classes into reusable component styles.

- While testing smaller screen sizes, I noticed the thumbnail wasn't shrinking as expected. The issue turned out to be the image's intrinsic size preventing the flex item from behaving as intended. Wrapping it in a container with an explicit basis and controlling `flex-shrink` produced more predictable results.

- Also reorganized the project metadata section to improve readability and make future additions (like badges or links) easier.

### Takeaways

- Flexbox becomes much easier to debug after identifying which element is actually the flex item.
- Fewer wrapper elements generally lead to simpler responsive layouts.
- Naming reusable components early prevents CSS from becoming scattered.

### Next

- Add dark mode refinements.
- Improve keyboard accessibility for project cards.
- Audit spacing consistency across the portfolio.
