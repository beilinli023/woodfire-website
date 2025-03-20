
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
    title: 'BLESSING',
    emoji: '💎',
    path: '/blessing'
  },
  {
    title: 'KEEP MORE',
    emoji: '🌟',
    path: '#'
  }
];
