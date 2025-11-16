import { motion } from "framer-motion";
import { ArrowRight, Globe, Heart, Users, Shield, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";
import SEO from "@/components/SEO";

const Home = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with causes and donors from every corner of the world through our unified platform."
    },
    {
      icon: Shield,
      title: "Verified Cases",
      description: "Every request is verified with documents, govt ID, and AI fraud detection for complete trust."
    },
    {
      icon: Heart,
      title: "Transparent Giving",
      description: "See exactly where your help goes with real-time updates and impact tracking."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join a compassionate network of donors, NGOs, and individuals making real change."
    }
  ];

  const stats = [
    { value: "195", label: "Countries", icon: Globe },
    { value: "100%", label: "Verified", icon: Shield },
    { value: "24/7", label: "Support", icon: Heart },
    { value: "∞", label: "Impact", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen">
      <SEO />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.05),rgba(17,24,39,0))]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary mb-4 md:mb-6 text-xs md:text-sm"
              >
                <Heart className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                <span className="font-medium">Connecting Hearts Globally</span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
                Light the Way for
                <span className="text-gradient block mt-2">Global Impact</span>
              </h1>

              <p className="text-base md:text-lg text-primary font-semibold mb-3 md:mb-4">
                Powered by Helpora - Connecting Humanity
              </p>

              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                A global platform that connects people in need with people who want to
                help—bringing transparency, trust, and real impact to social giving.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button asChild size="lg" className="group text-sm md:text-base">
                  <Link to="/platform">
                    Explore Platform
                    <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-sm md:text-base">
                  <Link to="/about">Learn Our Story</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8 md:mt-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6 mx-auto mb-1 md:mb-2 text-primary" />
                    <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative w-full aspect-video md:aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-secondary animate-float" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Target className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 text-white opacity-20" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 md:h-1/2 bg-gradient-to-t from-background/80 to-transparent backdrop-blur-sm p-4 md:p-6 lg:p-8">
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">Making a Difference</h3>
                  <p className="text-xs md:text-sm lg:text-base text-white/90">Every connection creates a ripple of positive change across the globe.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">See Our Vision in Action</h2>
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Watch how PROJECT LIGHT is transforming lives and creating global impact
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto px-2 md:px-0"
          >
            <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary via-accent to-secondary">
              <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black/20">
                <div className="text-center text-white p-4 md:p-8">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3 md:mb-6 backdrop-blur-md border border-white/20">
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/20 flex items-center justify-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/30 flex items-center justify-center animate-pulse">
                        <svg
                          className="w-5 h-5 md:w-8 md:h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">Coming Soon</h3>
                  <p className="text-xs sm:text-sm md:text-lg lg:text-xl opacity-90 max-w-md mx-auto leading-relaxed">
                    We're creating an inspiring video to share our story, mission, and the incredible
                    impact we're making together
                  </p>
                </div>
              </div>
              
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 via-accent/50 to-secondary/50 animate-pulse opacity-30" />
            </div>

            <div className="mt-6 md:mt-8 grid grid-cols-3 gap-2 md:gap-4 max-w-2xl mx-auto">
              {[
                { label: "Real Stories", icon: "📖" },
                { label: "Global Impact", icon: "🌍" },
                { label: "Verified Trust", icon: "✓" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="glass-card p-2 md:p-4 text-center hover-lift"
                >
                  <div className="text-2xl md:text-3xl mb-1 md:mb-2">{item.icon}</div>
                  <p className="font-semibold text-xs md:text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Why Choose PROJECT LIGHT?</h2>
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Built on trust, powered by transparency, driven by compassion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {features.map((feature, index) => (
              <GlassCard key={feature.title} delay={index * 0.1}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-glow">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Ready to Make an Impact?</h2>
            <p className="text-sm md:text-lg mb-6 md:mb-8 text-white/90 max-w-2xl mx-auto px-2">
              Join our global community and start making a difference today
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 group text-sm md:text-base">
              <Link to="/contact">
                Get Started Now
                <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
