import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ImageGallery from '@/components/ImageGallery'
import Features from '@/components/Features'
import LiveGlobalPulse from '@/components/LiveGlobalPulse'
import ExperienceScroll from '@/components/ExperienceScroll'
import Journey from '@/components/Journey'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ChatBot from '@/components/ChatBot'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ImageGallery />
        <Features />
        <LiveGlobalPulse />
        <ExperienceScroll />
        <Journey />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}
