import { motion } from "framer-motion";
import { Globe, MapPin, Users, Shield, CheckCircle, AlertCircle, FileCheck, Bot } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import SEO from "@/components/SEO";

const Platform = () => {
  const platformFeatures = [
    {
      icon: Globe,
      title: "Global International",
      description: "Browse causes from any country in the world through a unified, searchable directory."
    },
    {
      icon: MapPin,
      title: "Country-Specific Pages",
      description: "Deep dive into verified causes, fundraisers, and events within individual countries."
    },
    {
      icon: Users,
      title: "Social Impact Feed",
      description: "A dynamic feed where users follow, share, and support causes in real time."
    }
  ];

  const targetUsers = [
    { title: "Students", description: "Needing education fees and support" },
    { title: "NGOs", description: "Organizations making social impact" },
    { title: "Orphanages", description: "Caring for children in need" },
    { title: "Environmental Groups", description: "Fighting for our planet" },
    { title: "Compassionate Donors", description: "People who want to help" },
    { title: "War-Affected Families", description: "Seeking safety and support" }
  ];

  const verificationPolicies = [
    { icon: FileCheck, title: "Mandatory Documents", description: "All cases require proper documentation" },
    { icon: CheckCircle, title: "Govt ID Verification", description: "Identity verification through official IDs" },
    { icon: Shield, title: "NGO Validation", description: "Organizations verified through legal channels" },
    { icon: Bot, title: "AI Fraud Detection", description: "Advanced AI systems to detect suspicious patterns" },
    { icon: AlertCircle, title: "User Reporting", description: "Community-driven fraud reporting system" },
    { icon: Users, title: "Transparent Updates", description: "Real-time progress updates on all cases" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEO
        title="Our Platform"
        description="Explore PROJECT LIGHT's comprehensive platform structure, verification system, and how we connect verified causes with compassionate donors worldwide."
        canonical="https://projectlight.com/platform"
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            What Our <span className="text-gradient">Platform Offers</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive ecosystem designed for transparency, trust, and real impact
          </p>
        </motion.div>

        {/* Platform Structure */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Platform Structure</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three main sections to keep information organized and accessible worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <GlassCard key={feature.title} delay={index * 0.1}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-glow">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Target Users */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Who We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connecting diverse communities united by the desire to make a difference
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetUsers.map((user, index) => (
              <GlassCard key={user.title} delay={index * 0.1}>
                <h3 className="text-xl font-bold mb-2">{user.title}</h3>
                <p className="text-muted-foreground">{user.description}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Verification Policies */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Verification System</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multi-layered security ensuring every case is genuine and trustworthy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verificationPolicies.map((policy, index) => (
              <GlassCard key={policy.title} delay={index * 0.1}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <policy.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{policy.title}</h3>
                <p className="text-muted-foreground text-sm">{policy.description}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary via-accent to-secondary rounded-3xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="font-bold text-lg mb-2">Select Country</h3>
                <p className="text-sm opacity-90">Browse global directory of verified causes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="font-bold text-lg mb-2">View Verified Cases</h3>
                <p className="text-sm opacity-90">See detailed information and documentation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="font-bold text-lg mb-2">Connect & Support</h3>
                <p className="text-sm opacity-90">Directly help those in genuine need</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="font-bold text-lg mb-2">Track Impact</h3>
                <p className="text-sm opacity-90">See real-time updates on your contribution</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Helpora Infrastructure */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-secondary via-primary to-accent rounded-3xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-6 text-center">Built on Helpora Infrastructure</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto text-center mb-8">
              PROJECT LIGHT operates on <strong>Helpora - Connecting Humanity</strong>, a robust platform designed to support 
              verified social initiatives globally. Helpora provides the foundational technology, verification systems, and 
              infrastructure that make PROJECT LIGHT's mission possible.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">Verified Infrastructure</h3>
                <p className="opacity-90">Enterprise-grade systems ensuring security and trust</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">Global Reach</h3>
                <p className="opacity-90">Supporting causes across 195+ countries worldwide</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">Transparent Giving</h3>
                <p className="opacity-90">Real-time tracking and impact measurement for all contributions</p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Platform;
