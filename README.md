# Voyaj - The Intelligent Travel Marketplace

Voyaj is more than a booking engine. We are the world's first **Agentic Travel Marketplace**. We've built a system that doesn't just list flights and hotels—it understands your intent.

## 🚀 Features

### The Intelligence Layer
Our proprietary AI Brain reasons through complex logistics to save you hours of planning.

### Unified Ecosystem
Flights, stays, dining, and transit in one single checkout experience.

### Deep Contextual Memory
We remember you liked that quiet cafe in Milan so we find its equivalent in Tokyo.

## 🎨 Design System

- **Primary Color**: `rgb(159 18 57)` - Luxury burgundy
- **Typography**: Inter (sans-serif), Playfair Display (serif)
- **Theme**: Luxury feel with modern, clean design
- **Components**: Fully responsive with smooth animations

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1 with TypeScript
- **Styling**: Tailwind CSS 4.0
- **AI Integration**: Google Gemini API for intelligent chat responses
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Deployment**: Vercel-ready

## 🏃‍♂️ Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables (Optional)**:
   ```bash
   cp .env.example .env.local
   ```
   
   For full AI functionality, edit `.env.local` and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```
   
   Get your API key from: [Google AI Studio](https://makersuite.google.com/app/apikey)
   
   **Note**: A demo API key is included for testing, but you should replace it with your own for production use!

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
voyaj-travel/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── gemini/
│   │   │       └── route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── Journey.tsx
│       ├── ChatBot.tsx
│       ├── ImageGallery.tsx
│       ├── ExperienceScroll.tsx
│       ├── LiveGlobalPulse.tsx
│       ├── Testimonials.tsx
│       ├── CTA.tsx
│       └── Footer.tsx
├── public/
├── .env.example
├── tailwind.config.ts
└── package.json
```

## 🎯 Key Sections

1. **Hero Section**: Agentic AI powered travel discovery with interactive chat preview
2. **Image Gallery**: Auto-scrolling luxury destinations showcase
3. **Features**: Client-first approach, global reach, precision focus
4. **Experience Scroll**: Horizontal scrolling travel experiences
5. **Journey**: End-to-end travel experience (Discovery → Booking → Travel → Post-trip)
6. **Live Global Pulse**: Real-time travel data and search functionality
7. **Testimonials**: Customer reviews and feedback
8. **ChatBot**: AI-powered travel assistant with Gemini integration
9. **Statistics**: 18,000+ routes, 450+ airlines, 250+ packages, 24/7 support
10. **CTA**: Call-to-action for account creation and sales contact

## 🤖 ChatBot Features

The Voyaj AI ChatBot is fully responsive and works on all devices:

- **Mobile**: Full-screen experience with touch-optimized interface
- **Tablet**: Optimized sizing for iPad and Android tablets  
- **Desktop**: Floating chat window with professional styling
- **Smart Fallbacks**: Intelligent responses even without API key
- **Gemini Integration**: Advanced AI responses when API key is configured
- **Conversation Flow**: Guided chat experience with quick options
- **Real-time Typing**: Typing indicators and smooth animations
- **Memory**: Contextual responses based on conversation history

### API Integration Status
- ✅ **Without API Key**: Smart fallback responses based on travel context
- 🚀 **With Gemini API**: Advanced AI-powered personalized responses

## 🌟 Agentic AI Capabilities

- **Conversational Planning**: Natural dialogue to define dream trips
- **Intelligent Matching**: AI understands personality and budget
- **Live Adaptation**: Real-time travel adjustments
- **Memory Creation**: Automatic trip journals and preference learning
- **Gemini Integration**: Powered by Google's advanced AI for intelligent responses
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Real-time Chat**: Instant AI responses with typing indicators

## 🚀 Deployment

The project is configured for easy deployment on Vercel:

```bash
npm run build
```

## 📞 Contact

Ready for your next intelligently planned journey? Join 50,000+ travelers who have already switched to agentic travel planning.

---

*Voyaj - Redefining Travel Discovery*