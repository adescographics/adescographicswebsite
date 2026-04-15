import { BlogPost } from '@/lib/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'web-design-trends-2024',
    title: 'Web Design Trends to Watch in 2024',
    excerpt: 'Explore the latest web design trends that are shaping the digital landscape. From minimalism to bold typography, discover what\'s next.',
    content: `Web design continues to evolve rapidly. In 2024, we're seeing a shift towards more immersive and interactive experiences. Here are the key trends:

## Minimalism with Purpose
Minimalist design isn't about doing less—it's about doing more with less. Clean layouts, ample whitespace, and strategic use of color are creating more focused user experiences.

## Bold Typography
Typography is becoming a hero element in web design. Large, expressive fonts are grabbing attention and setting the tone for entire websites.

## Interactive Animations
Subtle animations and micro-interactions are enhancing user engagement without overwhelming the interface. These transitions guide users through the digital journey.

## Dark Mode Dominance
Dark mode has evolved from a feature to an expectation. Designers are creating thoughtful color palettes that work beautifully in both light and dark contexts.

## Accessibility First
Inclusive design is no longer optional. Web design now prioritizes accessibility from the ground up, ensuring all users can navigate and enjoy digital experiences.

The future of web design is one where aesthetics and functionality coexist harmoniously, creating experiences that are both beautiful and purposeful.`,
    category: 'design',
    author: {
      name: 'Sarah Anderson',
      role: 'Design Director',
      avatar: '/images/avatars/sarah.jpg'
    },
    publishedAt: '2024-03-15',
    readTime: 5,
    image: '/images/blog/web-design-trends.jpg',
    tags: ['design', 'trends', 'web', 'ui']
  },
  {
    id: '2',
    slug: 'building-scalable-applications',
    title: 'Building Scalable Applications: A Developer\'s Guide',
    excerpt: 'Learn the principles and practices for building applications that grow with your business without compromising performance.',
    content: `Scalability is one of the most critical challenges in modern software development. Whether you're building a startup MVP or an enterprise platform, thinking about scale from day one can save countless hours and resources later.

## Architecture First
Before writing a single line of code, establish a solid architectural foundation. This includes deciding on your tech stack, database strategy, and deployment infrastructure.

## Database Optimization
Your database is often the bottleneck in scalable applications. Implement proper indexing, partitioning, and caching strategies to ensure queries remain fast as your data grows.

## Microservices and Modularity
Breaking your application into smaller, independent services allows them to scale independently. This approach provides flexibility and resilience.

## Caching Strategies
Implement multi-level caching—browser cache, server cache, and database cache—to reduce load and improve response times significantly.

## Monitoring and Metrics
You can't improve what you don't measure. Implement comprehensive monitoring to identify bottlenecks before they become critical issues.

Building for scale requires foresight, planning, and continuous optimization. Start simple, but always keep scalability in mind.`,
    category: 'development',
    author: {
      name: 'Marcus Chen',
      role: 'Senior Engineer',
      avatar: '/images/avatars/marcus.jpg'
    },
    publishedAt: '2024-03-10',
    readTime: 8,
    image: '/images/blog/scalable-apps.jpg',
    tags: ['development', 'scalability', 'architecture', 'best-practices']
  },
  {
    id: '3',
    slug: 'digital-transformation-business',
    title: 'Digital Transformation: Why Your Business Needs It',
    excerpt: 'Understand the importance of digital transformation and how it can revolutionize your business operations and customer experience.',
    content: `Digital transformation is no longer a luxury—it's a necessity. Companies that embrace digital change are seeing unprecedented growth, while those that resist are falling behind.

## The Digital Imperative
The pandemic accelerated digital adoption by years. Customers now expect seamless digital experiences, and businesses must adapt or risk obsolescence.

## Customer Experience Revolution
Digital transformation puts the customer at the center. By leveraging technology, businesses can provide personalized, seamless experiences across all touchpoints.

## Operational Efficiency
Automation and digitization eliminate manual processes, reduce errors, and free your team to focus on strategic initiatives that drive growth.

## Data-Driven Decision Making
Collecting and analyzing data allows businesses to make informed decisions based on real insights rather than intuition.

## Organizational Culture
Successful digital transformation requires a cultural shift. Employees need to embrace change, develop new skills, and adopt agile methodologies.

## The Competitive Advantage
Companies that successfully transform digitally gain a significant competitive advantage. They're faster, more efficient, and better positioned to serve their customers.

The question isn't whether to transform digitally—it's how quickly you can do it.`,
    category: 'business',
    author: {
      name: 'Emily Rodriguez',
      role: 'Strategy Consultant',
      avatar: '/images/avatars/emily.jpg'
    },
    publishedAt: '2024-03-05',
    readTime: 6,
    image: '/images/blog/digital-transformation.jpg',
    tags: ['business', 'digital', 'strategy', 'transformation']
  },
  {
    id: '4',
    slug: 'ai-future-business',
    title: 'The Future of Business: AI Integration',
    excerpt: 'Discover how artificial intelligence is transforming industries and what it means for the future of business.',
    content: `Artificial Intelligence is no longer science fiction—it's reshaping how businesses operate. From customer service to data analysis, AI is becoming integral to competitive success.

## AI in Customer Service
Chatbots and AI-powered support systems are providing 24/7 customer assistance, improving response times, and increasing satisfaction rates.

## Predictive Analytics
AI enables businesses to predict customer behavior, market trends, and potential issues before they occur, allowing for proactive decision-making.

## Automation at Scale
Repetitive tasks that once required human effort can now be automated, freeing employees for more creative and strategic work.

## Personalization
Machine learning algorithms enable hyper-personalized experiences. From product recommendations to customized content, AI helps deliver what each customer wants.

## Challenges and Considerations
Implementing AI requires investment, skilled talent, and careful consideration of ethical implications and data privacy.

## The Road Ahead
Companies that successfully integrate AI into their operations will lead their industries. The time to start is now.`,
    category: 'technology',
    author: {
      name: 'James Wright',
      role: 'Tech Lead',
      avatar: '/images/avatars/james.jpg'
    },
    publishedAt: '2024-02-28',
    readTime: 7,
    image: '/images/blog/ai-future.jpg',
    tags: ['ai', 'technology', 'innovation', 'business']
  },
  {
    id: '5',
    slug: 'case-study-ecommerce-redesign',
    title: 'Case Study: Transforming an E-Commerce Platform',
    excerpt: 'See how we redesigned and rebuilt an e-commerce platform, resulting in 150% increase in conversion rates.',
    content: `This case study explores a complete redesign of a struggling e-commerce platform and the dramatic results that followed.

## The Challenge
Our client's e-commerce site was outdated, slow, and had a 1.2% conversion rate—well below industry standards. Users complained about confusing navigation and a checkout process that took too long.

## Our Approach
We conducted extensive user research, identified pain points, and redesigned the entire platform from the ground up. Key improvements included:

### UI/UX Redesign
- Simplified navigation and product discovery
- Streamlined checkout process (reduced from 8 steps to 3)
- Mobile-first responsive design
- Improved product pages with better imagery and descriptions

### Performance Optimization
- Implemented image lazy loading
- Optimized code and assets
- Implemented CDN for faster content delivery
- Reduced page load time from 4.5s to 1.2s

### Backend Improvements
- Upgraded infrastructure for better reliability
- Implemented caching strategies
- Optimized database queries
- Added payment processing improvements

## Results
- Conversion rate increased from 1.2% to 3.0% (150% increase)
- Average order value increased by 35%
- Customer satisfaction scores improved by 45%
- Mobile traffic increased by 200%
- Cart abandonment rate decreased from 78% to 42%

## Key Takeaways
This project demonstrates how thoughtful design, technical optimization, and user-centric development can transform business results. The investment in platform modernization paid dividends within the first quarter.`,
    category: 'case-study',
    author: {
      name: 'Adesco Team',
      role: 'Project Leads',
      avatar: '/images/avatars/team.jpg'
    },
    publishedAt: '2024-02-20',
    readTime: 10,
    image: '/images/blog/ecommerce-case-study.jpg',
    tags: ['case-study', 'ecommerce', 'design', 'development']
  },
  {
    id: '6',
    slug: 'best-practices-responsive-design',
    title: 'Responsive Design Best Practices',
    excerpt: 'Master the principles of responsive design and create websites that work beautifully on all devices.',
    content: `Responsive design is essential in today's multi-device world. Here are the best practices for creating truly responsive websites.

## Mobile-First Approach
Start with mobile, then enhance for larger screens. This approach ensures your core content and functionality work perfectly on the smallest devices.

## Flexible Layouts
Use relative units (%, em, rem) instead of fixed pixels. This allows layouts to adapt fluidly to different screen sizes.

## Flexible Images
Images should be scalable and responsive. Use max-width: 100% to ensure images never overflow their containers.

## Media Queries
Strategic use of media queries allows you to adapt layouts for specific breakpoints. Common breakpoints: 480px, 768px, 1024px, 1440px.

## Testing Across Devices
Test on real devices, not just browser emulators. Different devices have different rendering engines and capabilities.

## Performance Considerations
Mobile users often have slower connections. Optimize images, minimize CSS/JS, and consider serving different assets based on device capabilities.

## Accessibility
Responsive design should also be accessible. Ensure touch targets are large enough, maintain good contrast, and test with screen readers.

Responsive design is no longer optional—it's a fundamental requirement for modern web development.`,
    category: 'development',
    author: {
      name: 'Sarah Anderson',
      role: 'Design Director',
      avatar: '/images/avatars/sarah.jpg'
    },
    publishedAt: '2024-02-15',
    readTime: 6,
    image: '/images/blog/responsive-design.jpg',
    tags: ['design', 'responsive', 'mobile', 'best-practices']
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getRelatedPosts = (slug: string, limit: number = 3): BlogPost[] => {
  const currentPost = getPostBySlug(slug);
  if (!currentPost) return [];
  
  return blogPosts
    .filter(post => post.slug !== slug && post.category === currentPost.category)
    .slice(0, limit);
};
