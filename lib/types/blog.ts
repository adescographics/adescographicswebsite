export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'design' | 'development' | 'business' | 'technology' | 'case-study';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: number;
  image: string;
  tags: string[];
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}
