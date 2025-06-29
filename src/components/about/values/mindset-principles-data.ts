
export interface MindsetPrinciple {
  title: string;
  description: string;
  icon: string;
  customIcon?: boolean;
  iconStyle?: 'street-sign' | 'graffiti' | 'urban';
}

export const mindsetPrinciples: MindsetPrinciple[] = [
  {
    title: "Level Up Over Easy",
    description: "Comfort is the enemy of progress. While everyone else plays it safe, we lean into the uncomfortable spaces where real growth happens. Every challenge is just another level to unlock.",
    icon: "trending-up",
    customIcon: true,
    iconStyle: 'street-sign'
  },
  {
    title: "We All Eat",
    description: "Your success fuels the whole circle. We share game, celebrate wins, and pull each other up. When one person breaks through, it opens doors for everyone. Solo missions don't build empires.",
    icon: "users",
    customIcon: true,
    iconStyle: 'graffiti'
  },
  {
    title: "Legacy Moves Only",
    description: "Every decision gets measured against forever. We don't just move for today's bag—we move for generational impact. This is about building something that outlasts us and changes the whole family tree.",
    icon: "building",
    customIcon: true,
    iconStyle: 'urban'
  }
];
