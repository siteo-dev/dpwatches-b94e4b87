import { useState, useEffect, useRef } from 'react';
import { Menu, X, Shield, Award, Users, Clock, Star, Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Marquee } from '@/components/magicui/marquee';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { ShineBorder } from '@/components/magicui/shine-border';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { ProgressiveBlur } from '@/components/magicui/progressive-blur';
import { cn } from '@/lib/utils';
import DemoBanner from './DemoBanner';
import LightRays from './LightRays';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Collection' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const accentColor = '#3b82f6';
  const accentRgb = '59,130,246';

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    handleResize();
    
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) { 
          e.target.classList.add('visible'); 
          observer.unobserve(e.target); 
        } 
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const stats = [
    { value: 800, suffix: '+', label: 'Original Watches' },
    { value: 5, suffix: ' ', label: 'Years Warranty' },
    { value: 10, suffix: '/10', label: 'Condition' },
    { value: 100, suffix: '%', label: 'Authenticity' }
  ];

  const aboutFeatures = [
    {
      icon: Shield,
      title: "100% Original Watches",
      description: "All our Rolex timepieces are authentic with original certificates and full documentation."
    },
    {
      icon: Award,
      title: "Full Documentation Set",
      description: "Complete paperwork including warranty cards, authenticity certificates, and service records."
    },
    {
      icon: Users,
      title: "5-Year Warranty",
      description: "Extended warranty ensuring long-term satisfaction with your premium timepiece."
    },
    {
      icon: Clock,
      title: "Condition 10/10",
      description: "Every watch is in perfect condition with no signs of wear or damage."
    }
  ];

  const services = [
    {
      name: "Rolex Datejust 41 - Blue",
      description: "Classic luxury with modern sophistication and premium materials.",
      price: "14,000 EUR"
    },
    {
      name: "Rolex Submariner",
      description: "Iconic diving watch with water resistance and precision movement.",
      price: "55,000 RON"
    }
  ];

  const whyUsFeatures = [
    { 
      Icon: Shield, 
      name: "Authenticity Guarantee", 
      description: "All watches come with original certificates and full documentation.",
      className: "col-span-3 lg:col-span-1",
      background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent" />
    },
    { 
      Icon: Award, 
      name: "5-Year Warranty", 
      description: "Extended warranty ensures long-term satisfaction.",
      className: "col-span-3 lg:col-span-2",
      background: <DotPattern opacity={0.15} className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)]" />
    },
    { 
      Icon: Users, 
      name: "Expert Staff", 
      description: "Our team provides personalized service for every customer.",
      className: "col-span-3 lg:col-span-2",
      background: <DotPattern opacity={0.15} className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_30%,#000_100%)]" />
    },
    { 
      Icon: Clock, 
      name: "Fast Delivery", 
      description: "Quick processing and shipping of your premium timepiece.",
      className: "col-span-3 lg:col-span-1",
      background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-blue-500/10 to-transparent" />
    }
  ];

  const reviews = [
    {
      name: "Maria G.",
      gender: "F",
      text: "The Rolex Submariner was exactly as described and the documentation was complete. Great service!",
      rating: 5
    },
    {
      name: "Andrei M.",
      gender: "M",
      text: "I bought the Datejust 41 Blue and it arrived in perfect condition. The warranty process was simple.",
      rating: 5
    },
    {
      name: "Cristina S.",
      gender: "F",
      text: "Professional staff, genuine watches, and full set of documents. Highly recommend DPWatches for Rolex collectors.",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "How do I verify the authenticity of your Rolex watches?",
      answer: "All our Rolex watches come with original certificates and full documentation. We guarantee 100% authenticity."
    },
    {
      question: "What is included in the warranty?",
      answer: "Our 5-year warranty covers manufacturing defects and ensures proper functioning of your timepiece."
    },
    {
      question: "Can I visit your store to see the watches?",
      answer: "Yes, you can schedule a visit at Veris Pipera Park for an in-person inspection."
    },
    {
      question: "Do you offer financing options?",
      answer: "We provide flexible payment plans upon request. Contact us for more information."
    },
    {
      question: "How long does delivery take?",
      answer: "Standard delivery takes 3-5 business days depending on location and availability."
    },
    {
      question: "What makes your watches different from others?",
      answer: "Our watches are 100% original with full documentation, condition 10/10, and extended warranty."
    }
  ];

  const contactItems = [
    { icon: Phone, label: "Call", value: "+40 734 049 253" },
    { icon: Mail, label: "Email", value: "office@dpwatches.ro" },
    { icon: MapPin, label: "Address", value: "Veris Pipera Park" }
  ];

  return (
    <>
      <DemoBanner />
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto mt-4">
          <div className="flex items-center justify-between h-14 px-4 sm:px-6 rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.08]">
            <a href="#" className="font-semibold text-base tracking-tight text-white">DPWatches</a>
            
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white rounded-full hover:bg-white/[0.05] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/[0.08] p-4">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="block py-2 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-40 pb-24 sm:pt-48 sm:pb-32 min-h-screen flex items-center relative overflow-x-clip">
        <div className="absolute inset-0 z-0">
          <LightRays 
            raysOrigin="top-center" 
            raysColor={accentColor} 
            raysSpeed={1} 
            lightSpread={isMobile ? 2 : 0.5} 
            rayLength={isMobile ? 3 : 1} 
            followMouse={true} 
            mouseInfluence={0.05} 
            noiseAmount={0} 
            distortion={0} 
            pulsating={false} 
            fadeDistance={1} 
            saturation={1} 
          />
        </div>
        
        <DotPattern opacity={0.15} className="absolute inset-0 z-0" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <div className="hero-blur hero-delay-1 mb-6">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
              <AnimatedShinyText className="text-sm font-medium">Premium Rolex Dealer</AnimatedShinyText>
            </div>
          </div>
          
          <h1 className="hero-blur hero-delay-2 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent mb-6 max-w-4xl mx-auto">
            Your Premium Watch Collection
          </h1>
          
          <p className="hero-blur hero-delay-3 text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Discover authentic Rolex timepieces with 5-year warranty and full documentation. Quality you can trust since 2016.
          </p>
          
          <div className="hero-blur hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <ShimmerButton className="shadow-2xl" background={`rgba(${accentRgb}, 1)`}>
              <span className="text-sm font-medium text-white">Book Appointment</span>
            </ShimmerButton>
            <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5">
              Contact Us
            </Button>
          </div>
          
          <div className="hero-blur hero-delay-5 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className={cn("text-center", i > 0 && "sm:border-l sm:border-white/10 sm:pl-12")}>
                <NumberTicker 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  className="text-4xl font-black bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(59,130,246,0.6)]" 
                />
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Hero Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
      </section>

      {/* About Section */}
      <section id="about" className="relative overflow-x-clip py-24 sm:py-32">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Your Trusted Rolex Dealer Since 2016
            </h2>
            <p className="text-lg text-muted-foreground">
              We are a premium watch dealer specializing in authentic Rolex timepieces with full documentation and 5-year warranty.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 animate-on-scroll">
            {aboutFeatures.map((feature, index) => (
              <Card key={index} className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-blue-500/20 transition-all duration-500 card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={120} duration={20} delay={index * 1.5} colorFrom="#3b82f6" colorTo="#3b82f6" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-500">
                      <feature.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-50 transition-colors">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative overflow-x-clip py-24 sm:py-32">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/[0.06] rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Premium Rolex Collection
            </h2>
            <p className="text-lg text-muted-foreground">
              Exclusive authentic Rolex timepieces with full documentation and warranty.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
            {services.map((service, index) => (
              <Card key={index} className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-blue-500/20 transition-all duration-500 card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#3b82f6" colorTo="#3b82f6" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start gap-5 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-500">
                      <Shield className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-50 transition-colors">{service.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    </div>
                  </div>
                  
                  <Separator className="mb-5 bg-white/[0.06]" />
                  
                  <div className="text-2xl font-black bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent mb-6">
                    {service.price}
                  </div>
                  
                  <ShimmerButton className="w-full shadow-2xl" background={`rgba(${accentRgb}, 1)`}>
                    <span className="text-sm font-medium text-white">Book Now</span>
                  </ShimmerButton>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="relative overflow-x-clip py-24 sm:py-32">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Why Choose Our Rolex Dealer
            </h2>
            <p className="text-lg text-muted-foreground">
              We offer unmatched expertise and quality for authentic Rolex timepieces.
            </p>
          </div>
          
          <BentoGrid className="lg:grid-rows-2">
            {whyUsFeatures.map((feature, index) => (
              <BentoCard 
                key={index} 
                className={cn(feature.className, "hover:border-blue-500/20")} 
                background={feature.background}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-500">
                    <feature.Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-50 transition-colors">{feature.name}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </BentoCard>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="relative overflow-x-clip py-24 sm:py-32">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-500/[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from satisfied Rolex owners.
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {reviews.map((review, index) => (
                <Card key={index} className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-blue-500/20 transition-all duration-500 card-hover mx-4 max-w-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#3b82f6" colorTo="#3b82f6" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-blue-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">{review.text}</p>
                    <div className="flex items-center">
                      <Avatar className="w-10 h-10 mr-3">
                        <AvatarImage src={`/assets/people/${review.gender === 'M' ? 'boy_1.jpg' : 'girl_1.jpg'}`} alt={review.name} />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{review.name}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative overflow-x-clip py-24 sm:py-32">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our Rolex dealer services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/[0.06] mb-4">
                  <AccordionTrigger className="text-left text-lg hover:bg-white/[0.02] transition-colors px-6 py-4 rounded-xl">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-x-clip py-24 sm:py-32">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Let's Find Your Perfect Rolex
            </h2>
            <p className="text-lg text-muted-foreground">
              Contact us today to schedule a consultation or visit our store.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 animate-on-scroll">
            <div>
              <div className="space-y-6">
                {contactItems.map((item, index) => (
                  <Card key={index} className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm">
                    <div className="p-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-500/10 flex items-center justify-center mr-4">
                          <item.icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                          <p className="text-white">{item.value}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
                
                <div className="pt-4">
                  <h3 className="text-lg font-semibold mb-4">Connect with us</h3>
                  <div className="flex gap-3">
                    <a 
                      href="https://www.instagram.com/dpwatches.ro" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-blue-500/20 transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm">
                <div className="h-[350px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                  <iframe
                    src={"https://www.google.com/maps?q=" + encodeURIComponent("Veris Pipera Park") + "&output=embed"}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-x-clip pt-8 pb-32">
        <Separator />
        <div className="max-w-6xl mx-auto px-6 sm:px-8 mt-12 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DPWatches. All rights reserved.
          </p>
          <div className="flex gap-3 mt-4 sm:mt-0">
            <a 
              href="https://www.instagram.com/dpwatches.ro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-blue-500/20 transition-colors"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </footer>

      {/* Progressive Blur Overlay */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden sm:block">
        <ProgressiveBlur position="bottom" height="250px" />
      </div>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:hidden">
        <ProgressiveBlur position="bottom" height="150px" />
      </div>
    </>
  );
}
