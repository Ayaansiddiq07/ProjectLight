import { motion } from "framer-motion";
import { Eye, Target, Globe, Heart, Shield, Zap } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import SEO from "@/components/SEO";

const Vision = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion First",
      description: "Every feature, every policy, every decision is made with genuine care for those in need."
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Complete verification and real-time updates ensure donors know exactly where their help goes."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Breaking down borders to create a worldwide network of support and kindness."
    },
    {
      icon: Zap,
      title: "Swift Action",
      description: "When someone needs help, time matters. We make connections happen quickly."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEO
        title="Vision & Mission"
        description="Discover PROJECT LIGHT's vision for a world where help is just a connection away and our mission to build transparent, verified social giving."
        canonical="https://projectlight.com/vision"
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Vision & Mission</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a world where help is just a connection away
          </p>
        </motion.div>

        {/* Vision Section */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <GlassCard delay={0.2}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-glow">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                To create a world where no genuine need goes unheard and no compassionate heart
                goes unused.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a global network where transparency, trust, and technology unite to
                make social giving as natural and impactful as connecting with friends online.
              </p>
            </GlassCard>

            <GlassCard delay={0.4}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-6 shadow-glow">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                To build and maintain a verified, transparent platform that connects verified
                individuals and organizations in need with compassionate donors worldwide.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're committed to fighting fraud, ensuring trust, and making every connection
                count through rigorous verification and continuous innovation.
              </p>
            </GlassCard>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <GlassCard key={value.title} delay={index * 0.1}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-glow">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Goals Section */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary via-accent to-secondary rounded-3xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">What We're Working Towards</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">195</div>
                <div className="text-lg opacity-90">Countries Connected</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-lg opacity-90">Verified Cases</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">∞</div>
                <div className="text-lg opacity-90">Lives Impacted</div>
              </div>
            </div>
            <p className="text-center mt-8 text-lg opacity-90 max-w-3xl mx-auto">
              Every day, we're working to expand our reach, strengthen our verification systems,
              and ensure that help reaches those who need it most, anywhere in the world.
            </p>
          </motion.div>
        </section>

        {/* Helpora Alignment */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-secondary via-primary to-accent rounded-3xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-6 text-center">Aligned with Helpora's Mission</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto text-center mb-8">
              PROJECT LIGHT's vision and mission are powered by <strong>Helpora - Connecting Humanity</strong>, 
              a global platform infrastructure dedicated to connecting verified causes with compassionate supporters worldwide.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">PROJECT LIGHT</h3>
                <p className="opacity-90">A social initiative focused on verified giving and transparent impact</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">Helpora Platform</h3>
                <p className="opacity-90">The foundational infrastructure enabling global social good initiatives</p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Vision;
