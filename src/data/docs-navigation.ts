export interface DocSection {
  title: string;
  items: DocItem[];
}

export interface DocItem {
  title: string;
  slug: string;
  description?: string;
}

export const docsNavigation: DocSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        slug: "introduction",
        description: "Welcome to ReviewSkill",
      },
      {
        title: "Quick Start",
        slug: "quick-start",
        description: "Get up and running in minutes",
      },
      {
        title: "Core Concepts",
        slug: "core-concepts",
        description: "Understanding spaced repetition",
      },
    ],
  },
  {
    title: "Features",
    items: [
      {
        title: "Flashcards",
        slug: "flashcards",
        description: "Create and manage flashcards",
      },
      {
        title: "Learning Notes",
        slug: "learning-notes",
        description: "Organize your study materials",
      },
      {
        title: "Spaced Repetition",
        slug: "spaced-repetition",
        description: "How our algorithm works",
      },
    ],
  },
  {
    title: "Guides",
    items: [
      {
        title: "Study Techniques",
        slug: "study-techniques",
        description: "Effective learning strategies",
      },
      {
        title: "Best Practices",
        slug: "best-practices",
        description: "Get the most out of ReviewSkill",
      },
    ],
  },
  {
    title: "Community",
    items: [
      {
        title: "Forum",
        slug: "forum",
        description: "Join the discussion",
      },
      {
        title: "FAQ",
        slug: "faq",
        description: "Common questions answered",
      },
    ],
  },
];
