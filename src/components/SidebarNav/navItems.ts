
export interface NavItem {
  title: string;
  emoji: string;
  path: string;
}

export const navItems: NavItem[] = [
  {
    title: '所有商品',
    emoji: '🛍️',
    path: '/products'
  },
  {
    title: 'KEEP HEALTH',
    emoji: '🧘',
    path: '/categories/health'
  },
  {
    title: 'KEEP LUCKY',
    emoji: '🍀',
    path: '/categories/lucky'
  },
  {
    title: 'KEEP MORE',
    emoji: '⭐',
    path: '#'
  },
  {
    title: 'BLESSING',
    emoji: '💎',
    path: '/blessing'
  },
  {
    title: 'About Us',
    emoji: '🏮',
    path: '/about'
  },
  {
    title: '慈善',
    emoji: '🤲',
    path: '/charity'
  },
  {
    title: '文化',
    emoji: '📚',
    path: '/culture'
  }
];
