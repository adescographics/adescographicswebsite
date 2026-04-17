'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { PageHeader } from '@/components/sections/page-header';
import { Copy, Check } from 'lucide-react';

interface ToolbarItem {
  id: string;
  name: string;
  category: string;
  description: string;
  code: string;
  language: string;
}

const toolbarItems: ToolbarItem[] = [
  {
    id: '1',
    name: 'Color Converter',
    category: 'Utilities',
    description: 'Convert between HEX, RGB, and HSL color formats instantly.',
    code: `hex2rgb('#eca8d6')
// Returns: rgb(236, 168, 214)`,
    language: 'javascript',
  },
  {
    id: '2',
    name: 'Image Optimizer',
    category: 'Tools',
    description: 'Compress and optimize images for web without quality loss.',
    code: `const optimized = await optimizeImage(image, {
  quality: 0.8,
  format: 'webp'
});`,
    language: 'javascript',
  },
  {
    id: '3',
    name: 'JSON Formatter',
    category: 'Utilities',
    description: 'Format, validate, and beautify JSON data with one click.',
    code: `const formatted = JSON.stringify(data, null, 2);
console.log(formatted);`,
    language: 'javascript',
  },
  {
    id: '4',
    name: 'CSS Grid Generator',
    category: 'Generators',
    description: 'Visually create responsive CSS Grid layouts.',
    code: `<div class="grid grid-cols-3 gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>`,
    language: 'html',
  },
  {
    id: '5',
    name: 'API Response Logger',
    category: 'Debugging',
    description: 'Log and inspect API responses in real-time with filtering.',
    code: `fetch('/api/endpoint')
  .then(res => res.json())
  .then(data => console.log('[v0]', data));`,
    language: 'javascript',
  },
  {
    id: '6',
    name: 'Regex Tester',
    category: 'Tools',
    description: 'Test and debug regular expressions with instant feedback.',
    code: `const pattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
const isEmail = pattern.test(email);`,
    language: 'javascript',
  },
];

export default function ToolbarPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(toolbarItems.map(item => item.category))];
  
  const filteredItems = selectedCategory === 'all'
    ? toolbarItems
    : toolbarItems.filter(item => item.category === selectedCategory);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <PageLayout>
      <Container>
        <PageHeader
          eyebrow="Developer Tools"
          title={
            <>
              Powerful Utilities
              <br />
              <span className="text-muted-foreground">For Your Workflow.</span>
            </>
          }
          subtitle="Collection of developer tools and utilities to boost your productivity."
        />
      </Container>

      {/* Category Filter */}
      <section className="py-12 lg:py-16 border-t border-foreground/10">
        <Container>
          <p className="text-sm text-muted-foreground mb-4">Filter by category:</p>
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[#eca8d6] text-background'
                    : 'bg-foreground/10 text-foreground hover:bg-foreground/20'
                }`}
              >
                {category === 'all' ? 'All Tools' : category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Toolbar Items */}
      <section className="py-12 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="p-8 border border-foreground/10 bg-foreground/[0.02] rounded-lg hover:border-[#eca8d6]/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-lg mb-1">{item.name}</h3>
                    <span className="text-xs px-2 py-1 bg-[#eca8d6]/10 text-[#eca8d6] rounded">
                      {item.category}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-medium text-muted-foreground">{item.language}</p>
                    <button
                      onClick={() => copyToClipboard(item.code, item.id)}
                      className="text-xs px-2 py-1 bg-foreground/10 hover:bg-foreground/20 rounded transition-all flex items-center gap-1"
                    >
                      {copiedId === item.id ? (
                        <>
                          <Check className="w-3 h-3" />
                          Copied to Clipboard!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="bg-foreground/10 p-3 rounded text-xs overflow-x-auto leading-relaxed text-foreground/80">
                    {item.code}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
