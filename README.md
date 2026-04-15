# Adesco Graphics

A modern, responsive website for Adesco Graphics - a comprehensive tech services company specializing in web development, design, IT solutions, and video creation.

## 🚀 Features

- **Landing Page**: Multi-section homepage with hero, features, testimonials, pricing, and more
- **Services**: Detailed service pages for web development, design, IT solutions, and video creation
- **Blog System**: Dynamic blog with article pages and category filtering
- **Contact Form**: Client-side validation with professional form handling
- **Portfolio**: Showcase of completed projects
- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Theme**: Theme switching capability
- **Performance Optimized**: Built with Next.js 16 and Turbopack

## 🛠 Tech Stack

- **Framework**: Next.js 16 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Charts**: Recharts
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/adescographics.git
   cd adescographics
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
adescographics/
├── app/                    # Next.js app directory
│   ├── (pages)/           # Route groups
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── landing/          # Landing page sections
│   ├── ui/               # UI components (Radix)
│   └── layouts/          # Layout components
├── lib/                   # Utilities and configurations
│   ├── mock-data/        # Mock data for development
│   └── utils.ts          # Utility functions
├── public/                # Static assets
└── styles/               # Additional styles
```

## 🎨 Customization

### Colors and Branding
- Primary color: `#eca8d6` (Pink/Purple)
- Update colors in `tailwind.config.js` and component files

### Content
- Edit mock data in `lib/mock-data/`
- Update text content in component files
- Replace images in `public/images/`

### Adding New Pages
1. Create new route in `app/` directory
2. Add navigation links in `components/landing/navigation.tsx`
3. Update footer links if needed

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Environment variables are handled automatically

### Other Platforms
The app can be deployed to any platform supporting Node.js:
- Netlify
- Railway
- Render
- AWS Amplify

Build command: `npm run build`
Start command: `npm start`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For questions or support, please contact us through the website's contact form or reach out directly.

---

Built with ❤️ using Next.js and modern web technologies.