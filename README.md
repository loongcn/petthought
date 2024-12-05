# [Pet Mind Reader 🐱🐶](https://petmindreader.fun)

Pet Mind Reader is an innovative AI-powered platform that analyzes pet photos to create imaginative interpretations of what your pet might be thinking. Using advanced artificial intelligence and computer vision technology, our platform generates creative and insightful interpretations of your pet's inner thoughts.

![Pet Mind Reader Demo](public/demo.gif)

## ✨ Features

- 🤖 **AI-Powered Analysis**
  - Advanced computer vision for pet emotion detection
  - Natural language generation for creative interpretations
  - Support for multiple pet species
  
- 📸 **Image Processing**
  - Support for JPEG, PNG, GIF, and WEBP formats
  - Automatic image optimization
  - Maximum file size: 5MB
  
- 🔒 **Security & Privacy**
  - Secure image processing
  - Immediate deletion after analysis
  - No personal data storage
  
- 🎯 **User Experience**
  - Real-time analysis results
  - Mobile-friendly responsive design
  - Intuitive drag-and-drop interface
  
- 🔄 **Social Integration**
  - Direct sharing to social media platforms
  - Custom sharing messages
  - Link copying functionality

## 🛠️ Tech Stack

### Frontend
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Icons
- Framer Motion

### Backend
- Next.js API Routes
- Google Gemini Pro Vision API
- Axios for API calls

### Infrastructure
- Vercel Edge Functions
- Image optimization CDN
- Error tracking & monitoring

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Google Cloud account for Gemini API

### Installation

1. Clone the repository:

```
git clone https://github.com/yourusername/pet-mind-reader.git
cd pet-mind-reader
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:
Create a `.env.local` file in the root directory:

```env
# Required
GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Optional
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_ADSENSE_CLIENT=your_adsense_client_id
NEXT_PUBLIC_ADSENSE_SLOT=your_adsense_slot_id
```

4. Start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 🚀 Deployment

### Deploy to Cloudflare Pages

This project is configured to deploy on Cloudflare Pages. Follow these steps:

1. Fork this repository to your GitHub account
2. Log in to Cloudflare Dashboard
3. Go to Pages and create a new project
4. Connect your GitHub repository
5. Configure build settings:
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output directory: `.vercel/output/static`
   - Environment variables:
     ```
     GEMINI_API_KEY=your_gemini_api_key
     ```
6. Deploy!

The project uses `@cloudflare/next-on-pages` for Cloudflare Pages compatibility and includes necessary configurations in `wrangler.toml`.

## 📊 Analytics & Monetization

### Google Analytics 4 Integration

The project includes GA4 integration for tracking user interactions. To enable GA4:

1. Get your GA4 Measurement ID from Google Analytics
2. Add it to your environment variables:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

The GA4 tracking code is implemented in the `GA` component and automatically tracks page views and basic events.

### Google AdSense Integration

Google AdSense is integrated for monetization. To enable ads:

1. Get your AdSense account approved
2. Get your AdSense Client ID and Ad Slot ID
3. Add them to your environment variables:
   ```env
   NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXX
   NEXT_PUBLIC_ADSENSE_SLOT=XXXXXXXXXX
   ```

The `Ad` component will automatically display responsive ads in the designated slots.

## 📝 API Reference

### Analyze Pet Thought

```typescript
POST /api/analyze-pet-thought

// Request
Content-Type: multipart/form-data
Body: {
  file: File // Image file (max 5MB)
}

// Response
{
  success: boolean,
  interpretation: string,
  error?: string
}
```

## 📁 Project Structure
```
pet-mind-reader/
├── src/
│   ├── app/                 # App router pages
│   │   ├── page.tsx        # Home page
│   │   ├── analysis/       # Analysis page
│   │   └── api/           # API routes
│   ├── components/         # React components
│   │   ├── ImageUploader/  # Image upload component
│   │   ├── ShareButtons/   # Social sharing
│   │   └── FAQ/           # FAQ section
│   └── styles/            # Global styles
├── public/                # Static assets
└── tests/                # Test files
```

## 🧪 Development

### Commands

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start

# Linting
npm run lint

```

### Component Structure
- `ImageUploader`: Handles image upload and analysis
- `ShareButtons`: Manages social media sharing
- `FAQ`: Displays frequently asked questions
- `ErrorBoundary`: Handles error states
- `ClientOnly`: Manages client-side rendering

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Gemini Pro Vision API for AI capabilities
- Next.js team for the amazing framework
- All contributors who have helped this project grow

Special thanks to our partner websites:
- [Cat Years Calculator](https://catyearscalculator.fun) - Calculate your cat's age in human years
- [Dog Age Calculator](https://dogagecalculator.fun) - Convert dog years to human years
- [My Dog Years](https://mydogyears.fun) - My Dog Years
- [Human Dog Years Calculator](https://humandogyearscalculator.fun) - Convert human years to dog years
- [Pet Mind Reader](https://petmindreader.fun) - Original template of this project

These websites have provided valuable support and inspiration for Pet Mind Reader. If you're interested in pet age calculations or want to see the original template of this project, feel free to visit them!

## 📞 Support & Contact

Having issues or questions? We're here to help!

- 🐛 [Report a bug](https://github.com/yourusername/pet-mind-reader/issues)
- 💡 [Request a feature](https://github.com/yourusername/pet-mind-reader/issues)

---

<p align="center">Made with ❤️ for pets and their humans</p>